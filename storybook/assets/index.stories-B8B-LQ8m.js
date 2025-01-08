import{j as c}from"./jsx-runtime-CLpGMVip.js";import{r as d,e as $}from"./index-DAIO8Scy.js";import{$ as le,a as se,b as H,c as ie,d as ae,e as ce,f as ue,g as de,h as fe,i as pe}from"./focusSafely-CuTWst9b.js";import"./index-BuYng7Op.js";import{c as me}from"./index-ePN0wjti.js";import{$ as be}from"./useOverlayPosition-Re9DnapZ.js";import{B as P}from"./index-C-CZlHIx.js";function ge(...t){return t.length===1&&t[0]?t[0]:r=>{for(let e of t)typeof e=="function"?e(r):e!=null&&(e.current=r)}}function he(t){const r=d.useRef(null);return d.useMemo(()=>({get current(){return r.current},set current(e){r.current=e,typeof t=="function"?t(e):t&&(t.current=e)}}),[t])}function ve(t){let{isDisabled:r,onFocus:e,onBlur:l,onFocusChange:o}=t;const s=d.useCallback(a=>{if(a.target===a.currentTarget)return l&&l(a),o&&o(!1),!0},[l,o]),i=le(s),n=d.useCallback(a=>{const p=se(a.target);a.target===a.currentTarget&&p.activeElement===a.target&&(e&&e(a),o&&o(!0),i(a))},[o,e,i]);return{focusProps:{onFocus:!r&&(e||o||l)?n:void 0,onBlur:!r&&(l||o)?s:void 0}}}let _=!1,L=0;function R(){_=!0,setTimeout(()=>{_=!1},50)}function I(t){t.pointerType==="touch"&&R()}function $e(){if(!(typeof document>"u"))return typeof PointerEvent<"u"?document.addEventListener("pointerup",I):document.addEventListener("touchend",R),L++,()=>{L--,!(L>0)&&(typeof PointerEvent<"u"?document.removeEventListener("pointerup",I):document.removeEventListener("touchend",R))}}function oe(t){let{onHoverStart:r,onHoverChange:e,onHoverEnd:l,isDisabled:o}=t,[s,i]=d.useState(!1),n=d.useRef({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:"",target:null}).current;d.useEffect($e,[]);let{hoverProps:a,triggerHoverEnd:p}=d.useMemo(()=>{let f=(u,m)=>{if(n.pointerType=m,o||m==="touch"||n.isHovered||!u.currentTarget.contains(u.target))return;n.isHovered=!0;let v=u.currentTarget;n.target=v,r&&r({type:"hoverstart",target:v,pointerType:m}),e&&e(!0),i(!0)},b=(u,m)=>{if(n.pointerType="",n.target=null,m==="touch"||!n.isHovered)return;n.isHovered=!1;let v=u.currentTarget;l&&l({type:"hoverend",target:v,pointerType:m}),e&&e(!1),i(!1)},g={};return typeof PointerEvent<"u"?(g.onPointerEnter=u=>{_&&u.pointerType==="mouse"||f(u,u.pointerType)},g.onPointerLeave=u=>{!o&&u.currentTarget.contains(u.target)&&b(u,u.pointerType)}):(g.onTouchStart=()=>{n.ignoreEmulatedMouseEvents=!0},g.onMouseEnter=u=>{!n.ignoreEmulatedMouseEvents&&!_&&f(u,"mouse"),n.ignoreEmulatedMouseEvents=!1},g.onMouseLeave=u=>{!o&&u.currentTarget.contains(u.target)&&b(u,"mouse")}),{hoverProps:g,triggerHoverEnd:b}},[r,e,l,o,n]);return d.useEffect(()=>{o&&p({currentTarget:n.target},n.pointerType)},[o]),{hoverProps:a,isHovered:s}}function M(t){if(!t)return;let r=!0;return e=>{let l={...e,preventDefault(){e.preventDefault()},isDefaultPrevented(){return e.isDefaultPrevented()},stopPropagation(){console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.")},continuePropagation(){r=!1}};t(l),r&&e.stopPropagation()}}function ye(t){return{keyboardProps:t.isDisabled?{}:{onKeyDown:M(t.onKeyDown),onKeyUp:M(t.onKeyUp)}}}let xe=$.createContext(null);function Te(t){let r=d.useContext(xe)||{};ae(r,t);let{ref:e,...l}=r;return l}function Pe(t,r){let{focusProps:e}=ve(t),{keyboardProps:l}=ye(t),o=H(e,l),s=Te(r),i=t.isDisabled?{}:s,n=d.useRef(t.autoFocus);return d.useEffect(()=>{n.current&&r.current&&ie(r.current),n.current=!1},[r]),{focusableProps:H({...o,tabIndex:t.excludeFromTabOrder&&!t.isDisabled?-1:void 0},i)}}function Ee(t,r){let e=ce(t,{labelable:!0}),{hoverProps:l}=oe({onHoverStart:()=>r==null?void 0:r.open(!0),onHoverEnd:()=>r==null?void 0:r.close()});return{tooltipProps:H(e,l,{role:"tooltip"})}}function He(t,r,e){let{isDisabled:l,trigger:o}=t,s=ue(),i=d.useRef(!1),n=d.useRef(!1),a=()=>{(i.current||n.current)&&r.open(n.current)},p=y=>{!i.current&&!n.current&&r.close(y)};d.useEffect(()=>{let y=F=>{e&&e.current&&F.key==="Escape"&&(F.stopPropagation(),r.close(!0))};if(r.isOpen)return document.addEventListener("keydown",y,!0),()=>{document.removeEventListener("keydown",y,!0)}},[e,r]);let f=()=>{o!=="focus"&&(de()==="pointer"?i.current=!0:i.current=!1,a())},b=()=>{o!=="focus"&&(n.current=!1,i.current=!1,p())},g=()=>{n.current=!1,i.current=!1,p(!0)},u=()=>{fe()&&(n.current=!0,a())},m=()=>{n.current=!1,i.current=!1,p(!0)},{hoverProps:v}=oe({isDisabled:l,onHoverStart:f,onHoverEnd:b}),{focusableProps:N}=Pe({isDisabled:l,onFocus:u,onBlur:m},e);return{triggerProps:{"aria-describedby":r.isOpen?s:void 0,...H(N,v,{onPointerDown:g,onKeyDown:g})},tooltipProps:{id:s}}}const k=Symbol("default");function je(t){let{className:r,style:e,children:l,defaultClassName:o,defaultChildren:s,defaultStyle:i,values:n}=t;return d.useMemo(()=>{let a,p,f;return typeof r=="function"?a=r({...n,defaultClassName:o}):a=r,typeof e=="function"?p=e({...n,defaultStyle:i||{}}):p=e,typeof l=="function"?f=l({...n,defaultChildren:s}):l==null?f=s:f=l,{className:a??o,style:p||i?{...i,...p}:void 0,children:f??s,"data-rac":""}},[r,e,l,o,s,i,n])}function we(t,r){let e=d.useContext(t);if(r===null)return null;if(e&&typeof e=="object"&&"slots"in e&&e.slots){let l=new Intl.ListFormat().format(Object.keys(e.slots).map(s=>`"${s}"`));if(!r&&!e.slots[k])throw new Error(`A slot prop is required. Valid slot names are ${l}.`);let o=r||k;if(!e.slots[o])throw new Error(`Invalid slot "${r}". Valid slot names are ${l}.`);return e.slots[o]}return e}function Se(t,r,e){let l=we(e,t.slot)||{},{ref:o,...s}=l,i=he(d.useMemo(()=>ge(r,o),[r,o])),n=H(s,t);return"style"in s&&s.style&&"style"in t&&t.style&&(typeof s.style=="function"||typeof t.style=="function"?n.style=a=>{let p=typeof s.style=="function"?s.style(a):s.style,f={...a.defaultStyle,...p},b=typeof t.style=="function"?t.style({...a,defaultStyle:f}):t.style;return{...f,...b}}:n.style={...s.style,...t.style}),[n,i]}const Ce=1500,z=500;let x={},Oe=0,j=!1,h=null,T=null;function De(t={}){let{delay:r=Ce,closeDelay:e=z}=t,{isOpen:l,open:o,close:s}=pe(t),i=d.useMemo(()=>`${++Oe}`,[]),n=d.useRef(null),a=d.useRef(s),p=()=>{x[i]=g},f=()=>{for(let m in x)m!==i&&(x[m](!0),delete x[m])},b=()=>{n.current&&clearTimeout(n.current),n.current=null,f(),p(),j=!0,o(),h&&(clearTimeout(h),h=null),T&&(clearTimeout(T),T=null)},g=m=>{m||e<=0?(n.current&&clearTimeout(n.current),n.current=null,a.current()):n.current||(n.current=setTimeout(()=>{n.current=null,a.current()},e)),h&&(clearTimeout(h),h=null),j&&(T&&clearTimeout(T),T=setTimeout(()=>{delete x[i],T=null,j=!1},Math.max(z,e)))},u=()=>{f(),p(),!l&&!h&&!j?h=setTimeout(()=>{h=null,j=!0,b()},r):l||b()};return d.useEffect(()=>{a.current=s},[s]),d.useEffect(()=>()=>{n.current&&clearTimeout(n.current),x[i]&&delete x[i]},[i]),{isOpen:l,open:m=>{!m&&r>0&&!n.current?u():b()},close:g}}const _e=d.createContext({placement:"bottom"});function Ne(t,r){[t,r]=Se(t,r,_e);let e=t.placement,l={position:"absolute",transform:e==="top"||e==="bottom"?"translateX(-50%)":"translateY(-50%)"};e!=null&&(l[e]="100%");let o=je({...t,defaultClassName:"react-aria-OverlayArrow",values:{placement:e}});return o.style&&Object.keys(o.style).forEach(s=>o.style[s]===void 0&&delete o.style[s]),$.createElement("div",{...t,...o,style:{...l,...o.style},ref:r,"data-placement":e})}const Le=d.forwardRef(Ne),q=200,E=({placement:t="bottom",content:r,closeDelay:e=150,className:l,...o})=>{const s=$.useRef(null),i=$.useRef(null),[n,a]=$.useState(!1),[p,f]=$.useState(!1),b=De({delay:0,closeDelay:e,onOpenChange:y=>{y?(f(!0),setTimeout(()=>{f(!1)},q)):(a(!0),setTimeout(()=>{a(!1)},q))}}),g=He({},b,s),u=be({targetRef:s,overlayRef:i,placement:t,isOpen:b.isOpen}),{tooltipProps:m}=Ee(g.tooltipProps,b),v={placement:u.placement},N=b.isOpen||n;return c.jsxs(c.Fragment,{children:[$.cloneElement($.Children.toArray(o.children)[0],{ref:s,...g.triggerProps}),N&&c.jsxs("span",{className:me("c__tooltip",{"c__tooltip--exiting":n,"c__tooltip--entering":p},l),"data-placement":u.placement,ref:i,style:{...u.overlayProps.style},...H(o,m),children:[c.jsx(Le,{...v,children:c.jsx("svg",{width:16,height:16,viewBox:"0 0 16 16",children:c.jsx("path",{d:"M0 0 L8 8 L16 0"})})}),c.jsx("span",{className:"c__tooltip__content",children:r})]})]})};E.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{placement:{required:!1,tsType:{name:"union",raw:'"top" | "bottom" | "left" | "right"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"bottom"',computed:!1}},content:{required:!0,tsType:{name:"ReactNode"},description:""},closeDelay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"150",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}},composes:["PropsWithChildren"]};const Re={title:"Components/Tooltip",component:E,decorators:[t=>c.jsx("div",{style:{padding:"8rem",position:"relative"},children:c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4rem"},children:[c.jsx(t,{}),c.jsx("div",{children:"⬅️ Hover it"})]})})]},w={args:{children:c.jsx(P,{size:"small",icon:c.jsx("span",{className:"material-icons",children:"info"}),color:"tertiary-text"}),content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}},S={render:()=>c.jsxs("div",{children:[c.jsx(E,{placement:"left",content:"Hi there",children:c.jsx(P,{size:"nano",color:"tertiary-text",children:"⬅️"})}),c.jsx(E,{placement:"bottom",content:"Hi there",children:c.jsx(P,{size:"nano",color:"tertiary-text",children:"⬇️"})}),c.jsx(E,{placement:"top",content:"Hi there",children:c.jsx(P,{size:"nano",color:"tertiary-text",children:"⬆️"})}),c.jsx(E,{placement:"right",content:"Hi there",children:c.jsx(P,{size:"nano",color:"tertiary-text",children:"➡️"})})]})},B="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet quam sed nunc commodo consequat. Vestibulum cursus venenatis massa et tempor.",C={args:{children:c.jsx("p",{style:{width:"100px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:B}),content:B}},O={args:{content:B,placement:"bottom",children:c.jsx("div",{style:{display:"inline-flex"},children:c.jsxs("div",{style:{borderRadius:"8px",backgroundColor:"var(--c--theme--colors--greyscale-300)",padding:"1rem",display:"flex",gap:"1rem"},children:[c.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"100%",backgroundColor:"var(--c--theme--colors--greyscale-600)"}}),c.jsx("div",{style:{width:"150px",height:"32px",borderRadius:"4px",backgroundColor:"var(--c--theme--colors--greyscale-400)"}})]})})}},D={args:{children:c.jsx(P,{size:"small",icon:c.jsx("span",{className:"material-icons",children:"info"}),color:"tertiary-text"}),placement:"right",content:c.jsxs("div",{children:[c.jsx("h3",{children:"Heading"}),c.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})}};var W,A,K;w.parameters={...w.parameters,docs:{...(W=w.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    children: <Button size="small" icon={<span className="material-icons">info</span>} color="tertiary-text" />,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
}`,...(K=(A=w.parameters)==null?void 0:A.docs)==null?void 0:K.source}}};var V,U,G;S.parameters={...S.parameters,docs:{...(V=S.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(G=(U=S.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var Y,X,J;C.parameters={...C.parameters,docs:{...(Y=C.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(J=(X=C.parameters)==null?void 0:X.docs)==null?void 0:J.source}}};var Q,Z,ee;O.parameters={...O.parameters,docs:{...(Q=O.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(ee=(Z=O.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,re,ne;D.parameters={...D.parameters,docs:{...(te=D.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ne=(re=D.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};const Be=["Default","Placements","OverflowingText","WithElements","WithHtml"],Ae=Object.freeze(Object.defineProperty({__proto__:null,Default:w,OverflowingText:C,Placements:S,WithElements:O,WithHtml:D,__namedExportsOrder:Be,default:Re},Symbol.toStringTag,{value:"Module"}));export{w as D,C as O,S as P,Ae as S,E as T,D as W,O as a};
