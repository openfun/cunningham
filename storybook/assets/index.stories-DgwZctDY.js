import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as Br}from"./index-DTOEHpHZ.js";import{M as Sr,b as e,a as Er,C as xr}from"./index-eFf25hYI.js";import{B as s}from"./index-DyRkmeWf.js";import{l as Cr}from"./longLorem-CjgWBgpH.js";const Ar={title:"Components/Modal",component:Sr,args:{children:"Description",title:"Title"},decorators:[(zr,fr)=>{const f=Er();return Br.useEffect(()=>{f.open()},[]),r.jsxs(r.Fragment,{children:[r.jsx(s,{onClick:()=>f.open(),children:"Open Modal"}),r.jsx(zr,{args:{...fr.args,...f}})]})}],parameters:{docs:{story:{height:"250px"}}}},o={args:{size:e.SMALL}},t={args:{size:e.MEDIUM}},n={args:{size:e.LARGE}},a={args:{size:e.EXTRA_LARGE}},i={args:{size:e.FULL}},c={args:{size:e.MEDIUM,hideCloseButton:!0}},l={args:{size:e.MEDIUM,hideCloseButton:!0,closeOnClickOutside:!0}},u={args:{size:e.MEDIUM,closeOnEsc:!1}},d={args:{size:e.MEDIUM,preventClose:!0}},m={args:{size:e.MEDIUM,rightActions:r.jsx(s,{color:"primary",fullWidth:!0,children:"Primary"})}},p={args:{size:e.MEDIUM,rightActions:r.jsx(s,{color:"secondary",fullWidth:!0,children:"Secondary"})}},h={args:{size:e.MEDIUM,leftActions:r.jsx(s,{color:"secondary",fullWidth:!0,children:"Secondary"}),rightActions:r.jsx(s,{color:"primary",fullWidth:!0,children:"Primary"})}},g={args:{size:e.MEDIUM,leftActions:r.jsx(s,{color:"tertiary",fullWidth:!0,children:"Tertiary"}),rightActions:r.jsxs(r.Fragment,{children:[r.jsx(s,{color:"secondary",fullWidth:!0,children:"Secondary"}),r.jsx(s,{color:"primary",fullWidth:!0,children:"Primary"})]})}},y={args:{size:e.MEDIUM,actions:r.jsxs(r.Fragment,{children:[r.jsx(s,{color:"secondary",children:"Secondary"}),r.jsx(s,{color:"primary",children:"Primary"})]})}},M={args:{size:e.LARGE,title:"Application successful",titleIcon:r.jsx("span",{className:"material-icons clr-success-600",children:"done"}),children:r.jsxs(r.Fragment,{children:["Thank you for submitting your application! Your information has been received successfully. ",r.jsx("br",{}),r.jsx("br",{}),"You will receive a confirmation email shortly with the details of your submission. If there are any further steps required our team will be in touch."]}),rightActions:r.jsx(s,{color:"primary",children:"I understand"})},parameters:{docs:{story:{height:"500px"}}}},S={args:{size:e.FULL,leftActions:r.jsx(s,{color:"tertiary",children:"Tertiary"}),rightActions:r.jsxs(r.Fragment,{children:[r.jsx(s,{color:"secondary",children:"Secondary"}),r.jsx(s,{color:"primary",children:"Primary"})]}),children:Cr.text}},z={render:()=>r.jsxs(xr,{modalParentSelector:()=>document.querySelector("#my-custom-modal-parent"),children:[r.jsx(Sr,{isOpen:!0,onClose:()=>{},size:e.MEDIUM,children:"I am rendered inside #my-custom-modal-parent"}),r.jsx("div",{id:"my-custom-modal-parent"})]})};var B,E,x;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    size: ModalSize.SMALL
  }
}`,...(x=(E=o.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};var C,A,j;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    size: ModalSize.MEDIUM
  }
}`,...(j=(A=t.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var I,D,U;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    size: ModalSize.LARGE
  }
}`,...(U=(D=n.parameters)==null?void 0:D.docs)==null?void 0:U.source}}};var L,P,O;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    size: ModalSize.EXTRA_LARGE
  }
}`,...(O=(P=a.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var b,W,T;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: ModalSize.FULL
  }
}`,...(T=(W=i.parameters)==null?void 0:W.docs)==null?void 0:T.source}}};var v,F,R;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    size: ModalSize.MEDIUM,
    hideCloseButton: true
  }
}`,...(R=(F=c.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var w,_,k;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    size: ModalSize.MEDIUM,
    hideCloseButton: true,
    closeOnClickOutside: true
  }
}`,...(k=(_=l.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var G,q,Y;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    size: ModalSize.MEDIUM,
    closeOnEsc: false
  }
}`,...(Y=(q=u.parameters)==null?void 0:q.docs)==null?void 0:Y.source}}};var H,N,X;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    size: ModalSize.MEDIUM,
    preventClose: true
  }
}`,...(X=(N=d.parameters)==null?void 0:N.docs)==null?void 0:X.source}}};var J,K,Q;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    size: ModalSize.MEDIUM,
    rightActions: <Button color="primary" fullWidth={true}>
        Primary
      </Button>
  }
}`,...(Q=(K=m.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var V,Z,$;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    size: ModalSize.MEDIUM,
    rightActions: <Button color="secondary" fullWidth={true}>
        Secondary
      </Button>
  }
}`,...($=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var rr,er,sr;h.parameters={...h.parameters,docs:{...(rr=h.parameters)==null?void 0:rr.docs,source:{originalSource:`{
  args: {
    size: ModalSize.MEDIUM,
    leftActions: <Button color="secondary" fullWidth={true}>
        Secondary
      </Button>,
    rightActions: <Button color="primary" fullWidth={true}>
        Primary
      </Button>
  }
}`,...(sr=(er=h.parameters)==null?void 0:er.docs)==null?void 0:sr.source}}};var or,tr,nr;g.parameters={...g.parameters,docs:{...(or=g.parameters)==null?void 0:or.docs,source:{originalSource:`{
  args: {
    size: ModalSize.MEDIUM,
    leftActions: <Button color="tertiary" fullWidth={true}>
        Tertiary
      </Button>,
    rightActions: <>
        <Button color="secondary" fullWidth={true}>
          Secondary
        </Button>
        <Button color="primary" fullWidth={true}>
          Primary
        </Button>
      </>
  }
}`,...(nr=(tr=g.parameters)==null?void 0:tr.docs)==null?void 0:nr.source}}};var ar,ir,cr;y.parameters={...y.parameters,docs:{...(ar=y.parameters)==null?void 0:ar.docs,source:{originalSource:`{
  args: {
    size: ModalSize.MEDIUM,
    actions: <>
        <Button color="secondary">Secondary</Button>
        <Button color="primary">Primary</Button>
      </>
  }
}`,...(cr=(ir=y.parameters)==null?void 0:ir.docs)==null?void 0:cr.source}}};var lr,ur,dr;M.parameters={...M.parameters,docs:{...(lr=M.parameters)==null?void 0:lr.docs,source:{originalSource:`{
  args: {
    size: ModalSize.LARGE,
    title: "Application successful",
    titleIcon: <span className="material-icons clr-success-600">done</span>,
    children: <>
        Thank you for submitting your application! Your information has been
        received successfully. <br />
        <br />
        You will receive a confirmation email shortly with the details of your
        submission. If there are any further steps required our team will be in
        touch.
      </>,
    rightActions: <Button color="primary">I understand</Button>
  },
  parameters: {
    docs: {
      story: {
        height: "500px"
      }
    }
  }
}`,...(dr=(ur=M.parameters)==null?void 0:ur.docs)==null?void 0:dr.source}}};var mr,pr,hr;S.parameters={...S.parameters,docs:{...(mr=S.parameters)==null?void 0:mr.docs,source:{originalSource:`{
  args: {
    size: ModalSize.FULL,
    leftActions: <Button color="tertiary">Tertiary</Button>,
    rightActions: <>
        <Button color="secondary">Secondary</Button>
        <Button color="primary">Primary</Button>
      </>,
    children: longLorem.text
  }
}`,...(hr=(pr=S.parameters)==null?void 0:pr.docs)==null?void 0:hr.source}}};var gr,yr,Mr;z.parameters={...z.parameters,docs:{...(gr=z.parameters)==null?void 0:gr.docs,source:{originalSource:`{
  render: () => {
    return <CunninghamProvider modalParentSelector={() => document.querySelector("#my-custom-modal-parent")!}>
        <Modal isOpen={true} onClose={() => {}} size={ModalSize.MEDIUM}>
          I am rendered inside #my-custom-modal-parent
        </Modal>
        <div id="my-custom-modal-parent" />
      </CunninghamProvider>;
  }
}`,...(Mr=(yr=z.parameters)==null?void 0:yr.docs)==null?void 0:Mr.source}}};const jr=["Small","Medium","Large","ExtraLarge","Full","HideCloseButton","CloseOnClickOutside","DontCloseOnEsc","PreventClose","PrimaryButton","SecondaryButton","TwoButtons","ThreeButtons","CenterButtons","ExampleApplication","FullWithContent","CustomParentSelect"],Or=Object.freeze(Object.defineProperty({__proto__:null,CenterButtons:y,CloseOnClickOutside:l,CustomParentSelect:z,DontCloseOnEsc:u,ExampleApplication:M,ExtraLarge:a,Full:i,FullWithContent:S,HideCloseButton:c,Large:n,Medium:t,PreventClose:d,PrimaryButton:m,SecondaryButton:p,Small:o,ThreeButtons:g,TwoButtons:h,__namedExportsOrder:jr,default:Ar},Symbol.toStringTag,{value:"Module"}));export{y as C,u as D,M as E,S as F,c as H,n as L,t as M,m as P,Or as S,g as T,o as a,l as b};
