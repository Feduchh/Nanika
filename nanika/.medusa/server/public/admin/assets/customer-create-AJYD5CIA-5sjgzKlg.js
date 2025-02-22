import{a1 as f,a3 as l,j as e,b as h,dC as p,a8 as C,a9 as y,t as m,H as g,T as _,w as s,x as t,B as c}from"./index-SY1KZpDV.js";import{K as b}from"./chunk-6HTZNHPT-BDPMLxeP.js";import{R as n,u as v}from"./chunk-AYRG2MQL-C-Vmidzb.js";import"./prompt-DfbPhKWW.js";var F=f({email:l().email(),first_name:l().optional(),last_name:l().optional(),company_name:l().optional(),phone:l().optional()}),N=()=>{const{t:o}=h(),{handleSuccess:d}=v(),{mutateAsync:x,isPending:u}=p(),a=C({defaultValues:{email:"",first_name:"",last_name:"",phone:"",company_name:""},resolver:y(F)}),j=a.handleSubmit(async r=>{await x({email:r.email,first_name:r.first_name||void 0,last_name:r.last_name||void 0,company_name:r.company_name||void 0,phone:r.phone||void 0},{onSuccess:({customer:i})=>{m.success(o("customers.create.successToast",{email:i.email})),d(`/customers/${i.id}`)},onError:i=>{m.error(i.message)}})});return e.jsx(n.Form,{form:a,children:e.jsxs(b,{onSubmit:j,className:"flex flex-1 flex-col overflow-hidden",children:[e.jsx(n.Header,{}),e.jsx(n.Body,{className:"flex flex-1 flex-col items-center overflow-y-auto py-16",children:e.jsxs("div",{className:"flex w-full max-w-[720px] flex-col gap-y-8",children:[e.jsxs("div",{children:[e.jsx(g,{children:o("customers.create.header")}),e.jsx(_,{size:"small",className:"text-ui-fg-subtle",children:o("customers.create.hint")})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:[e.jsx(s.Field,{control:a.control,name:"first_name",render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{optional:!0,children:o("fields.firstName")}),e.jsx(s.Control,{children:e.jsx(t,{autoComplete:"off",...r})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:a.control,name:"last_name",render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{optional:!0,children:o("fields.lastName")}),e.jsx(s.Control,{children:e.jsx(t,{autoComplete:"off",...r})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:a.control,name:"email",render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:o("fields.email")}),e.jsx(s.Control,{children:e.jsx(t,{autoComplete:"off",...r})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:a.control,name:"company_name",render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{optional:!0,children:o("fields.company")}),e.jsx(s.Control,{children:e.jsx(t,{autoComplete:"off",...r})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:a.control,name:"phone",render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{optional:!0,children:o("fields.phone")}),e.jsx(s.Control,{children:e.jsx(t,{autoComplete:"off",...r})}),e.jsx(s.ErrorMessage,{})]})})]})]})}),e.jsx(n.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(n.Close,{asChild:!0,children:e.jsx(c,{size:"small",variant:"secondary",children:o("actions.cancel")})}),e.jsx(c,{size:"small",variant:"primary",type:"submit",isLoading:u,children:o("actions.create")})]})})]})})},L=()=>e.jsx(n,{children:e.jsx(N,{})});export{L as Component};
