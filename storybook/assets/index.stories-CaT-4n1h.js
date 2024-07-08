import{j as c}from"./jsx-runtime-X2b_N9AH.js";import{r as d,R as y}from"./index-uCp2LrAq.js";import{$ as le,a as se,b as H,c as ie,d as ae,e as ce,f as ue,g as de,h as fe,i as pe}from"./focusSafely-BcadJCzX.js";import"./index-BOkhicXD.js";import{c as me}from"./index-Bl6ORisp.js";import{$ as be}from"./useOverlayPosition-CL3NKJNF.js";import{B as E}from"./index-D295LG-j.js";function ge(...e){return e.length===1?e[0]:r=>{for(let t of e)typeof t=="function"?t(r):t!=null&&(t.current=r)}}function he(e){const r=d.useRef(null);return d.useMemo(()=>({get current(){return r.current},set current(t){r.current=t,typeof e=="function"?e(t):e&&(e.current=t)}}),[e])}function ve(e){let{isDisabled:r,onFocus:t,onBlur:l,onFocusChange:n}=e;const s=d.useCallback(u=>{if(u.target===u.currentTarget)return l&&l(u),n&&n(!1),!0},[l,n]),a=le(s),o=d.useCallback(u=>{const p=se(u.target);u.target===u.currentTarget&&p.activeElement===u.target&&(t&&t(u),n&&n(!0),a(u))},[n,t,a]);return{focusProps:{onFocus:!r&&(t||n||l)?o:void 0,onBlur:!r&&(l||n)?s:void 0}}}let F=!1,_=0;function B(){F=!0,setTimeout(()=>{F=!1},50)}function M(e){e.pointerType==="touch"&&B()}function ye(){if(!(typeof document>"u"))return typeof PointerEvent<"u"?document.addEventListener("pointerup",M):document.addEventListener("touchend",B),_++,()=>{_--,!(_>0)&&(typeof PointerEvent<"u"?document.removeEventListener("pointerup",M):document.removeEventListener("touchend",B))}}function ne(e){let{onHoverStart:r,onHoverChange:t,onHoverEnd:l,isDisabled:n}=e,[s,a]=d.useState(!1),o=d.useRef({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:"",target:null}).current;d.useEffect(ye,[]);let{hoverProps:u,triggerHoverEnd:p}=d.useMemo(()=>{let f=(i,g)=>{if(o.pointerType=g,n||g==="touch"||o.isHovered||!i.currentTarget.contains(i.target))return;o.isHovered=!0;let v=i.currentTarget;o.target=v,r&&r({type:"hoverstart",target:v,pointerType:g}),t&&t(!0),a(!0)},m=(i,g)=>{if(o.pointerType="",o.target=null,g==="touch"||!o.isHovered)return;o.isHovered=!1;let v=i.currentTarget;l&&l({type:"hoverend",target:v,pointerType:g}),t&&t(!1),a(!1)},b={};return typeof PointerEvent<"u"?(b.onPointerEnter=i=>{F&&i.pointerType==="mouse"||f(i,i.pointerType)},b.onPointerLeave=i=>{!n&&i.currentTarget.contains(i.target)&&m(i,i.pointerType)}):(b.onTouchStart=()=>{o.ignoreEmulatedMouseEvents=!0},b.onMouseEnter=i=>{!o.ignoreEmulatedMouseEvents&&!F&&f(i,"mouse"),o.ignoreEmulatedMouseEvents=!1},b.onMouseLeave=i=>{!n&&i.currentTarget.contains(i.target)&&m(i,"mouse")}),{hoverProps:b,triggerHoverEnd:m}},[r,t,l,n,o]);return d.useEffect(()=>{n&&p({currentTarget:o.target},o.pointerType)},[n]),{hoverProps:u,isHovered:s}}function I(e){if(!e)return;let r=!0;return t=>{let l={...t,preventDefault(){t.preventDefault()},isDefaultPrevented(){return t.isDefaultPrevented()},stopPropagation(){console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.")},continuePropagation(){r=!1}};e(l),r&&t.stopPropagation()}}function $e(e){return{keyboardProps:e.isDisabled?{}:{onKeyDown:I(e.onKeyDown),onKeyUp:I(e.onKeyUp)}}}let xe=y.createContext(null);function Te(e){let r=d.useContext(xe)||{};ae(r,e);let{ref:t,...l}=r;return l}function Ee(e,r){let{focusProps:t}=ve(e),{keyboardProps:l}=$e(e),n=H(t,l),s=Te(r),a=e.isDisabled?{}:s,o=d.useRef(e.autoFocus);return d.useEffect(()=>{o.current&&r.current&&ie(r.current),o.current=!1},[r]),{focusableProps:H({...n,tabIndex:e.excludeFromTabOrder&&!e.isDisabled?-1:void 0},a)}}function Pe(e,r){let t=ce(e,{labelable:!0}),{hoverProps:l}=ne({onHoverStart:()=>r==null?void 0:r.open(!0),onHoverEnd:()=>r==null?void 0:r.close()});return{tooltipProps:H(t,l,{role:"tooltip"})}}function He(e,r,t){let{isDisabled:l,trigger:n}=e,s=ue(),a=d.useRef(!1),o=d.useRef(!1),u=()=>{(a.current||o.current)&&r.open(o.current)},p=$=>{!a.current&&!o.current&&r.close($)};d.useEffect(()=>{let $=R=>{t&&t.current&&R.key==="Escape"&&(R.stopPropagation(),r.close(!0))};if(r.isOpen)return document.addEventListener("keydown",$,!0),()=>{document.removeEventListener("keydown",$,!0)}},[t,r]);let f=()=>{n!=="focus"&&(de()==="pointer"?a.current=!0:a.current=!1,u())},m=()=>{n!=="focus"&&(o.current=!1,a.current=!1,p())},b=()=>{o.current=!1,a.current=!1,p(!0)},i=()=>{fe()&&(o.current=!0,u())},g=()=>{o.current=!1,a.current=!1,p(!0)},{hoverProps:v}=ne({isDisabled:l,onHoverStart:f,onHoverEnd:m}),{focusableProps:N}=Ee({isDisabled:l,onFocus:i,onBlur:g},t);return{triggerProps:{"aria-describedby":r.isOpen?s:void 0,...H(N,v,{onPointerDown:b,onKeyDown:b})},tooltipProps:{id:s}}}const k=Symbol("default");function je(e){let{className:r,style:t,children:l,defaultClassName:n,defaultChildren:s,defaultStyle:a,values:o}=e;return d.useMemo(()=>{let u,p,f;return typeof r=="function"?u=r({...o,defaultClassName:n}):u=r,typeof t=="function"?p=t({...o,defaultStyle:a||{}}):p=t,typeof l=="function"?f=l({...o,defaultChildren:s}):l==null?f=s:f=l,{className:u??n,style:p||a?{...a,...p}:void 0,children:f??s,"data-rac":""}},[r,t,l,n,s,a,o])}function we(e,r){let t=d.useContext(e);if(r===null)return null;if(t&&typeof t=="object"&&"slots"in t&&t.slots){let l=new Intl.ListFormat().format(Object.keys(t.slots).map(s=>`"${s}"`));if(!r&&!t.slots[k])throw new Error(`A slot prop is required. Valid slot names are ${l}.`);let n=r||k;if(!t.slots[n])throw new Error(`Invalid slot "${r}". Valid slot names are ${l}.`);return t.slots[n]}return t}function Ce(e,r,t){let l=we(t,e.slot)||{},{ref:n,...s}=l,a=he(d.useMemo(()=>ge(r,n),[r,n])),o=H(s,e);return"style"in s&&s.style&&"style"in e&&e.style&&(typeof s.style=="function"||typeof e.style=="function"?o.style=u=>{let p=typeof s.style=="function"?s.style(u):s.style,f={...u.defaultStyle,...p},m=typeof e.style=="function"?e.style({...u,defaultStyle:f}):e.style;return{...f,...m}}:o.style={...s.style,...e.style}),[o,a]}if(typeof HTMLTemplateElement<"u"){const e=Object.getOwnPropertyDescriptor(Node.prototype,"firstChild").get;Object.defineProperty(HTMLTemplateElement.prototype,"firstChild",{configurable:!0,enumerable:!0,get:function(){return this.dataset.reactAriaHidden?this.content.firstChild:e.call(this)}})}typeof DocumentFragment<"u"&&new DocumentFragment;const Se=1500,z=500;let x={},Oe=0,j=!1,h=null,T=null;function De(e={}){let{delay:r=Se,closeDelay:t=z}=e,{isOpen:l,open:n,close:s}=pe(e),a=d.useMemo(()=>`${++Oe}`,[]),o=d.useRef(),u=()=>{x[a]=m},p=()=>{for(let i in x)i!==a&&(x[i](!0),delete x[i])},f=()=>{clearTimeout(o.current),o.current=null,p(),u(),j=!0,n(),h&&(clearTimeout(h),h=null),T&&(clearTimeout(T),T=null)},m=i=>{i||t<=0?(clearTimeout(o.current),o.current=null,s()):o.current||(o.current=setTimeout(()=>{o.current=null,s()},t)),h&&(clearTimeout(h),h=null),j&&(T&&clearTimeout(T),T=setTimeout(()=>{delete x[a],T=null,j=!1},Math.max(z,t)))},b=()=>{p(),u(),!l&&!h&&!j?h=setTimeout(()=>{h=null,j=!0,f()},r):l||f()};return d.useEffect(()=>()=>{clearTimeout(o.current),x[a]&&delete x[a]},[a]),{isOpen:l,open:i=>{!i&&r>0&&!o.current?b():f()},close:m}}const Fe=d.createContext({placement:"bottom"});function Ne(e,r){[e,r]=Ce(e,r,Fe);let t=e.placement,l={position:"absolute",[t]:"100%",transform:t==="top"||t==="bottom"?"translateX(-50%)":"translateY(-50%)"},n=je({...e,defaultClassName:"react-aria-OverlayArrow",values:{placement:t}});return n.style&&Object.keys(n.style).forEach(s=>n.style[s]===void 0&&delete n.style[s]),y.createElement("div",{...e,...n,style:{...l,...n.style},ref:r,"data-placement":t})}const _e=d.forwardRef(Ne),q=200,P=({placement:e="bottom",content:r,closeDelay:t=150,className:l,...n})=>{const s=y.useRef(null),a=y.useRef(null),[o,u]=y.useState(!1),[p,f]=y.useState(!1),m=De({delay:0,closeDelay:t,onOpenChange:$=>{$?(f(!0),setTimeout(()=>{f(!1)},q)):(u(!0),setTimeout(()=>{u(!1)},q))}}),b=He({},m,s),i=be({targetRef:s,overlayRef:a,placement:e,isOpen:m.isOpen}),{tooltipProps:g}=Pe(b.tooltipProps,m),v={placement:i.placement},N=m.isOpen||o;return c.jsxs(c.Fragment,{children:[y.cloneElement(y.Children.toArray(n.children)[0],{ref:s,...b.triggerProps}),N&&c.jsxs("span",{className:me("c__tooltip",{"c__tooltip--exiting":o,"c__tooltip--entering":p},l),"data-placement":i.placement,ref:a,style:{...i.overlayProps.style},...H(n,g),children:[c.jsx(_e,{...v,children:c.jsx("svg",{width:16,height:16,viewBox:"0 0 16 16",children:c.jsx("path",{d:"M0 0 L8 8 L16 0"})})}),c.jsx("span",{className:"c__tooltip__content",children:r})]})]})};P.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{placement:{required:!1,tsType:{name:"union",raw:'"top" | "bottom" | "left" | "right"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"bottom"',computed:!1}},content:{required:!0,tsType:{name:"ReactNode"},description:""},closeDelay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"150",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}},composes:["PropsWithChildren"]};const Be={title:"Components/Tooltip",component:P,decorators:[e=>c.jsx("div",{style:{padding:"8rem",position:"relative"},children:c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4rem"},children:[c.jsx(e,{}),c.jsx("div",{children:"⬅️ Hover it"})]})})]},w={args:{children:c.jsx(E,{size:"small",icon:c.jsx("span",{className:"material-icons",children:"info"}),color:"tertiary-text"}),content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}},C={render:()=>c.jsxs("div",{children:[c.jsx(P,{placement:"left",content:"Hi there",children:c.jsx(E,{size:"nano",color:"tertiary-text",children:"⬅️"})}),c.jsx(P,{placement:"bottom",content:"Hi there",children:c.jsx(E,{size:"nano",color:"tertiary-text",children:"⬇️"})}),c.jsx(P,{placement:"top",content:"Hi there",children:c.jsx(E,{size:"nano",color:"tertiary-text",children:"⬆️"})}),c.jsx(P,{placement:"right",content:"Hi there",children:c.jsx(E,{size:"nano",color:"tertiary-text",children:"➡️"})})]})},L="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet quam sed nunc commodo consequat. Vestibulum cursus venenatis massa et tempor.",S={args:{children:c.jsx("p",{style:{width:"100px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:L}),content:L}},O={args:{content:L,placement:"bottom",children:c.jsx("div",{style:{display:"inline-flex"},children:c.jsxs("div",{style:{borderRadius:"8px",backgroundColor:"var(--c--theme--colors--greyscale-300)",padding:"1rem",display:"flex",gap:"1rem"},children:[c.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"100%",backgroundColor:"var(--c--theme--colors--greyscale-600)"}}),c.jsx("div",{style:{width:"150px",height:"32px",borderRadius:"4px",backgroundColor:"var(--c--theme--colors--greyscale-400)"}})]})})}},D={args:{children:c.jsx(E,{size:"small",icon:c.jsx("span",{className:"material-icons",children:"info"}),color:"tertiary-text"}),placement:"right",content:c.jsxs("div",{children:[c.jsx("h3",{children:"Heading"}),c.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})}};var A,W,K;w.parameters={...w.parameters,docs:{...(A=w.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: <Button size="small" icon={<span className="material-icons">info</span>} color="tertiary-text" />,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
}`,...(K=(W=w.parameters)==null?void 0:W.docs)==null?void 0:K.source}}};var V,U,G;C.parameters={...C.parameters,docs:{...(V=C.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    return <div>
        <Tooltip placement="left" content="Hi there">
          <Button size="nano" color="tertiary-text">
            ⬅️
          </Button>
        </Tooltip>
        <Tooltip placement="bottom" content="Hi there">
          <Button size="nano" color="tertiary-text">
            ⬇️
          </Button>
        </Tooltip>
        <Tooltip placement="top" content="Hi there">
          <Button size="nano" color="tertiary-text">
            ⬆️
          </Button>
        </Tooltip>
        <Tooltip placement="right" content="Hi there">
          <Button size="nano" color="tertiary-text">
            ➡️
          </Button>
        </Tooltip>
      </div>;
  }
}`,...(G=(U=C.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var Y,X,J;S.parameters={...S.parameters,docs:{...(Y=S.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    children: <p style={{
      width: "100px",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }}>
        {lorem}
      </p>,
    content: lorem
  }
}`,...(J=(X=S.parameters)==null?void 0:X.docs)==null?void 0:J.source}}};var Q,Z,ee;O.parameters={...O.parameters,docs:{...(Q=O.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    content: lorem,
    placement: "bottom",
    children: <div style={{
      display: "inline-flex"
    }}>
        <div style={{
        borderRadius: "8px",
        backgroundColor: "var(--c--theme--colors--greyscale-300)",
        padding: "1rem",
        display: "flex",
        gap: "1rem"
      }}>
          <div style={{
          width: "32px",
          height: "32px",
          borderRadius: "100%",
          backgroundColor: "var(--c--theme--colors--greyscale-600)"
        }} />
          <div style={{
          width: "150px",
          height: "32px",
          borderRadius: "4px",
          backgroundColor: "var(--c--theme--colors--greyscale-400)"
        }} />
        </div>
      </div>
  }
}`,...(ee=(Z=O.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,re,oe;D.parameters={...D.parameters,docs:{...(te=D.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    children: <Button size="small" icon={<span className="material-icons">info</span>} color="tertiary-text" />,
    placement: "right",
    content: <div>
        <h3>Heading</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
  }
}`,...(oe=(re=D.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};const Le=["Default","Placements","OverflowingText","WithElements","WithHtml"],We=Object.freeze(Object.defineProperty({__proto__:null,Default:w,OverflowingText:S,Placements:C,WithElements:O,WithHtml:D,__namedExportsOrder:Le,default:Be},Symbol.toStringTag,{value:"Module"}));export{w as D,S as O,C as P,We as S,P as T,D as W,O as a};
