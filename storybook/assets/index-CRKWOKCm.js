import{j as t}from"./jsx-runtime-X2b_N9AH.js";import{R as O,r as s}from"./index-uCp2LrAq.js";import{c as h}from"./index-Bl6ORisp.js";import{u as j}from"./index-nUFazOPM.js";import{F as L}from"./index-VRLPxy7Q.js";import{L as D}from"./index-NNnFHe3j.js";import{B as S}from"./index-D295LG-j.js";import{$ as G}from"./useOverlayPosition-CL3NKJNF.js";import{u as w,a as _,b as q}from"./downshift.esm-DTogr1te.js";import{C as Q}from"./index-iXeOdxOk.js";const x=e=>e.render!==void 0,P=({option:e,showLabelWhenSelected:n=!0})=>e?x(e)&&!n?e.render():t.jsx("span",{children:e.label}):null;P.__docgenInfo={description:"",methods:[],displayName:"SelectedOption",props:{option:{required:!0,tsType:{name:"union",raw:"Option | undefined | null",elements:[{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
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
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}]},{name:"undefined"},{name:"null"}]},description:""},showLabelWhenSelected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const M=({isOpen:e,selectRef:n,downshiftReturn:a,menuOptionsStyle:l,children:d})=>{const c=O.useRef(null),u=G({targetRef:n,overlayRef:c,placement:"bottom",isOpen:e,maxHeight:160,shouldUpdatePosition:!0}),i=a.getMenuProps({ref:c});return t.jsx("div",{className:h("c__select__menu",l?"c__select__menu--"+l:"",{"c__select__menu--opened":e}),...i,style:{marginLeft:"-4px",width:n.current?n.current.getBoundingClientRect().width-4:0,...u.overlayProps.style},children:e&&d})};M.__docgenInfo={description:"",methods:[],displayName:"SelectMenu",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},selectRef:{required:!0,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""},menuOptionsStyle:{required:!1,tsType:{name:'intersection["menuOptionsStyle"]',raw:'SelectProps["menuOptionsStyle"]'},description:""},downshiftReturn:{required:!0,tsType:{name:"union",raw:`| SelectAuxProps["downshiftReturn"]
| SelectMultiAuxProps["downshiftReturn"]`,elements:[{name:'SelectAuxProps["downshiftReturn"]',raw:'SelectAuxProps["downshiftReturn"]'},{name:'SelectMultiAuxProps["downshiftReturn"]',raw:'SelectMultiAuxProps["downshiftReturn"]'}]},description:""}},composes:["PropsWithChildren"]};function H(e){return n=>{var a;return!e||n.label.toLowerCase().includes(e.toLowerCase())||((a=n.value)==null?void 0:a.toLowerCase().includes(e.toLowerCase()))}}const N=e=>e?e.label:"",v=e=>e.value??e.label,T=(e,n)=>v(e)===v(n),C=e=>x(e)?e.render():e.label,B=({children:e,state:n="default",options:a,name:l,label:d,hideLabel:c,labelAsPlaceholder:u,downshiftProps:i,downshiftReturn:r,value:p,disabled:y,clearable:o=!0,onBlur:k,...R})=>{const{t:g}=j(),f=r.getLabelProps(),b=s.useRef(null);return t.jsxs(t.Fragment,{children:[t.jsx(L,{state:n,...R,children:t.jsx("div",{ref:b,className:h("c__select","c__select--mono","c__select--"+n,{"c__select--disabled":y}),onBlur:()=>{var m;return k==null?void 0:k({target:{value:(m=r.selectedItem)==null?void 0:m.value}})},children:t.jsxs("div",{className:h("c__select__wrapper",{"c__select__wrapper--focus":r.isOpen&&!y}),...r.wrapperProps,children:[r.selectedItem&&t.jsx("input",{type:"hidden",name:l,value:v(r.selectedItem)}),t.jsx(D,{label:d,hideLabel:c,labelAsPlaceholder:u,htmlFor:f.htmlFor,labelId:f.id,disabled:y,children:t.jsxs("div",{className:"c__select__inner",children:[t.jsx("div",{className:"c__select__inner__value",children:e}),t.jsxs("div",{className:"c__select__inner__actions",children:[o&&!y&&r.selectedItem&&t.jsxs(t.Fragment,{children:[t.jsx(S,{color:"tertiary-text",size:"nano","aria-label":g("components.forms.select.clear_button_aria_label"),className:"c__select__inner__actions__clear",onClick:m=>{r.selectItem(null),m.stopPropagation()},icon:t.jsx("span",{className:"material-icons",children:"close"}),type:"button"}),t.jsx("div",{className:"c__select__inner__actions__separator"})]}),t.jsx(S,{color:"tertiary-text",size:"nano",className:"c__select__inner__actions__open",icon:t.jsx("span",{className:h("material-icons",{opened:r.isOpen}),children:"arrow_drop_down"}),disabled:y,type:"button",...r.toggleButtonProps})]})]})})]})})}),t.jsx(M,{isOpen:r.isOpen,selectRef:b,downshiftReturn:r,children:t.jsxs("ul",{children:[a.map((m,I)=>{const Y=I===r.highlightedIndex;return t.jsx("li",{className:h("c__select__menu__item",{"c__select__menu__item--highlight":Y,"c__select__menu__item--selected":r.selectedItem&&T(r.selectedItem,m),"c__select__menu__item--disabled":m.disabled}),...r.getItemProps({item:m,index:I}),children:t.jsx("span",{children:C(m)})},`${v(m)}${I.toString()}`)}),a.length===0&&t.jsx("li",{className:"c__select__menu__item c__select__menu__empty-placeholder",children:g("components.forms.select.menu_empty_placeholder")})]})})]})};B.__docgenInfo={description:`This component is used by searchable and non-searchable select components.
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
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}]},{name:"null"}],required:!1}},{key:"getLabelProps",value:{name:"any",required:!0}},{key:"toggleButtonProps",value:{name:"any",required:!0}},{key:"getMenuProps",value:{name:"any",required:!0}},{key:"getItemProps",value:{name:"any",required:!0}},{key:"highlightedIndex",value:{name:"number",required:!0}},{key:"selectItem",value:{name:'UseSelectReturnValue["selectItem"]',raw:'UseSelectReturnValue<Option>["selectItem"]',required:!0}}]}},description:""}}};const W=e=>{if(e.selectedItemsStyle==="pills")return t.jsx(X,{...e});if(e.selectedItemsStyle==="text")return t.jsx(Z,{...e});throw new Error("Unknown selectedItemsStyle")},X=({selectedItems:e,selectedItemsStyle:n,disabled:a,useMultipleSelectionReturn:l,...d})=>{const{t:c}=j();return e.map((u,i)=>t.jsxs("div",{className:"c__select__inner__value__pill",...l.getSelectedItemProps({selectedItem:u,index:i}),children:[t.jsx(P,{option:u,...d}),t.jsx(S,{tabIndex:-1,color:"tertiary-text",disabled:a,size:"small","aria-label":c("components.forms.select.clear_button_aria_label"),type:"button",className:"c__select__inner__value__pill__clear",onClick:r=>{r.stopPropagation(),l.removeSelectedItem(u)},icon:t.jsx("span",{className:"material-icons",children:"close"})})]},`${v(u)}${i.toString()}`))},Z=({selectedItems:e})=>e.map(n=>N(n)).join(", ");W.__docgenInfo={description:"",methods:[],displayName:"SelectedItems",props:{onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: { target: { value: string[] } }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ target: { value: string[] } }",signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ value: string[] }",signature:{properties:[{key:"value",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!0}}]}},name:"event"}],return:{name:"void"}}},description:""},onSelectedItemsChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedItems: Option[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
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
}`,signature:{properties:[{key:"isOpen",value:{name:"boolean",required:!0}},{key:"getLabelProps",value:{name:"any",required:!0}},{key:"toggleButtonProps",value:{name:"any",required:!0}},{key:"getMenuProps",value:{name:"any",required:!0}},{key:"getItemProps",value:{name:"any",required:!0}},{key:"highlightedIndex",value:{name:"number",required:!0}},{key:"wrapperProps",value:{name:"HTMLAttributes",elements:[{name:"HTMLDivElement"}],raw:"HTMLAttributes<HTMLDivElement>",required:!1}}]}},description:""},useMultipleSelectionReturn:{required:!0,tsType:{name:"ReturnType",elements:[{name:"useMultipleSelection"}],raw:"ReturnType<typeof useMultipleSelection<Option>>"},description:""}}};const E=e=>{const{t:n}=j();return t.jsx(M,{isOpen:e.downshiftReturn.isOpen,selectRef:e.selectRef,downshiftReturn:e.downshiftReturn,menuOptionsStyle:e.menuOptionsStyle,children:t.jsx("ul",{children:e.downshiftReturn.isOpen&&t.jsxs(t.Fragment,{children:[e.options.map((a,l)=>s.createElement(ee,{...e,option:a,index:l,key:v(a)})),e.options.length===0&&t.jsx("li",{className:"c__select__menu__item c__select__menu__empty-placeholder",children:n("components.forms.select.menu_empty_placeholder")})]})})})},ee=e=>{if(e.menuOptionsStyle==="plain")return t.jsx(ne,{...e});if(e.menuOptionsStyle==="checkbox")return t.jsx(te,{...e});throw new Error("Unknown menuOptionsStyle")},ne=({option:e,index:n,...a})=>{const l=n===a.downshiftReturn.highlightedIndex||e.highlighted;return t.jsx("li",{className:h("c__select__menu__item",{"c__select__menu__item--highlight":l,"c__select__menu__item--disabled":e.disabled}),...a.downshiftReturn.getItemProps({item:e,index:n}),children:t.jsx("span",{children:C(e)})})},te=({option:e,index:n,...a})=>t.jsx("li",{className:h("c__select__menu__item",{"c__select__menu__item--highlight":n===a.downshiftReturn.highlightedIndex,"c__select__menu__item--disabled":e.disabled}),...a.downshiftReturn.getItemProps({item:e,index:n}),children:t.jsx(Q,{label:C(e),checked:e.highlighted,fullWidth:!0})});E.__docgenInfo={description:"",methods:[],displayName:"SelectMultiMenu",props:{onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: { target: { value: string[] } }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ target: { value: string[] } }",signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ value: string[] }",signature:{properties:[{key:"value",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!0}}]}},name:"event"}],return:{name:"void"}}},description:""},onSelectedItemsChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedItems: Option[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
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
}`,signature:{properties:[{key:"isOpen",value:{name:"boolean",required:!0}},{key:"getLabelProps",value:{name:"any",required:!0}},{key:"toggleButtonProps",value:{name:"any",required:!0}},{key:"getMenuProps",value:{name:"any",required:!0}},{key:"getItemProps",value:{name:"any",required:!0}},{key:"highlightedIndex",value:{name:"number",required:!0}},{key:"wrapperProps",value:{name:"HTMLAttributes",elements:[{name:"HTMLDivElement"}],raw:"HTMLAttributes<HTMLDivElement>",required:!1}}]}},description:""},useMultipleSelectionReturn:{required:!0,tsType:{name:"ReturnType",elements:[{name:"useMultipleSelection"}],raw:"ReturnType<typeof useMultipleSelection<Option>>"},description:""},selectRef:{required:!0,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""}}};function V(e,n){const a=H(n);return l=>!e.find(d=>v(d)===v(l))&&a(l)}const A=({children:e,...n})=>{const{t:a}=j(),l=n.downshiftReturn.getLabelProps(),d=s.useRef(null),{onBlur:c,...u}=n.downshiftReturn.toggleButtonProps;return t.jsxs(t.Fragment,{children:[t.jsx(L,{...n,children:t.jsx("div",{ref:d,className:h("c__select","c__select--multi","c__select--"+n.state,"c__select--"+n.selectedItemsStyle,{"c__select--disabled":n.disabled,"c__select--populated":n.selectedItems.length>0,"c__select--monoline":n.monoline,"c__select--multiline":!n.monoline}),children:t.jsxs("div",{className:h("c__select__wrapper",{"c__select__wrapper--focus":n.downshiftReturn.isOpen&&!n.disabled}),...n.downshiftReturn.wrapperProps,...u,children:[n.selectedItems.map((i,r)=>t.jsx("input",{type:"hidden",name:n.name,value:v(i)},`${v(i)}${r.toString()}`)),t.jsx(D,{label:n.label,labelAsPlaceholder:n.labelAsPlaceholder,htmlFor:l.htmlFor,labelId:l.id,hideLabel:n.hideLabel,disabled:n.disabled,children:t.jsxs("div",{className:"c__select__inner",children:[t.jsxs("div",{className:"c__select__inner__actions",children:[n.clearable&&!n.disabled&&n.selectedItems.length>0&&t.jsxs(t.Fragment,{children:[t.jsx(S,{color:"tertiary-text",size:"nano","aria-label":a("components.forms.select.clear_all_button_aria_label"),className:"c__select__inner__actions__clear",onClick:i=>{i.stopPropagation(),n.onSelectedItemsChange([])},icon:t.jsx("span",{className:"material-icons",children:"close"}),type:"button"}),t.jsx("div",{className:"c__select__inner__actions__separator"})]}),t.jsx(S,{color:"tertiary-text",size:"nano",className:"c__select__inner__actions__open",icon:t.jsx("span",{className:h("material-icons",{opened:n.downshiftReturn.isOpen}),children:"arrow_drop_down"}),disabled:n.disabled,type:"button"})]}),t.jsxs("div",{className:"c__select__inner__value",children:[t.jsx(W,{...n}),e]})]})})]})})}),t.jsx(E,{...n,selectRef:d})]})};A.__docgenInfo={description:"",methods:[],displayName:"SelectMultiAux",props:{onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: { target: { value: string[] } }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ target: { value: string[] } }",signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ value: string[] }",signature:{properties:[{key:"value",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!0}}]}},name:"event"}],return:{name:"void"}}},description:""},onSelectedItemsChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedItems: Option[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
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
}`,signature:{properties:[{key:"isOpen",value:{name:"boolean",required:!0}},{key:"getLabelProps",value:{name:"any",required:!0}},{key:"toggleButtonProps",value:{name:"any",required:!0}},{key:"getMenuProps",value:{name:"any",required:!0}},{key:"getItemProps",value:{name:"any",required:!0}},{key:"highlightedIndex",value:{name:"number",required:!0}},{key:"wrapperProps",value:{name:"HTMLAttributes",elements:[{name:"HTMLDivElement"}],raw:"HTMLAttributes<HTMLDivElement>",required:!1}}]}},description:""},useMultipleSelectionReturn:{required:!0,tsType:{name:"ReturnType",elements:[{name:"useMultipleSelection"}],raw:"ReturnType<typeof useMultipleSelection<Option>>"},description:""}}};const F=s.forwardRef((e,n)=>{const[a,l]=O.useState(),d=s.useRef(null),c=O.useMemo(()=>e.options.filter(V(e.selectedItems,a)),[e.selectedItems,a]),[u,i]=s.useState(!1),r=w({selectedItems:e.selectedItems,onStateChange({selectedItems:g,type:f}){switch(f){case w.stateChangeTypes.SelectedItemKeyDownBackspace:case w.stateChangeTypes.SelectedItemKeyDownDelete:case w.stateChangeTypes.DropdownKeyDownBackspace:case w.stateChangeTypes.FunctionRemoveSelectedItem:e.onSelectedItemsChange(g??[]);break}}}),p=_({items:c,itemToString:N,defaultHighlightedIndex:0,selectedItem:null,stateReducer:(g,f)=>{const{changes:b,type:m}=f;switch(m){case _.stateChangeTypes.InputKeyDownEnter:case _.stateChangeTypes.ItemClick:return{...b,isOpen:!0,highlightedIndex:0};default:return b}},onStateChange:({inputValue:g,type:f,selectedItem:b})=>{switch(f){case _.stateChangeTypes.InputKeyDownEnter:case _.stateChangeTypes.ItemClick:case _.stateChangeTypes.InputBlur:b&&!b.disabled&&(e.onSelectedItemsChange([...e.selectedItems,b]),l(void 0));break;case _.stateChangeTypes.InputChange:l(g);break}},isItemDisabled:g=>!!g.disabled}),y=p.getInputProps({...r.getDropdownProps({preventKeyAction:p.isOpen,ref:d,disabled:e.disabled}),value:a}),{onKeyDown:o}=y;y.onKeyDown=g=>{switch(g.code){case"Backspace":a||e.onSelectedItemsChange(e.selectedItems.slice(0,-1))}o==null||o(g)};const[k,R]=s.useState(!0);return s.useEffect(()=>{if(u||a){R(!1);return}R(e.selectedItems.length===0)},[e.selectedItems,u,a]),s.useImperativeHandle(n,()=>({blur:()=>{var g;p.closeMenu(),(g=d.current)==null||g.blur()}})),s.useEffect(()=>{var g;(g=e.onSearchInputChange)==null||g.call(e,{target:{value:a}})},[a]),t.jsx(A,{...e,monoline:!1,options:c,labelAsPlaceholder:k,selectedItems:e.selectedItems,downshiftReturn:{...p,wrapperProps:{onClick:()=>{var g;(g=d.current)==null||g.focus(),p.isOpen||p.openMenu()}},toggleButtonProps:p.getToggleButtonProps()},useMultipleSelectionReturn:r,children:t.jsx("span",{className:"c__select__inner__value__input","data-value":a,children:t.jsx("input",{...y,onFocus:()=>{i(!0),p.openMenu()},onBlur:()=>{i(!1)},size:4})})})});F.__docgenInfo={description:"",methods:[{name:"blur",docblock:null,modifiers:[],params:[],returns:null}],displayName:"SelectMultiSearchable"};const K=s.forwardRef((e,n)=>{const a=i=>!!e.selectedItems.find(r=>T(r,i)),l=O.useMemo(()=>e.monoline?e.options.map(i=>({...i,highlighted:a(i)})):e.options.filter(V(e.selectedItems,"")),[e.selectedItems]),d=w({selectedItems:e.selectedItems,onStateChange({selectedItems:i,type:r}){switch(r){case w.stateChangeTypes.SelectedItemKeyDownBackspace:case w.stateChangeTypes.SelectedItemKeyDownDelete:case w.stateChangeTypes.DropdownKeyDownBackspace:case w.stateChangeTypes.FunctionRemoveSelectedItem:e.onSelectedItemsChange(i??[]);break}}}),c=q({items:l,itemToString:N,selectedItem:null,defaultHighlightedIndex:0,stateReducer:(i,r)=>{const{changes:p,type:y}=r;switch(y){case q.stateChangeTypes.ToggleButtonKeyDownEnter:case q.stateChangeTypes.ToggleButtonKeyDownSpaceButton:case q.stateChangeTypes.ItemClick:return{...p,isOpen:!0,highlightedIndex:i.highlightedIndex}}return p},onStateChange:({type:i,selectedItem:r})=>{switch(i){case q.stateChangeTypes.ToggleButtonKeyDownEnter:case q.stateChangeTypes.ToggleButtonKeyDownSpaceButton:case q.stateChangeTypes.ItemClick:if(!r)break;a(r)?e.onSelectedItemsChange(e.selectedItems.filter(p=>!T(p,r))):e.onSelectedItemsChange([...e.selectedItems,r]);break}},isItemDisabled:i=>!!i.disabled}),u=s.useRef(null);return s.useImperativeHandle(n,()=>({blur:()=>{var i;c.closeMenu(),(i=u.current)==null||i.blur()}})),t.jsx(A,{...e,options:l,labelAsPlaceholder:e.selectedItems.length===0,selectedItems:e.selectedItems,selectedItemsStyle:e.monoline?"text":"pills",menuOptionsStyle:e.monoline?"checkbox":"plain",downshiftReturn:{...c,toggleButtonProps:c.getToggleButtonProps({...d.getDropdownProps({preventKeyAction:c.isOpen,ref:u}),disabled:e.disabled,onClick:i=>{i.stopPropagation()}})},useMultipleSelectionReturn:d})});K.__docgenInfo={description:"",methods:[{name:"blur",docblock:null,modifiers:[],params:[],returns:null}],displayName:"SelectMultiSimple"};const $=s.forwardRef((e,n)=>{const a=()=>{const i=e.defaultValue??e.value??[];return e.options.filter(r=>i.includes(v(r)))},[l,d]=O.useState(a());s.useEffect(()=>{e.defaultValue===void 0&&d(a())},[JSON.stringify(e.value)]),s.useEffect(()=>{var i;(i=e.onChange)==null||i.call(e,{target:{value:l.map(v)}})},[JSON.stringify(l)]);const c=i=>{d(i)},u={selectedItemsStyle:"pills",menuOptionsStyle:"plain",clearable:!0};return e.searchable?t.jsx(F,{...u,...e,selectedItems:l,onSelectedItemsChange:c,ref:n}):t.jsx(K,{...u,...e,selectedItems:l,onSelectedItemsChange:c,ref:n})});$.__docgenInfo={description:"",methods:[],displayName:"SelectMulti"};const U=s.forwardRef(({showLabelWhenSelected:e=!0,...n},a)=>{const{t:l}=j(),[d,c]=s.useState(n.options),[u,i]=s.useState(!1),[r,p]=s.useState(),y=s.useRef(null),o=_({...n.downshiftProps,items:d,itemToString:N,onInputValueChange:m=>{p(m.inputValue),m.inputValue||o.selectItem(null)}}),[k,R]=s.useState(!o.selectedItem);s.useEffect(()=>{if(u||o.inputValue){R(!1);return}R(!o.selectedItem)},[o.selectedItem,u,o.inputValue]),s.useEffect(()=>{if(r)return;const m=n.options.find(I=>v(I)===n.value);o.selectItem(m??null)},[n.value,n.options,r]),s.useEffect(()=>{o.isOpen?c(r?n.options.filter(H(r)):n.options):p(void 0)},[o.isOpen,n.options,r]),s.useImperativeHandle(a,()=>({blur:()=>{var m;o.closeMenu(),(m=y.current)==null||m.blur()}})),s.useEffect(()=>{var m;(m=n.onSearchInputChange)==null||m.call(n,{target:{value:r}})},[r]);const g=()=>{i(!1),o.selectedItem?o.selectItem(o.selectedItem):o.setInputValue("")},f=o.getInputProps({ref:y,disabled:n.disabled}),b=!e;return t.jsxs(B,{...n,downshiftReturn:{...o,wrapperProps:{onClick:()=>{var m;(m=y.current)==null||m.focus(),o.isOpen||o.openMenu()}},toggleButtonProps:o.getToggleButtonProps({disabled:n.disabled,"aria-label":l("components.forms.select.toggle_button_aria_label")})},labelAsPlaceholder:k,options:d,children:[t.jsx("input",{...f,className:h({"c__select__inner__value__input--hidden":b&&!u}),onFocus:()=>{i(!0)},onBlur:()=>{g()}}),b&&!u&&o.selectedItem&&x(o.selectedItem)&&o.selectedItem.render()]})});U.__docgenInfo={description:"",methods:[{name:"blur",docblock:null,modifiers:[],params:[],returns:null}],displayName:"SelectMonoSearchable",props:{showLabelWhenSelected:{defaultValue:{value:"true",computed:!1},required:!1}}};const ae=(e,n)=>{s.useEffect(()=>{const a=n.options.find(l=>v(l)===n.value);e.selectItem(a??null)},[n.value,n.options])},z=s.forwardRef((e,n)=>{const a=q({...e.downshiftProps,items:e.options,itemToString:N});ae(a,e);const l=s.useRef(null);return s.useImperativeHandle(n,()=>({blur:()=>{var d;a.closeMenu(),(d=l.current)==null||d.blur()}})),t.jsx(B,{...e,downshiftReturn:{...a,wrapperProps:a.getToggleButtonProps({disabled:e.disabled,ref:l}),toggleButtonProps:{}},labelAsPlaceholder:!a.selectedItem,children:t.jsx(P,{option:a.selectedItem,...e})})});z.__docgenInfo={description:"",methods:[{name:"blur",docblock:null,modifiers:[],params:[],returns:null}],displayName:"SelectMonoSimple"};const J=s.forwardRef((e,n)=>{const a=e.defaultValue?e.options.find(u=>v(u)===e.defaultValue):void 0,[l,d]=s.useState(a?v(a):e.value);s.useEffect(()=>{e.defaultValue||d(e.value)},[e.value,e.defaultValue]);const c={initialSelectedItem:a,onSelectedItemChange:u=>{var p;const i=u.selectedItem?v(u.selectedItem):null;i!==(l??null)&&(d(i||void 0),(p=e.onChange)==null||p.call(e,{target:{value:u.selectedItem?v(u.selectedItem):void 0}}))},isItemDisabled:u=>!!u.disabled};return e.searchable?t.jsx(U,{...e,downshiftProps:c,value:l,ref:n}):t.jsx(z,{...e,downshiftProps:c,value:l,ref:n})});J.__docgenInfo={description:"",methods:[],displayName:"SelectMono"};const re=s.forwardRef((e,n)=>{if(e.defaultValue&&e.value)throw new Error("You cannot use both defaultValue and value props on Select component");return e.multi?t.jsx($,{...e,ref:n}):t.jsx(J,{...e,ref:n})});re.__docgenInfo={description:"",methods:[],displayName:"Select"};export{re as S};
