import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as l}from"./index-DywkESLE.js";import{M as r,C as n,S as t,A as a}from"./index-DjiUAfnp.js";import{S as c,T as i,a as h,M as u,L as x,F as j,H as m,P as p,C as f,E as g,b as y,D as b}from"./index.stories-DgwZctDY.js";import{ConfirmationModal as M,DeleteConfirmationModal as k,NeutralModal as w,SuccessModal as C,InfoModal as v,ErrorModal as z,WarningModal as A}from"./PreBuilt.stories-D-V4NMCJ.js";import{M as B}from"./index-eFf25hYI.js";import"./index-DTOEHpHZ.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./iframe-BKUbjXsD.js";import"./index-D2FdBkVr.js";import"./index-DO9VteM4.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-DyRkmeWf.js";import"./longLorem-CjgWBgpH.js";import"./ToastProvider-Dr5c6mPT.js";import"./index-rkLeB0kx.js";import"./cunningham-tokens-C-zj90pO.js";import"./index-CAEZVxT0.js";function d(s){const o={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:c}),`
`,e.jsx(o.h1,{id:"modal",children:"Modal"}),`
`,e.jsx(o.p,{children:"Cunningham provides a versatile Modal component for displaying any kind of information."}),`
`,e.jsx(n,{of:i,story:{inline:!1}}),`
`,e.jsx(t,{language:"ts",dark:!0,format:!1,code:'import { Modal } from "@openfun/cunningham-react";'}),`
`,e.jsxs(o.blockquote,{children:[`
`,e.jsx(o.p,{children:"⚠️ If you want to try dark theme on the modal, you need to go on individual stories. It will not work on this page due to iframe wrapping."}),`
`]}),`
`,e.jsx(o.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(o.p,{children:["The component is easy to use. You need to use the ",e.jsx(o.code,{children:"useModal()"})," hook to get all the needed props and helper functions."]}),`
`,e.jsx(t,{language:"tsx",dark:!0,format:!1,code:`
import { CunninghamProvider, Button, Modal } from "@openfun/cunningham-react";

const App = () => {
  const modal = useModal();
  return (
    <CunninghamProvider>
      <Button onClick={modal.open}>Open Modal</Button>
      <Modal {...modal} size={ModalSize.SMALL} title="My title">
        My modal
      </Modal>
    </CunninghamProvider>
  );
};
  `}),`
`,e.jsx(o.p,{children:"Here you go! You bring to live your first modal! 🥳"}),`
`,e.jsxs(o.h3,{id:"about-usemodal-hook",children:["About ",e.jsx(o.code,{children:"useModal()"})," hook"]}),`
`,e.jsxs(o.p,{children:["This hook is just a simple wrapper around the ",e.jsx(o.code,{children:"useState()"}),` hook to store some internal states, avoiding you to do it yourself each time you use a modal.
It returns an object with the following properties:`]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"isOpen"}),": A boolean indicating if the modal is open or not."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"onClose"}),": A function called when modal closes."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"open"}),": A function to open the modal."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"close"}),": A function to close the modal. It does the same as ",e.jsx(o.code,{children:"onClose"})," but it makes more semantic sense to use it in your code."]}),`
`]}),`
`,e.jsx(o.h3,{id:"programatically-close-the-modal",children:"Programatically close the modal"}),`
`,e.jsxs(o.p,{children:["You can close the modal by calling the ",e.jsx(o.code,{children:"close()"})," function returned by the ",e.jsx(o.code,{children:"useModal()"})," hook."]}),`
`,e.jsx(o.p,{children:"Here is an example of a modal automatically closing after 2 seconds."}),`
`,e.jsx(t,{language:"tsx",dark:!0,format:!1,code:`
import { CunninghamProvider, Button, Modal } from "@openfun/cunningham-react";

const App = () => {
  const modal = useModal();
  useEffect(() => {
    modal.open();
    setTimeout(() => {
      modal.close();
    }, 2000);
  }, []);
  return (
    <CunninghamProvider>
      <Modal {...modal} size={ModalSize.SMALL} title="My title">
        My modal
      </Modal>
    </CunninghamProvider>
  );
};
  `}),`
`,e.jsx(o.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsxs(o.p,{children:["The modal component comes with multiple sizes: ",e.jsx(o.code,{children:"ModalSize.SMALL"}),", ",e.jsx(o.code,{children:"ModalSize.MEDIUM"}),", ",e.jsx(o.code,{children:"ModalSize.LARGE"})," and ",e.jsx(o.code,{children:"ModalSize.FULL"}),"."]}),`
`,e.jsxs(o.p,{children:["You can set the size of the modal by passing the ",e.jsx(o.code,{children:"size"})," prop."]}),`
`,e.jsx(o.h3,{id:"small",children:"Small"}),`
`,e.jsx(n,{of:h,story:{inline:!1}}),`
`,e.jsx(o.h3,{id:"medium",children:"Medium"}),`
`,e.jsx(n,{of:u,story:{inline:!1}}),`
`,e.jsx(o.h3,{id:"large",children:"Large"}),`
`,e.jsx(n,{of:x,story:{inline:!1}}),`
`,e.jsx(o.h3,{id:"full",children:"Full"}),`
`,e.jsx(n,{of:j,story:{inline:!1}}),`
`,e.jsx(o.h2,{id:"close-button",children:"Close button"}),`
`,e.jsxs(o.p,{children:["You can hide the close button by passing the ",e.jsx(o.code,{children:"hideCloseButton"})," prop."]}),`
`,e.jsx(n,{of:m,story:{inline:!1}}),`
`,e.jsx(o.h2,{id:"buttons",children:"Buttons"}),`
`,e.jsx(o.h3,{id:"right-buttons",children:"Right buttons"}),`
`,e.jsxs(o.p,{children:["You can add buttons on the right side of the modal by passing the ",e.jsx(o.code,{children:"rightActions"})," prop."]}),`
`,e.jsx(n,{of:p,story:{inline:!1}}),`
`,e.jsx(o.h3,{id:"left-buttons",children:"Left buttons"}),`
`,e.jsxs(o.p,{children:["You can add buttons on the left side of the modal by passing the ",e.jsx(o.code,{children:"leftActions"})," prop."]}),`
`,e.jsx(n,{of:i,story:{inline:!1}}),`
`,e.jsx(o.h3,{id:"center-buttons",children:"Center buttons"}),`
`,e.jsxs(o.p,{children:["You can add buttons on the center of the modal by passing the ",e.jsx(o.code,{children:"actions"})," prop."]}),`
`,e.jsx(n,{of:f,story:{inline:!1}}),`
`,e.jsx(o.h2,{id:"icon",children:"Icon"}),`
`,e.jsxs(o.p,{children:["You can add an icon to the modal by passing the ",e.jsx(o.code,{children:"titleIcon"})," prop."]}),`
`,e.jsx(n,{of:g,story:{inline:!1}}),`
`,e.jsx(o.h2,{id:"close-on-click-outside",children:"Close on click outside"}),`
`,e.jsxs(o.p,{children:["By default, the modal will not be closed when you click outside of it in order to match the default behavior of the ",e.jsx(o.code,{children:"<dialog/>"}),` element.
You can change this behavior by passing the `,e.jsx(o.code,{children:"closeOnClickOutside"})," prop."]}),`
`,e.jsx(n,{of:y,story:{inline:!1}}),`
`,e.jsx(o.h2,{id:"close-on-escape",children:"Close on escape"}),`
`,e.jsxs(o.p,{children:["By default, the modal will be closed when you press the ",e.jsx(o.code,{children:"esc"})," key. You can change this behavior by passing the ",e.jsx(o.code,{children:"closeOnEsc"})," prop."]}),`
`,e.jsx(n,{of:b,story:{inline:!1}}),`
`,e.jsx(o.h2,{id:"pre-built-modals",children:"Pre Built Modals"}),`
`,e.jsxs(o.p,{children:[`As we know that developers love to have handy shortcuts for common use cases, we provide some pre built modals that we
prevent you from adding `,e.jsx(o.code,{children:"<Modal/>"})," and using ",e.jsx(o.code,{children:"useModal()"})," each time you want to use those pre built modals."]}),`
`,e.jsx(o.p,{children:"The way you will be able to use those pre built modals is by using async calls that return the decision of the user."}),`
`,e.jsxs(o.blockquote,{children:[`
`,e.jsx(o.p,{children:"For instance the following code shows how to display a confirmation modal asking the user if he wants to continue or not."}),`
`]}),`
`,e.jsx(t,{language:"tsx",dark:!0,format:!1,code:`
import { CunninghamProvider, Button, Modal } from "@openfun/cunningham-react";

const App = () => {
  const modals = useModals();
  const ask = async () => {
      const decision = await modals.confirmationModal();
      alert("You decided: " + decision);
  };
  return <Button onClick={ask}>Open</Button>;
};
`}),`
`,e.jsx(o.p,{children:e.jsxs(o.strong,{children:["About the ",e.jsx(o.code,{children:"decision"})," variable:"]})}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"decision"})," is truthy if the user accepted."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"decision"})," is null if the user denied."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"decision"})," is undefined if the user closed the modal via ",e.jsx(o.code,{children:"esc"})," or close button."]}),`
`]}),`
`,e.jsx(o.p,{children:e.jsxs(o.strong,{children:["Of course you can customize the title and the content of the modal by using the ",e.jsx(o.code,{children:"props"})," first argument of the functions."]})}),`
`,e.jsx(o.h3,{id:"confirmation-modal",children:"Confirmation modal"}),`
`,e.jsx(n,{of:M,story:{inline:!1}}),`
`,e.jsx(o.h3,{id:"delete-confirmation-modal",children:"Delete confirmation modal"}),`
`,e.jsx(n,{of:k,story:{inline:!1}}),`
`,e.jsx(o.h3,{id:"message-modal",children:"Message modal"}),`
`,e.jsxs(o.p,{children:["This modal can be used to display a message to the user. It is possible to use multiple variant of it by using ",e.jsx(o.code,{children:"messageType"})," with ",e.jsx(o.code,{children:"VariantType"})," enum."]}),`
`,e.jsx(o.h4,{id:"neutral",children:"Neutral"}),`
`,e.jsx(n,{of:w,story:{inline:!1}}),`
`,e.jsx(n,{of:C,story:{inline:!1}}),`
`,e.jsx(n,{of:v,story:{inline:!1}}),`
`,e.jsx(n,{of:z,story:{inline:!1}}),`
`,e.jsx(n,{of:A,story:{inline:!1}}),`
`,e.jsx(o.h2,{id:"props",children:"Props"}),`
`,e.jsxs(o.p,{children:["These are the props of ",e.jsx(o.code,{children:"Modal"}),"."]}),`
`,e.jsx(a,{of:B}),`
`,e.jsx(o.h2,{id:"design-tokens",children:"Design tokens"}),`
`,e.jsx(o.p,{children:"Here a the custom design tokens defined by the Toast."}),`
`,e.jsxs(o.table,{children:[e.jsx(o.thead,{children:e.jsxs(o.tr,{children:[e.jsx(o.th,{children:"Token"}),e.jsx(o.th,{children:"Description"})]})}),e.jsxs(o.tbody,{children:[e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"background-color"}),e.jsx(o.td,{children:"Default background color"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"backdrop-color"}),e.jsx(o.td,{children:"Default backdrop color"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"border-radius"}),e.jsx(o.td,{children:"Border radius of the modal"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"border-color"}),e.jsx(o.td,{children:"Border color of the modal"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"box-shadow"}),e.jsx(o.td,{children:"Box shadow of the modal"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"title-font-weight"}),e.jsx(o.td,{children:"Font weight of the modal title"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"color"}),e.jsx(o.td,{children:"Color of the modal title"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"content-font-size"}),e.jsx(o.td,{children:"Font size of the modal content"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"content-font-weight"}),e.jsx(o.td,{children:"Font weight of the modal content"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"content-color"}),e.jsx(o.td,{children:"Font Color of the modal content"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"width-small"}),e.jsx(o.td,{children:"Width of the small modal size"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"width-medium"}),e.jsx(o.td,{children:"Width of the medium modal size"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"width-large"}),e.jsx(o.td,{children:"Width of the large modal size"})]})]})]})]})}function V(s={}){const{wrapper:o}={...l(),...s.components};return o?e.jsx(o,{...s,children:e.jsx(d,{...s})}):d(s)}export{V as default};
