import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as M}from"./index-DTOEHpHZ.js";import{B as r}from"./index-DyRkmeWf.js";import{a as e,C as g,M as i,b as a}from"./index-eFf25hYI.js";import{l as s}from"./longLorem-CjgWBgpH.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./ToastProvider-Dr5c6mPT.js";import"./index-rkLeB0kx.js";import"./cunningham-tokens-C-zj90pO.js";import"./index-DO9VteM4.js";import"./index-CAEZVxT0.js";const v={title:"Components/Modal/Edge Cases",parameters:{docs:{story:{height:"350px"}}}},n={render:()=>{const l=e(),d=e(),c=e(),m=()=>{l.open(),setTimeout(()=>{d.open(),setTimeout(()=>{c.open()},100)},100)};M.useEffect(()=>{m()},[]);const x=Array.from({length:1e3},(t,h)=>h);return o.jsx(g,{children:o.jsxs("div",{style:{minHeight:"3000px",backgroundColor:"pink"},children:[o.jsx(r,{onClick:m,style:{position:"fixed"},children:"Open Modals"}),o.jsx(i,{leftActions:o.jsx(r,{color:"tertiary",children:"Tertiary"}),rightActions:o.jsxs(o.Fragment,{children:[o.jsx(r,{color:"secondary",children:"Secondary"}),o.jsx(r,{color:"primary",children:"Primary"})]}),size:a.LARGE,...l,children:s.text}),o.jsx(i,{leftActions:o.jsx(r,{color:"tertiary",children:"Tertiary"}),rightActions:o.jsxs(o.Fragment,{children:[o.jsx(r,{color:"secondary",children:"Secondary"}),o.jsx(r,{color:"primary",children:"Primary"})]}),size:a.MEDIUM,...d,children:s.text}),o.jsx(i,{leftActions:o.jsx(r,{color:"tertiary",children:"Tertiary"}),rightActions:o.jsxs(o.Fragment,{children:[o.jsx(r,{color:"secondary",children:"Secondary"}),o.jsx(r,{color:"primary",children:"Primary"})]}),size:a.SMALL,...c,children:s.text}),x.map(t=>o.jsx("div",{children:t},t))]})})}};var p,y,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const modal1 = useModal();
    const modal2 = useModal();
    const modal3 = useModal();
    const openModals = () => {
      modal1.open();
      setTimeout(() => {
        modal2.open();
        setTimeout(() => {
          modal3.open();
        }, 100);
      }, 100);
    };
    useEffect(() => {
      openModals();
    }, []);
    const array = Array.from({
      length: 1000
    }, (_, i) => i);
    return <CunninghamProvider>
        <div style={{
        minHeight: "3000px",
        backgroundColor: "pink"
      }}>
          <Button onClick={openModals} style={{
          position: "fixed"
        }}>
            Open Modals
          </Button>
          <Modal leftActions={<Button color="tertiary">Tertiary</Button>} rightActions={<>
                <Button color="secondary">Secondary</Button>
                <Button color="primary">Primary</Button>
              </>} size={ModalSize.LARGE} {...modal1}>
            {longLorem.text}
          </Modal>
          <Modal leftActions={<Button color="tertiary">Tertiary</Button>} rightActions={<>
                <Button color="secondary">Secondary</Button>
                <Button color="primary">Primary</Button>
              </>} size={ModalSize.MEDIUM} {...modal2}>
            {longLorem.text}
          </Modal>
          <Modal leftActions={<Button color="tertiary">Tertiary</Button>} rightActions={<>
                <Button color="secondary">Secondary</Button>
                <Button color="primary">Primary</Button>
              </>} size={ModalSize.SMALL} {...modal3}>
            {longLorem.text}
          </Modal>
          {array.map(i => <div key={i}>{i}</div>)}
        </div>
      </CunninghamProvider>;
  }
}`,...(u=(y=n.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};const P=["StackedModals"];export{n as StackedModals,P as __namedExportsOrder,v as default};
