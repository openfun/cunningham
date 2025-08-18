import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-DTOEHpHZ.js";import{B as d}from"./index-DyRkmeWf.js";import{P as l}from"./index-Dozmc4PB.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./index-rkLeB0kx.js";const x={title:"Components/Popover",component:l},t=()=>{const[n,s]=o.useState(!1),i=o.useRef(null);return e.jsx("div",{style:{display:"grid",height:"120vh",placeItems:"center"},children:e.jsxs("div",{ref:i,style:{width:"fit-content",position:"relative"},children:[e.jsx(d,{onClick:()=>s(!n),children:"Toggle"}),n&&e.jsx(l,{parentRef:i,onClickOutside:()=>s(!1),children:e.jsx("div",{style:{height:"200px",width:"200px",display:"flex",alignItems:"center",justifyContent:"center"},children:"I am open"})})]})})};t.__docgenInfo={description:"",methods:[],displayName:"Default"};var r,p,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef<HTMLDivElement>(null);
  return <div style={{
    display: "grid",
    height: "120vh",
    placeItems: "center"
  }}>
      <div ref={parentRef} style={{
      width: "fit-content",
      position: "relative"
    }}>
        <Button onClick={() => setIsOpen(!isOpen)}>Toggle</Button>
        {isOpen && <Popover parentRef={parentRef} onClickOutside={() => setIsOpen(false)}>
            <div style={{
          height: "200px",
          width: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
              I am open
            </div>
          </Popover>}
      </div>
    </div>;
}`,...(a=(p=t.parameters)==null?void 0:p.docs)==null?void 0:a.source}}};const g=["Default"];export{t as Default,g as __namedExportsOrder,x as default};
