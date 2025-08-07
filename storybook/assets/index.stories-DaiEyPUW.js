import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as Y}from"./index-DTOEHpHZ.js";import{T as D,V as r,u as q,P as z}from"./ToastProvider-Dr5c6mPT.js";import{B as u}from"./index-DyRkmeWf.js";const w={title:"Components/Toast",component:D,args:{children:"Corrupti vestigium aiunt aeneus demulceo consequatur.",duration:3e4,disableAnimate:!0}},a={render:()=>{const{toast:d}=q(),l=[r.INFO,r.SUCCESS,r.WARNING,r.ERROR,r.NEUTRAL];return Y.useEffect(()=>{d("Adhuc civis creber super amita",r.SUCCESS,{primaryLabel:"Read more",primaryOnClick:()=>{alert("Clicked here !")}})},[]),e.jsx("div",{style:{height:"300px"},children:e.jsx(u,{onClick:()=>{const G=l[Math.floor(Math.random()*l.length)];d("Adhuc civis creber super amita",G,{primaryLabel:"Primary",primaryOnClick:()=>{alert("Clicked here !")}})},children:"Create toast!"})})}},s={args:{type:r.INFO}},t={args:{type:r.INFO,primaryLabel:"Primary"}},n={args:{type:r.INFO,actions:e.jsxs(e.Fragment,{children:[e.jsx(u,{color:"primary",children:"Primary"}),e.jsx(u,{color:"secondary",children:"Secondary"})]})}},o={args:{type:r.SUCCESS}},c={args:{type:r.WARNING}},i={args:{type:r.ERROR}},p={args:{type:r.NEUTRAL}},m={render:()=>e.jsx("div",{children:e.jsx(z,{duration:6e3})})};var y,S,g;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const {
      toast
    } = useToastProvider();
    const TYPES = [VariantType.INFO, VariantType.SUCCESS, VariantType.WARNING, VariantType.ERROR, VariantType.NEUTRAL];
    useEffect(() => {
      toast("Adhuc civis creber super amita", VariantType.SUCCESS, {
        primaryLabel: "Read more",
        primaryOnClick: () => {
          // eslint-disable-next-line no-alert
          alert("Clicked here !");
        }
      });
    }, []);
    return <div style={{
      height: "300px"
    }}>
        <Button onClick={() => {
        const type = TYPES[Math.floor(Math.random() * TYPES.length)];
        toast("Adhuc civis creber super amita", type, {
          primaryLabel: "Primary",
          primaryOnClick: () => {
            // eslint-disable-next-line no-alert
            alert("Clicked here !");
          }
        });
      }}>
          Create toast!
        </Button>
      </div>;
  }
}`,...(g=(S=a.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var C,E,T;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    type: VariantType.INFO
  }
}`,...(T=(E=s.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var h,N,R;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    type: VariantType.INFO,
    primaryLabel: "Primary"
  }
}`,...(R=(N=t.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var f,I,O;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    type: VariantType.INFO,
    actions: <>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
      </>
  }
}`,...(O=(I=n.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var x,P,b;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    type: VariantType.SUCCESS
  }
}`,...(b=(P=o.parameters)==null?void 0:P.docs)==null?void 0:b.source}}};var V,v,B;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    type: VariantType.WARNING
  }
}`,...(B=(v=c.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var A,j,k;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    type: VariantType.ERROR
  }
}`,...(k=(j=i.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var L,U,F;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    type: VariantType.NEUTRAL
  }
}`,...(F=(U=p.parameters)==null?void 0:U.docs)==null?void 0:F.source}}};var W,_,M;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    return <div>
        <ProgressBar duration={6000} />
      </div>;
  }
}`,...(M=(_=m.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};const H=["Demo","Info","InfoWithButton","InfoCustom","Success","Warning","Error","Neutral","ProgressBarExample"],Z=Object.freeze(Object.defineProperty({__proto__:null,Demo:a,Error:i,Info:s,InfoCustom:n,InfoWithButton:t,Neutral:p,ProgressBarExample:m,Success:o,Warning:c,__namedExportsOrder:H,default:w},Symbol.toStringTag,{value:"Module"}));export{a as D,i as E,s as I,p as N,Z as S,c as W,o as a,t as b,n as c};
