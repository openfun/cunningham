import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{e as m,r}from"./index-DTOEHpHZ.js";import{c as E}from"./index-rkLeB0kx.js";import{B as H}from"./index-DyRkmeWf.js";import{t as M}from"./cunningham-tokens-C-zj90pO.js";function T(e){const t=typeof window<"u"&&window;return!!(t&&(/Chromatic/.test(t.navigator.userAgent)||/chromatic=true/.test(t.location.href)))}var v=(e=>(e.INFO="info",e.SUCCESS="success",e.WARNING="warning",e.ERROR="error",e.NEUTRAL="neutral",e))(v||{});const O=e=>{switch(e){case"info":return"info";case"success":return"success";case"warning":return"warning";case"error":return"danger";default:return"neutral"}},q=e=>{switch(e){case"info":return"info";case"success":return"check_circle";case"warning":return"error_outline";case"error":return"cancel";default:return""}},b=e=>{const[t,a]=m.useState(!1),l=r.useRef(null),s=r.useRef(null);r.useEffect(()=>{if(!e.disableAnimate)return s.current=setTimeout(async()=>{a(!0),s.current=null},e.duration),()=>{s.current&&clearTimeout(s.current)}},[]);const d=async()=>{var c;await Promise.allSettled(l.current.getAnimations().map(f=>f.finished)),(c=e.onDelete)==null||c.call(e)};return r.useEffect(()=>{t&&d()},[t]),n.jsxs("div",{ref:l,className:E("c__toast","c__toast--"+e.type,{"c__toast--disappear":t,"c__toast--no-animate":e.disableAnimate}),role:"alert",children:[n.jsx(w,{duration:e.duration}),n.jsxs("div",{className:"c__toast__content",children:[e.primaryLabel&&n.jsx("div",{className:"c__toast__content__buttons",children:n.jsx(H,{color:"primary-text",onClick:e.primaryOnClick,...e.primaryProps,children:e.primaryLabel})}),e.actions,n.jsx("div",{className:"c__toast__content__children",children:e.children}),n.jsx(g,{...e})]})]})},g=({type:e,...t})=>{const a=r.useMemo(()=>q(e),[e]);return t.icon?t.icon:a?n.jsx("div",{className:"c__toast__icon",children:n.jsx("span",{className:"material-icons",children:a})}):null},w=({duration:e})=>{const t=r.useRef(null);return r.useEffect(()=>{T()||t.current.animate([{width:"0%"},{width:"100%"}],{duration:e,easing:"linear"})},[]),n.jsx("div",{className:"c__progress-bar",children:n.jsx("div",{className:"c__progress-bar__content",ref:t})})};b.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{duration:{required:!0,tsType:{name:"number"},description:""},type:{required:!0,tsType:{name:"VariantType"},description:""},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},primaryLabel:{required:!1,tsType:{name:"string"},description:""},primaryOnClick:{required:!1,tsType:{name:'intersection["onClick"]',raw:'ButtonProps["onClick"]'},description:""},primaryProps:{required:!1,tsType:{name:"intersection",raw:`Omit<DomProps, "color"> &
RefAttributes<ButtonElement> & {
  size?: "medium" | "small" | "nano";
  color?:
    | "primary"
    | "primary-text"
    | "secondary"
    | "tertiary"
    | "tertiary-text"
    | "danger";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  active?: boolean;
  fullWidth?: boolean;
}`,elements:[{name:"Omit",elements:[{name:"intersection",raw:`ButtonHTMLAttributes<HTMLButtonElement> &
AnchorHTMLAttributes<HTMLAnchorElement>`,elements:[{name:"ButtonHTMLAttributes",elements:[{name:"HTMLButtonElement"}],raw:"ButtonHTMLAttributes<HTMLButtonElement>"},{name:"AnchorHTMLAttributes",elements:[{name:"HTMLAnchorElement"}],raw:"AnchorHTMLAttributes<HTMLAnchorElement>"}]},{name:"literal",value:'"color"'}],raw:'Omit<DomProps, "color">'},{name:"RefAttributes",elements:[{name:"intersection",raw:"HTMLButtonElement & HTMLAnchorElement",elements:[{name:"HTMLButtonElement"},{name:"HTMLAnchorElement"}]}],raw:"RefAttributes<ButtonElement>"},{name:"signature",type:"object",raw:`{
  size?: "medium" | "small" | "nano";
  color?:
    | "primary"
    | "primary-text"
    | "secondary"
    | "tertiary"
    | "tertiary-text"
    | "danger";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  active?: boolean;
  fullWidth?: boolean;
}`,signature:{properties:[{key:"size",value:{name:"union",raw:'"medium" | "small" | "nano"',elements:[{name:"literal",value:'"medium"'},{name:"literal",value:'"small"'},{name:"literal",value:'"nano"'}],required:!1}},{key:"color",value:{name:"union",raw:`| "primary"
| "primary-text"
| "secondary"
| "tertiary"
| "tertiary-text"
| "danger"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"primary-text"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"tertiary-text"'},{name:"literal",value:'"danger"'}],required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"iconPosition",value:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}],required:!1}},{key:"active",value:{name:"boolean",required:!1}},{key:"fullWidth",value:{name:"boolean",required:!1}}]}}]},description:""},disableAnimate:{required:!1,tsType:{name:"boolean"},description:""},actions:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["PropsWithChildren"]};g.__docgenInfo={description:"",methods:[],displayName:"ToastIcon",props:{duration:{required:!0,tsType:{name:"number"},description:""},type:{required:!0,tsType:{name:"VariantType"},description:""},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},primaryLabel:{required:!1,tsType:{name:"string"},description:""},primaryOnClick:{required:!1,tsType:{name:'intersection["onClick"]',raw:'ButtonProps["onClick"]'},description:""},primaryProps:{required:!1,tsType:{name:"intersection",raw:`Omit<DomProps, "color"> &
RefAttributes<ButtonElement> & {
  size?: "medium" | "small" | "nano";
  color?:
    | "primary"
    | "primary-text"
    | "secondary"
    | "tertiary"
    | "tertiary-text"
    | "danger";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  active?: boolean;
  fullWidth?: boolean;
}`,elements:[{name:"Omit",elements:[{name:"intersection",raw:`ButtonHTMLAttributes<HTMLButtonElement> &
AnchorHTMLAttributes<HTMLAnchorElement>`,elements:[{name:"ButtonHTMLAttributes",elements:[{name:"HTMLButtonElement"}],raw:"ButtonHTMLAttributes<HTMLButtonElement>"},{name:"AnchorHTMLAttributes",elements:[{name:"HTMLAnchorElement"}],raw:"AnchorHTMLAttributes<HTMLAnchorElement>"}]},{name:"literal",value:'"color"'}],raw:'Omit<DomProps, "color">'},{name:"RefAttributes",elements:[{name:"intersection",raw:"HTMLButtonElement & HTMLAnchorElement",elements:[{name:"HTMLButtonElement"},{name:"HTMLAnchorElement"}]}],raw:"RefAttributes<ButtonElement>"},{name:"signature",type:"object",raw:`{
  size?: "medium" | "small" | "nano";
  color?:
    | "primary"
    | "primary-text"
    | "secondary"
    | "tertiary"
    | "tertiary-text"
    | "danger";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  active?: boolean;
  fullWidth?: boolean;
}`,signature:{properties:[{key:"size",value:{name:"union",raw:'"medium" | "small" | "nano"',elements:[{name:"literal",value:'"medium"'},{name:"literal",value:'"small"'},{name:"literal",value:'"nano"'}],required:!1}},{key:"color",value:{name:"union",raw:`| "primary"
| "primary-text"
| "secondary"
| "tertiary"
| "tertiary-text"
| "danger"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"primary-text"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"tertiary-text"'},{name:"literal",value:'"danger"'}],required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"iconPosition",value:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}],required:!1}},{key:"active",value:{name:"boolean",required:!1}},{key:"fullWidth",value:{name:"boolean",required:!1}}]}}]},description:""},disableAnimate:{required:!1,tsType:{name:"boolean"},description:""},actions:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["PropsWithChildren"]};w.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{duration:{required:!0,tsType:{name:"number"},description:""}}};class N{push(t){const a=async()=>(this.lastJob&&await this.lastJob,t());return this.lastJob=a(),this.lastJob}}const A=m.createContext(void 0),I=()=>{const e=r.useContext(A);if(e===void 0)throw new Error("useToastProvider must be used within a ToastProvider.");return e};let y=1;const R=6e3,h=()=>parseInt(M.themes.default.components.toast["slide-in-duration"].replace("ms",""),10),P=({children:e})=>{const t=r.useRef(null),a=r.useRef(0),[l,s]=m.useState([]),d=r.useRef(new N),c=r.useMemo(()=>({toast:(i,u=v.NEUTRAL,o={})=>{var p;(p=d.current)==null||p.push(()=>new Promise(_=>{const x=y;y+=1,a.current=t.current.offsetHeight,s(L=>[...L,{...o,message:i,i:x,type:u,duration:(o==null?void 0:o.duration)??R}]),setTimeout(()=>{_()},h())}))}}),[t,a,l]),f=async()=>{if(!t.current)return;const i=a.current,o=t.current.offsetHeight-i;typeof t.current.animate=="function"&&!T()&&t.current.animate([{transform:`translateY(${o}px)`},{transform:"translateY(0)"}],{duration:h(),easing:"ease"})};return m.useEffect(()=>{f()},[y]),n.jsxs(A.Provider,{value:c,children:[e,n.jsx("div",{className:"c__toast__container",ref:t,children:l.map(i=>n.jsx(b,{onDelete:()=>{s(u=>u.filter(o=>o.i!==i.i))},...i,children:i.message},i.i))})]})};P.__docgenInfo={description:"",methods:[],displayName:"ToastProvider"};export{w as P,b as T,v as V,P as a,O as c,q as i,I as u};
