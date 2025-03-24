import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{r as u,e as x}from"./index-BOElUlPE.js";import{$ as se,a as ne,b as M,c as ae,d as S,e as ie,f as ce,g as ue,h as de,i as fe,j as pe,k as me,l as be,m as ge}from"./focusSafely-D-tKL5cd.js";import{c as ve}from"./index-rkLeB0kx.js";import{$ as $e}from"./useOverlayPosition-BAINmgmS.js";import{B as H}from"./index-C7TmDTK-.js";function he(...r){return r.length===1&&r[0]?r[0]:e=>{for(let t of r)typeof t=="function"?t(e):t!=null&&(t.current=e)}}function ye(r){const e=u.useRef(null);return u.useMemo(()=>({get current(){return e.current},set current(t){e.current=t,typeof r=="function"?r(t):r&&(r.current=t)}}),[r])}function xe(r){let{isDisabled:e,onFocus:t,onBlur:n,onFocusChange:s}=r;const l=u.useCallback(i=>{if(i.target===i.currentTarget)return n&&n(i),s&&s(!1),!0},[n,s]),a=se(l),o=u.useCallback(i=>{const f=ne(i.target),p=f?M(f):M();i.target===i.currentTarget&&p===ae(i.nativeEvent)&&(t&&t(i),s&&s(!0),a(i))},[s,t,a]);return{focusProps:{onFocus:!e&&(t||s||n)?o:void 0,onBlur:!e&&(n||s)?l:void 0}}}function k(r){if(!r)return;let e=!0;return t=>{let n={...t,preventDefault(){t.preventDefault()},isDefaultPrevented(){return t.isDefaultPrevented()},stopPropagation(){e?console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior."):e=!0},continuePropagation(){e=!1},isPropagationStopped(){return e}};r(n),e&&t.stopPropagation()}}function Te(r){return{keyboardProps:r.isDisabled?{}:{onKeyDown:k(r.onKeyDown),onKeyUp:k(r.onKeyUp)}}}let Pe=x.createContext(null);function Ee(r){let e=u.useContext(Pe)||{};ce(e,r);let{ref:t,...n}=e;return n}function He(r,e){let{focusProps:t}=xe(r),{keyboardProps:n}=Te(r),s=S(t,n),l=Ee(e),a=r.isDisabled?{}:l,o=u.useRef(r.autoFocus);u.useEffect(()=>{o.current&&e.current&&ie(e.current),o.current=!1},[e]);let i=r.excludeFromTabOrder?-1:0;return r.isDisabled&&(i=void 0),{focusableProps:S({...s,tabIndex:i},a)}}let N=!1,R=0;function B(){N=!0,setTimeout(()=>{N=!1},50)}function F(r){r.pointerType==="touch"&&B()}function je(){if(!(typeof document>"u"))return typeof PointerEvent<"u"?document.addEventListener("pointerup",F):document.addEventListener("touchend",B),R++,()=>{R--,!(R>0)&&(typeof PointerEvent<"u"?document.removeEventListener("pointerup",F):document.removeEventListener("touchend",B))}}function le(r){let{onHoverStart:e,onHoverChange:t,onHoverEnd:n,isDisabled:s}=r,[l,a]=u.useState(!1),o=u.useRef({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:"",target:null}).current;u.useEffect(je,[]);let{addGlobalListener:i,removeAllGlobalListeners:f}=ue(),{hoverProps:p,triggerHoverEnd:b}=u.useMemo(()=>{let $=(d,h)=>{if(o.pointerType=h,s||h==="touch"||o.isHovered||!d.currentTarget.contains(d.target))return;o.isHovered=!0;let g=d.currentTarget;o.target=g,i(ne(d.target),"pointerover",E=>{o.isHovered&&o.target&&!de(o.target,E.target)&&v(E,E.pointerType)},{capture:!0}),e&&e({type:"hoverstart",target:g,pointerType:h}),t&&t(!0),a(!0)},v=(d,h)=>{let g=o.target;o.pointerType="",o.target=null,!(h==="touch"||!o.isHovered||!g)&&(o.isHovered=!1,f(),n&&n({type:"hoverend",target:g,pointerType:h}),t&&t(!1),a(!1))},m={};return typeof PointerEvent<"u"?(m.onPointerEnter=d=>{N&&d.pointerType==="mouse"||$(d,d.pointerType)},m.onPointerLeave=d=>{!s&&d.currentTarget.contains(d.target)&&v(d,d.pointerType)}):(m.onTouchStart=()=>{o.ignoreEmulatedMouseEvents=!0},m.onMouseEnter=d=>{!o.ignoreEmulatedMouseEvents&&!N&&$(d,"mouse"),o.ignoreEmulatedMouseEvents=!1},m.onMouseLeave=d=>{!s&&d.currentTarget.contains(d.target)&&v(d,"mouse")}),{hoverProps:m,triggerHoverEnd:v}},[e,t,n,s,o,i,f]);return u.useEffect(()=>{s&&b({currentTarget:o.target},o.pointerType)},[s]),{hoverProps:p,isHovered:l}}function Se(r,e){let t=fe(r,{labelable:!0}),{hoverProps:n}=le({onHoverStart:()=>e==null?void 0:e.open(!0),onHoverEnd:()=>e==null?void 0:e.close()});return{tooltipProps:S(t,n,{role:"tooltip"})}}function we(r,e,t){let{isDisabled:n,trigger:s}=r,l=pe(),a=u.useRef(!1),o=u.useRef(!1),i=()=>{(a.current||o.current)&&e.open(o.current)},f=g=>{!a.current&&!o.current&&e.close(g)};u.useEffect(()=>{let g=E=>{t&&t.current&&E.key==="Escape"&&(E.stopPropagation(),e.close(!0))};if(e.isOpen)return document.addEventListener("keydown",g,!0),()=>{document.removeEventListener("keydown",g,!0)}},[t,e]);let p=()=>{s!=="focus"&&(me()==="pointer"?a.current=!0:a.current=!1,i())},b=()=>{s!=="focus"&&(o.current=!1,a.current=!1,f())},$=()=>{o.current=!1,a.current=!1,f(!0)},v=()=>{be()&&(o.current=!0,i())},m=()=>{o.current=!1,a.current=!1,f(!0)},{hoverProps:d}=le({isDisabled:n,onHoverStart:p,onHoverEnd:b}),{focusableProps:h}=He({isDisabled:n,onFocus:v,onBlur:m},t);return{triggerProps:{"aria-describedby":e.isOpen?l:void 0,...S(h,d,{onPointerDown:$,onKeyDown:$,tabIndex:void 0})},tooltipProps:{id:l}}}const Ce=Symbol("default");function Oe(r){let{className:e,style:t,children:n,defaultClassName:s,defaultChildren:l,defaultStyle:a,values:o}=r;return u.useMemo(()=>{let i,f,p;return typeof e=="function"?i=e({...o,defaultClassName:s}):i=e,typeof t=="function"?f=t({...o,defaultStyle:a||{}}):f=t,typeof n=="function"?p=n({...o,defaultChildren:l}):n==null?p=l:p=n,{className:i??s,style:f||a?{...a,...f}:void 0,children:p??l,"data-rac":""}},[e,t,n,s,l,a,o])}function De(r,e){let t=u.useContext(r);if(e===null)return null;if(t&&typeof t=="object"&&"slots"in t&&t.slots){let n=e||Ce;if(!t.slots[n]){let s=new Intl.ListFormat().format(Object.keys(t.slots).map(a=>`"${a}"`)),l=e?`Invalid slot "${e}".`:"A slot prop is required.";throw new Error(`${l} Valid slot names are ${s}.`)}return t.slots[n]}return t}function Le(r,e,t){let n=De(t,r.slot)||{},{ref:s,...l}=n,a=ye(u.useMemo(()=>he(e,s),[e,s])),o=S(l,r);return"style"in l&&l.style&&"style"in r&&r.style&&(typeof l.style=="function"||typeof r.style=="function"?o.style=i=>{let f=typeof l.style=="function"?l.style(i):l.style,p={...i.defaultStyle,...f},b=typeof r.style=="function"?r.style({...i,defaultStyle:p}):r.style;return{...p,...b}}:o.style={...l.style,...r.style}),[o,a]}const _e=1500,z=500;let T={},Ne=0,w=!1,y=null,P=null;function Re(r={}){let{delay:e=_e,closeDelay:t=z}=r,{isOpen:n,open:s,close:l}=ge(r),a=u.useMemo(()=>`${++Ne}`,[]),o=u.useRef(null),i=u.useRef(l),f=()=>{T[a]=$},p=()=>{for(let m in T)m!==a&&(T[m](!0),delete T[m])},b=()=>{o.current&&clearTimeout(o.current),o.current=null,p(),f(),w=!0,s(),y&&(clearTimeout(y),y=null),P&&(clearTimeout(P),P=null)},$=m=>{m||t<=0?(o.current&&clearTimeout(o.current),o.current=null,i.current()):o.current||(o.current=setTimeout(()=>{o.current=null,i.current()},t)),y&&(clearTimeout(y),y=null),w&&(P&&clearTimeout(P),P=setTimeout(()=>{delete T[a],P=null,w=!1},Math.max(z,t)))},v=()=>{p(),f(),!n&&!y&&!w?y=setTimeout(()=>{y=null,w=!0,b()},e):n||b()};return u.useEffect(()=>{i.current=l},[l]),u.useEffect(()=>()=>{o.current&&clearTimeout(o.current),T[a]&&delete T[a]},[a]),{isOpen:n,open:m=>{!m&&e>0&&!o.current?v():b()},close:$}}const Be=u.createContext({placement:"bottom"}),Ie=u.forwardRef(function(e,t){[e,t]=Le(e,t,Be);let n=e.placement,s={position:"absolute",transform:n==="top"||n==="bottom"?"translateX(-50%)":"translateY(-50%)"};n!=null&&(s[n]="100%");let l=Oe({...e,defaultClassName:"react-aria-OverlayArrow",values:{placement:n}});return l.style&&Object.keys(l.style).forEach(a=>l.style[a]===void 0&&delete l.style[a]),x.createElement("div",{...e,...l,style:{...s,...l.style},ref:t,"data-placement":n})}),q=200,j=({placement:r="bottom",content:e,closeDelay:t=150,className:n,...s})=>{const l=x.useRef(null),a=x.useRef(null),[o,i]=x.useState(!1),[f,p]=x.useState(!1),b=Re({delay:0,closeDelay:t,onOpenChange:g=>{g?(p(!0),setTimeout(()=>{p(!1)},q)):(i(!0),setTimeout(()=>{i(!1)},q))}}),$=we({},b,l),v=$e({targetRef:l,overlayRef:a,placement:r,isOpen:b.isOpen}),{tooltipProps:m}=Se($.tooltipProps,b),d={placement:v.placement},h=b.isOpen||o;return c.jsxs(c.Fragment,{children:[x.cloneElement(x.Children.toArray(s.children)[0],{ref:l,...$.triggerProps}),h&&c.jsxs("span",{className:ve("c__tooltip",{"c__tooltip--exiting":o,"c__tooltip--entering":f},n),"data-placement":v.placement,ref:a,style:{...v.overlayProps.style},...S(s,m),children:[c.jsx(Ie,{...d,children:c.jsx("svg",{width:16,height:16,viewBox:"0 0 16 16",children:c.jsx("path",{d:"M0 0 L8 8 L16 0"})})}),c.jsx("span",{className:"c__tooltip__content",children:e})]})]})};j.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{placement:{required:!1,tsType:{name:"union",raw:'"top" | "bottom" | "left" | "right"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"bottom"',computed:!1}},content:{required:!0,tsType:{name:"ReactNode"},description:""},closeDelay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"150",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}},composes:["PropsWithChildren"]};const Me={title:"Components/Tooltip",component:j,decorators:[r=>c.jsx("div",{style:{padding:"8rem",position:"relative"},children:c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4rem"},children:[c.jsx(r,{}),c.jsx("div",{children:"⬅️ Hover it"})]})})]},C={args:{children:c.jsx(H,{size:"small",icon:c.jsx("span",{className:"material-icons",children:"info"}),color:"tertiary-text"}),content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}},O={render:()=>c.jsxs("div",{children:[c.jsx(j,{placement:"left",content:"Hi there",children:c.jsx(H,{size:"nano",color:"tertiary-text",children:"⬅️"})}),c.jsx(j,{placement:"bottom",content:"Hi there",children:c.jsx(H,{size:"nano",color:"tertiary-text",children:"⬇️"})}),c.jsx(j,{placement:"top",content:"Hi there",children:c.jsx(H,{size:"nano",color:"tertiary-text",children:"⬆️"})}),c.jsx(j,{placement:"right",content:"Hi there",children:c.jsx(H,{size:"nano",color:"tertiary-text",children:"➡️"})})]})},I="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet quam sed nunc commodo consequat. Vestibulum cursus venenatis massa et tempor.",D={args:{children:c.jsx("p",{style:{width:"100px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:I}),content:I}},L={args:{content:I,placement:"bottom",children:c.jsx("div",{style:{display:"inline-flex"},children:c.jsxs("div",{style:{borderRadius:"8px",backgroundColor:"var(--c--theme--colors--greyscale-300)",padding:"1rem",display:"flex",gap:"1rem"},children:[c.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"100%",backgroundColor:"var(--c--theme--colors--greyscale-600)"}}),c.jsx("div",{style:{width:"150px",height:"32px",borderRadius:"4px",backgroundColor:"var(--c--theme--colors--greyscale-400)"}})]})})}},_={args:{children:c.jsx(H,{size:"small",icon:c.jsx("span",{className:"material-icons",children:"info"}),color:"tertiary-text"}),placement:"right",content:c.jsxs("div",{children:[c.jsx("h3",{children:"Heading"}),c.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})}};var A,W,G;C.parameters={...C.parameters,docs:{...(A=C.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: <Button size="small" icon={<span className="material-icons">info</span>} color="tertiary-text" />,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
}`,...(G=(W=C.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var K,V,U;O.parameters={...O.parameters,docs:{...(K=O.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(U=(V=O.parameters)==null?void 0:V.docs)==null?void 0:U.source}}};var Y,X,J;D.parameters={...D.parameters,docs:{...(Y=D.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(J=(X=D.parameters)==null?void 0:X.docs)==null?void 0:J.source}}};var Q,Z,ee;L.parameters={...L.parameters,docs:{...(Q=L.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(ee=(Z=L.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,re,oe;_.parameters={..._.parameters,docs:{...(te=_.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(oe=(re=_.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};const ke=["Default","Placements","OverflowingText","WithElements","WithHtml"],Ke=Object.freeze(Object.defineProperty({__proto__:null,Default:C,OverflowingText:D,Placements:O,WithElements:L,WithHtml:_,__namedExportsOrder:ke,default:Me},Symbol.toStringTag,{value:"Module"}));export{C as D,D as O,O as P,Ke as S,j as T,_ as W,L as a};
