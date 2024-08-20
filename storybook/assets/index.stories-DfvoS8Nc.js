import{j as c}from"./jsx-runtime-BlAj40OV.js";import{r as d,R as $}from"./index-Cs7sjTYM.js";import{$ as le,a as se,b as H,c as ie,d as ae,e as ce,f as ue,g as de,h as fe,i as pe}from"./focusSafely-DFjZiJr9.js";import"./index-D7RfCbhb.js";import{c as me}from"./index-Bl6ORisp.js";import{$ as be}from"./useOverlayPosition-BQI7B4Yg.js";import{B as P}from"./index-ClGxLur_.js";function ve(...e){return e.length===1&&e[0]?e[0]:o=>{for(let t of e)typeof t=="function"?t(o):t!=null&&(t.current=o)}}function ge(e){const o=d.useRef(null);return d.useMemo(()=>({get current(){return o.current},set current(t){o.current=t,typeof e=="function"?e(t):e&&(e.current=t)}}),[e])}function he(e){let{isDisabled:o,onFocus:t,onBlur:l,onFocusChange:n}=e;const s=d.useCallback(a=>{if(a.target===a.currentTarget)return l&&l(a),n&&n(!1),!0},[l,n]),i=le(s),r=d.useCallback(a=>{const p=se(a.target);a.target===a.currentTarget&&p.activeElement===a.target&&(t&&t(a),n&&n(!0),i(a))},[n,t,i]);return{focusProps:{onFocus:!o&&(t||n||l)?r:void 0,onBlur:!o&&(l||n)?s:void 0}}}let _=!1,R=0;function L(){_=!0,setTimeout(()=>{_=!1},50)}function I(e){e.pointerType==="touch"&&L()}function $e(){if(!(typeof document>"u"))return typeof PointerEvent<"u"?document.addEventListener("pointerup",I):document.addEventListener("touchend",L),R++,()=>{R--,!(R>0)&&(typeof PointerEvent<"u"?document.removeEventListener("pointerup",I):document.removeEventListener("touchend",L))}}function ne(e){let{onHoverStart:o,onHoverChange:t,onHoverEnd:l,isDisabled:n}=e,[s,i]=d.useState(!1),r=d.useRef({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:"",target:null}).current;d.useEffect($e,[]);let{hoverProps:a,triggerHoverEnd:p}=d.useMemo(()=>{let f=(u,m)=>{if(r.pointerType=m,n||m==="touch"||r.isHovered||!u.currentTarget.contains(u.target))return;r.isHovered=!0;let h=u.currentTarget;r.target=h,o&&o({type:"hoverstart",target:h,pointerType:m}),t&&t(!0),i(!0)},b=(u,m)=>{if(r.pointerType="",r.target=null,m==="touch"||!r.isHovered)return;r.isHovered=!1;let h=u.currentTarget;l&&l({type:"hoverend",target:h,pointerType:m}),t&&t(!1),i(!1)},v={};return typeof PointerEvent<"u"?(v.onPointerEnter=u=>{_&&u.pointerType==="mouse"||f(u,u.pointerType)},v.onPointerLeave=u=>{!n&&u.currentTarget.contains(u.target)&&b(u,u.pointerType)}):(v.onTouchStart=()=>{r.ignoreEmulatedMouseEvents=!0},v.onMouseEnter=u=>{!r.ignoreEmulatedMouseEvents&&!_&&f(u,"mouse"),r.ignoreEmulatedMouseEvents=!1},v.onMouseLeave=u=>{!n&&u.currentTarget.contains(u.target)&&b(u,"mouse")}),{hoverProps:v,triggerHoverEnd:b}},[o,t,l,n,r]);return d.useEffect(()=>{n&&p({currentTarget:r.target},r.pointerType)},[n]),{hoverProps:a,isHovered:s}}function M(e){if(!e)return;let o=!0;return t=>{let l={...t,preventDefault(){t.preventDefault()},isDefaultPrevented(){return t.isDefaultPrevented()},stopPropagation(){console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.")},continuePropagation(){o=!1}};e(l),o&&t.stopPropagation()}}function ye(e){return{keyboardProps:e.isDisabled?{}:{onKeyDown:M(e.onKeyDown),onKeyUp:M(e.onKeyUp)}}}let xe=$.createContext(null);function Te(e){let o=d.useContext(xe)||{};ae(o,e);let{ref:t,...l}=o;return l}function Pe(e,o){let{focusProps:t}=he(e),{keyboardProps:l}=ye(e),n=H(t,l),s=Te(o),i=e.isDisabled?{}:s,r=d.useRef(e.autoFocus);return d.useEffect(()=>{r.current&&o.current&&ie(o.current),r.current=!1},[o]),{focusableProps:H({...n,tabIndex:e.excludeFromTabOrder&&!e.isDisabled?-1:void 0},i)}}function Ee(e,o){let t=ce(e,{labelable:!0}),{hoverProps:l}=ne({onHoverStart:()=>o==null?void 0:o.open(!0),onHoverEnd:()=>o==null?void 0:o.close()});return{tooltipProps:H(t,l,{role:"tooltip"})}}function He(e,o,t){let{isDisabled:l,trigger:n}=e,s=ue(),i=d.useRef(!1),r=d.useRef(!1),a=()=>{(i.current||r.current)&&o.open(r.current)},p=y=>{!i.current&&!r.current&&o.close(y)};d.useEffect(()=>{let y=F=>{t&&t.current&&F.key==="Escape"&&(F.stopPropagation(),o.close(!0))};if(o.isOpen)return document.addEventListener("keydown",y,!0),()=>{document.removeEventListener("keydown",y,!0)}},[t,o]);let f=()=>{n!=="focus"&&(de()==="pointer"?i.current=!0:i.current=!1,a())},b=()=>{n!=="focus"&&(r.current=!1,i.current=!1,p())},v=()=>{r.current=!1,i.current=!1,p(!0)},u=()=>{fe()&&(r.current=!0,a())},m=()=>{r.current=!1,i.current=!1,p(!0)},{hoverProps:h}=ne({isDisabled:l,onHoverStart:f,onHoverEnd:b}),{focusableProps:N}=Pe({isDisabled:l,onFocus:u,onBlur:m},t);return{triggerProps:{"aria-describedby":o.isOpen?s:void 0,...H(N,h,{onPointerDown:v,onKeyDown:v})},tooltipProps:{id:s}}}const k=Symbol("default");function je(e){let{className:o,style:t,children:l,defaultClassName:n,defaultChildren:s,defaultStyle:i,values:r}=e;return d.useMemo(()=>{let a,p,f;return typeof o=="function"?a=o({...r,defaultClassName:n}):a=o,typeof t=="function"?p=t({...r,defaultStyle:i||{}}):p=t,typeof l=="function"?f=l({...r,defaultChildren:s}):l==null?f=s:f=l,{className:a??n,style:p||i?{...i,...p}:void 0,children:f??s,"data-rac":""}},[o,t,l,n,s,i,r])}function we(e,o){let t=d.useContext(e);if(o===null)return null;if(t&&typeof t=="object"&&"slots"in t&&t.slots){let l=new Intl.ListFormat().format(Object.keys(t.slots).map(s=>`"${s}"`));if(!o&&!t.slots[k])throw new Error(`A slot prop is required. Valid slot names are ${l}.`);let n=o||k;if(!t.slots[n])throw new Error(`Invalid slot "${o}". Valid slot names are ${l}.`);return t.slots[n]}return t}function Se(e,o,t){let l=we(t,e.slot)||{},{ref:n,...s}=l,i=ge(d.useMemo(()=>ve(o,n),[o,n])),r=H(s,e);return"style"in s&&s.style&&"style"in e&&e.style&&(typeof s.style=="function"||typeof e.style=="function"?r.style=a=>{let p=typeof s.style=="function"?s.style(a):s.style,f={...a.defaultStyle,...p},b=typeof e.style=="function"?e.style({...a,defaultStyle:f}):e.style;return{...f,...b}}:r.style={...s.style,...e.style}),[r,i]}const Ce=1500,z=500;let x={},Oe=0,j=!1,g=null,T=null;function De(e={}){let{delay:o=Ce,closeDelay:t=z}=e,{isOpen:l,open:n,close:s}=pe(e),i=d.useMemo(()=>`${++Oe}`,[]),r=d.useRef(void 0),a=d.useRef(s),p=()=>{x[i]=v},f=()=>{for(let m in x)m!==i&&(x[m](!0),delete x[m])},b=()=>{clearTimeout(r.current),r.current=null,f(),p(),j=!0,n(),g&&(clearTimeout(g),g=null),T&&(clearTimeout(T),T=null)},v=m=>{m||t<=0?(clearTimeout(r.current),r.current=null,a.current()):r.current||(r.current=setTimeout(()=>{r.current=null,a.current()},t)),g&&(clearTimeout(g),g=null),j&&(T&&clearTimeout(T),T=setTimeout(()=>{delete x[i],T=null,j=!1},Math.max(z,t)))},u=()=>{f(),p(),!l&&!g&&!j?g=setTimeout(()=>{g=null,j=!0,b()},o):l||b()};return d.useEffect(()=>{a.current=s},[s]),d.useEffect(()=>()=>{clearTimeout(r.current),x[i]&&delete x[i]},[i]),{isOpen:l,open:m=>{!m&&o>0&&!r.current?u():b()},close:v}}const _e=d.createContext({placement:"bottom"});function Ne(e,o){[e,o]=Se(e,o,_e);let t=e.placement,l={position:"absolute",[t]:"100%",transform:t==="top"||t==="bottom"?"translateX(-50%)":"translateY(-50%)"},n=je({...e,defaultClassName:"react-aria-OverlayArrow",values:{placement:t}});return n.style&&Object.keys(n.style).forEach(s=>n.style[s]===void 0&&delete n.style[s]),$.createElement("div",{...e,...n,style:{...l,...n.style},ref:o,"data-placement":t})}const Re=d.forwardRef(Ne),q=200,E=({placement:e="bottom",content:o,closeDelay:t=150,className:l,...n})=>{const s=$.useRef(null),i=$.useRef(null),[r,a]=$.useState(!1),[p,f]=$.useState(!1),b=De({delay:0,closeDelay:t,onOpenChange:y=>{y?(f(!0),setTimeout(()=>{f(!1)},q)):(a(!0),setTimeout(()=>{a(!1)},q))}}),v=He({},b,s),u=be({targetRef:s,overlayRef:i,placement:e,isOpen:b.isOpen}),{tooltipProps:m}=Ee(v.tooltipProps,b),h={placement:u.placement},N=b.isOpen||r;return c.jsxs(c.Fragment,{children:[$.cloneElement($.Children.toArray(n.children)[0],{ref:s,...v.triggerProps}),N&&c.jsxs("span",{className:me("c__tooltip",{"c__tooltip--exiting":r,"c__tooltip--entering":p},l),"data-placement":u.placement,ref:i,style:{...u.overlayProps.style},...H(n,m),children:[c.jsx(Re,{...h,children:c.jsx("svg",{width:16,height:16,viewBox:"0 0 16 16",children:c.jsx("path",{d:"M0 0 L8 8 L16 0"})})}),c.jsx("span",{className:"c__tooltip__content",children:o})]})]})};E.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{placement:{required:!1,tsType:{name:"union",raw:'"top" | "bottom" | "left" | "right"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"bottom"',computed:!1}},content:{required:!0,tsType:{name:"ReactNode"},description:""},closeDelay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"150",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}},composes:["PropsWithChildren"]};const Le={title:"Components/Tooltip",component:E,decorators:[e=>c.jsx("div",{style:{padding:"8rem",position:"relative"},children:c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4rem"},children:[c.jsx(e,{}),c.jsx("div",{children:"⬅️ Hover it"})]})})]},w={args:{children:c.jsx(P,{size:"small",icon:c.jsx("span",{className:"material-icons",children:"info"}),color:"tertiary-text"}),content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}},S={render:()=>c.jsxs("div",{children:[c.jsx(E,{placement:"left",content:"Hi there",children:c.jsx(P,{size:"nano",color:"tertiary-text",children:"⬅️"})}),c.jsx(E,{placement:"bottom",content:"Hi there",children:c.jsx(P,{size:"nano",color:"tertiary-text",children:"⬇️"})}),c.jsx(E,{placement:"top",content:"Hi there",children:c.jsx(P,{size:"nano",color:"tertiary-text",children:"⬆️"})}),c.jsx(E,{placement:"right",content:"Hi there",children:c.jsx(P,{size:"nano",color:"tertiary-text",children:"➡️"})})]})},B="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet quam sed nunc commodo consequat. Vestibulum cursus venenatis massa et tempor.",C={args:{children:c.jsx("p",{style:{width:"100px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:B}),content:B}},O={args:{content:B,placement:"bottom",children:c.jsx("div",{style:{display:"inline-flex"},children:c.jsxs("div",{style:{borderRadius:"8px",backgroundColor:"var(--c--theme--colors--greyscale-300)",padding:"1rem",display:"flex",gap:"1rem"},children:[c.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"100%",backgroundColor:"var(--c--theme--colors--greyscale-600)"}}),c.jsx("div",{style:{width:"150px",height:"32px",borderRadius:"4px",backgroundColor:"var(--c--theme--colors--greyscale-400)"}})]})})}},D={args:{children:c.jsx(P,{size:"small",icon:c.jsx("span",{className:"material-icons",children:"info"}),color:"tertiary-text"}),placement:"right",content:c.jsxs("div",{children:[c.jsx("h3",{children:"Heading"}),c.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})}};var W,A,K;w.parameters={...w.parameters,docs:{...(W=w.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(ee=(Z=O.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,oe,re;D.parameters={...D.parameters,docs:{...(te=D.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(re=(oe=D.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};const Be=["Default","Placements","OverflowingText","WithElements","WithHtml"],Ae=Object.freeze(Object.defineProperty({__proto__:null,Default:w,OverflowingText:C,Placements:S,WithElements:O,WithHtml:D,__namedExportsOrder:Be,default:Le},Symbol.toStringTag,{value:"Module"}));export{w as D,C as O,S as P,Ae as S,E as T,D as W,O as a};
