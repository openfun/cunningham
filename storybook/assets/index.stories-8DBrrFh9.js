import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-DTOEHpHZ.js";import{P as r,u as g}from"./index-BhNLfgFX.js";const v={title:"Components/Pagination",component:r},n=()=>{const e=g({defaultPagesCount:100,defaultPage:50});return a.jsx(r,{...e})},o=()=>{const e=u.useMemo(()=>Array.from(Array(100).keys()),[]),[p,T]=u.useState([]),t=g({pageSize:10});return u.useEffect(()=>{const c=setTimeout(()=>{t.setPagesCount(Math.ceil(e.length/t.pageSize)),T(e.slice((t.page-1)*t.pageSize,t.page*t.pageSize))},500);return()=>{clearTimeout(c)}},[t.page]),a.jsxs("div",{children:[a.jsx("div",{children:p.map(c=>a.jsx("div",{className:"p-t bg-secondary-300 mb-t",children:c},c))}),a.jsx(r,{...t})]})},s=()=>{const e=g({defaultPagesCount:10});return u.useEffect(()=>{const p=setTimeout(()=>{e.setPage(5)},500);return()=>{clearTimeout(p)}},[]),a.jsx(r,{...e})},i=()=>{const e=g({defaultPagesCount:100,defaultPage:50});return a.jsx(r,{...e,displayGoto:!1})};n.__docgenInfo={description:"",methods:[],displayName:"Basic"};o.__docgenInfo={description:"",methods:[],displayName:"List"};s.__docgenInfo={description:"",methods:[],displayName:"ForcePage"};i.__docgenInfo={description:"",methods:[],displayName:"WithoutGoto"};var m,d,l;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const pagination = usePagination({
    defaultPagesCount: 100,
    defaultPage: 50
  });
  return <Pagination {...pagination} />;
}`,...(l=(d=n.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var f,P,h;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  // Numbers from 0 to 99.
  const database = useMemo(() => Array.from(Array(100).keys()), []);
  // Items to display on the current page.
  const [items, setItems] = useState<number[]>([]);
  const pagination = usePagination({
    pageSize: 10
  });

  // On page change.
  useEffect(() => {
    // Simulate a HTTP request delay.
    const timeout = setTimeout(() => {
      // Sets the number of pages based on the number of items in the database.
      pagination.setPagesCount(Math.ceil(database.length / pagination.pageSize));
      // Sets the items to display on the current page.
      setItems(database.slice((pagination.page - 1) * pagination.pageSize, pagination.page * pagination.pageSize));
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [pagination.page]);
  return <div>
      <div>
        {items.map(item => <div className="p-t bg-secondary-300 mb-t" key={item}>
            {item}
          </div>)}
      </div>
      <Pagination {...pagination} />
    </div>;
}`,...(h=(P=o.parameters)==null?void 0:P.docs)==null?void 0:h.source}}};var S,y,b;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const pagination = usePagination({
    defaultPagesCount: 10
  });
  useEffect(() => {
    const timeout = setTimeout(() => {
      pagination.setPage(5);
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return <Pagination {...pagination} />;
}`,...(b=(y=s.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var _,x,j;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  const pagination = usePagination({
    defaultPagesCount: 100,
    defaultPage: 50
  });
  return <Pagination {...pagination} displayGoto={false} />;
}`,...(j=(x=i.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};const z=["Basic","List","ForcePage","WithoutGoto"],N=Object.freeze(Object.defineProperty({__proto__:null,Basic:n,ForcePage:s,List:o,WithoutGoto:i,__namedExportsOrder:z,default:v},Symbol.toStringTag,{value:"Module"}));export{n as B,s as F,o as L,N as S,i as W};
