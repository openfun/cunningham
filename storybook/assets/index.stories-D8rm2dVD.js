import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{e as L,r as de}from"./index-DTOEHpHZ.js";import{B as i}from"./index-DyRkmeWf.js";import{c as ve}from"./index-rkLeB0kx.js";import{u as pe}from"./index-eFf25hYI.js";import{i as Te,V as u}from"./ToastProvider-Dr5c6mPT.js";const ye=(e,t,a)=>{const[r,s]=L.useState(typeof t>"u"?e:t),g=B=>{a?a(B):s(B)};return de.useEffect(()=>{a&&typeof t<"u"&&t!==r&&s(t)},[t]),[r,g]},M=e=>n.jsx("div",{className:ve("c__alert","c__alert--"+e.type,e.className,{"c__alert--hide":e.hide}),children:e.children}),H=({type:e,...t})=>{const a=de.useMemo(()=>Te(e),[e]);return t.icon?t.icon:a?n.jsx("div",{className:"c__alert__icon",children:n.jsx("span",{className:"material-icons",children:a})}):null},x=e=>{const{t}=pe();return e.canClose&&n.jsx(i,{color:"tertiary",size:"small",icon:n.jsx("span",{className:"material-icons",children:"close"}),"aria-label":t("components.alert.close_aria_label"),onClick:()=>{var a;(a=e.onClose)==null||a.call(e,!0)}})},q=e=>n.jsxs(n.Fragment,{children:[e.tertiaryLabel&&n.jsx(i,{color:"tertiary-text",onClick:e.tertiaryOnClick,...e.tertiaryProps,children:e.tertiaryLabel}),e.primaryLabel&&n.jsx(i,{color:"primary-text",onClick:e.primaryOnClick,...e.primaryProps,children:e.primaryLabel}),e.buttons]});M.__docgenInfo={description:"",methods:[],displayName:"AlertWrapper",props:{additional:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},buttons:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},canClose:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},closed:{required:!1,tsType:{name:"boolean"},description:""},expandable:{required:!1,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},hide:{required:!1,tsType:{name:"boolean"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},onExpand:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},primaryLabel:{required:!1,tsType:{name:"string"},description:""},primaryOnClick:{required:!1,tsType:{name:'intersection["onClick"]',raw:'ButtonProps["onClick"]'},description:""},primaryProps:{required:!1,tsType:{name:"intersection",raw:`Omit<DomProps, "color"> &
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
| "danger"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"primary-text"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"tertiary-text"'},{name:"literal",value:'"danger"'}],required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"iconPosition",value:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}],required:!1}},{key:"active",value:{name:"boolean",required:!1}},{key:"fullWidth",value:{name:"boolean",required:!1}}]}}]},description:""},tertiaryLabel:{required:!1,tsType:{name:"string"},description:""},tertiaryOnClick:{required:!1,tsType:{name:'intersection["onClick"]',raw:'ButtonProps["onClick"]'},description:""},tertiaryProps:{required:!1,tsType:{name:"intersection",raw:`Omit<DomProps, "color"> &
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
| "danger"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"primary-text"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"tertiary-text"'},{name:"literal",value:'"danger"'}],required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"iconPosition",value:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}],required:!1}},{key:"active",value:{name:"boolean",required:!1}},{key:"fullWidth",value:{name:"boolean",required:!1}}]}}]},description:""},type:{required:!1,tsType:{name:"VariantType"},description:""}},composes:["PropsWithChildren"]};H.__docgenInfo={description:"",methods:[],displayName:"AlertIcon",props:{additional:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},buttons:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},canClose:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},closed:{required:!1,tsType:{name:"boolean"},description:""},expandable:{required:!1,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},hide:{required:!1,tsType:{name:"boolean"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},onExpand:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},primaryLabel:{required:!1,tsType:{name:"string"},description:""},primaryOnClick:{required:!1,tsType:{name:'intersection["onClick"]',raw:'ButtonProps["onClick"]'},description:""},primaryProps:{required:!1,tsType:{name:"intersection",raw:`Omit<DomProps, "color"> &
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
| "danger"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"primary-text"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"tertiary-text"'},{name:"literal",value:'"danger"'}],required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"iconPosition",value:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}],required:!1}},{key:"active",value:{name:"boolean",required:!1}},{key:"fullWidth",value:{name:"boolean",required:!1}}]}}]},description:""},tertiaryLabel:{required:!1,tsType:{name:"string"},description:""},tertiaryOnClick:{required:!1,tsType:{name:'intersection["onClick"]',raw:'ButtonProps["onClick"]'},description:""},tertiaryProps:{required:!1,tsType:{name:"intersection",raw:`Omit<DomProps, "color"> &
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
| "danger"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"primary-text"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"tertiary-text"'},{name:"literal",value:'"danger"'}],required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"iconPosition",value:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}],required:!1}},{key:"active",value:{name:"boolean",required:!1}},{key:"fullWidth",value:{name:"boolean",required:!1}}]}}]},description:""},type:{required:!1,tsType:{name:"VariantType"},description:""}},composes:["PropsWithChildren"]};x.__docgenInfo={description:"",methods:[],displayName:"AlertClose",props:{additional:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},buttons:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},canClose:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},closed:{required:!1,tsType:{name:"boolean"},description:""},expandable:{required:!1,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},hide:{required:!1,tsType:{name:"boolean"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},onExpand:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},primaryLabel:{required:!1,tsType:{name:"string"},description:""},primaryOnClick:{required:!1,tsType:{name:'intersection["onClick"]',raw:'ButtonProps["onClick"]'},description:""},primaryProps:{required:!1,tsType:{name:"intersection",raw:`Omit<DomProps, "color"> &
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
| "danger"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"primary-text"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"tertiary-text"'},{name:"literal",value:'"danger"'}],required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"iconPosition",value:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}],required:!1}},{key:"active",value:{name:"boolean",required:!1}},{key:"fullWidth",value:{name:"boolean",required:!1}}]}}]},description:""},tertiaryLabel:{required:!1,tsType:{name:"string"},description:""},tertiaryOnClick:{required:!1,tsType:{name:'intersection["onClick"]',raw:'ButtonProps["onClick"]'},description:""},tertiaryProps:{required:!1,tsType:{name:"intersection",raw:`Omit<DomProps, "color"> &
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
| "danger"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"primary-text"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"tertiary-text"'},{name:"literal",value:'"danger"'}],required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"iconPosition",value:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}],required:!1}},{key:"active",value:{name:"boolean",required:!1}},{key:"fullWidth",value:{name:"boolean",required:!1}}]}}]},description:""},type:{required:!1,tsType:{name:"VariantType"},description:""}},composes:["PropsWithChildren"]};q.__docgenInfo={description:"",methods:[],displayName:"AlertButtons",props:{additional:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},buttons:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},canClose:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},closed:{required:!1,tsType:{name:"boolean"},description:""},expandable:{required:!1,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},hide:{required:!1,tsType:{name:"boolean"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},onExpand:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},primaryLabel:{required:!1,tsType:{name:"string"},description:""},primaryOnClick:{required:!1,tsType:{name:'intersection["onClick"]',raw:'ButtonProps["onClick"]'},description:""},primaryProps:{required:!1,tsType:{name:"intersection",raw:`Omit<DomProps, "color"> &
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
| "danger"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"primary-text"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"tertiary-text"'},{name:"literal",value:'"danger"'}],required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"iconPosition",value:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}],required:!1}},{key:"active",value:{name:"boolean",required:!1}},{key:"fullWidth",value:{name:"boolean",required:!1}}]}}]},description:""},tertiaryLabel:{required:!1,tsType:{name:"string"},description:""},tertiaryOnClick:{required:!1,tsType:{name:'intersection["onClick"]',raw:'ButtonProps["onClick"]'},description:""},tertiaryProps:{required:!1,tsType:{name:"intersection",raw:`Omit<DomProps, "color"> &
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
| "danger"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"primary-text"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"tertiary-text"'},{name:"literal",value:'"danger"'}],required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"iconPosition",value:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}],required:!1}},{key:"active",value:{name:"boolean",required:!1}},{key:"fullWidth",value:{name:"boolean",required:!1}}]}}]},description:""},type:{required:!1,tsType:{name:"VariantType"},description:""}},composes:["PropsWithChildren"]};const E=e=>n.jsxs(M,{...e,children:[n.jsxs("div",{className:"c__alert__content",children:[n.jsxs("div",{className:"c__alert__content__left",children:[e.children,n.jsx(H,{...e})]}),n.jsx(x,{...e})]}),n.jsx("div",{className:"c__alert__additional",children:e.additional}),n.jsx("div",{className:"c__alert-additional__buttons",children:n.jsx(q,{...e})})]});E.__docgenInfo={description:"",methods:[],displayName:"AlertAdditional",props:{additional:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},buttons:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},canClose:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},closed:{required:!1,tsType:{name:"boolean"},description:""},expandable:{required:!1,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},hide:{required:!1,tsType:{name:"boolean"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},onExpand:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},primaryLabel:{required:!1,tsType:{name:"string"},description:""},primaryOnClick:{required:!1,tsType:{name:'intersection["onClick"]',raw:'ButtonProps["onClick"]'},description:""},primaryProps:{required:!1,tsType:{name:"intersection",raw:`Omit<DomProps, "color"> &
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
| "danger"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"primary-text"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"tertiary-text"'},{name:"literal",value:'"danger"'}],required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"iconPosition",value:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}],required:!1}},{key:"active",value:{name:"boolean",required:!1}},{key:"fullWidth",value:{name:"boolean",required:!1}}]}}]},description:""},tertiaryLabel:{required:!1,tsType:{name:"string"},description:""},tertiaryOnClick:{required:!1,tsType:{name:'intersection["onClick"]',raw:'ButtonProps["onClick"]'},description:""},tertiaryProps:{required:!1,tsType:{name:"intersection",raw:`Omit<DomProps, "color"> &
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
| "danger"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"primary-text"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"tertiary-text"'},{name:"literal",value:'"danger"'}],required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"iconPosition",value:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}],required:!1}},{key:"active",value:{name:"boolean",required:!1}},{key:"fullWidth",value:{name:"boolean",required:!1}}]}}]},description:""},type:{required:!1,tsType:{name:"VariantType"},description:""}},composes:["PropsWithChildren"]};const w=e=>{const t=e.canClose||e.primaryLabel||e.tertiaryLabel||e.buttons;return n.jsx(M,{...e,children:n.jsxs("div",{className:"c__alert__content",children:[n.jsxs("div",{className:"c__alert__content__left",children:[e.children,n.jsx(H,{...e})]}),t&&n.jsxs("div",{className:"c__alert__actions",children:[n.jsx(q,{...e}),n.jsx(x,{...e})]})]})})};w.__docgenInfo={description:"",methods:[],displayName:"AlertOneLine",props:{additional:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},buttons:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},canClose:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},closed:{required:!1,tsType:{name:"boolean"},description:""},expandable:{required:!1,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},hide:{required:!1,tsType:{name:"boolean"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},onExpand:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},primaryLabel:{required:!1,tsType:{name:"string"},description:""},primaryOnClick:{required:!1,tsType:{name:'intersection["onClick"]',raw:'ButtonProps["onClick"]'},description:""},primaryProps:{required:!1,tsType:{name:"intersection",raw:`Omit<DomProps, "color"> &
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
| "danger"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"primary-text"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"tertiary-text"'},{name:"literal",value:'"danger"'}],required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"iconPosition",value:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}],required:!1}},{key:"active",value:{name:"boolean",required:!1}},{key:"fullWidth",value:{name:"boolean",required:!1}}]}}]},description:""},tertiaryLabel:{required:!1,tsType:{name:"string"},description:""},tertiaryOnClick:{required:!1,tsType:{name:'intersection["onClick"]',raw:'ButtonProps["onClick"]'},description:""},tertiaryProps:{required:!1,tsType:{name:"intersection",raw:`Omit<DomProps, "color"> &
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
| "danger"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"primary-text"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"tertiary-text"'},{name:"literal",value:'"danger"'}],required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"iconPosition",value:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}],required:!1}},{key:"active",value:{name:"boolean",required:!1}},{key:"fullWidth",value:{name:"boolean",required:!1}}]}}]},description:""},type:{required:!1,tsType:{name:"VariantType"},description:""}},composes:["PropsWithChildren"]};const fe=e=>{const{t}=pe(),[a,r]=ye(!1,e.expanded,e.onExpand),s=n.jsx(i,{color:"tertiary",size:"nano","aria-label":t(a?"components.alert.shrink_aria_label":"components.alert.expand_aria_label"),icon:n.jsx("span",{className:"material-icons",children:a?"remove":"add"}),onClick:()=>{r(!a)}}),g={...e,icon:s,className:"c__alert--expandable"};return a?n.jsx(E,{...g}):n.jsx(w,{...g})};fe.__docgenInfo={description:"",methods:[],displayName:"AlertAdditionalExpandable",props:{additional:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},buttons:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},canClose:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},closed:{required:!1,tsType:{name:"boolean"},description:""},expandable:{required:!1,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},hide:{required:!1,tsType:{name:"boolean"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},onExpand:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},primaryLabel:{required:!1,tsType:{name:"string"},description:""},primaryOnClick:{required:!1,tsType:{name:'intersection["onClick"]',raw:'ButtonProps["onClick"]'},description:""},primaryProps:{required:!1,tsType:{name:"intersection",raw:`Omit<DomProps, "color"> &
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
| "danger"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"primary-text"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"tertiary-text"'},{name:"literal",value:'"danger"'}],required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"iconPosition",value:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}],required:!1}},{key:"active",value:{name:"boolean",required:!1}},{key:"fullWidth",value:{name:"boolean",required:!1}}]}}]},description:""},tertiaryLabel:{required:!1,tsType:{name:"string"},description:""},tertiaryOnClick:{required:!1,tsType:{name:'intersection["onClick"]',raw:'ButtonProps["onClick"]'},description:""},tertiaryProps:{required:!1,tsType:{name:"intersection",raw:`Omit<DomProps, "color"> &
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
| "danger"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"primary-text"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"tertiary-text"'},{name:"literal",value:'"danger"'}],required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"iconPosition",value:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}],required:!1}},{key:"active",value:{name:"boolean",required:!1}},{key:"fullWidth",value:{name:"boolean",required:!1}}]}}]},description:""},type:{required:!1,tsType:{name:"VariantType"},description:""}},composes:["PropsWithChildren"]};const o=e=>{const[t,a]=ye(!1,e.closed,e.onClose),r={type:u.INFO,...e,onClose:a};return t?null:e.additional?e.expandable?n.jsx(fe,{...r}):n.jsx(E,{...r}):n.jsx(w,{...r})};o.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{additional:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},buttons:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},canClose:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},closed:{required:!1,tsType:{name:"boolean"},description:""},expandable:{required:!1,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},hide:{required:!1,tsType:{name:"boolean"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},onExpand:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},primaryLabel:{required:!1,tsType:{name:"string"},description:""},primaryOnClick:{required:!1,tsType:{name:'intersection["onClick"]',raw:'ButtonProps["onClick"]'},description:""},primaryProps:{required:!1,tsType:{name:"intersection",raw:`Omit<DomProps, "color"> &
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
| "danger"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"primary-text"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"tertiary-text"'},{name:"literal",value:'"danger"'}],required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"iconPosition",value:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}],required:!1}},{key:"active",value:{name:"boolean",required:!1}},{key:"fullWidth",value:{name:"boolean",required:!1}}]}}]},description:""},tertiaryLabel:{required:!1,tsType:{name:"string"},description:""},tertiaryOnClick:{required:!1,tsType:{name:'intersection["onClick"]',raw:'ButtonProps["onClick"]'},description:""},tertiaryProps:{required:!1,tsType:{name:"intersection",raw:`Omit<DomProps, "color"> &
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
| "danger"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"primary-text"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"tertiary-text"'},{name:"literal",value:'"danger"'}],required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"iconPosition",value:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}],required:!1}},{key:"active",value:{name:"boolean",required:!1}},{key:"fullWidth",value:{name:"boolean",required:!1}}]}}]},description:""},type:{required:!1,tsType:{name:"VariantType"},description:""}},composes:["PropsWithChildren"]};const be={title:"Components/Alert",component:o},c={render:e=>{const t={type:e.type??u.INFO};return n.jsxs("div",{style:{display:"flex",gap:"1rem",flexDirection:"column"},children:[n.jsx(o,{...l.args,primaryLabel:void 0,...t}),n.jsx(o,{...l.args,...t}),n.jsx(o,{...m.args,...t}),n.jsx(o,{...l.args,additional:"Additional information",expandable:!0,expanded:!0,...t})]})},argTypes:{type:{options:["info","success","warning","error","neutral"]}}},l={args:{children:"Alert component info",canClose:!0,primaryLabel:"Primary"}},d={args:{children:"Alert component info",canClose:!0,primaryLabel:"Primary",tertiaryLabel:"Tertiary"}},p={args:{children:"Alert component info",canClose:!0,buttons:n.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[n.jsx(i,{color:"primary",children:"Primary"}),n.jsx(i,{color:"secondary",children:"Secondary"})]})}},y={args:{children:"Alert component Success",canClose:!0,primaryLabel:"Primary",type:u.SUCCESS}},f={args:{children:"Alert component Warning",canClose:!0,primaryLabel:"Primary",type:u.WARNING}},v={args:{children:"Alert component Error",canClose:!0,primaryLabel:"Primary",type:u.ERROR}},T={args:{children:"Alert component Neutral",canClose:!0,primaryLabel:"Primary",type:u.NEUTRAL}},m={args:{children:"Alert component info",additional:"Additional information",canClose:!0,primaryLabel:"Primary",tertiaryLabel:"Tertiary  "}},b={render:()=>{const[e,t]=L.useState(!1);return n.jsxs("div",{children:[n.jsx(o,{...l.args,closed:e,onClose:()=>t(!0)}),n.jsxs("div",{children:["closed: ",e?"true":"false"]}),n.jsx(i,{onClick:()=>t(!1),children:"Open"}),n.jsx(i,{onClick:()=>t(!0),children:"Close"})]})}},A={render:()=>n.jsx(o,{...l.args,additional:"Additional information",expandable:!0})},h={render:()=>{const[e,t]=L.useState(!1),[a,r]=L.useState(!1);return n.jsxs("div",{children:[n.jsx(o,{...l.args,additional:"Additional information",closed:e,onClose:()=>t(!0),expandable:!0,expanded:a,onExpand:s=>r(s)}),n.jsxs("div",{children:["closed: ",e?"true":"false"]}),n.jsx(i,{onClick:()=>t(!1),children:"Open"}),n.jsx(i,{onClick:()=>t(!0),children:"Close"}),n.jsxs("div",{children:["expanded: ",a?"true":"false"]}),n.jsx(i,{onClick:()=>r(!0),children:"Expand"}),n.jsx(i,{onClick:()=>r(!1),children:"Shrink"})]})}};var R,k,P;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(P=(k=c.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var C,N,O;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(X=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,$;T.parameters={...T.parameters,docs:{...(Y=T.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    children: "Alert component Neutral",
    canClose: true,
    primaryLabel: "Primary",
    type: VariantType.NEUTRAL
  }
}`,...($=(Z=T.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ne,te;m.parameters={...m.parameters,docs:{...(ee=m.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    children: "Alert component info",
    additional: "Additional information",
    canClose: true,
    primaryLabel: "Primary",
    tertiaryLabel: "Tertiary  "
  }
}`,...(te=(ne=m.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var ae,re,ie;b.parameters={...b.parameters,docs:{...(ae=b.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => {
    const [closed, setClosed] = React.useState(false);
    return <div>
        <Alert {...Info.args} closed={closed} onClose={() => setClosed(true)} />
        <div>closed: {closed ? "true" : "false"}</div>
        <Button onClick={() => setClosed(false)}>Open</Button>
        <Button onClick={() => setClosed(true)}>Close</Button>
      </div>;
  }
}`,...(ie=(re=b.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var le,oe,se;A.parameters={...A.parameters,docs:{...(le=A.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => {
    return <Alert {...Info.args} additional="Additional information" expandable={true} />;
  }
}`,...(se=(oe=A.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var me,ue,ce;h.parameters={...h.parameters,docs:{...(me=h.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ce=(ue=h.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};const Ae=["All","Info","InfoWithTertiary","CustomButtons","Success","Warning","Error","Neutral","InfoAdditionalInformation","Controlled","InfoExpandable","ExpandableControlled"],qe=Object.freeze(Object.defineProperty({__proto__:null,All:c,Controlled:b,CustomButtons:p,Error:v,ExpandableControlled:h,Info:l,InfoAdditionalInformation:m,InfoExpandable:A,InfoWithTertiary:d,Neutral:T,Success:y,Warning:f,__namedExportsOrder:Ae,default:be},Symbol.toStringTag,{value:"Module"}));export{c as A,p as C,v as E,l as I,T as N,qe as S,f as W,y as a,m as b,A as c,d,b as e,h as f,o as g};
