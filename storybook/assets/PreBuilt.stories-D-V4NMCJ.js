import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-DTOEHpHZ.js";import{B as M}from"./index-DyRkmeWf.js";import{c as f}from"./index-eFf25hYI.js";import{V as o}from"./ToastProvider-Dr5c6mPT.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./index-DO9VteM4.js";import"./index-rkLeB0kx.js";import"./index-CAEZVxT0.js";import"./cunningham-tokens-C-zj90pO.js";const J={title:"Components/Modal",parameters:{docs:{story:{height:"350px"}}}},n={render:()=>{const a=f(),e=async()=>{const r=await a.deleteConfirmationModal();alert(`You decided ${r}`)};return u.useEffect(()=>{e()},[]),l.jsx(M,{onClick:e,children:"Open"})}},t={render:()=>{const a=f(),e=async()=>{const r=await a.confirmationModal();alert(`You decided ${r}`)};return u.useEffect(()=>{e()},[]),l.jsx(M,{onClick:e,children:"Open"})}},s=a=>()=>{const e=f(),r=async()=>{const U=await e.messageModal({title:"Watch out!",children:"This is a custom message!",messageType:a});alert(`You decided ${U}`)};return u.useEffect(()=>{r()},[]),l.jsx(M,{onClick:r,children:"Open"})},c={render:s(o.SUCCESS)},d={render:s(o.INFO)},i={render:s(o.ERROR)},p={render:s(o.NEUTRAL)},m={render:s(o.WARNING)};var g,C,E;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const modals = useModals();
    const ask = async () => {
      const decision = await modals.deleteConfirmationModal();
      alert(\`You decided \${decision}\`);
    };
    useEffect(() => {
      ask();
    }, []);
    return <Button onClick={ask}>Open</Button>;
  }
}`,...(E=(C=n.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var S,k,y;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const modals = useModals();
    const ask = async () => {
      const decision = await modals.confirmationModal();
      alert(\`You decided \${decision}\`);
    };
    useEffect(() => {
      ask();
    }, []);
    return <Button onClick={ask}>Open</Button>;
  }
}`,...(y=(k=t.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var R,W,N;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: MessageWrapper(VariantType.SUCCESS)
}`,...(N=(W=c.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var O,T,x;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: MessageWrapper(VariantType.INFO)
}`,...(x=(T=d.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var h,V,B;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: MessageWrapper(VariantType.ERROR)
}`,...(B=(V=i.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var I,j,w;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: MessageWrapper(VariantType.NEUTRAL)
}`,...(w=(j=p.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var Y,$,A;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: MessageWrapper(VariantType.WARNING)
}`,...(A=($=m.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};const K=["DeleteConfirmationModal","ConfirmationModal","SuccessModal","InfoModal","ErrorModal","NeutralModal","WarningModal"];export{t as ConfirmationModal,n as DeleteConfirmationModal,i as ErrorModal,d as InfoModal,p as NeutralModal,c as SuccessModal,m as WarningModal,K as __namedExportsOrder,J as default};
