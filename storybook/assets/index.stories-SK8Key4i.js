import{j as n}from"./jsx-runtime-CKrituN3.js";import{R as x,r as de}from"./index-CBqU2yxZ.js";import{B as i}from"./index-oVJ33EwG.js";import{c as ve}from"./index-Bl6ORisp.js";import{u as pe}from"./index-BOtO6brZ.js";import{i as be,V as u}from"./ToastProvider-Cw1EYYFr.js";const ye=(e,a,t)=>{const[r,s]=x.useState(typeof a>"u"?e:a),A=P=>{t?t(P):s(P)};return de.useEffect(()=>{t&&typeof a<"u"&&a!==r&&s(a)},[a]),[r,A]},q=e=>n.jsx("div",{className:ve("c__alert","c__alert--"+e.type,e.className,{"c__alert--hide":e.hide}),children:e.children}),L=({type:e,...a})=>{const t=de.useMemo(()=>be(e),[e]);return a.icon?a.icon:t?n.jsx("div",{className:"c__alert__icon",children:n.jsx("span",{className:"material-icons",children:t})}):null},w=e=>{const{t:a}=pe();return e.canClose&&n.jsx(i,{color:"tertiary",size:"small",icon:n.jsx("span",{className:"material-icons",children:"close"}),"aria-label":a("components.alert.close_aria_label"),onClick:()=>{var t;(t=e.onClose)==null||t.call(e,!0)}})},M=e=>n.jsxs(n.Fragment,{children:[e.tertiaryLabel&&n.jsx(i,{color:"tertiary-text",onClick:e.tertiaryOnClick,...e.tertiaryProps,children:e.tertiaryLabel}),e.primaryLabel&&n.jsx(i,{color:"primary-text",onClick:e.primaryOnClick,...e.primaryProps,children:e.primaryLabel}),e.buttons]});q.__docgenInfo={description:"",methods:[],displayName:"AlertWrapper",props:{additional:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},buttons:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},canClose:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},closed:{required:!1,tsType:{name:"boolean"},description:""},expandable:{required:!1,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},hide:{required:!1,tsType:{name:"boolean"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},onExpand:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},primaryLabel:{required:!1,tsType:{name:"string"},description:""},primaryOnClick:{required:!1,tsType:{name:'intersection["onClick"]',raw:'ButtonProps["onClick"]'},description:""},primaryProps:{required:!1,tsType:{name:"intersection",raw:`Omit<DomProps, "color"> & {
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
AnchorHTMLAttributes<HTMLAnchorElement>`,elements:[{name:"ButtonHTMLAttributes",elements:[{name:"HTMLButtonElement"}],raw:"ButtonHTMLAttributes<HTMLButtonElement>"},{name:"AnchorHTMLAttributes",elements:[{name:"HTMLAnchorElement"}],raw:"AnchorHTMLAttributes<HTMLAnchorElement>"}]},{name:"literal",value:'"color"'}],raw:'Omit<DomProps, "color">'},{name:"signature",type:"object",raw:`{
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
| "danger"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"primary-text"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"tertiary-text"'},{name:"literal",value:'"danger"'}],required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"iconPosition",value:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}],required:!1}},{key:"active",value:{name:"boolean",required:!1}},{key:"fullWidth",value:{name:"boolean",required:!1}}]}}]},description:""},tertiaryLabel:{required:!1,tsType:{name:"string"},description:""},tertiaryOnClick:{required:!1,tsType:{name:'intersection["onClick"]',raw:'ButtonProps["onClick"]'},description:""},tertiaryProps:{required:!1,tsType:{name:"intersection",raw:`Omit<DomProps, "color"> & {
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
AnchorHTMLAttributes<HTMLAnchorElement>`,elements:[{name:"ButtonHTMLAttributes",elements:[{name:"HTMLButtonElement"}],raw:"ButtonHTMLAttributes<HTMLButtonElement>"},{name:"AnchorHTMLAttributes",elements:[{name:"HTMLAnchorElement"}],raw:"AnchorHTMLAttributes<HTMLAnchorElement>"}]},{name:"literal",value:'"color"'}],raw:'Omit<DomProps, "color">'},{name:"signature",type:"object",raw:`{
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
| "danger"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"primary-text"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"tertiary-text"'},{name:"literal",value:'"danger"'}],required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"iconPosition",value:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}],required:!1}},{key:"active",value:{name:"boolean",required:!1}},{key:"fullWidth",value:{name:"boolean",required:!1}}]}}]},description:""},type:{required:!1,tsType:{name:"VariantType"},description:""}},composes:["PropsWithChildren"]};L.__docgenInfo={description:"",methods:[],displayName:"AlertIcon",props:{additional:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},buttons:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},canClose:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},closed:{required:!1,tsType:{name:"boolean"},description:""},expandable:{required:!1,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},hide:{required:!1,tsType:{name:"boolean"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},onExpand:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},primaryLabel:{required:!1,tsType:{name:"string"},description:""},primaryOnClick:{required:!1,tsType:{name:'intersection["onClick"]',raw:'ButtonProps["onClick"]'},description:""},primaryProps:{required:!1,tsType:{name:"intersection",raw:`Omit<DomProps, "color"> & {
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
AnchorHTMLAttributes<HTMLAnchorElement>`,elements:[{name:"ButtonHTMLAttributes",elements:[{name:"HTMLButtonElement"}],raw:"ButtonHTMLAttributes<HTMLButtonElement>"},{name:"AnchorHTMLAttributes",elements:[{name:"HTMLAnchorElement"}],raw:"AnchorHTMLAttributes<HTMLAnchorElement>"}]},{name:"literal",value:'"color"'}],raw:'Omit<DomProps, "color">'},{name:"signature",type:"object",raw:`{
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
| "danger"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"primary-text"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"tertiary-text"'},{name:"literal",value:'"danger"'}],required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"iconPosition",value:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}],required:!1}},{key:"active",value:{name:"boolean",required:!1}},{key:"fullWidth",value:{name:"boolean",required:!1}}]}}]},description:""},tertiaryLabel:{required:!1,tsType:{name:"string"},description:""},tertiaryOnClick:{required:!1,tsType:{name:'intersection["onClick"]',raw:'ButtonProps["onClick"]'},description:""},tertiaryProps:{required:!1,tsType:{name:"intersection",raw:`Omit<DomProps, "color"> & {
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
AnchorHTMLAttributes<HTMLAnchorElement>`,elements:[{name:"ButtonHTMLAttributes",elements:[{name:"HTMLButtonElement"}],raw:"ButtonHTMLAttributes<HTMLButtonElement>"},{name:"AnchorHTMLAttributes",elements:[{name:"HTMLAnchorElement"}],raw:"AnchorHTMLAttributes<HTMLAnchorElement>"}]},{name:"literal",value:'"color"'}],raw:'Omit<DomProps, "color">'},{name:"signature",type:"object",raw:`{
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
| "danger"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"primary-text"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"tertiary-text"'},{name:"literal",value:'"danger"'}],required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"iconPosition",value:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}],required:!1}},{key:"active",value:{name:"boolean",required:!1}},{key:"fullWidth",value:{name:"boolean",required:!1}}]}}]},description:""},type:{required:!1,tsType:{name:"VariantType"},description:""}},composes:["PropsWithChildren"]};w.__docgenInfo={description:"",methods:[],displayName:"AlertClose",props:{additional:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},buttons:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},canClose:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},closed:{required:!1,tsType:{name:"boolean"},description:""},expandable:{required:!1,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},hide:{required:!1,tsType:{name:"boolean"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},onExpand:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},primaryLabel:{required:!1,tsType:{name:"string"},description:""},primaryOnClick:{required:!1,tsType:{name:'intersection["onClick"]',raw:'ButtonProps["onClick"]'},description:""},primaryProps:{required:!1,tsType:{name:"intersection",raw:`Omit<DomProps, "color"> & {
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
AnchorHTMLAttributes<HTMLAnchorElement>`,elements:[{name:"ButtonHTMLAttributes",elements:[{name:"HTMLButtonElement"}],raw:"ButtonHTMLAttributes<HTMLButtonElement>"},{name:"AnchorHTMLAttributes",elements:[{name:"HTMLAnchorElement"}],raw:"AnchorHTMLAttributes<HTMLAnchorElement>"}]},{name:"literal",value:'"color"'}],raw:'Omit<DomProps, "color">'},{name:"signature",type:"object",raw:`{
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
| "danger"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"primary-text"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"tertiary-text"'},{name:"literal",value:'"danger"'}],required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"iconPosition",value:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}],required:!1}},{key:"active",value:{name:"boolean",required:!1}},{key:"fullWidth",value:{name:"boolean",required:!1}}]}}]},description:""},tertiaryLabel:{required:!1,tsType:{name:"string"},description:""},tertiaryOnClick:{required:!1,tsType:{name:'intersection["onClick"]',raw:'ButtonProps["onClick"]'},description:""},tertiaryProps:{required:!1,tsType:{name:"intersection",raw:`Omit<DomProps, "color"> & {
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
AnchorHTMLAttributes<HTMLAnchorElement>`,elements:[{name:"ButtonHTMLAttributes",elements:[{name:"HTMLButtonElement"}],raw:"ButtonHTMLAttributes<HTMLButtonElement>"},{name:"AnchorHTMLAttributes",elements:[{name:"HTMLAnchorElement"}],raw:"AnchorHTMLAttributes<HTMLAnchorElement>"}]},{name:"literal",value:'"color"'}],raw:'Omit<DomProps, "color">'},{name:"signature",type:"object",raw:`{
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
| "danger"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"primary-text"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"tertiary-text"'},{name:"literal",value:'"danger"'}],required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"iconPosition",value:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}],required:!1}},{key:"active",value:{name:"boolean",required:!1}},{key:"fullWidth",value:{name:"boolean",required:!1}}]}}]},description:""},type:{required:!1,tsType:{name:"VariantType"},description:""}},composes:["PropsWithChildren"]};M.__docgenInfo={description:"",methods:[],displayName:"AlertButtons",props:{additional:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},buttons:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},canClose:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},closed:{required:!1,tsType:{name:"boolean"},description:""},expandable:{required:!1,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},hide:{required:!1,tsType:{name:"boolean"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},onExpand:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},primaryLabel:{required:!1,tsType:{name:"string"},description:""},primaryOnClick:{required:!1,tsType:{name:'intersection["onClick"]',raw:'ButtonProps["onClick"]'},description:""},primaryProps:{required:!1,tsType:{name:"intersection",raw:`Omit<DomProps, "color"> & {
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
AnchorHTMLAttributes<HTMLAnchorElement>`,elements:[{name:"ButtonHTMLAttributes",elements:[{name:"HTMLButtonElement"}],raw:"ButtonHTMLAttributes<HTMLButtonElement>"},{name:"AnchorHTMLAttributes",elements:[{name:"HTMLAnchorElement"}],raw:"AnchorHTMLAttributes<HTMLAnchorElement>"}]},{name:"literal",value:'"color"'}],raw:'Omit<DomProps, "color">'},{name:"signature",type:"object",raw:`{
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
| "danger"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"primary-text"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"tertiary-text"'},{name:"literal",value:'"danger"'}],required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"iconPosition",value:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}],required:!1}},{key:"active",value:{name:"boolean",required:!1}},{key:"fullWidth",value:{name:"boolean",required:!1}}]}}]},description:""},tertiaryLabel:{required:!1,tsType:{name:"string"},description:""},tertiaryOnClick:{required:!1,tsType:{name:'intersection["onClick"]',raw:'ButtonProps["onClick"]'},description:""},tertiaryProps:{required:!1,tsType:{name:"intersection",raw:`Omit<DomProps, "color"> & {
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
AnchorHTMLAttributes<HTMLAnchorElement>`,elements:[{name:"ButtonHTMLAttributes",elements:[{name:"HTMLButtonElement"}],raw:"ButtonHTMLAttributes<HTMLButtonElement>"},{name:"AnchorHTMLAttributes",elements:[{name:"HTMLAnchorElement"}],raw:"AnchorHTMLAttributes<HTMLAnchorElement>"}]},{name:"literal",value:'"color"'}],raw:'Omit<DomProps, "color">'},{name:"signature",type:"object",raw:`{
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
| "danger"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"primary-text"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"tertiary-text"'},{name:"literal",value:'"danger"'}],required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"iconPosition",value:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}],required:!1}},{key:"active",value:{name:"boolean",required:!1}},{key:"fullWidth",value:{name:"boolean",required:!1}}]}}]},description:""},type:{required:!1,tsType:{name:"VariantType"},description:""}},composes:["PropsWithChildren"]};const H=e=>n.jsxs(q,{...e,children:[n.jsxs("div",{className:"c__alert__content",children:[n.jsxs("div",{className:"c__alert__content__left",children:[e.children,n.jsx(L,{...e})]}),n.jsx(w,{...e})]}),n.jsx("div",{className:"c__alert__additional",children:e.additional}),n.jsx("div",{className:"c__alert-additional__buttons",children:n.jsx(M,{...e})})]});H.__docgenInfo={description:"",methods:[],displayName:"AlertAdditional",props:{additional:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},buttons:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},canClose:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},closed:{required:!1,tsType:{name:"boolean"},description:""},expandable:{required:!1,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},hide:{required:!1,tsType:{name:"boolean"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},onExpand:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},primaryLabel:{required:!1,tsType:{name:"string"},description:""},primaryOnClick:{required:!1,tsType:{name:'intersection["onClick"]',raw:'ButtonProps["onClick"]'},description:""},primaryProps:{required:!1,tsType:{name:"intersection",raw:`Omit<DomProps, "color"> & {
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
AnchorHTMLAttributes<HTMLAnchorElement>`,elements:[{name:"ButtonHTMLAttributes",elements:[{name:"HTMLButtonElement"}],raw:"ButtonHTMLAttributes<HTMLButtonElement>"},{name:"AnchorHTMLAttributes",elements:[{name:"HTMLAnchorElement"}],raw:"AnchorHTMLAttributes<HTMLAnchorElement>"}]},{name:"literal",value:'"color"'}],raw:'Omit<DomProps, "color">'},{name:"signature",type:"object",raw:`{
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
| "danger"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"primary-text"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"tertiary-text"'},{name:"literal",value:'"danger"'}],required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"iconPosition",value:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}],required:!1}},{key:"active",value:{name:"boolean",required:!1}},{key:"fullWidth",value:{name:"boolean",required:!1}}]}}]},description:""},tertiaryLabel:{required:!1,tsType:{name:"string"},description:""},tertiaryOnClick:{required:!1,tsType:{name:'intersection["onClick"]',raw:'ButtonProps["onClick"]'},description:""},tertiaryProps:{required:!1,tsType:{name:"intersection",raw:`Omit<DomProps, "color"> & {
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
AnchorHTMLAttributes<HTMLAnchorElement>`,elements:[{name:"ButtonHTMLAttributes",elements:[{name:"HTMLButtonElement"}],raw:"ButtonHTMLAttributes<HTMLButtonElement>"},{name:"AnchorHTMLAttributes",elements:[{name:"HTMLAnchorElement"}],raw:"AnchorHTMLAttributes<HTMLAnchorElement>"}]},{name:"literal",value:'"color"'}],raw:'Omit<DomProps, "color">'},{name:"signature",type:"object",raw:`{
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
| "danger"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"primary-text"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"tertiary-text"'},{name:"literal",value:'"danger"'}],required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"iconPosition",value:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}],required:!1}},{key:"active",value:{name:"boolean",required:!1}},{key:"fullWidth",value:{name:"boolean",required:!1}}]}}]},description:""},type:{required:!1,tsType:{name:"VariantType"},description:""}},composes:["PropsWithChildren"]};const k=e=>{const a=e.canClose||e.primaryLabel||e.tertiaryLabel||e.buttons;return n.jsx(q,{...e,children:n.jsxs("div",{className:"c__alert__content",children:[n.jsxs("div",{className:"c__alert__content__left",children:[e.children,n.jsx(L,{...e})]}),a&&n.jsxs("div",{className:"c__alert__actions",children:[n.jsx(M,{...e}),n.jsx(w,{...e})]})]})})};k.__docgenInfo={description:"",methods:[],displayName:"AlertOneLine",props:{additional:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},buttons:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},canClose:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},closed:{required:!1,tsType:{name:"boolean"},description:""},expandable:{required:!1,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},hide:{required:!1,tsType:{name:"boolean"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},onExpand:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},primaryLabel:{required:!1,tsType:{name:"string"},description:""},primaryOnClick:{required:!1,tsType:{name:'intersection["onClick"]',raw:'ButtonProps["onClick"]'},description:""},primaryProps:{required:!1,tsType:{name:"intersection",raw:`Omit<DomProps, "color"> & {
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
AnchorHTMLAttributes<HTMLAnchorElement>`,elements:[{name:"ButtonHTMLAttributes",elements:[{name:"HTMLButtonElement"}],raw:"ButtonHTMLAttributes<HTMLButtonElement>"},{name:"AnchorHTMLAttributes",elements:[{name:"HTMLAnchorElement"}],raw:"AnchorHTMLAttributes<HTMLAnchorElement>"}]},{name:"literal",value:'"color"'}],raw:'Omit<DomProps, "color">'},{name:"signature",type:"object",raw:`{
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
| "danger"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"primary-text"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"tertiary-text"'},{name:"literal",value:'"danger"'}],required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"iconPosition",value:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}],required:!1}},{key:"active",value:{name:"boolean",required:!1}},{key:"fullWidth",value:{name:"boolean",required:!1}}]}}]},description:""},tertiaryLabel:{required:!1,tsType:{name:"string"},description:""},tertiaryOnClick:{required:!1,tsType:{name:'intersection["onClick"]',raw:'ButtonProps["onClick"]'},description:""},tertiaryProps:{required:!1,tsType:{name:"intersection",raw:`Omit<DomProps, "color"> & {
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
AnchorHTMLAttributes<HTMLAnchorElement>`,elements:[{name:"ButtonHTMLAttributes",elements:[{name:"HTMLButtonElement"}],raw:"ButtonHTMLAttributes<HTMLButtonElement>"},{name:"AnchorHTMLAttributes",elements:[{name:"HTMLAnchorElement"}],raw:"AnchorHTMLAttributes<HTMLAnchorElement>"}]},{name:"literal",value:'"color"'}],raw:'Omit<DomProps, "color">'},{name:"signature",type:"object",raw:`{
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
| "danger"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"primary-text"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"tertiary-text"'},{name:"literal",value:'"danger"'}],required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"iconPosition",value:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}],required:!1}},{key:"active",value:{name:"boolean",required:!1}},{key:"fullWidth",value:{name:"boolean",required:!1}}]}}]},description:""},type:{required:!1,tsType:{name:"VariantType"},description:""}},composes:["PropsWithChildren"]};const fe=e=>{const{t:a}=pe(),[t,r]=ye(!1,e.expanded,e.onExpand),s=n.jsx(i,{color:"tertiary",size:"nano","aria-label":a(t?"components.alert.shrink_aria_label":"components.alert.expand_aria_label"),icon:n.jsx("span",{className:"material-icons",children:t?"remove":"add"}),onClick:()=>{r(!t)}}),A={...e,icon:s,className:"c__alert--expandable"};return t?n.jsx(H,{...A}):n.jsx(k,{...A})};fe.__docgenInfo={description:"",methods:[],displayName:"AlertAdditionalExpandable",props:{additional:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},buttons:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},canClose:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},closed:{required:!1,tsType:{name:"boolean"},description:""},expandable:{required:!1,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},hide:{required:!1,tsType:{name:"boolean"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},onExpand:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},primaryLabel:{required:!1,tsType:{name:"string"},description:""},primaryOnClick:{required:!1,tsType:{name:'intersection["onClick"]',raw:'ButtonProps["onClick"]'},description:""},primaryProps:{required:!1,tsType:{name:"intersection",raw:`Omit<DomProps, "color"> & {
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
AnchorHTMLAttributes<HTMLAnchorElement>`,elements:[{name:"ButtonHTMLAttributes",elements:[{name:"HTMLButtonElement"}],raw:"ButtonHTMLAttributes<HTMLButtonElement>"},{name:"AnchorHTMLAttributes",elements:[{name:"HTMLAnchorElement"}],raw:"AnchorHTMLAttributes<HTMLAnchorElement>"}]},{name:"literal",value:'"color"'}],raw:'Omit<DomProps, "color">'},{name:"signature",type:"object",raw:`{
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
| "danger"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"primary-text"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"tertiary-text"'},{name:"literal",value:'"danger"'}],required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"iconPosition",value:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}],required:!1}},{key:"active",value:{name:"boolean",required:!1}},{key:"fullWidth",value:{name:"boolean",required:!1}}]}}]},description:""},tertiaryLabel:{required:!1,tsType:{name:"string"},description:""},tertiaryOnClick:{required:!1,tsType:{name:'intersection["onClick"]',raw:'ButtonProps["onClick"]'},description:""},tertiaryProps:{required:!1,tsType:{name:"intersection",raw:`Omit<DomProps, "color"> & {
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
AnchorHTMLAttributes<HTMLAnchorElement>`,elements:[{name:"ButtonHTMLAttributes",elements:[{name:"HTMLButtonElement"}],raw:"ButtonHTMLAttributes<HTMLButtonElement>"},{name:"AnchorHTMLAttributes",elements:[{name:"HTMLAnchorElement"}],raw:"AnchorHTMLAttributes<HTMLAnchorElement>"}]},{name:"literal",value:'"color"'}],raw:'Omit<DomProps, "color">'},{name:"signature",type:"object",raw:`{
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
| "danger"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"primary-text"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"tertiary-text"'},{name:"literal",value:'"danger"'}],required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"iconPosition",value:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}],required:!1}},{key:"active",value:{name:"boolean",required:!1}},{key:"fullWidth",value:{name:"boolean",required:!1}}]}}]},description:""},type:{required:!1,tsType:{name:"VariantType"},description:""}},composes:["PropsWithChildren"]};const o=e=>{const[a,t]=ye(!1,e.closed,e.onClose),r={type:u.INFO,...e,onClose:t};return a?null:e.additional?e.expandable?n.jsx(fe,{...r}):n.jsx(H,{...r}):n.jsx(k,{...r})};o.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{additional:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},buttons:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},canClose:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},closed:{required:!1,tsType:{name:"boolean"},description:""},expandable:{required:!1,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},hide:{required:!1,tsType:{name:"boolean"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},onExpand:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},primaryLabel:{required:!1,tsType:{name:"string"},description:""},primaryOnClick:{required:!1,tsType:{name:'intersection["onClick"]',raw:'ButtonProps["onClick"]'},description:""},primaryProps:{required:!1,tsType:{name:"intersection",raw:`Omit<DomProps, "color"> & {
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
AnchorHTMLAttributes<HTMLAnchorElement>`,elements:[{name:"ButtonHTMLAttributes",elements:[{name:"HTMLButtonElement"}],raw:"ButtonHTMLAttributes<HTMLButtonElement>"},{name:"AnchorHTMLAttributes",elements:[{name:"HTMLAnchorElement"}],raw:"AnchorHTMLAttributes<HTMLAnchorElement>"}]},{name:"literal",value:'"color"'}],raw:'Omit<DomProps, "color">'},{name:"signature",type:"object",raw:`{
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
| "danger"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"primary-text"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"tertiary-text"'},{name:"literal",value:'"danger"'}],required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"iconPosition",value:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}],required:!1}},{key:"active",value:{name:"boolean",required:!1}},{key:"fullWidth",value:{name:"boolean",required:!1}}]}}]},description:""},tertiaryLabel:{required:!1,tsType:{name:"string"},description:""},tertiaryOnClick:{required:!1,tsType:{name:'intersection["onClick"]',raw:'ButtonProps["onClick"]'},description:""},tertiaryProps:{required:!1,tsType:{name:"intersection",raw:`Omit<DomProps, "color"> & {
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
AnchorHTMLAttributes<HTMLAnchorElement>`,elements:[{name:"ButtonHTMLAttributes",elements:[{name:"HTMLButtonElement"}],raw:"ButtonHTMLAttributes<HTMLButtonElement>"},{name:"AnchorHTMLAttributes",elements:[{name:"HTMLAnchorElement"}],raw:"AnchorHTMLAttributes<HTMLAnchorElement>"}]},{name:"literal",value:'"color"'}],raw:'Omit<DomProps, "color">'},{name:"signature",type:"object",raw:`{
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
| "danger"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"primary-text"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"tertiary-text"'},{name:"literal",value:'"danger"'}],required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"iconPosition",value:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}],required:!1}},{key:"active",value:{name:"boolean",required:!1}},{key:"fullWidth",value:{name:"boolean",required:!1}}]}}]},description:""},type:{required:!1,tsType:{name:"VariantType"},description:""}},composes:["PropsWithChildren"]};const Te={title:"Components/Alert",component:o},c={render:e=>{const a={type:e.type??u.INFO};return n.jsxs("div",{style:{display:"flex",gap:"1rem",flexDirection:"column"},children:[n.jsx(o,{...l.args,primaryLabel:void 0,...a}),n.jsx(o,{...l.args,...a}),n.jsx(o,{...m.args,...a}),n.jsx(o,{...l.args,additional:"Additional information",expandable:!0,expanded:!0,...a})]})},argTypes:{type:{options:["info","success","warning","error","neutral"]}}},l={args:{children:"Alert component info",canClose:!0,primaryLabel:"Primary"}},d={args:{children:"Alert component info",canClose:!0,primaryLabel:"Primary",tertiaryLabel:"Tertiary"}},p={args:{children:"Alert component info",canClose:!0,buttons:n.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[n.jsx(i,{color:"primary",children:"Primary"}),n.jsx(i,{color:"secondary",children:"Secondary"})]})}},y={args:{children:"Alert component Success",canClose:!0,primaryLabel:"Primary",type:u.SUCCESS}},f={args:{children:"Alert component Warning",canClose:!0,primaryLabel:"Primary",type:u.WARNING}},v={args:{children:"Alert component Error",canClose:!0,primaryLabel:"Primary",type:u.ERROR}},b={args:{children:"Alert component Neutral",canClose:!0,primaryLabel:"Primary",type:u.NEUTRAL}},m={args:{children:"Alert component info",additional:"Additional information",canClose:!0,primaryLabel:"Primary",tertiaryLabel:"Tertiary  "}},T={render:()=>{const[e,a]=x.useState(!1);return n.jsxs("div",{children:[n.jsx(o,{...l.args,closed:e,onClose:()=>a(!0)}),n.jsxs("div",{children:["closed: ",e?"true":"false"]}),n.jsx(i,{onClick:()=>a(!1),children:"Open"}),n.jsx(i,{onClick:()=>a(!0),children:"Close"})]})}},g={render:()=>n.jsx(o,{...l.args,additional:"Additional information",expandable:!0})},h={render:()=>{const[e,a]=x.useState(!1),[t,r]=x.useState(!1);return n.jsxs("div",{children:[n.jsx(o,{...l.args,additional:"Additional information",closed:e,onClose:()=>a(!0),expandable:!0,expanded:t,onExpand:s=>r(s)}),n.jsxs("div",{children:["closed: ",e?"true":"false"]}),n.jsx(i,{onClick:()=>a(!1),children:"Open"}),n.jsx(i,{onClick:()=>a(!0),children:"Close"}),n.jsxs("div",{children:["expanded: ",t?"true":"false"]}),n.jsx(i,{onClick:()=>r(!0),children:"Expand"}),n.jsx(i,{onClick:()=>r(!1),children:"Shrink"})]})}};var C,E,R;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => {
    const customProps: AlertProps = {
      type: args.type ?? VariantType.INFO
    };
    return <div style={{
      display: "flex",
      gap: "1rem",
      flexDirection: "column"
    }}>
        <Alert {...Info.args} primaryLabel={undefined} {...customProps} />
        <Alert {...Info.args} {...customProps} />
        <Alert {...InfoAdditionalInformation.args} {...customProps} />
        <Alert {...Info.args} additional="Additional information" expandable={true} expanded={true} {...customProps} />
      </div>;
  },
  argTypes: {
    type: {
      options: ["info", "success", "warning", "error", "neutral"]
    }
  }
}`,...(R=(E=c.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var B,N,O;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: "Alert component info",
    canClose: true,
    primaryLabel: "Primary"
  }
}`,...(O=(N=l.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var j,_,W;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: "Alert component info",
    canClose: true,
    primaryLabel: "Primary",
    tertiaryLabel: "Tertiary"
  }
}`,...(W=(_=d.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};var z,S,D;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: "Alert component info",
    canClose: true,
    buttons: <div style={{
      display: "flex",
      gap: "0.5rem"
    }}>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
      </div>
  }
}`,...(D=(S=p.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var I,V,F;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: "Alert component Success",
    canClose: true,
    primaryLabel: "Primary",
    type: VariantType.SUCCESS
  }
}`,...(F=(V=y.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};var U,G,J;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    children: "Alert component Warning",
    canClose: true,
    primaryLabel: "Primary",
    type: VariantType.WARNING
  }
}`,...(J=(G=f.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,X;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    children: "Alert component Error",
    canClose: true,
    primaryLabel: "Primary",
    type: VariantType.ERROR
  }
}`,...(X=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,$;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    children: "Alert component Neutral",
    canClose: true,
    primaryLabel: "Primary",
    type: VariantType.NEUTRAL
  }
}`,...($=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ne,ae;m.parameters={...m.parameters,docs:{...(ee=m.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    children: "Alert component info",
    additional: "Additional information",
    canClose: true,
    primaryLabel: "Primary",
    tertiaryLabel: "Tertiary  "
  }
}`,...(ae=(ne=m.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var te,re,ie;T.parameters={...T.parameters,docs:{...(te=T.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => {
    const [closed, setClosed] = React.useState(false);
    return <div>
        <Alert {...Info.args} closed={closed} onClose={() => setClosed(true)} />
        <div>closed: {closed ? "true" : "false"}</div>
        <Button onClick={() => setClosed(false)}>Open</Button>
        <Button onClick={() => setClosed(true)}>Close</Button>
      </div>;
  }
}`,...(ie=(re=T.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var le,oe,se;g.parameters={...g.parameters,docs:{...(le=g.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => {
    return <Alert {...Info.args} additional="Additional information" expandable={true} />;
  }
}`,...(se=(oe=g.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var me,ue,ce;h.parameters={...h.parameters,docs:{...(me=h.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => {
    const [closed, setClosed] = React.useState(false);
    const [expanded, setExpanded] = React.useState(false);
    return <div>
        <Alert {...Info.args} additional="Additional information" closed={closed} onClose={() => setClosed(true)} expandable={true} expanded={expanded} onExpand={value => setExpanded(value)} />
        <div>closed: {closed ? "true" : "false"}</div>
        <Button onClick={() => setClosed(false)}>Open</Button>
        <Button onClick={() => setClosed(true)}>Close</Button>
        <div>expanded: {expanded ? "true" : "false"}</div>
        <Button onClick={() => setExpanded(true)}>Expand</Button>
        <Button onClick={() => setExpanded(false)}>Shrink</Button>
      </div>;
  }
}`,...(ce=(ue=h.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};const ge=["All","Info","InfoWithTertiary","CustomButtons","Success","Warning","Error","Neutral","InfoAdditionalInformation","Controlled","InfoExpandable","ExpandableControlled"],Me=Object.freeze(Object.defineProperty({__proto__:null,All:c,Controlled:T,CustomButtons:p,Error:v,ExpandableControlled:h,Info:l,InfoAdditionalInformation:m,InfoExpandable:g,InfoWithTertiary:d,Neutral:b,Success:y,Warning:f,__namedExportsOrder:ge,default:Te},Symbol.toStringTag,{value:"Module"}));export{c as A,p as C,v as E,l as I,b as N,Me as S,f as W,y as a,m as b,g as c,d,T as e,h as f,o as g};
