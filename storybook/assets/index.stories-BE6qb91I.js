import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as De,r as Te}from"./index-DTOEHpHZ.js";import{T as r}from"./index-DWp_antt.js";import{I as Ve}from"./index-46f45BQC.js";import{B as je}from"./index-DyRkmeWf.js";const Ce={title:"Components/Forms/TextArea",component:r,args:{rows:4}},a=()=>e.jsxs("div",{children:[e.jsx("div",{children:e.jsx(Ve,{label:"Your name",fullWidth:!0})}),e.jsx("div",{className:"mt-s",children:e.jsx(r,{label:"Your name",rows:4,fullWidth:!0})})]}),u={args:{defaultValue:"Hello world",label:"Describe your job"}},c={args:{defaultValue:"Hello world",label:"Describe your job",state:"success",text:"This is an optional success message"}},d={args:{defaultValue:"Hello world",label:"Describe your job",state:"error",text:"This is an optional error message"}},m={args:{defaultValue:"Hello world",label:"Describe your job",state:"error",text:"This is an optional error message",textItems:["Text too long","Wrong choice","Must contain at least 9 characters, uppercase and digits"]}},p={args:{label:"Describe your job",disabled:!0}},h={args:{label:"Describe your job",defaultValue:"John Doe",disabled:!0}},b={args:{label:"Describe your job"}},g={args:{label:"Describe your job",defaultValue:"John Dave Mike Smith Doe Junior Senior Yoda Skywalker John Dave Mike Smith Doe Junior Senior Yoda Skywalker John Dave Mike Smith Doe Junior Senior Yoda Skywalker"}},f={args:{defaultValue:"Hello world",label:"Describe your job",text:"This is a text, you can display anything you want here like warnings, information or errors."}},x={args:{defaultValue:"Hello world",label:"Describe your job",rightText:"0/300"}},y={args:{defaultValue:"Hello world",label:"Describe your job",text:"This is a text, you can display anything you want here like warnings, information or errors.",rightText:"0/300"}},v={args:{defaultValue:"Hello world",label:"Describe your job",fullWidth:!0,text:"This is a text, you can display anything you want here like warnings, information or errors.",rightText:"0/300"}},w={args:{defaultValue:"CEO",label:"Describe your job",text:"This is a text, you can display anything you want here like warnings, information or errors.",charCounter:!0,charCounterMax:30}},s=()=>{const[n,i]=De.useState("I am controlled");return e.jsxs("div",{children:[e.jsxs("div",{className:"clr-greyscale-900",children:["Value: ",e.jsx("span",{children:n})]}),e.jsx(r,{label:"Describe your job",value:n,onChange:Se=>i(Se.target.value),rows:4}),e.jsx(je,{onClick:()=>i(""),children:"Reset"})]})},o=()=>e.jsx(r,{defaultValue:"john.doe@example.com",label:"Describe your job",rows:4}),t=()=>{const n=Te.useRef(null);return e.jsxs("div",{children:[e.jsx(r,{label:"Describe your job",ref:n,rows:4}),e.jsx(je,{onClick:()=>{var i;return(i=n.current)==null?void 0:i.focus()},children:"Focus"})]})},l=()=>e.jsx("div",{children:e.jsxs("form",{children:[e.jsx("div",{children:e.jsx(r,{label:"Describe your job",defaultValue:"As a developer, my role involves creating, maintaining, and improving software applications and systems. I work with various programming languages and technologies to bring digital solutions to life.",rows:4,fullWidth:!0})}),e.jsx("div",{className:"mt-s",children:e.jsx(r,{label:"Describe your hobbies",defaultValue:`- Gym
- Running
- Coding`,rows:4,fullWidth:!0})}),e.jsx("div",{className:"mt-s",children:e.jsx(r,{label:"How could you improve your habits ?",defaultValue:"Wake up earlier in the morning",text:"Be exhaustive",charCounter:!0,charCounterMax:30,rows:2,fullWidth:!0})}),e.jsx("div",{className:"mt-s",children:e.jsx(r,{label:"Tell us about your favorite stack",disabled:!0,rows:2,fullWidth:!0})}),e.jsx("div",{className:"mt-s",children:e.jsx(r,{label:"How to code a weather app ?",defaultValue:"Creating a weather app involves several steps, and I'll provide a high-level overview of how you might approach coding one. This example assumes you want to build a web-based weather app using HTML, CSS, and JavaScript, along with data from a weather API. ",state:"error",text:"Address not found",rows:4,fullWidth:!0})}),e.jsx("div",{className:"mt-s",children:e.jsx(r,{label:"How to setup a database ?",defaultValue:"Setting up a PostgreSQL database involves several steps, from installation to configuration. Below is a step-by-step guide on how to set up a PostgreSQL database on a typical Linux environment. The process is similar on other platforms, with slight variations.",text:"Five numbers format",state:"success",rows:4,fullWidth:!0})}),e.jsx("div",{className:"mt-s",children:e.jsx(r,{label:"Tell us about your favorite libraries",defaultValue:`- ReactQuery
- ReactJS
- AngularJS
- Django`,state:"success",rows:7,fullWidth:!0})})]})});a.__docgenInfo={description:"",methods:[],displayName:"ShowCase"};s.__docgenInfo={description:"",methods:[],displayName:"Controlled"};o.__docgenInfo={description:"",methods:[],displayName:"NonControlled"};t.__docgenInfo={description:"",methods:[],displayName:"WithRef"};l.__docgenInfo={description:"",methods:[],displayName:"FormExample"};var j,S,D;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  return <div>
      <div>
        <Input label="Your name" fullWidth={true} />
      </div>
      <div className="mt-s">
        <TextArea label="Your name" rows={4} fullWidth={true} />
      </div>
    </div>;
}`,...(D=(S=a.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var T,V,C;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    defaultValue: "Hello world",
    label: "Describe your job"
  }
}`,...(C=(V=u.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};var k,W,H;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    defaultValue: "Hello world",
    label: "Describe your job",
    state: "success",
    text: "This is an optional success message"
  }
}`,...(H=(W=c.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var N,A,I;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    defaultValue: "Hello world",
    label: "Describe your job",
    state: "error",
    text: "This is an optional error message"
  }
}`,...(I=(A=d.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var J,E,R;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    defaultValue: "Hello world",
    label: "Describe your job",
    state: "error",
    text: "This is an optional error message",
    textItems: ["Text too long", "Wrong choice", "Must contain at least 9 characters, uppercase and digits"]
  }
}`,...(R=(E=m.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var _,M,F;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: "Describe your job",
    disabled: true
  }
}`,...(F=(M=p.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};var B,Y,L;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: "Describe your job",
    defaultValue: "John Doe",
    disabled: true
  }
}`,...(L=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:L.source}}};var O,P,Q;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: "Describe your job"
  }
}`,...(Q=(P=b.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var G,z,q;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    label: "Describe your job",
    defaultValue: "John Dave Mike Smith Doe Junior Senior Yoda Skywalker John Dave Mike Smith Doe Junior Senior Yoda Skywalker John Dave Mike Smith Doe Junior Senior Yoda Skywalker"
  }
}`,...(q=(z=g.parameters)==null?void 0:z.docs)==null?void 0:q.source}}};var K,U,X;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    defaultValue: "Hello world",
    label: "Describe your job",
    text: "This is a text, you can display anything you want here like warnings, information or errors."
  }
}`,...(X=(U=f.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Z,$,ee;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    defaultValue: "Hello world",
    label: "Describe your job",
    rightText: "0/300"
  }
}`,...(ee=($=x.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,ae,se;y.parameters={...y.parameters,docs:{...(re=y.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    defaultValue: "Hello world",
    label: "Describe your job",
    text: "This is a text, you can display anything you want here like warnings, information or errors.",
    rightText: "0/300"
  }
}`,...(se=(ae=y.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var oe,te,le;v.parameters={...v.parameters,docs:{...(oe=v.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    defaultValue: "Hello world",
    label: "Describe your job",
    fullWidth: true,
    text: "This is a text, you can display anything you want here like warnings, information or errors.",
    rightText: "0/300"
  }
}`,...(le=(te=v.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};var ne,ie,ue;w.parameters={...w.parameters,docs:{...(ne=w.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    defaultValue: "CEO",
    label: "Describe your job",
    text: "This is a text, you can display anything you want here like warnings, information or errors.",
    charCounter: true,
    charCounterMax: 30
  }
}`,...(ue=(ie=w.parameters)==null?void 0:ie.docs)==null?void 0:ue.source}}};var ce,de,me;s.parameters={...s.parameters,docs:{...(ce=s.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState("I am controlled");
  return <div>
      <div className="clr-greyscale-900">
        Value: <span>{value}</span>
      </div>
      <TextArea label="Describe your job" value={value} onChange={e => setValue(e.target.value)} rows={4} />
      <Button onClick={() => setValue("")}>Reset</Button>
    </div>;
}`,...(me=(de=s.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var pe,he,be;o.parameters={...o.parameters,docs:{...(pe=o.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
  return <TextArea defaultValue="john.doe@example.com" label="Describe your job" rows={4} />;
}`,...(be=(he=o.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};var ge,fe,xe;t.parameters={...t.parameters,docs:{...(ge=t.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
  const ref = useRef<HTMLTextAreaElement>(null);
  return <div>
      <TextArea label="Describe your job" ref={ref} rows={4} />
      <Button onClick={() => ref.current?.focus()}>Focus</Button>
    </div>;
}`,...(xe=(fe=t.parameters)==null?void 0:fe.docs)==null?void 0:xe.source}}};var ye,ve,we;l.parameters={...l.parameters,docs:{...(ye=l.parameters)==null?void 0:ye.docs,source:{originalSource:`() => {
  return <div>
      <form>
        <div>
          <TextArea label="Describe your job" defaultValue="As a developer, my role involves creating, maintaining, and improving software applications and systems. I work with various programming languages and technologies to bring digital solutions to life." rows={4} fullWidth={true} />
        </div>
        <div className="mt-s">
          <TextArea label="Describe your hobbies" defaultValue="- Gym
- Running
- Coding" rows={4} fullWidth={true} />
        </div>
        <div className="mt-s">
          <TextArea label="How could you improve your habits ?" defaultValue="Wake up earlier in the morning" text="Be exhaustive" charCounter={true} charCounterMax={30} rows={2} fullWidth={true} />
        </div>
        <div className="mt-s">
          <TextArea label="Tell us about your favorite stack" disabled={true} rows={2} fullWidth={true} />
        </div>
        <div className="mt-s">
          <TextArea label="How to code a weather app ?" defaultValue="Creating a weather app involves several steps, and I'll provide a high-level overview of how you might approach coding one. This example assumes you want to build a web-based weather app using HTML, CSS, and JavaScript, along with data from a weather API. " state="error" text="Address not found" rows={4} fullWidth={true} />
        </div>
        <div className="mt-s">
          <TextArea label="How to setup a database ?" defaultValue="Setting up a PostgreSQL database involves several steps, from installation to configuration. Below is a step-by-step guide on how to set up a PostgreSQL database on a typical Linux environment. The process is similar on other platforms, with slight variations." text="Five numbers format" state="success" rows={4} fullWidth={true} />
        </div>
        <div className="mt-s">
          <TextArea label="Tell us about your favorite libraries" defaultValue="- ReactQuery
- ReactJS
- AngularJS
- Django" state="success" rows={7} fullWidth={true} />
        </div>
      </form>
    </div>;
}`,...(we=(ve=l.parameters)==null?void 0:ve.docs)==null?void 0:we.source}}};const ke=["ShowCase","Default","Success","Error","ErrorItems","DisabledEmpty","DisabledFilled","Empty","OverflowingText","WithText","WithTextRight","WithBothTexts","FullWidth","CharCounter","Controlled","NonControlled","WithRef","FormExample"],Je=Object.freeze(Object.defineProperty({__proto__:null,CharCounter:w,Controlled:s,Default:u,DisabledEmpty:p,DisabledFilled:h,Empty:b,Error:d,ErrorItems:m,FormExample:l,FullWidth:v,NonControlled:o,OverflowingText:g,ShowCase:a,Success:c,WithBothTexts:y,WithRef:t,WithText:f,WithTextRight:x,__namedExportsOrder:ke,default:Ce},Symbol.toStringTag,{value:"Module"}));export{w as C,u as D,d as E,v as F,Je as S,f as W,c as a,p as b,h as c,y as d,s as e,t as f,l as g};
