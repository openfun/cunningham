import{j as r}from"./jsx-runtime-BlAj40OV.js";import{c as d,e as a,a as c,u as g,F as h,o as u,g as s,b as o,d as p}from"./reactHookFormUtils-BB7B_-z8.js";import{R as m}from"./stories-utils-D4c7spkv.js";import{C as f}from"./index-O98rRBz_.js";import{B as x}from"./index-ClGxLur_.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D3juuwMT.js";import"./index-Bl6ORisp.js";import"./index-CAEZVxT0.js";import"./index-C5IyANkU.js";import"./index-DrEGRFtC.js";const W={title:"Components/Forms/Examples/React-Hook-Form"},b=d().shape({email:a().email().required(),password:a().min(8).required(),rememberMe:c().required().oneOf([!0])}),t=()=>{const e=g({defaultValues:{email:"",password:"",rememberMe:!1},mode:"onChange",reValidateMode:"onChange",resolver:p(b)});return r.jsx(h,{...e,children:r.jsxs("form",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"300px"},onSubmit:e.handleSubmit(u),children:[r.jsx("h1",{className:"fs-h3 fw-bold clr-greyscale-900",style:{textAlign:"center"},children:"Log in"}),r.jsx(m,{label:"Email",fullWidth:!0,state:s("email",e.formState),text:o("email",e.formState),...e.register("email")}),r.jsx(m,{label:"Password",state:s("password",e.formState),type:"password",text:o("password",e.formState)||"Forgot your password?",fullWidth:!0,...e.register("password")}),r.jsx("div",{children:r.jsx(f,{label:"Remember me",state:s("rememberMe",e.formState),text:o("rememberMe",e.formState),...e.register("rememberMe")})}),r.jsx(x,{fullWidth:!0,children:"Log in"}),r.jsxs("div",{className:"fs-m clr-greyscale-800",style:{textAlign:"center"},children:["You do not have an account?"," ",r.jsx("a",{href:"/#",className:"clr-greyscale-800",children:"Register"})]})]})})};t.__docgenInfo={description:"",methods:[],displayName:"Login"};var n,l,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
