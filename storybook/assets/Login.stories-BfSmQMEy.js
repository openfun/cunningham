import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{u as d,F as c,g as s,b as o,o as g,d as h,c as u,a as p,e as a}from"./reactHookFormUtils-DBL7F8xI.js";import{R as m}from"./stories-utils-DepYJP9v.js";import{C as f}from"./index-B7qWtOxe.js";import{B as x}from"./index-DyRkmeWf.js";import"./index-DTOEHpHZ.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./index-46f45BQC.js";import"./index-rkLeB0kx.js";import"./index-CAEZVxT0.js";import"./index-D7DNl-ap.js";import"./index-3i_lEcpX.js";const W={title:"Components/Forms/Examples/React-Hook-Form"},b=u().shape({email:a().email().required(),password:a().min(8).required(),rememberMe:p().required().oneOf([!0])}),t=()=>{const e=d({defaultValues:{email:"",password:"",rememberMe:!1},mode:"onChange",reValidateMode:"onChange",resolver:h(b)});return r.jsx(c,{...e,children:r.jsxs("form",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"300px"},onSubmit:e.handleSubmit(g),children:[r.jsx("h1",{className:"fs-h3 fw-bold clr-greyscale-900",style:{textAlign:"center"},children:"Log in"}),r.jsx(m,{label:"Email",fullWidth:!0,state:o("email",e.formState),text:s("email",e.formState),...e.register("email")}),r.jsx(m,{label:"Password",state:o("password",e.formState),type:"password",text:s("password",e.formState)||"Forgot your password?",fullWidth:!0,...e.register("password")}),r.jsx("div",{children:r.jsx(f,{label:"Remember me",state:o("rememberMe",e.formState),text:s("rememberMe",e.formState),...e.register("rememberMe")})}),r.jsx(x,{fullWidth:!0,children:"Log in"}),r.jsxs("div",{className:"fs-m clr-greyscale-800",style:{textAlign:"center"},children:["You do not have an account?"," ",r.jsx("a",{href:"/#",className:"clr-greyscale-800",children:"Register"})]})]})})};t.__docgenInfo={description:"",methods:[],displayName:"Login"};var n,l,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const methods = useForm<LoginStoryFormValues>({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false
    },
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(loginSchema)
  });
  return <FormProvider {...methods}>
      <form style={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      width: "300px"
    }} onSubmit={methods.handleSubmit(onSubmit)}>
        <h1 className="fs-h3 fw-bold clr-greyscale-900" style={{
        textAlign: "center"
      }}>
          Log in
        </h1>
        <RhfInput label="Email" fullWidth={true} state={getFieldState("email", methods.formState)} text={getFieldErrorMessage("email", methods.formState)} {...methods.register("email")} />
        <RhfInput label="Password" state={getFieldState("password", methods.formState)} type="password" text={getFieldErrorMessage("password", methods.formState) || "Forgot your password?"} fullWidth={true} {...methods.register("password")} />
        <div>
          <Checkbox label="Remember me" state={getFieldState("rememberMe", methods.formState)} text={getFieldErrorMessage("rememberMe", methods.formState)} {...methods.register("rememberMe")} />
        </div>
        <Button fullWidth={true}>Log in</Button>
        <div className="fs-m clr-greyscale-800" style={{
        textAlign: "center"
      }}>
          You do not have an account?{" "}
          <a href="/#" className="clr-greyscale-800">
            Register
          </a>
        </div>
      </form>
    </FormProvider>;
}`,...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const P=["Login"];export{t as Login,P as __namedExportsOrder,W as default};
