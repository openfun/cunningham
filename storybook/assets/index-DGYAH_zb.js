import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{e as T,r as m}from"./index-DTOEHpHZ.js";import{c as f}from"./index-rkLeB0kx.js";import{u as I}from"./index-eFf25hYI.js";import{F as W}from"./index-D7DNl-ap.js";import{L}from"./index-3i_lEcpX.js";import{B as N}from"./index-DyRkmeWf.js";import{$ as G}from"./useOverlayPosition-CofLYEYW.js";import{u as q,a as w,b as k}from"./downshift.esm-C6xx4FW2.js";import{C as Q}from"./index-B7qWtOxe.js";const x=n=>n.render!==void 0,P=({option:n,showLabelWhenSelected:e=!0})=>n?x(n)&&!e?n.render():r.jsx("span",{children:n.label}):null;P.__docgenInfo={description:"",methods:[],displayName:"SelectedOption",props:{option:{required:!0,tsType:{name:"union",raw:"Option | undefined | null",elements:[{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"union",raw:'"value" | "render"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"render"'}]}],raw:'Omit<BaseOption, "value" | "render">'},{name:"signature",type:"object",raw:`{
  value?: string;
  render?: undefined;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"render",value:{name:"undefined",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}]},{name:"undefined"},{name:"null"}]},description:""},showLabelWhenSelected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const B=({isOpen:n,selectRef:e,downshiftReturn:a,menuOptionsStyle:u,children:s})=>{const d=T.useRef(null),l=G({targetRef:e,overlayRef:d,placement:"bottom",isOpen:n,maxHeight:160,shouldUpdatePosition:!0}),i=a.getMenuProps({ref:d});return r.jsx("div",{className:f("c__select__menu",u?"c__select__menu--"+u:"",{"c__select__menu--opened":n}),...i,style:{marginLeft:"-4px",width:e.current?e.current.getBoundingClientRect().width-4:0,...l.overlayProps.style},children:n&&s})};B.__docgenInfo={description:"",methods:[],displayName:"SelectMenu",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},selectRef:{required:!0,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLDivElement | null>",elements:[{name:"union",raw:"HTMLDivElement | null",elements:[{name:"HTMLDivElement"},{name:"null"}]}]},description:""},menuOptionsStyle:{required:!1,tsType:{name:'intersection["menuOptionsStyle"]',raw:'SelectProps["menuOptionsStyle"]'},description:""},downshiftReturn:{required:!0,tsType:{name:"union",raw:`| SelectAuxProps["downshiftReturn"]
| SelectMultiAuxProps["downshiftReturn"]`,elements:[{name:'SelectAuxProps["downshiftReturn"]',raw:'SelectAuxProps["downshiftReturn"]'},{name:'SelectMultiAuxProps["downshiftReturn"]',raw:'SelectMultiAuxProps["downshiftReturn"]'}]},description:""}},composes:["PropsWithChildren"]};function D(n){return e=>{var a;return!n||e.label.toLowerCase().includes(n.toLowerCase())||((a=e.value)==null?void 0:a.toLowerCase().includes(n.toLowerCase()))}}const j=n=>n?n.label:"",p=n=>n.value??n.label,S=(n,e)=>p(n)===p(e),C=n=>x(n)?n.render():n.label,M=({children:n,state:e="default",options:a,name:u,label:s,hideLabel:d,labelAsPlaceholder:l,downshiftProps:i,downshiftReturn:t,value:v,disabled:y,clearable:o=!0,onBlur:_,...O})=>{const{t:g}=I(),h=t.getLabelProps(),b=m.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(W,{state:e,...O,children:r.jsx("div",{ref:b,className:f("c__select","c__select--mono","c__select--"+e,{"c__select--disabled":y}),onBlur:()=>{var c;return _==null?void 0:_({target:{value:(c=t.selectedItem)==null?void 0:c.value}})},children:r.jsxs("div",{className:f("c__select__wrapper",{"c__select__wrapper--focus":t.isOpen&&!y}),...t.wrapperProps,children:[t.selectedItem&&r.jsx("input",{type:"hidden",name:u,value:p(t.selectedItem)}),r.jsx(L,{label:s,hideLabel:d,labelAsPlaceholder:l,htmlFor:h.htmlFor,labelId:h.id,disabled:y,children:r.jsxs("div",{className:"c__select__inner",children:[r.jsx("div",{className:"c__select__inner__value",children:n}),r.jsxs("div",{className:"c__select__inner__actions",children:[o&&!y&&t.selectedItem&&r.jsxs(r.Fragment,{children:[r.jsx(N,{color:"tertiary-text",size:"nano","aria-label":g("components.forms.select.clear_button_aria_label"),className:"c__select__inner__actions__clear",onClick:c=>{t.selectItem(null),c.stopPropagation()},icon:r.jsx("span",{className:"material-icons",children:"close"}),type:"button"}),r.jsx("div",{className:"c__select__inner__actions__separator"})]}),r.jsx(N,{color:"tertiary-text",size:"nano",className:"c__select__inner__actions__open",icon:r.jsx("span",{className:f("material-icons",{opened:t.isOpen}),children:"arrow_drop_down"}),disabled:y,type:"button",...t.toggleButtonProps})]})]})})]})})}),r.jsx(B,{isOpen:t.isOpen,selectRef:b,downshiftReturn:t,children:r.jsxs("ul",{children:[a.map((c,R)=>{const Y=R===t.highlightedIndex;return r.jsx("li",{className:f("c__select__menu__item",{"c__select__menu__item--highlight":Y,"c__select__menu__item--selected":t.selectedItem&&S(t.selectedItem,c),"c__select__menu__item--disabled":c.disabled}),...t.getItemProps({item:c,index:R}),children:r.jsx("span",{children:C(c)})},`${p(c)}${R.toString()}`)}),a.length===0&&r.jsx("li",{className:"c__select__menu__item c__select__menu__empty-placeholder",children:g("components.forms.select.menu_empty_placeholder")})]})})]})};M.__docgenInfo={description:`This component is used by searchable and non-searchable select components.
It contains the common logic between the two.`,methods:[],displayName:"SelectMonoAux",props:{state:{required:!1,tsType:{name:"union",raw:"FieldState | undefined",elements:[{name:"union",raw:'"success" | "error" | "default"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"default"'}]},{name:"undefined"}]},description:"",defaultValue:{value:'"default"',computed:!1}},text:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},textItems:{required:!1,tsType:{name:"union",raw:"string[] | undefined",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"undefined"}]},description:""},rightText:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},fullWidth:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},compact:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},className:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},label:{required:!0,tsType:{name:"string"},description:""},hideLabel:{required:!1,tsType:{name:"boolean"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"union",raw:'"value" | "render"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"render"'}]}],raw:'Omit<BaseOption, "value" | "render">'},{name:"signature",type:"object",raw:`{
  value?: string;
  render?: undefined;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"render",value:{name:"undefined",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}]}],raw:"Option[]"},description:""},searchable:{required:!1,tsType:{name:"boolean"},description:""},name:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"string | number | string[]",elements:[{name:"string"},{name:"number"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},value:{required:!1,tsType:{name:"union",raw:"string | number | string[]",elements:[{name:"string"},{name:"number"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(event: {
  target: { value: string | number | undefined | string[] };
}) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  target: { value: string | number | undefined | string[] };
}`,signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ value: string | number | undefined | string[] }",signature:{properties:[{key:"value",value:{name:"union",raw:"string | number | undefined | string[]",elements:[{name:"string"},{name:"number"},{name:"undefined"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}],required:!0}}]},required:!0}}]}},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:`(event: {
  target: { value: string | number | undefined | string[] };
}) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  target: { value: string | number | undefined | string[] };
}`,signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ value: string | number | undefined | string[] }",signature:{properties:[{key:"value",value:{name:"union",raw:"string | number | undefined | string[]",elements:[{name:"string"},{name:"number"},{name:"undefined"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}],required:!0}}]},required:!0}}]}},name:"event"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},clearable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},multi:{required:!1,tsType:{name:"boolean"},description:""},showLabelWhenSelected:{required:!1,tsType:{name:"boolean"},description:""},monoline:{required:!1,tsType:{name:"boolean"},description:""},selectedItemsStyle:{required:!1,tsType:{name:"union",raw:'"pills" | "text"',elements:[{name:"literal",value:'"pills"'},{name:"literal",value:'"text"'}]},description:""},menuOptionsStyle:{required:!1,tsType:{name:"union",raw:'"plain" | "checkbox"',elements:[{name:"literal",value:'"plain"'},{name:"literal",value:'"checkbox"'}]},description:""},onSearchInputChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(event: {
  target: { value: string | undefined };
}) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  target: { value: string | undefined };
}`,signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ value: string | undefined }",signature:{properties:[{key:"value",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}}]},required:!0}}]}},name:"event"}],return:{name:"void"}}},description:""},defaultSelectedItem:{required:!1,tsType:{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"union",raw:'"value" | "render"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"render"'}]}],raw:'Omit<BaseOption, "value" | "render">'},{name:"signature",type:"object",raw:`{
  value?: string;
  render?: undefined;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"render",value:{name:"undefined",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}]},description:""},downshiftProps:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  initialSelectedItem?: Option;
  onSelectedItemChange?: any;
  isItemDisabled?: (item: Option) => boolean;
}`,signature:{properties:[{key:"initialSelectedItem",value:{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"union",raw:'"value" | "render"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"render"'}]}],raw:'Omit<BaseOption, "value" | "render">'},{name:"signature",type:"object",raw:`{
  value?: string;
  render?: undefined;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"render",value:{name:"undefined",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],required:!1}},{key:"onSelectedItemChange",value:{name:"any",required:!1}},{key:"isItemDisabled",value:{name:"signature",type:"function",raw:"(item: Option) => boolean",signature:{arguments:[{type:{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"union",raw:'"value" | "render"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"render"'}]}],raw:'Omit<BaseOption, "value" | "render">'},{name:"signature",type:"object",raw:`{
  value?: string;
  render?: undefined;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"render",value:{name:"undefined",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],required:!1},name:"item"}],return:{name:"boolean"}},required:!1}}]}},description:""},labelAsPlaceholder:{required:!0,tsType:{name:"boolean"},description:""},downshiftReturn:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  isOpen: boolean;
  wrapperProps?: HTMLAttributes<HTMLDivElement>;
  selectedItem?: Option | null;
  getLabelProps: any;
  toggleButtonProps: any;
  getMenuProps: any;
  getItemProps: any;
  highlightedIndex: number;
  selectItem: UseSelectReturnValue<Option>["selectItem"];
}`,signature:{properties:[{key:"isOpen",value:{name:"boolean",required:!0}},{key:"wrapperProps",value:{name:"HTMLAttributes",elements:[{name:"HTMLDivElement"}],raw:"HTMLAttributes<HTMLDivElement>",required:!1}},{key:"selectedItem",value:{name:"union",raw:"Option | null",elements:[{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"union",raw:'"value" | "render"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"render"'}]}],raw:'Omit<BaseOption, "value" | "render">'},{name:"signature",type:"object",raw:`{
  value?: string;
  render?: undefined;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"render",value:{name:"undefined",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}]},{name:"null"}],required:!1}},{key:"getLabelProps",value:{name:"any",required:!0}},{key:"toggleButtonProps",value:{name:"any",required:!0}},{key:"getMenuProps",value:{name:"any",required:!0}},{key:"getItemProps",value:{name:"any",required:!0}},{key:"highlightedIndex",value:{name:"number",required:!0}},{key:"selectItem",value:{name:'UseSelectReturnValue["selectItem"]',raw:'UseSelectReturnValue<Option>["selectItem"]',required:!0}}]}},description:""}}};const H=n=>{if(n.selectedItemsStyle==="pills")return r.jsx(X,{...n});if(n.selectedItemsStyle==="text")return r.jsx(Z,{...n});throw new Error("Unknown selectedItemsStyle")},X=({selectedItems:n,selectedItemsStyle:e,disabled:a,useMultipleSelectionReturn:u,...s})=>{const{t:d}=I();return n.map((l,i)=>r.jsxs("div",{className:"c__select__inner__value__pill",...u.getSelectedItemProps({selectedItem:l,index:i}),children:[r.jsx(P,{option:l,...s}),r.jsx(N,{tabIndex:-1,color:"tertiary-text",disabled:a,size:"small","aria-label":d("components.forms.select.clear_button_aria_label"),type:"button",className:"c__select__inner__value__pill__clear",onClick:t=>{t.stopPropagation(),u.removeSelectedItem(l)},icon:r.jsx("span",{className:"material-icons",children:"close"})})]},`${p(l)}${i.toString()}`))},Z=({selectedItems:n})=>n.map(e=>j(e)).join(", ");H.__docgenInfo={description:"",methods:[],displayName:"SelectedItems",props:{onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: { target: { value: string[] } }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ target: { value: string[] } }",signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ value: string[] }",signature:{properties:[{key:"value",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!0}}]}},name:"event"}],return:{name:"void"}}},description:""},onSelectedItemsChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedItems: Option[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"union",raw:'"value" | "render"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"render"'}]}],raw:'Omit<BaseOption, "value" | "render">'},{name:"signature",type:"object",raw:`{
  value?: string;
  render?: undefined;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"render",value:{name:"undefined",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}]}],raw:"Option[]"},name:"selectedItems"}],return:{name:"void"}}},description:""},selectedItems:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"union",raw:'"value" | "render"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"render"'}]}],raw:'Omit<BaseOption, "value" | "render">'},{name:"signature",type:"object",raw:`{
  value?: string;
  render?: undefined;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"render",value:{name:"undefined",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}]}],raw:"Option[]"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"union",raw:'"value" | "render"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"render"'}]}],raw:'Omit<BaseOption, "value" | "render">'},{name:"signature",type:"object",raw:`{
  value?: string;
  render?: undefined;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"render",value:{name:"undefined",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}]}],raw:"Option[]"},description:""},labelAsPlaceholder:{required:!0,tsType:{name:"boolean"},description:""},clearable:{required:!1,tsType:{name:"boolean"},description:""},downshiftReturn:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  isOpen: boolean;
  getLabelProps: any;
  toggleButtonProps: any;
  getMenuProps: any;
  getItemProps: any;
  highlightedIndex: number;
  wrapperProps?: HTMLAttributes<HTMLDivElement>;
}`,signature:{properties:[{key:"isOpen",value:{name:"boolean",required:!0}},{key:"getLabelProps",value:{name:"any",required:!0}},{key:"toggleButtonProps",value:{name:"any",required:!0}},{key:"getMenuProps",value:{name:"any",required:!0}},{key:"getItemProps",value:{name:"any",required:!0}},{key:"highlightedIndex",value:{name:"number",required:!0}},{key:"wrapperProps",value:{name:"HTMLAttributes",elements:[{name:"HTMLDivElement"}],raw:"HTMLAttributes<HTMLDivElement>",required:!1}}]}},description:""},useMultipleSelectionReturn:{required:!0,tsType:{name:"ReturnType",elements:[{name:"useMultipleSelection"}],raw:"ReturnType<typeof useMultipleSelection<Option>>"},description:""}}};const E=n=>{const{t:e}=I();return r.jsx(B,{isOpen:n.downshiftReturn.isOpen,selectRef:n.selectRef,downshiftReturn:n.downshiftReturn,menuOptionsStyle:n.menuOptionsStyle,children:r.jsx("ul",{children:n.downshiftReturn.isOpen&&r.jsxs(r.Fragment,{children:[n.options.map((a,u)=>m.createElement(ee,{...n,option:a,index:u,key:p(a)})),n.options.length===0&&r.jsx("li",{className:"c__select__menu__item c__select__menu__empty-placeholder",children:e("components.forms.select.menu_empty_placeholder")})]})})})},ee=n=>{if(n.menuOptionsStyle==="plain")return r.jsx(ne,{...n});if(n.menuOptionsStyle==="checkbox")return r.jsx(re,{...n});throw new Error("Unknown menuOptionsStyle")},ne=({option:n,index:e,...a})=>{const u=e===a.downshiftReturn.highlightedIndex||n.highlighted;return r.jsx("li",{className:f("c__select__menu__item",{"c__select__menu__item--highlight":u,"c__select__menu__item--disabled":n.disabled}),...a.downshiftReturn.getItemProps({item:n,index:e}),children:r.jsx("span",{children:C(n)})})},re=({option:n,index:e,...a})=>r.jsx("li",{className:f("c__select__menu__item",{"c__select__menu__item--highlight":e===a.downshiftReturn.highlightedIndex,"c__select__menu__item--disabled":n.disabled}),...a.downshiftReturn.getItemProps({item:n,index:e}),children:r.jsx(Q,{label:C(n),checked:n.highlighted,fullWidth:!0})});E.__docgenInfo={description:"",methods:[],displayName:"SelectMultiMenu",props:{onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: { target: { value: string[] } }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ target: { value: string[] } }",signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ value: string[] }",signature:{properties:[{key:"value",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!0}}]}},name:"event"}],return:{name:"void"}}},description:""},onSelectedItemsChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedItems: Option[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"union",raw:'"value" | "render"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"render"'}]}],raw:'Omit<BaseOption, "value" | "render">'},{name:"signature",type:"object",raw:`{
  value?: string;
  render?: undefined;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"render",value:{name:"undefined",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}]}],raw:"Option[]"},name:"selectedItems"}],return:{name:"void"}}},description:""},selectedItems:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"union",raw:'"value" | "render"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"render"'}]}],raw:'Omit<BaseOption, "value" | "render">'},{name:"signature",type:"object",raw:`{
  value?: string;
  render?: undefined;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"render",value:{name:"undefined",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}]}],raw:"Option[]"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"union",raw:'"value" | "render"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"render"'}]}],raw:'Omit<BaseOption, "value" | "render">'},{name:"signature",type:"object",raw:`{
  value?: string;
  render?: undefined;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"render",value:{name:"undefined",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}]}],raw:"Option[]"},description:""},labelAsPlaceholder:{required:!0,tsType:{name:"boolean"},description:""},clearable:{required:!1,tsType:{name:"boolean"},description:""},downshiftReturn:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  isOpen: boolean;
  getLabelProps: any;
  toggleButtonProps: any;
  getMenuProps: any;
  getItemProps: any;
  highlightedIndex: number;
  wrapperProps?: HTMLAttributes<HTMLDivElement>;
}`,signature:{properties:[{key:"isOpen",value:{name:"boolean",required:!0}},{key:"getLabelProps",value:{name:"any",required:!0}},{key:"toggleButtonProps",value:{name:"any",required:!0}},{key:"getMenuProps",value:{name:"any",required:!0}},{key:"getItemProps",value:{name:"any",required:!0}},{key:"highlightedIndex",value:{name:"number",required:!0}},{key:"wrapperProps",value:{name:"HTMLAttributes",elements:[{name:"HTMLDivElement"}],raw:"HTMLAttributes<HTMLDivElement>",required:!1}}]}},description:""},useMultipleSelectionReturn:{required:!0,tsType:{name:"ReturnType",elements:[{name:"useMultipleSelection"}],raw:"ReturnType<typeof useMultipleSelection<Option>>"},description:""},selectRef:{required:!0,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLDivElement | null>",elements:[{name:"union",raw:"HTMLDivElement | null",elements:[{name:"HTMLDivElement"},{name:"null"}]}]},description:""}}};function V(n,e){const a=D(e);return u=>!n.find(s=>p(s)===p(u))&&a(u)}const A=({children:n,...e})=>{const{t:a}=I(),u=e.downshiftReturn.getLabelProps(),s=m.useRef(null),{onBlur:d,...l}=e.downshiftReturn.toggleButtonProps;return r.jsxs(r.Fragment,{children:[r.jsx(W,{...e,children:r.jsx("div",{ref:s,className:f("c__select","c__select--multi","c__select--"+e.state,"c__select--"+e.selectedItemsStyle,{"c__select--disabled":e.disabled,"c__select--populated":e.selectedItems.length>0,"c__select--monoline":e.monoline,"c__select--multiline":!e.monoline}),children:r.jsxs("div",{className:f("c__select__wrapper",{"c__select__wrapper--focus":e.downshiftReturn.isOpen&&!e.disabled}),...e.downshiftReturn.wrapperProps,...l,children:[e.selectedItems.map((i,t)=>r.jsx("input",{type:"hidden",name:e.name,value:p(i)},`${p(i)}${t.toString()}`)),r.jsx(L,{label:e.label,labelAsPlaceholder:e.labelAsPlaceholder,htmlFor:u.htmlFor,labelId:u.id,hideLabel:e.hideLabel,disabled:e.disabled,children:r.jsxs("div",{className:"c__select__inner",children:[r.jsxs("div",{className:"c__select__inner__actions",children:[e.clearable&&!e.disabled&&e.selectedItems.length>0&&r.jsxs(r.Fragment,{children:[r.jsx(N,{color:"tertiary-text",size:"nano","aria-label":a("components.forms.select.clear_all_button_aria_label"),className:"c__select__inner__actions__clear",onClick:i=>{i.stopPropagation(),e.onSelectedItemsChange([])},icon:r.jsx("span",{className:"material-icons",children:"close"}),type:"button"}),r.jsx("div",{className:"c__select__inner__actions__separator"})]}),r.jsx(N,{color:"tertiary-text",size:"nano",className:"c__select__inner__actions__open",icon:r.jsx("span",{className:f("material-icons",{opened:e.downshiftReturn.isOpen}),children:"arrow_drop_down"}),disabled:e.disabled,type:"button"})]}),r.jsxs("div",{className:"c__select__inner__value",children:[r.jsx(H,{...e}),n]})]})})]})})}),r.jsx(E,{...e,selectRef:s})]})};A.__docgenInfo={description:"",methods:[],displayName:"SelectMultiAux",props:{onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: { target: { value: string[] } }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ target: { value: string[] } }",signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ value: string[] }",signature:{properties:[{key:"value",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!0}}]}},name:"event"}],return:{name:"void"}}},description:""},onSelectedItemsChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedItems: Option[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"union",raw:'"value" | "render"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"render"'}]}],raw:'Omit<BaseOption, "value" | "render">'},{name:"signature",type:"object",raw:`{
  value?: string;
  render?: undefined;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"render",value:{name:"undefined",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}]}],raw:"Option[]"},name:"selectedItems"}],return:{name:"void"}}},description:""},selectedItems:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"union",raw:'"value" | "render"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"render"'}]}],raw:'Omit<BaseOption, "value" | "render">'},{name:"signature",type:"object",raw:`{
  value?: string;
  render?: undefined;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"render",value:{name:"undefined",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}]}],raw:"Option[]"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"union",raw:'"value" | "render"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"render"'}]}],raw:'Omit<BaseOption, "value" | "render">'},{name:"signature",type:"object",raw:`{
  value?: string;
  render?: undefined;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"render",value:{name:"undefined",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}]}],raw:"Option[]"},description:""},labelAsPlaceholder:{required:!0,tsType:{name:"boolean"},description:""},clearable:{required:!1,tsType:{name:"boolean"},description:""},downshiftReturn:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  isOpen: boolean;
  getLabelProps: any;
  toggleButtonProps: any;
  getMenuProps: any;
  getItemProps: any;
  highlightedIndex: number;
  wrapperProps?: HTMLAttributes<HTMLDivElement>;
}`,signature:{properties:[{key:"isOpen",value:{name:"boolean",required:!0}},{key:"getLabelProps",value:{name:"any",required:!0}},{key:"toggleButtonProps",value:{name:"any",required:!0}},{key:"getMenuProps",value:{name:"any",required:!0}},{key:"getItemProps",value:{name:"any",required:!0}},{key:"highlightedIndex",value:{name:"number",required:!0}},{key:"wrapperProps",value:{name:"HTMLAttributes",elements:[{name:"HTMLDivElement"}],raw:"HTMLAttributes<HTMLDivElement>",required:!1}}]}},description:""},useMultipleSelectionReturn:{required:!0,tsType:{name:"ReturnType",elements:[{name:"useMultipleSelection"}],raw:"ReturnType<typeof useMultipleSelection<Option>>"},description:""}}};const F=({ref:n,...e})=>{const[a,u]=T.useState(),s=m.useRef(null),d=T.useMemo(()=>e.options.filter(V(e.selectedItems,a)),[e.selectedItems,a]),[l,i]=m.useState(!1),t=q({selectedItems:e.selectedItems,onStateChange({selectedItems:g,type:h}){switch(h){case q.stateChangeTypes.SelectedItemKeyDownBackspace:case q.stateChangeTypes.SelectedItemKeyDownDelete:case q.stateChangeTypes.DropdownKeyDownBackspace:case q.stateChangeTypes.FunctionRemoveSelectedItem:e.onSelectedItemsChange(g??[]);break}}}),v=w({items:d,itemToString:j,defaultHighlightedIndex:0,selectedItem:null,stateReducer:(g,h)=>{const{changes:b,type:c}=h;switch(c){case w.stateChangeTypes.InputKeyDownEnter:case w.stateChangeTypes.ItemClick:return{...b,isOpen:!0,highlightedIndex:0};default:return b}},onStateChange:({inputValue:g,type:h,selectedItem:b})=>{switch(h){case w.stateChangeTypes.InputKeyDownEnter:case w.stateChangeTypes.ItemClick:case w.stateChangeTypes.InputBlur:b&&!b.disabled&&(e.onSelectedItemsChange([...e.selectedItems,b]),u(void 0));break;case w.stateChangeTypes.InputChange:u(g);break}},isItemDisabled:g=>!!(g!=null&&g.disabled)}),y=v.getInputProps({...t.getDropdownProps({onFocus:()=>{i(!0),v.openMenu()},onBlur:()=>{i(!1)},onChange:g=>{u(g.target.value)},size:4,preventKeyAction:v.isOpen,ref:s,disabled:e.disabled}),value:a}),{onKeyDown:o}=y;y.onKeyDown=g=>{switch(g.code){case"Backspace":a||e.onSelectedItemsChange(e.selectedItems.slice(0,-1))}o==null||o(g)};const[_,O]=m.useState(!0);return m.useEffect(()=>{if(l||a){O(!1);return}O(e.selectedItems.length===0)},[e.selectedItems,l,a]),m.useImperativeHandle(n,()=>({blur:()=>{var g;v.closeMenu(),(g=s.current)==null||g.blur()}})),m.useEffect(()=>{var g;(g=e.onSearchInputChange)==null||g.call(e,{target:{value:a}})},[a]),r.jsx(A,{...e,monoline:!1,options:d,labelAsPlaceholder:_,selectedItems:e.selectedItems,downshiftReturn:{...v,wrapperProps:{onClick:()=>{var g;(g=s.current)==null||g.focus(),v.isOpen||v.openMenu()}},toggleButtonProps:v.getToggleButtonProps()},useMultipleSelectionReturn:t,children:r.jsx("span",{className:"c__select__inner__value__input","data-value":a,children:r.jsx("input",{...y})})})};F.__docgenInfo={description:"",methods:[{name:"blur",docblock:null,modifiers:[],params:[],returns:null}],displayName:"SelectMultiSearchable",props:{onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: { target: { value: string[] } }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ target: { value: string[] } }",signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ value: string[] }",signature:{properties:[{key:"value",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!0}}]}},name:"event"}],return:{name:"void"}}},description:""},onSelectedItemsChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedItems: Option[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"union",raw:'"value" | "render"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"render"'}]}],raw:'Omit<BaseOption, "value" | "render">'},{name:"signature",type:"object",raw:`{
  value?: string;
  render?: undefined;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"render",value:{name:"undefined",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}]}],raw:"Option[]"},name:"selectedItems"}],return:{name:"void"}}},description:""},selectedItems:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"union",raw:'"value" | "render"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"render"'}]}],raw:'Omit<BaseOption, "value" | "render">'},{name:"signature",type:"object",raw:`{
  value?: string;
  render?: undefined;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"render",value:{name:"undefined",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}]}],raw:"Option[]"},description:""}}};const K=({ref:n,...e})=>{const a=i=>!!e.selectedItems.find(t=>S(t,i)),u=T.useMemo(()=>e.monoline?e.options.map(i=>({...i,highlighted:a(i)})):e.options.filter(V(e.selectedItems,"")),[e.selectedItems]),s=q({selectedItems:e.selectedItems,onStateChange({selectedItems:i,type:t}){switch(t){case q.stateChangeTypes.SelectedItemKeyDownBackspace:case q.stateChangeTypes.SelectedItemKeyDownDelete:case q.stateChangeTypes.DropdownKeyDownBackspace:case q.stateChangeTypes.FunctionRemoveSelectedItem:e.onSelectedItemsChange(i??[]);break}}}),d=k({items:u,itemToString:j,selectedItem:null,defaultHighlightedIndex:0,stateReducer:(i,t)=>{const{changes:v,type:y}=t;switch(y){case k.stateChangeTypes.ToggleButtonKeyDownEnter:case k.stateChangeTypes.ToggleButtonKeyDownSpaceButton:case k.stateChangeTypes.ItemClick:return{...v,isOpen:!0,highlightedIndex:i.highlightedIndex}}return v},onStateChange:({type:i,selectedItem:t})=>{switch(i){case k.stateChangeTypes.ToggleButtonKeyDownEnter:case k.stateChangeTypes.ToggleButtonKeyDownSpaceButton:case k.stateChangeTypes.ItemClick:if(!t)break;a(t)?e.onSelectedItemsChange(e.selectedItems.filter(v=>!S(v,t))):e.onSelectedItemsChange([...e.selectedItems,t]);break}},isItemDisabled:i=>!!(i!=null&&i.disabled)}),l=m.useRef(null);return m.useImperativeHandle(n,()=>({blur:()=>{var i;d.closeMenu(),(i=l.current)==null||i.blur()}})),r.jsx(A,{...e,options:u,labelAsPlaceholder:e.selectedItems.length===0,selectedItems:e.selectedItems,selectedItemsStyle:e.monoline?"text":"pills",menuOptionsStyle:e.monoline?"checkbox":"plain",downshiftReturn:{...d,toggleButtonProps:d.getToggleButtonProps({...s.getDropdownProps({preventKeyAction:d.isOpen,ref:l}),disabled:e.disabled,onClick:i=>{i.stopPropagation()}})},useMultipleSelectionReturn:s})};K.__docgenInfo={description:"",methods:[{name:"blur",docblock:null,modifiers:[],params:[],returns:null}],displayName:"SelectMultiSimple",props:{onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: { target: { value: string[] } }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ target: { value: string[] } }",signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ value: string[] }",signature:{properties:[{key:"value",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!0}}]}},name:"event"}],return:{name:"void"}}},description:""},onSelectedItemsChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedItems: Option[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"union",raw:'"value" | "render"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"render"'}]}],raw:'Omit<BaseOption, "value" | "render">'},{name:"signature",type:"object",raw:`{
  value?: string;
  render?: undefined;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"render",value:{name:"undefined",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}]}],raw:"Option[]"},name:"selectedItems"}],return:{name:"void"}}},description:""},selectedItems:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"union",raw:'"value" | "render"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"render"'}]}],raw:'Omit<BaseOption, "value" | "render">'},{name:"signature",type:"object",raw:`{
  value?: string;
  render?: undefined;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"render",value:{name:"undefined",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}]}],raw:"Option[]"},description:""}}};const $=n=>{const e=()=>{const l=n.defaultValue??n.value??[];return n.options.filter(i=>l.includes(p(i)))},[a,u]=T.useState(e());m.useEffect(()=>{n.defaultValue===void 0&&u(e())},[JSON.stringify(n.value)]),m.useEffect(()=>{var l;(l=n.onChange)==null||l.call(n,{target:{value:a.map(p)}})},[JSON.stringify(a)]);const s=l=>{u(l)},d={selectedItemsStyle:"pills",menuOptionsStyle:"plain",clearable:!0};return n.searchable?r.jsx(F,{...d,...n,selectedItems:a,onSelectedItemsChange:s}):r.jsx(K,{...d,...n,selectedItems:a,onSelectedItemsChange:s})};$.__docgenInfo={description:"",methods:[],displayName:"SelectMulti",props:{onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: { target: { value: string[] } }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ target: { value: string[] } }",signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ value: string[] }",signature:{properties:[{key:"value",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!0}}]}},name:"event"}],return:{name:"void"}}},description:""}}};const U=({showLabelWhenSelected:n=!0,ref:e,...a})=>{const{t:u}=I(),[s,d]=m.useState(a.options),[l,i]=m.useState(!1),[t,v]=m.useState(),y=m.useRef(null),o=w({...a.downshiftProps,items:s,itemToString:j,onInputValueChange:c=>{v(c.inputValue),c.inputValue||o.selectItem(null)}}),[_,O]=m.useState(!o.selectedItem);m.useEffect(()=>{if(l||o.inputValue){O(!1);return}O(!o.selectedItem)},[o.selectedItem,l,o.inputValue]),m.useEffect(()=>{if(t)return;const c=a.options.find(R=>p(R)===a.value);o.selectItem(c??null)},[a.value,a.options,t]),m.useEffect(()=>{o.isOpen?d(t?a.options.filter(D(t)):a.options):v(void 0)},[o.isOpen,a.options,t]),m.useImperativeHandle(e,()=>({blur:()=>{var c;o.closeMenu(),(c=y.current)==null||c.blur()}})),m.useEffect(()=>{var c;(c=a.onSearchInputChange)==null||c.call(a,{target:{value:t}})},[t]);const g=()=>{i(!1),o.selectedItem?o.selectItem(o.selectedItem):o.setInputValue("")},h=o.getInputProps({ref:y,disabled:a.disabled}),b=!n;return r.jsxs(M,{...a,downshiftReturn:{...o,wrapperProps:{onClick:()=>{var c;(c=y.current)==null||c.focus(),o.isOpen||o.openMenu()}},toggleButtonProps:o.getToggleButtonProps({disabled:a.disabled,"aria-label":u("components.forms.select.toggle_button_aria_label")})},labelAsPlaceholder:_,options:s,children:[r.jsx("input",{...h,className:f({"c__select__inner__value__input--hidden":b&&!l}),onFocus:()=>{i(!0)},onBlur:()=>{g()}}),b&&!l&&o.selectedItem&&x(o.selectedItem)&&o.selectedItem.render()]})};U.__docgenInfo={description:"",methods:[{name:"blur",docblock:null,modifiers:[],params:[],returns:null}],displayName:"SelectMonoSearchable",props:{state:{required:!1,tsType:{name:"union",raw:"FieldState | undefined",elements:[{name:"union",raw:'"success" | "error" | "default"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"default"'}]},{name:"undefined"}]},description:""},text:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},textItems:{required:!1,tsType:{name:"union",raw:"string[] | undefined",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"undefined"}]},description:""},rightText:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},fullWidth:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},compact:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},className:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},label:{required:!0,tsType:{name:"string"},description:""},hideLabel:{required:!1,tsType:{name:"boolean"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"union",raw:'"value" | "render"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"render"'}]}],raw:'Omit<BaseOption, "value" | "render">'},{name:"signature",type:"object",raw:`{
  value?: string;
  render?: undefined;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"render",value:{name:"undefined",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}]}],raw:"Option[]"},description:""},searchable:{required:!1,tsType:{name:"boolean"},description:""},name:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"string | number | string[]",elements:[{name:"string"},{name:"number"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},value:{required:!1,tsType:{name:"union",raw:"string | number | string[]",elements:[{name:"string"},{name:"number"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(event: {
  target: { value: string | number | undefined | string[] };
}) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  target: { value: string | number | undefined | string[] };
}`,signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ value: string | number | undefined | string[] }",signature:{properties:[{key:"value",value:{name:"union",raw:"string | number | undefined | string[]",elements:[{name:"string"},{name:"number"},{name:"undefined"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}],required:!0}}]},required:!0}}]}},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:`(event: {
  target: { value: string | number | undefined | string[] };
}) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  target: { value: string | number | undefined | string[] };
}`,signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ value: string | number | undefined | string[] }",signature:{properties:[{key:"value",value:{name:"union",raw:"string | number | undefined | string[]",elements:[{name:"string"},{name:"number"},{name:"undefined"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}],required:!0}}]},required:!0}}]}},name:"event"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},clearable:{required:!1,tsType:{name:"boolean"},description:""},multi:{required:!1,tsType:{name:"boolean"},description:""},showLabelWhenSelected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},monoline:{required:!1,tsType:{name:"boolean"},description:""},selectedItemsStyle:{required:!1,tsType:{name:"union",raw:'"pills" | "text"',elements:[{name:"literal",value:'"pills"'},{name:"literal",value:'"text"'}]},description:""},menuOptionsStyle:{required:!1,tsType:{name:"union",raw:'"plain" | "checkbox"',elements:[{name:"literal",value:'"plain"'},{name:"literal",value:'"checkbox"'}]},description:""},onSearchInputChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(event: {
  target: { value: string | undefined };
}) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  target: { value: string | undefined };
}`,signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ value: string | undefined }",signature:{properties:[{key:"value",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}}]},required:!0}}]}},name:"event"}],return:{name:"void"}}},description:""},defaultSelectedItem:{required:!1,tsType:{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"union",raw:'"value" | "render"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"render"'}]}],raw:'Omit<BaseOption, "value" | "render">'},{name:"signature",type:"object",raw:`{
  value?: string;
  render?: undefined;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"render",value:{name:"undefined",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}]},description:""},downshiftProps:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  initialSelectedItem?: Option;
  onSelectedItemChange?: any;
  isItemDisabled?: (item: Option) => boolean;
}`,signature:{properties:[{key:"initialSelectedItem",value:{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"union",raw:'"value" | "render"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"render"'}]}],raw:'Omit<BaseOption, "value" | "render">'},{name:"signature",type:"object",raw:`{
  value?: string;
  render?: undefined;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"render",value:{name:"undefined",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],required:!1}},{key:"onSelectedItemChange",value:{name:"any",required:!1}},{key:"isItemDisabled",value:{name:"signature",type:"function",raw:"(item: Option) => boolean",signature:{arguments:[{type:{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"union",raw:'"value" | "render"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"render"'}]}],raw:'Omit<BaseOption, "value" | "render">'},{name:"signature",type:"object",raw:`{
  value?: string;
  render?: undefined;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"render",value:{name:"undefined",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],required:!1},name:"item"}],return:{name:"boolean"}},required:!1}}]}},description:""}}};const ae=(n,e)=>{m.useEffect(()=>{const a=e.options.find(u=>p(u)===e.value);n.selectItem(a??null)},[e.value,e.options])},z=({ref:n,...e})=>{const a=k({...e.downshiftProps,items:e.options,itemToString:j});ae(a,e);const u=m.useRef(null);return m.useImperativeHandle(n,()=>({blur:()=>{var s;a.closeMenu(),(s=u.current)==null||s.blur()}})),r.jsx(M,{...e,downshiftReturn:{...a,wrapperProps:a.getToggleButtonProps({disabled:e.disabled,ref:u}),toggleButtonProps:{}},labelAsPlaceholder:!a.selectedItem,children:r.jsx(P,{option:a.selectedItem,...e})})};z.__docgenInfo={description:"",methods:[{name:"blur",docblock:null,modifiers:[],params:[],returns:null}],displayName:"SelectMonoSimple",props:{state:{required:!1,tsType:{name:"union",raw:"FieldState | undefined",elements:[{name:"union",raw:'"success" | "error" | "default"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"default"'}]},{name:"undefined"}]},description:""},text:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},textItems:{required:!1,tsType:{name:"union",raw:"string[] | undefined",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"undefined"}]},description:""},rightText:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},fullWidth:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},compact:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},className:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},label:{required:!0,tsType:{name:"string"},description:""},hideLabel:{required:!1,tsType:{name:"boolean"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"union",raw:'"value" | "render"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"render"'}]}],raw:'Omit<BaseOption, "value" | "render">'},{name:"signature",type:"object",raw:`{
  value?: string;
  render?: undefined;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"render",value:{name:"undefined",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}]}],raw:"Option[]"},description:""},searchable:{required:!1,tsType:{name:"boolean"},description:""},name:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"string | number | string[]",elements:[{name:"string"},{name:"number"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},value:{required:!1,tsType:{name:"union",raw:"string | number | string[]",elements:[{name:"string"},{name:"number"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(event: {
  target: { value: string | number | undefined | string[] };
}) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  target: { value: string | number | undefined | string[] };
}`,signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ value: string | number | undefined | string[] }",signature:{properties:[{key:"value",value:{name:"union",raw:"string | number | undefined | string[]",elements:[{name:"string"},{name:"number"},{name:"undefined"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}],required:!0}}]},required:!0}}]}},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:`(event: {
  target: { value: string | number | undefined | string[] };
}) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  target: { value: string | number | undefined | string[] };
}`,signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ value: string | number | undefined | string[] }",signature:{properties:[{key:"value",value:{name:"union",raw:"string | number | undefined | string[]",elements:[{name:"string"},{name:"number"},{name:"undefined"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}],required:!0}}]},required:!0}}]}},name:"event"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},clearable:{required:!1,tsType:{name:"boolean"},description:""},multi:{required:!1,tsType:{name:"boolean"},description:""},showLabelWhenSelected:{required:!1,tsType:{name:"boolean"},description:""},monoline:{required:!1,tsType:{name:"boolean"},description:""},selectedItemsStyle:{required:!1,tsType:{name:"union",raw:'"pills" | "text"',elements:[{name:"literal",value:'"pills"'},{name:"literal",value:'"text"'}]},description:""},menuOptionsStyle:{required:!1,tsType:{name:"union",raw:'"plain" | "checkbox"',elements:[{name:"literal",value:'"plain"'},{name:"literal",value:'"checkbox"'}]},description:""},onSearchInputChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(event: {
  target: { value: string | undefined };
}) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  target: { value: string | undefined };
}`,signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ value: string | undefined }",signature:{properties:[{key:"value",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}}]},required:!0}}]}},name:"event"}],return:{name:"void"}}},description:""},defaultSelectedItem:{required:!1,tsType:{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"union",raw:'"value" | "render"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"render"'}]}],raw:'Omit<BaseOption, "value" | "render">'},{name:"signature",type:"object",raw:`{
  value?: string;
  render?: undefined;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"render",value:{name:"undefined",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}]},description:""},downshiftProps:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  initialSelectedItem?: Option;
  onSelectedItemChange?: any;
  isItemDisabled?: (item: Option) => boolean;
}`,signature:{properties:[{key:"initialSelectedItem",value:{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"union",raw:'"value" | "render"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"render"'}]}],raw:'Omit<BaseOption, "value" | "render">'},{name:"signature",type:"object",raw:`{
  value?: string;
  render?: undefined;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"render",value:{name:"undefined",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],required:!1}},{key:"onSelectedItemChange",value:{name:"any",required:!1}},{key:"isItemDisabled",value:{name:"signature",type:"function",raw:"(item: Option) => boolean",signature:{arguments:[{type:{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"union",raw:'"value" | "render"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"render"'}]}],raw:'Omit<BaseOption, "value" | "render">'},{name:"signature",type:"object",raw:`{
  value?: string;
  render?: undefined;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"render",value:{name:"undefined",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],required:!1},name:"item"}],return:{name:"boolean"}},required:!1}}]}},description:""}}};const J=n=>{const e=n.defaultValue?n.options.find(d=>p(d)===n.defaultValue):void 0,[a,u]=m.useState(e?p(e):n.value);m.useEffect(()=>{n.defaultValue||u(n.value)},[n.value,n.defaultValue]);const s={initialSelectedItem:e,onSelectedItemChange:d=>{var t;const l=d.selectedItem?p(d.selectedItem):null;l!==(a??null)&&(u(l||void 0),(t=n.onChange)==null||t.call(n,{target:{value:d.selectedItem?p(d.selectedItem):void 0}}))},isItemDisabled:d=>!!d.disabled};return n.searchable?r.jsx(U,{...n,downshiftProps:s,value:a}):r.jsx(z,{...n,downshiftProps:s,value:a})};J.__docgenInfo={description:"",methods:[],displayName:"SelectMono",props:{state:{required:!1,tsType:{name:"union",raw:"FieldState | undefined",elements:[{name:"union",raw:'"success" | "error" | "default"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"default"'}]},{name:"undefined"}]},description:""},text:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},textItems:{required:!1,tsType:{name:"union",raw:"string[] | undefined",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"undefined"}]},description:""},rightText:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},fullWidth:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},compact:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},className:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},label:{required:!0,tsType:{name:"string"},description:""},hideLabel:{required:!1,tsType:{name:"boolean"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"union",raw:'"value" | "render"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"render"'}]}],raw:'Omit<BaseOption, "value" | "render">'},{name:"signature",type:"object",raw:`{
  value?: string;
  render?: undefined;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"render",value:{name:"undefined",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}]}],raw:"Option[]"},description:""},searchable:{required:!1,tsType:{name:"boolean"},description:""},name:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"string | number | string[]",elements:[{name:"string"},{name:"number"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},value:{required:!1,tsType:{name:"union",raw:"string | number | string[]",elements:[{name:"string"},{name:"number"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(event: {
  target: { value: string | number | undefined | string[] };
}) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  target: { value: string | number | undefined | string[] };
}`,signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ value: string | number | undefined | string[] }",signature:{properties:[{key:"value",value:{name:"union",raw:"string | number | undefined | string[]",elements:[{name:"string"},{name:"number"},{name:"undefined"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}],required:!0}}]},required:!0}}]}},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:`(event: {
  target: { value: string | number | undefined | string[] };
}) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  target: { value: string | number | undefined | string[] };
}`,signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ value: string | number | undefined | string[] }",signature:{properties:[{key:"value",value:{name:"union",raw:"string | number | undefined | string[]",elements:[{name:"string"},{name:"number"},{name:"undefined"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}],required:!0}}]},required:!0}}]}},name:"event"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},clearable:{required:!1,tsType:{name:"boolean"},description:""},multi:{required:!1,tsType:{name:"boolean"},description:""},showLabelWhenSelected:{required:!1,tsType:{name:"boolean"},description:""},monoline:{required:!1,tsType:{name:"boolean"},description:""},selectedItemsStyle:{required:!1,tsType:{name:"union",raw:'"pills" | "text"',elements:[{name:"literal",value:'"pills"'},{name:"literal",value:'"text"'}]},description:""},menuOptionsStyle:{required:!1,tsType:{name:"union",raw:'"plain" | "checkbox"',elements:[{name:"literal",value:'"plain"'},{name:"literal",value:'"checkbox"'}]},description:""},onSearchInputChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(event: {
  target: { value: string | undefined };
}) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  target: { value: string | undefined };
}`,signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ value: string | undefined }",signature:{properties:[{key:"value",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}}]},required:!0}}]}},name:"event"}],return:{name:"void"}}},description:""}}};const te=n=>{if(n.defaultValue&&n.value)throw new Error("You cannot use both defaultValue and value props on Select component");return n.multi?r.jsx($,{...n}):r.jsx(J,{...n})};te.__docgenInfo={description:"",methods:[],displayName:"Select",props:{state:{required:!1,tsType:{name:"union",raw:"FieldState | undefined",elements:[{name:"union",raw:'"success" | "error" | "default"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"default"'}]},{name:"undefined"}]},description:""},text:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},textItems:{required:!1,tsType:{name:"union",raw:"string[] | undefined",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"undefined"}]},description:""},rightText:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},fullWidth:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},compact:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},className:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},label:{required:!0,tsType:{name:"string"},description:""},hideLabel:{required:!1,tsType:{name:"boolean"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"union",raw:'"value" | "render"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"render"'}]}],raw:'Omit<BaseOption, "value" | "render">'},{name:"signature",type:"object",raw:`{
  value?: string;
  render?: undefined;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"render",value:{name:"undefined",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}]}],raw:"Option[]"},description:""},searchable:{required:!1,tsType:{name:"boolean"},description:""},name:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"string | number | string[]",elements:[{name:"string"},{name:"number"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},value:{required:!1,tsType:{name:"union",raw:"string | number | string[]",elements:[{name:"string"},{name:"number"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(event: {
  target: { value: string | number | undefined | string[] };
}) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  target: { value: string | number | undefined | string[] };
}`,signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ value: string | number | undefined | string[] }",signature:{properties:[{key:"value",value:{name:"union",raw:"string | number | undefined | string[]",elements:[{name:"string"},{name:"number"},{name:"undefined"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}],required:!0}}]},required:!0}}]}},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:`(event: {
  target: { value: string | number | undefined | string[] };
}) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  target: { value: string | number | undefined | string[] };
}`,signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ value: string | number | undefined | string[] }",signature:{properties:[{key:"value",value:{name:"union",raw:"string | number | undefined | string[]",elements:[{name:"string"},{name:"number"},{name:"undefined"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}],required:!0}}]},required:!0}}]}},name:"event"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},clearable:{required:!1,tsType:{name:"boolean"},description:""},multi:{required:!1,tsType:{name:"boolean"},description:""},showLabelWhenSelected:{required:!1,tsType:{name:"boolean"},description:""},monoline:{required:!1,tsType:{name:"boolean"},description:""},selectedItemsStyle:{required:!1,tsType:{name:"union",raw:'"pills" | "text"',elements:[{name:"literal",value:'"pills"'},{name:"literal",value:'"text"'}]},description:""},menuOptionsStyle:{required:!1,tsType:{name:"union",raw:'"plain" | "checkbox"',elements:[{name:"literal",value:'"plain"'},{name:"literal",value:'"checkbox"'}]},description:""},onSearchInputChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(event: {
  target: { value: string | undefined };
}) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  target: { value: string | undefined };
}`,signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ value: string | undefined }",signature:{properties:[{key:"value",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}}]},required:!0}}]}},name:"event"}],return:{name:"void"}}},description:""}}};export{te as S};
