import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{r as u,e as x}from"./index-DTOEHpHZ.js";import{$ as se,a as oe,b as I,c as ie,d as w,e as ae,f as ce,g as ue,h as de,i as ne,j as fe,k as pe,l as me,m as be}from"./focusSafely-BO-rTwXV.js";import{c as $e}from"./index-rkLeB0kx.js";import{$ as ge}from"./useOverlayPosition-CofLYEYW.js";import{B as j}from"./index-DyRkmeWf.js";function ye(...r){return r.length===1&&r[0]?r[0]:e=>{for(let t of r)typeof t=="function"?t(e):t!=null&&(t.current=e)}}function he(r){const e=u.useRef(null);return u.useMemo(()=>({get current(){return e.current},set current(t){e.current=t,typeof r=="function"?r(t):r&&(r.current=t)}}),[r])}function ve(r){let{isDisabled:e,onFocus:t,onBlur:n,onFocusChange:s}=r;const l=u.useCallback(a=>{if(a.target===a.currentTarget)return n&&n(a),s&&s(!1),!0},[n,s]),i=se(l),o=u.useCallback(a=>{const d=oe(a.target),f=d?I(d):I();a.target===a.currentTarget&&f===ie(a.nativeEvent)&&(t&&t(a),s&&s(!0),i(a))},[s,t,i]);return{focusProps:{onFocus:!e&&(t||s||n)?o:void 0,onBlur:!e&&(n||s)?l:void 0}}}function k(r){if(!r)return;let e=!0;return t=>{let n={...t,preventDefault(){t.preventDefault()},isDefaultPrevented(){return t.isDefaultPrevented()},stopPropagation(){e=!0},continuePropagation(){e=!1},isPropagationStopped(){return e}};r(n),e&&t.stopPropagation()}}function xe(r){return{keyboardProps:r.isDisabled?{}:{onKeyDown:k(r.onKeyDown),onKeyUp:k(r.onKeyUp)}}}let Te=x.createContext(null);function Pe(r){let e=u.useContext(Te)||{};ce(e,r);let{ref:t,...n}=e;return n}function Ee(r,e){let{focusProps:t}=ve(r),{keyboardProps:n}=xe(r),s=w(t,n),l=Pe(e),i=r.isDisabled?{}:l,o=u.useRef(r.autoFocus);u.useEffect(()=>{o.current&&e.current&&ae(e.current),o.current=!1},[e]);let a=r.excludeFromTabOrder?-1:0;return r.isDisabled&&(a=void 0),{focusableProps:w({...s,tabIndex:a},i)}}let L=!1,B=0;function je(){L=!0,setTimeout(()=>{L=!1},50)}function F(r){r.pointerType==="touch"&&je()}function He(){if(!(typeof document>"u"))return typeof PointerEvent<"u"&&document.addEventListener("pointerup",F),B++,()=>{B--,!(B>0)&&typeof PointerEvent<"u"&&document.removeEventListener("pointerup",F)}}function le(r){let{onHoverStart:e,onHoverChange:t,onHoverEnd:n,isDisabled:s}=r,[l,i]=u.useState(!1),o=u.useRef({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:"",target:null}).current;u.useEffect(He,[]);let{addGlobalListener:a,removeAllGlobalListeners:d}=ue(),{hoverProps:f,triggerHoverEnd:b}=u.useMemo(()=>{let y=(p,h)=>{if(o.pointerType=h,s||h==="touch"||o.isHovered||!p.currentTarget.contains(p.target))return;o.isHovered=!0;let $=p.currentTarget;o.target=$,a(oe(p.target),"pointerover",E=>{o.isHovered&&o.target&&!de(o.target,E.target)&&g(E,E.pointerType)},{capture:!0}),e&&e({type:"hoverstart",target:$,pointerType:h}),t&&t(!0),i(!0)},g=(p,h)=>{let $=o.target;o.pointerType="",o.target=null,!(h==="touch"||!o.isHovered||!$)&&(o.isHovered=!1,d(),n&&n({type:"hoverend",target:$,pointerType:h}),t&&t(!1),i(!1))},m={};return typeof PointerEvent<"u"&&(m.onPointerEnter=p=>{L&&p.pointerType==="mouse"||y(p,p.pointerType)},m.onPointerLeave=p=>{!s&&p.currentTarget.contains(p.target)&&g(p,p.pointerType)}),{hoverProps:m,triggerHoverEnd:g}},[e,t,n,s,o,a,d]);return u.useEffect(()=>{s&&b({currentTarget:o.target},o.pointerType)},[s]),{hoverProps:f,isHovered:l}}function we(r,e){let t=ne(r,{labelable:!0}),{hoverProps:n}=le({onHoverStart:()=>e==null?void 0:e.open(!0),onHoverEnd:()=>e==null?void 0:e.close()});return{tooltipProps:w(t,n,{role:"tooltip"})}}function Se(r,e,t){let{isDisabled:n,trigger:s}=r,l=fe(),i=u.useRef(!1),o=u.useRef(!1),a=()=>{(i.current||o.current)&&e.open(o.current)},d=$=>{!i.current&&!o.current&&e.close($)};u.useEffect(()=>{let $=E=>{t&&t.current&&E.key==="Escape"&&(E.stopPropagation(),e.close(!0))};if(e.isOpen)return document.addEventListener("keydown",$,!0),()=>{document.removeEventListener("keydown",$,!0)}},[t,e]);let f=()=>{s!=="focus"&&(pe()==="pointer"?i.current=!0:i.current=!1,a())},b=()=>{s!=="focus"&&(o.current=!1,i.current=!1,d())},y=()=>{o.current=!1,i.current=!1,d(!0)},g=()=>{me()&&(o.current=!0,a())},m=()=>{o.current=!1,i.current=!1,d(!0)},{hoverProps:p}=le({isDisabled:n,onHoverStart:f,onHoverEnd:b}),{focusableProps:h}=Ee({isDisabled:n,onFocus:g,onBlur:m},t);return{triggerProps:{"aria-describedby":e.isOpen?l:void 0,...w(h,p,{onPointerDown:y,onKeyDown:y,tabIndex:void 0})},tooltipProps:{id:l}}}const Ce=Symbol("default");function Oe(r){let{className:e,style:t,children:n,defaultClassName:s,defaultChildren:l,defaultStyle:i,values:o}=r;return u.useMemo(()=>{let a,d,f;return typeof e=="function"?a=e({...o,defaultClassName:s}):a=e,typeof t=="function"?d=t({...o,defaultStyle:i||{}}):d=t,typeof n=="function"?f=n({...o,defaultChildren:l}):n==null?f=l:f=n,{className:a??s,style:d||i?{...i,...d}:void 0,children:f??l,"data-rac":""}},[e,t,n,s,l,i,o])}function De(r,e){let t=u.useContext(r);if(e===null)return null;if(t&&typeof t=="object"&&"slots"in t&&t.slots){let n=e||Ce;if(!t.slots[n]){let s=new Intl.ListFormat().format(Object.keys(t.slots).map(i=>`"${i}"`)),l=e?`Invalid slot "${e}".`:"A slot prop is required.";throw new Error(`${l} Valid slot names are ${s}.`)}return t.slots[n]}return t}function _e(r,e,t){let n=De(t,r.slot)||{},{ref:s,...l}=n,i=he(u.useMemo(()=>ye(e,s),[e,s])),o=w(l,r);return"style"in l&&l.style&&"style"in r&&r.style&&(typeof l.style=="function"||typeof r.style=="function"?o.style=a=>{let d=typeof l.style=="function"?l.style(a):l.style,f={...a.defaultStyle,...d},b=typeof r.style=="function"?r.style({...a,defaultStyle:f}):r.style;return{...f,...b}}:o.style={...l.style,...r.style}),[o,i]}const Ne=1500,M=500;let T={},Be=0,S=!1,v=null,P=null;function Le(r={}){let{delay:e=Ne,closeDelay:t=M}=r,{isOpen:n,open:s,close:l}=be(r),i=u.useMemo(()=>`${++Be}`,[]),o=u.useRef(null),a=u.useRef(l),d=()=>{T[i]=y},f=()=>{for(let m in T)m!==i&&(T[m](!0),delete T[m])},b=()=>{o.current&&clearTimeout(o.current),o.current=null,f(),d(),S=!0,s(),v&&(clearTimeout(v),v=null),P&&(clearTimeout(P),P=null)},y=m=>{m||t<=0?(o.current&&clearTimeout(o.current),o.current=null,a.current()):o.current||(o.current=setTimeout(()=>{o.current=null,a.current()},t)),v&&(clearTimeout(v),v=null),S&&(P&&clearTimeout(P),P=setTimeout(()=>{delete T[i],P=null,S=!1},Math.max(M,t)))},g=()=>{f(),d(),!n&&!v&&!S?v=setTimeout(()=>{v=null,S=!0,b()},e):n||b()};return u.useEffect(()=>{a.current=l},[l]),u.useEffect(()=>()=>{o.current&&clearTimeout(o.current),T[i]&&delete T[i]},[i]),{isOpen:n,open:m=>{!m&&e>0&&!o.current?g():b()},close:y}}const Re=u.createContext({placement:"bottom"}),Ie=u.forwardRef(function(e,t){[e,t]=_e(e,t,Re);let n=e.placement,s={position:"absolute",transform:n==="top"||n==="bottom"?"translateX(-50%)":"translateY(-50%)"};n!=null&&(s[n]="100%");let l=Oe({...e,defaultClassName:"react-aria-OverlayArrow",values:{placement:n}});l.style&&Object.keys(l.style).forEach(o=>l.style[o]===void 0&&delete l.style[o]);let i=ne(e);return x.createElement("div",{...i,...l,style:{...s,...l.style},ref:t,"data-placement":n})}),z=200,H=({placement:r="bottom",content:e,closeDelay:t=150,className:n,...s})=>{const l=x.useRef(null),i=x.useRef(null),[o,a]=x.useState(!1),[d,f]=x.useState(!1),b=Le({delay:0,closeDelay:t,onOpenChange:$=>{$?(f(!0),setTimeout(()=>{f(!1)},z)):(a(!0),setTimeout(()=>{a(!1)},z))}}),y=Se({},b,l),g=ge({targetRef:l,overlayRef:i,placement:r,isOpen:b.isOpen}),{tooltipProps:m}=we(y.tooltipProps,b),p={placement:g.placement},h=b.isOpen||o;return c.jsxs(c.Fragment,{children:[x.cloneElement(x.Children.toArray(s.children)[0],{ref:l,...y.triggerProps}),h&&c.jsxs("span",{className:$e("c__tooltip",{"c__tooltip--exiting":o,"c__tooltip--entering":d},n),"data-placement":g.placement,ref:i,style:{...g.overlayProps.style},...w(s,m),children:[c.jsx(Ie,{...p,children:c.jsx("svg",{width:16,height:16,viewBox:"0 0 16 16",children:c.jsx("path",{d:"M0 0 L8 8 L16 0"})})}),c.jsx("span",{className:"c__tooltip__content",children:e})]})]})};H.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{placement:{required:!1,tsType:{name:"union",raw:'"top" | "bottom" | "left" | "right"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"bottom"',computed:!1}},content:{required:!0,tsType:{name:"ReactNode"},description:""},closeDelay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"150",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}},composes:["PropsWithChildren"]};const ke={title:"Components/Tooltip",component:H,decorators:[r=>c.jsx("div",{style:{padding:"8rem",position:"relative"},children:c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4rem"},children:[c.jsx(r,{}),c.jsx("div",{children:"⬅️ Hover it"})]})})]},C={args:{children:c.jsx(j,{size:"small",icon:c.jsx("span",{className:"material-icons",children:"info"}),color:"tertiary-text"}),content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}},O={render:()=>c.jsxs("div",{children:[c.jsx(H,{placement:"left",content:"Hi there",children:c.jsx(j,{size:"nano",color:"tertiary-text",children:"⬅️"})}),c.jsx(H,{placement:"bottom",content:"Hi there",children:c.jsx(j,{size:"nano",color:"tertiary-text",children:"⬇️"})}),c.jsx(H,{placement:"top",content:"Hi there",children:c.jsx(j,{size:"nano",color:"tertiary-text",children:"⬆️"})}),c.jsx(H,{placement:"right",content:"Hi there",children:c.jsx(j,{size:"nano",color:"tertiary-text",children:"➡️"})})]})},R="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet quam sed nunc commodo consequat. Vestibulum cursus venenatis massa et tempor.",D={args:{children:c.jsx("p",{style:{width:"100px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:R}),content:R}},_={args:{content:R,placement:"bottom",children:c.jsx("div",{style:{display:"inline-flex"},children:c.jsxs("div",{style:{borderRadius:"8px",backgroundColor:"var(--c--theme--colors--greyscale-300)",padding:"1rem",display:"flex",gap:"1rem"},children:[c.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"100%",backgroundColor:"var(--c--theme--colors--greyscale-600)"}}),c.jsx("div",{style:{width:"150px",height:"32px",borderRadius:"4px",backgroundColor:"var(--c--theme--colors--greyscale-400)"}})]})})}},N={args:{children:c.jsx(j,{size:"small",icon:c.jsx("span",{className:"material-icons",children:"info"}),color:"tertiary-text"}),placement:"right",content:c.jsxs("div",{children:[c.jsx("h3",{children:"Heading"}),c.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})}};var q,A,W;C.parameters={...C.parameters,docs:{...(q=C.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    children: <Button size="small" icon={<span className="material-icons">info</span>} color="tertiary-text" />,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
}`,...(W=(A=C.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};var K,V,G;O.parameters={...O.parameters,docs:{...(K=O.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(G=(V=O.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var U,Y,X;D.parameters={...D.parameters,docs:{...(U=D.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(X=(Y=D.parameters)==null?void 0:Y.docs)==null?void 0:X.source}}};var J,Q,Z;_.parameters={..._.parameters,docs:{...(J=_.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Z=(Q=_.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var ee,te,re;N.parameters={...N.parameters,docs:{...(ee=N.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(re=(te=N.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};const Fe=["Default","Placements","OverflowingText","WithElements","WithHtml"],Ve=Object.freeze(Object.defineProperty({__proto__:null,Default:C,OverflowingText:D,Placements:O,WithElements:_,WithHtml:N,__namedExportsOrder:Fe,default:ke},Symbol.toStringTag,{value:"Module"}));export{C as D,D as O,O as P,Ve as S,H as T,N as W,_ as a};
