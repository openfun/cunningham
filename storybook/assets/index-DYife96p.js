import{j as t}from"./jsx-runtime-CKrituN3.js";import{r as s,R as S}from"./index-CBqU2yxZ.js";import{c as h}from"./index-Bl6ORisp.js";import{u as R}from"./index-BOtO6brZ.js";import{F as A}from"./index-BBlCaVbW.js";import{L}from"./index-CcUMfHOE.js";import{B as O}from"./index-oVJ33EwG.js";import{u as _,a as w,b as q}from"./downshift.esm-DTnwNJ2u.js";import{C as Y}from"./index-ByICr-NM.js";const x=e=>e.render!==void 0,P=({option:e,showLabelWhenSelected:n=!0})=>e?x(e)&&!n?e.render():t.jsx("span",{children:e.label}):null;P.__docgenInfo={description:"",methods:[],displayName:"SelectedOption",props:{option:{required:!0,tsType:{name:"union",raw:"Option | undefined | null",elements:[{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
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
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}]},{name:"undefined"},{name:"null"}]},description:""},showLabelWhenSelected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};function D(e){return n=>{var a;return!e||n.label.toLowerCase().includes(e.toLowerCase())||((a=n.value)==null?void 0:a.toLowerCase().includes(e.toLowerCase()))}}const N=e=>e?e.label:"",v=e=>e.value??e.label,T=(e,n)=>v(e)===v(n),M=e=>x(e)?e.render():e.label,C=({children:e,state:n="default",options:a,name:u,label:o,hideLabel:m,labelAsPlaceholder:l,downshiftProps:i,downshiftReturn:r,value:g,disabled:b,clearable:d=!0,onBlur:I,...k})=>{const{t:c}=R(),f=r.getLabelProps();return t.jsx(A,{state:n,...k,children:t.jsxs("div",{className:h("c__select","c__select--mono","c__select--"+n,{"c__select--disabled":b}),onBlur:()=>{var p;return I&&I({target:{value:(p=r.selectedItem)==null?void 0:p.value}})},children:[t.jsxs("div",{className:h("c__select__wrapper",{"c__select__wrapper--focus":r.isOpen&&!b}),...r.wrapperProps,children:[r.selectedItem&&t.jsx("input",{type:"hidden",name:u,value:v(r.selectedItem)}),t.jsx(L,{label:o,hideLabel:m,labelAsPlaceholder:l,htmlFor:f.htmlFor,labelId:f.id,disabled:b,children:t.jsxs("div",{className:"c__select__inner",children:[t.jsx("div",{className:"c__select__inner__value",children:e}),t.jsxs("div",{className:"c__select__inner__actions",children:[d&&!b&&r.selectedItem&&t.jsxs(t.Fragment,{children:[t.jsx(O,{color:"tertiary-text",size:"nano","aria-label":c("components.forms.select.clear_button_aria_label"),className:"c__select__inner__actions__clear",onClick:p=>{r.selectItem(null),p.stopPropagation()},icon:t.jsx("span",{className:"material-icons",children:"close"}),type:"button"}),t.jsx("div",{className:"c__select__inner__actions__separator"})]}),t.jsx(O,{color:"tertiary-text",size:"nano",className:"c__select__inner__actions__open",icon:t.jsx("span",{className:h("material-icons",{opened:r.isOpen}),children:"arrow_drop_down"}),disabled:b,type:"button",...r.toggleButtonProps})]})]})})]}),t.jsx("div",{className:h("c__select__menu",{"c__select__menu--opened":r.isOpen||!1}),...r.getMenuProps(),children:t.jsx("ul",{children:(r.isOpen||!1)&&t.jsxs(t.Fragment,{children:[a.map((p,y)=>{const j=y===r.highlightedIndex;return t.jsx("li",{className:h("c__select__menu__item",{"c__select__menu__item--highlight":j,"c__select__menu__item--selected":r.selectedItem&&T(r.selectedItem,p),"c__select__menu__item--disabled":p.disabled}),...r.getItemProps({item:p,index:y}),children:t.jsx("span",{children:M(p)})},`${v(p)}${y.toString()}`)}),a.length===0&&t.jsx("li",{className:"c__select__menu__item c__select__menu__empty-placeholder",children:c("components.forms.select.menu_empty_placeholder")})]})})})]})})};C.__docgenInfo={description:`This component is used by searchable and non-searchable select components.
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
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}]},{name:"null"}],required:!1}},{key:"getLabelProps",value:{name:"any",required:!0}},{key:"toggleButtonProps",value:{name:"any",required:!0}},{key:"getMenuProps",value:{name:"any",required:!0}},{key:"getItemProps",value:{name:"any",required:!0}},{key:"highlightedIndex",value:{name:"number",required:!0}},{key:"selectItem",value:{name:'UseSelectReturnValue["selectItem"]',raw:'UseSelectReturnValue<Option>["selectItem"]',required:!0}}]}},description:""}}};const W=e=>{if(e.selectedItemsStyle==="pills")return t.jsx(G,{...e});if(e.selectedItemsStyle==="text")return t.jsx(Q,{...e});throw new Error("Unknown selectedItemsStyle")},G=({selectedItems:e,selectedItemsStyle:n,disabled:a,useMultipleSelectionReturn:u,...o})=>{const{t:m}=R();return e.map((l,i)=>t.jsxs("div",{className:"c__select__inner__value__pill",...u.getSelectedItemProps({selectedItem:l,index:i}),children:[t.jsx(P,{option:l,...o}),t.jsx(O,{tabIndex:-1,color:"tertiary-text",disabled:a,size:"small","aria-label":m("components.forms.select.clear_button_aria_label"),type:"button",className:"c__select__inner__value__pill__clear",onClick:r=>{r.stopPropagation(),u.removeSelectedItem(l)},icon:t.jsx("span",{className:"material-icons",children:"close"})})]},`${v(l)}${i.toString()}`))},Q=({selectedItems:e})=>e.map(n=>N(n)).join(", ");W.__docgenInfo={description:"",methods:[],displayName:"SelectedItems",props:{onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: { target: { value: string[] } }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ target: { value: string[] } }",signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ value: string[] }",signature:{properties:[{key:"value",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!0}}]}},name:"event"}],return:{name:"void"}}},description:""},onSelectedItemsChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedItems: Option[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
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
}`,signature:{properties:[{key:"isOpen",value:{name:"boolean",required:!0}},{key:"getLabelProps",value:{name:"any",required:!0}},{key:"toggleButtonProps",value:{name:"any",required:!0}},{key:"getMenuProps",value:{name:"any",required:!0}},{key:"getItemProps",value:{name:"any",required:!0}},{key:"highlightedIndex",value:{name:"number",required:!0}},{key:"wrapperProps",value:{name:"HTMLAttributes",elements:[{name:"HTMLDivElement"}],raw:"HTMLAttributes<HTMLDivElement>",required:!1}}]}},description:""},useMultipleSelectionReturn:{required:!0,tsType:{name:"ReturnType",elements:[{name:"useMultipleSelection"}],raw:"ReturnType<typeof useMultipleSelection<Option>>"},description:""}}};const E=e=>{const{t:n}=R();return t.jsx("div",{className:h("c__select__menu","c__select__menu--"+e.menuOptionsStyle,{"c__select__menu--opened":e.downshiftReturn.isOpen}),...e.downshiftReturn.getMenuProps(),children:t.jsx("ul",{children:e.downshiftReturn.isOpen&&t.jsxs(t.Fragment,{children:[e.options.map((a,u)=>s.createElement(X,{...e,option:a,index:u,key:v(a)})),e.options.length===0&&t.jsx("li",{className:"c__select__menu__item c__select__menu__empty-placeholder",children:n("components.forms.select.menu_empty_placeholder")})]})})})},X=e=>{if(e.menuOptionsStyle==="plain")return t.jsx(Z,{...e});if(e.menuOptionsStyle==="checkbox")return t.jsx(ee,{...e});throw new Error("Unknown menuOptionsStyle")},Z=({option:e,index:n,...a})=>{const u=n===a.downshiftReturn.highlightedIndex||e.highlighted;return t.jsx("li",{className:h("c__select__menu__item",{"c__select__menu__item--highlight":u,"c__select__menu__item--disabled":e.disabled}),...a.downshiftReturn.getItemProps({item:e,index:n}),children:t.jsx("span",{children:M(e)})})},ee=({option:e,index:n,...a})=>t.jsx("li",{className:h("c__select__menu__item",{"c__select__menu__item--highlight":n===a.downshiftReturn.highlightedIndex,"c__select__menu__item--disabled":e.disabled}),...a.downshiftReturn.getItemProps({item:e,index:n}),children:t.jsx(Y,{label:M(e),checked:e.highlighted,fullWidth:!0})});E.__docgenInfo={description:"",methods:[],displayName:"SelectMultiMenu",props:{onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: { target: { value: string[] } }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ target: { value: string[] } }",signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ value: string[] }",signature:{properties:[{key:"value",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!0}}]}},name:"event"}],return:{name:"void"}}},description:""},onSelectedItemsChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedItems: Option[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
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
}`,signature:{properties:[{key:"isOpen",value:{name:"boolean",required:!0}},{key:"getLabelProps",value:{name:"any",required:!0}},{key:"toggleButtonProps",value:{name:"any",required:!0}},{key:"getMenuProps",value:{name:"any",required:!0}},{key:"getItemProps",value:{name:"any",required:!0}},{key:"highlightedIndex",value:{name:"number",required:!0}},{key:"wrapperProps",value:{name:"HTMLAttributes",elements:[{name:"HTMLDivElement"}],raw:"HTMLAttributes<HTMLDivElement>",required:!1}}]}},description:""},useMultipleSelectionReturn:{required:!0,tsType:{name:"ReturnType",elements:[{name:"useMultipleSelection"}],raw:"ReturnType<typeof useMultipleSelection<Option>>"},description:""}}};function H(e,n){const a=D(n);return u=>!e.find(o=>v(o)===v(u))&&a(u)}const B=({children:e,...n})=>{const{t:a}=R(),u=n.downshiftReturn.getLabelProps(),{onBlur:o,...m}=n.downshiftReturn.toggleButtonProps;return t.jsx(A,{...n,children:t.jsxs("div",{className:h("c__select","c__select--multi","c__select--"+n.state,"c__select--"+n.selectedItemsStyle,{"c__select--disabled":n.disabled,"c__select--populated":n.selectedItems.length>0,"c__select--monoline":n.monoline,"c__select--multiline":!n.monoline}),children:[t.jsxs("div",{className:h("c__select__wrapper",{"c__select__wrapper--focus":n.downshiftReturn.isOpen&&!n.disabled}),...n.downshiftReturn.wrapperProps,...m,children:[n.selectedItems.map((l,i)=>t.jsx("input",{type:"hidden",name:n.name,value:v(l)},`${v(l)}${i.toString()}`)),t.jsx(L,{label:n.label,labelAsPlaceholder:n.labelAsPlaceholder,htmlFor:u.htmlFor,labelId:u.id,hideLabel:n.hideLabel,disabled:n.disabled,children:t.jsxs("div",{className:"c__select__inner",children:[t.jsxs("div",{className:"c__select__inner__actions",children:[n.clearable&&!n.disabled&&n.selectedItems.length>0&&t.jsxs(t.Fragment,{children:[t.jsx(O,{color:"tertiary-text",size:"nano","aria-label":a("components.forms.select.clear_all_button_aria_label"),className:"c__select__inner__actions__clear",onClick:l=>{l.stopPropagation(),n.onSelectedItemsChange([])},icon:t.jsx("span",{className:"material-icons",children:"close"}),type:"button"}),t.jsx("div",{className:"c__select__inner__actions__separator"})]}),t.jsx(O,{color:"tertiary-text",size:"nano",className:"c__select__inner__actions__open",icon:t.jsx("span",{className:h("material-icons",{opened:n.downshiftReturn.isOpen}),children:"arrow_drop_down"}),disabled:n.disabled,type:"button"})]}),t.jsxs("div",{className:"c__select__inner__value",children:[t.jsx(W,{...n}),e]})]})})]}),t.jsx(E,{...n})]})})};B.__docgenInfo={description:"",methods:[],displayName:"SelectMultiAux",props:{onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: { target: { value: string[] } }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ target: { value: string[] } }",signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ value: string[] }",signature:{properties:[{key:"value",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!0}}]}},name:"event"}],return:{name:"void"}}},description:""},onSelectedItemsChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedItems: Option[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
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
}`,signature:{properties:[{key:"isOpen",value:{name:"boolean",required:!0}},{key:"getLabelProps",value:{name:"any",required:!0}},{key:"toggleButtonProps",value:{name:"any",required:!0}},{key:"getMenuProps",value:{name:"any",required:!0}},{key:"getItemProps",value:{name:"any",required:!0}},{key:"highlightedIndex",value:{name:"number",required:!0}},{key:"wrapperProps",value:{name:"HTMLAttributes",elements:[{name:"HTMLDivElement"}],raw:"HTMLAttributes<HTMLDivElement>",required:!1}}]}},description:""},useMultipleSelectionReturn:{required:!0,tsType:{name:"ReturnType",elements:[{name:"useMultipleSelection"}],raw:"ReturnType<typeof useMultipleSelection<Option>>"},description:""}}};const V=s.forwardRef((e,n)=>{const[a,u]=S.useState(),o=s.useRef(null),m=S.useMemo(()=>e.options.filter(H(e.selectedItems,a)),[e.selectedItems,a]),[l,i]=s.useState(!1),r=_({selectedItems:e.selectedItems,onStateChange({selectedItems:c,type:f}){switch(f){case _.stateChangeTypes.SelectedItemKeyDownBackspace:case _.stateChangeTypes.SelectedItemKeyDownDelete:case _.stateChangeTypes.DropdownKeyDownBackspace:case _.stateChangeTypes.FunctionRemoveSelectedItem:e.onSelectedItemsChange(c??[]);break}}}),g=w({items:m,itemToString:N,defaultHighlightedIndex:0,selectedItem:null,stateReducer:(c,f)=>{const{changes:p,type:y}=f;switch(y){case w.stateChangeTypes.InputKeyDownEnter:case w.stateChangeTypes.ItemClick:return{...p,isOpen:!0,highlightedIndex:0};default:return p}},onStateChange:({inputValue:c,type:f,selectedItem:p})=>{switch(f){case w.stateChangeTypes.InputKeyDownEnter:case w.stateChangeTypes.ItemClick:case w.stateChangeTypes.InputBlur:p&&!p.disabled&&(e.onSelectedItemsChange([...e.selectedItems,p]),u(void 0));break;case w.stateChangeTypes.InputChange:u(c);break}},isItemDisabled:c=>!!c.disabled}),b=g.getInputProps({...r.getDropdownProps({preventKeyAction:g.isOpen,ref:o,disabled:e.disabled}),value:a}),{onKeyDown:d}=b;b.onKeyDown=c=>{switch(c.code){case"Backspace":a||e.onSelectedItemsChange(e.selectedItems.slice(0,-1))}d==null||d(c)};const[I,k]=s.useState(!0);return s.useEffect(()=>{if(l||a){k(!1);return}k(e.selectedItems.length===0)},[e.selectedItems,l,a]),s.useImperativeHandle(n,()=>({blur:()=>{var c;g.closeMenu(),(c=o.current)==null||c.blur()}})),s.useEffect(()=>{var c;(c=e.onSearchInputChange)==null||c.call(e,{target:{value:a}})},[a]),t.jsx(B,{...e,monoline:!1,options:m,labelAsPlaceholder:I,selectedItems:e.selectedItems,downshiftReturn:{...g,wrapperProps:{onClick:()=>{var c;(c=o.current)==null||c.focus(),g.isOpen||g.openMenu()}},toggleButtonProps:g.getToggleButtonProps()},useMultipleSelectionReturn:r,children:t.jsx("span",{className:"c__select__inner__value__input","data-value":a,children:t.jsx("input",{...b,onFocus:()=>{i(!0),g.openMenu()},onBlur:()=>{i(!1)},size:4})})})});V.__docgenInfo={description:"",methods:[{name:"blur",docblock:null,modifiers:[],params:[],returns:null}],displayName:"SelectMultiSearchable"};const F=s.forwardRef((e,n)=>{const a=i=>!!e.selectedItems.find(r=>T(r,i)),u=S.useMemo(()=>e.monoline?e.options.map(i=>({...i,highlighted:a(i)})):e.options.filter(H(e.selectedItems,"")),[e.selectedItems]),o=_({selectedItems:e.selectedItems,onStateChange({selectedItems:i,type:r}){switch(r){case _.stateChangeTypes.SelectedItemKeyDownBackspace:case _.stateChangeTypes.SelectedItemKeyDownDelete:case _.stateChangeTypes.DropdownKeyDownBackspace:case _.stateChangeTypes.FunctionRemoveSelectedItem:e.onSelectedItemsChange(i??[]);break}}}),m=q({items:u,itemToString:N,selectedItem:null,defaultHighlightedIndex:0,stateReducer:(i,r)=>{const{changes:g,type:b}=r;switch(b){case q.stateChangeTypes.ToggleButtonKeyDownEnter:case q.stateChangeTypes.ToggleButtonKeyDownSpaceButton:case q.stateChangeTypes.ItemClick:return{...g,isOpen:!0,highlightedIndex:i.highlightedIndex}}return g},onStateChange:({type:i,selectedItem:r})=>{switch(i){case q.stateChangeTypes.ToggleButtonKeyDownEnter:case q.stateChangeTypes.ToggleButtonKeyDownSpaceButton:case q.stateChangeTypes.ItemClick:if(!r)break;a(r)?e.onSelectedItemsChange(e.selectedItems.filter(g=>!T(g,r))):e.onSelectedItemsChange([...e.selectedItems,r]);break}},isItemDisabled:i=>!!i.disabled}),l=s.useRef(null);return s.useImperativeHandle(n,()=>({blur:()=>{var i;m.closeMenu(),(i=l.current)==null||i.blur()}})),t.jsx(B,{...e,options:u,labelAsPlaceholder:e.selectedItems.length===0,selectedItems:e.selectedItems,selectedItemsStyle:e.monoline?"text":"pills",menuOptionsStyle:e.monoline?"checkbox":"plain",downshiftReturn:{...m,toggleButtonProps:m.getToggleButtonProps({...o.getDropdownProps({preventKeyAction:m.isOpen,ref:l}),disabled:e.disabled,onClick:i=>{i.stopPropagation()}})},useMultipleSelectionReturn:o})});F.__docgenInfo={description:"",methods:[{name:"blur",docblock:null,modifiers:[],params:[],returns:null}],displayName:"SelectMultiSimple"};const K=s.forwardRef((e,n)=>{const a=()=>{const i=e.defaultValue??e.value??[];return e.options.filter(r=>i.includes(v(r)))},[u,o]=S.useState(a());s.useEffect(()=>{e.defaultValue===void 0&&o(a())},[JSON.stringify(e.value)]),s.useEffect(()=>{var i;(i=e.onChange)==null||i.call(e,{target:{value:u.map(v)}})},[JSON.stringify(u)]);const m=i=>{o(i)},l={selectedItemsStyle:"pills",menuOptionsStyle:"plain",clearable:!0};return e.searchable?t.jsx(V,{...l,...e,selectedItems:u,onSelectedItemsChange:m,ref:n}):t.jsx(F,{...l,...e,selectedItems:u,onSelectedItemsChange:m,ref:n})});K.__docgenInfo={description:"",methods:[],displayName:"SelectMulti"};const z=s.forwardRef(({showLabelWhenSelected:e=!0,...n},a)=>{const{t:u}=R(),[o,m]=s.useState(n.options),[l,i]=s.useState(!1),[r,g]=s.useState(),b=s.useRef(null),d=w({...n.downshiftProps,items:o,itemToString:N,onInputValueChange:y=>{g(y.inputValue),y.inputValue||d.selectItem(null)}}),[I,k]=s.useState(!d.selectedItem);s.useEffect(()=>{if(l||d.inputValue){k(!1);return}k(!d.selectedItem)},[d.selectedItem,l,d.inputValue]),s.useEffect(()=>{if(r)return;const y=d.selectedItem?v(d.selectedItem):void 0,j=n.options.find(J=>v(J)===n.value);j&&y===n.value||d.selectItem(j??null)},[n.value,n.options,r]),s.useEffect(()=>{d.isOpen?m(r?n.options.filter(D(r)):n.options):g(void 0)},[d.isOpen,n.options,r]),s.useImperativeHandle(a,()=>({blur:()=>{var y;d.closeMenu(),(y=b.current)==null||y.blur()}})),s.useEffect(()=>{var y;(y=n.onSearchInputChange)==null||y.call(n,{target:{value:r}})},[r]);const c=()=>{i(!1),d.selectedItem?d.selectItem(d.selectedItem):d.setInputValue("")},f=d.getInputProps({ref:b,disabled:n.disabled}),p=!e;return t.jsxs(C,{...n,downshiftReturn:{...d,wrapperProps:{onClick:()=>{var y;(y=b.current)==null||y.focus(),d.isOpen||d.openMenu()}},toggleButtonProps:d.getToggleButtonProps({disabled:n.disabled,"aria-label":u("components.forms.select.toggle_button_aria_label")})},labelAsPlaceholder:I,options:o,children:[t.jsx("input",{...f,className:h({"c__select__inner__value__input--hidden":p&&!l}),onFocus:()=>{i(!0)},onBlur:()=>{c()}}),p&&!l&&d.selectedItem&&x(d.selectedItem)&&d.selectedItem.render()]})});z.__docgenInfo={description:"",methods:[{name:"blur",docblock:null,modifiers:[],params:[],returns:null}],displayName:"SelectMonoSearchable",props:{showLabelWhenSelected:{defaultValue:{value:"true",computed:!1},required:!1}}};const U=s.forwardRef((e,n)=>{const a=q({...e.downshiftProps,items:e.options,itemToString:N});s.useEffect(()=>{const o=a.selectedItem?v(a.selectedItem):void 0,m=e.options.find(l=>v(l)===e.value);m&&o===e.value||a.selectItem(m??null)},[e.value,e.options]);const u=s.useRef(null);return s.useImperativeHandle(n,()=>({blur:()=>{var o;a.closeMenu(),(o=u.current)==null||o.blur()}})),t.jsx(C,{...e,downshiftReturn:{...a,wrapperProps:a.getToggleButtonProps({disabled:e.disabled,ref:u}),toggleButtonProps:{}},labelAsPlaceholder:!a.selectedItem,children:t.jsx(P,{option:a.selectedItem,...e})})});U.__docgenInfo={description:"",methods:[{name:"blur",docblock:null,modifiers:[],params:[],returns:null}],displayName:"SelectMonoSimple"};const $=s.forwardRef((e,n)=>{const a=e.defaultValue?e.options.find(l=>v(l)===e.defaultValue):void 0,[u,o]=s.useState(a?v(a):e.value);s.useEffect(()=>{e.defaultValue||o(e.value)},[e.value,e.defaultValue]);const m={initialSelectedItem:a,onSelectedItemChange:l=>{var g;const i=l.selectedItem?v(l.selectedItem):null;i!==(u??null)&&(o(i||void 0),(g=e.onChange)==null||g.call(e,{target:{value:l.selectedItem?v(l.selectedItem):void 0}}))},isItemDisabled:l=>!!l.disabled};return e.searchable?t.jsx(z,{...e,downshiftProps:m,value:u,ref:n}):t.jsx(U,{...e,downshiftProps:m,value:u,ref:n})});$.__docgenInfo={description:"",methods:[],displayName:"SelectMono"};const ne=s.forwardRef((e,n)=>{if(e.defaultValue&&e.value)throw new Error("You cannot use both defaultValue and value props on Select component");return e.multi?t.jsx(K,{...e,ref:n}):t.jsx($,{...e,ref:n})});ne.__docgenInfo={description:"",methods:[],displayName:"Select"};export{ne as S};
