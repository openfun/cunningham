import{j as r}from"./jsx-runtime-CKrituN3.js";import{r as cr}from"./index-CBqU2yxZ.js";import{M as lr,a as ur,C as dr,b as o}from"./index-BOtO6brZ.js";import{B as e}from"./index-oVJ33EwG.js";import{l as mr}from"./longLorem-CjgWBgpH.js";const pr={title:"Components/Modal",component:lr,args:{children:"Description",title:"Title"},decorators:[(ar,ir)=>{const M=ur();return cr.useEffect(()=>{M.open()},[]),r.jsxs(dr,{children:[r.jsx(e,{onClick:()=>M.open(),children:"Open Modal"}),r.jsx(ar,{args:{...ir.args,...M}})]})}],parameters:{docs:{story:{height:"250px"}}}},s={args:{size:o.SMALL}},t={args:{size:o.MEDIUM}},n={args:{size:o.LARGE}},a={args:{size:o.FULL}},i={args:{size:o.MEDIUM,hideCloseButton:!0}},c={args:{size:o.MEDIUM,hideCloseButton:!0,closeOnClickOutside:!0}},l={args:{size:o.MEDIUM,preventClose:!0}},u={args:{size:o.MEDIUM,rightActions:r.jsx(e,{color:"primary",fullWidth:!0,children:"Primary"})}},d={args:{size:o.MEDIUM,rightActions:r.jsx(e,{color:"secondary",fullWidth:!0,children:"Secondary"})}},m={args:{size:o.MEDIUM,leftActions:r.jsx(e,{color:"secondary",fullWidth:!0,children:"Secondary"}),rightActions:r.jsx(e,{color:"primary",fullWidth:!0,children:"Primary"})}},p={args:{size:o.MEDIUM,leftActions:r.jsx(e,{color:"tertiary",fullWidth:!0,children:"Tertiary"}),rightActions:r.jsxs(r.Fragment,{children:[r.jsx(e,{color:"secondary",fullWidth:!0,children:"Secondary"}),r.jsx(e,{color:"primary",fullWidth:!0,children:"Primary"})]})}},h={args:{size:o.MEDIUM,actions:r.jsxs(r.Fragment,{children:[r.jsx(e,{color:"secondary",children:"Secondary"}),r.jsx(e,{color:"primary",children:"Primary"})]})}},g={args:{size:o.LARGE,title:"Application successful",titleIcon:r.jsx("span",{className:"material-icons clr-success-600",children:"done"}),children:r.jsxs(r.Fragment,{children:["Thank you for submitting your application! Your information has been received successfully. ",r.jsx("br",{}),r.jsx("br",{}),"You will receive a confirmation email shortly with the details of your submission. If there are any further steps required our team will be in touch."]}),rightActions:r.jsx(e,{color:"primary",children:"I understand"})},parameters:{docs:{story:{height:"500px"}}}},y={args:{size:o.FULL,leftActions:r.jsx(e,{color:"tertiary",children:"Tertiary"}),rightActions:r.jsxs(r.Fragment,{children:[r.jsx(e,{color:"secondary",children:"Secondary"}),r.jsx(e,{color:"primary",children:"Primary"})]}),children:mr.text}};var S,f,z;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    size: ModalSize.SMALL
  }
}`,...(z=(f=s.parameters)==null?void 0:f.docs)==null?void 0:z.source}}};var B,x,E;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    size: ModalSize.MEDIUM
  }
}`,...(E=(x=t.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var A,j,C;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    size: ModalSize.LARGE
  }
}`,...(C=(j=n.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var I,U,L;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    size: ModalSize.FULL
  }
}`,...(L=(U=a.parameters)==null?void 0:U.docs)==null?void 0:L.source}}};var D,b,P;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    size: ModalSize.MEDIUM,
    hideCloseButton: true
  }
}`,...(P=(b=i.parameters)==null?void 0:b.docs)==null?void 0:P.source}}};var W,F,T;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    size: ModalSize.MEDIUM,
    hideCloseButton: true,
    closeOnClickOutside: true
  }
}`,...(T=(F=c.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var O,v,w;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    size: ModalSize.MEDIUM,
    preventClose: true
  }
}`,...(w=(v=l.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var k,_,R;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    size: ModalSize.MEDIUM,
    rightActions: <Button color="primary" fullWidth={true}>
        Primary
      </Button>
  }
}`,...(R=(_=u.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var G,Y,H;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    size: ModalSize.MEDIUM,
    rightActions: <Button color="secondary" fullWidth={true}>
        Secondary
      </Button>
  }
}`,...(H=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:H.source}}};var q,N,J;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    size: ModalSize.MEDIUM,
    leftActions: <Button color="secondary" fullWidth={true}>
        Secondary
      </Button>,
    rightActions: <Button color="primary" fullWidth={true}>
        Primary
      </Button>
  }
}`,...(J=(N=m.parameters)==null?void 0:N.docs)==null?void 0:J.source}}};var K,Q,V;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(V=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};var X,Z,$;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    size: ModalSize.MEDIUM,
    actions: <>
        <Button color="secondary">Secondary</Button>
        <Button color="primary">Primary</Button>
      </>
  }
}`,...($=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var rr,er,or;g.parameters={...g.parameters,docs:{...(rr=g.parameters)==null?void 0:rr.docs,source:{originalSource:`{
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
}`,...(or=(er=g.parameters)==null?void 0:er.docs)==null?void 0:or.source}}};var sr,tr,nr;y.parameters={...y.parameters,docs:{...(sr=y.parameters)==null?void 0:sr.docs,source:{originalSource:`{
  args: {
    size: ModalSize.FULL,
    leftActions: <Button color="tertiary">Tertiary</Button>,
    rightActions: <>
        <Button color="secondary">Secondary</Button>
        <Button color="primary">Primary</Button>
      </>,
    children: longLorem.text
  }
}`,...(nr=(tr=y.parameters)==null?void 0:tr.docs)==null?void 0:nr.source}}};const hr=["Small","Medium","Large","Full","HideCloseButton","CloseOnClickOutside","PreventClose","PrimaryButton","SecondaryButton","TwoButtons","ThreeButtons","CenterButtons","ExampleApplication","FullWithContent"],zr=Object.freeze(Object.defineProperty({__proto__:null,CenterButtons:h,CloseOnClickOutside:c,ExampleApplication:g,Full:a,FullWithContent:y,HideCloseButton:i,Large:n,Medium:t,PreventClose:l,PrimaryButton:u,SecondaryButton:d,Small:s,ThreeButtons:p,TwoButtons:m,__namedExportsOrder:hr,default:pr},Symbol.toStringTag,{value:"Module"}));export{h as C,g as E,y as F,i as H,n as L,t as M,u as P,zr as S,p as T,s as a,c as b};
