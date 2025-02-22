import{H as v}from"./chunk-7OYLCEKK-CeNi_8NX.js";import{a5 as o,R as f,b as g,aN as b,j as e,H as C,a8 as y,a9 as E,aQ as F,t as h,w as s,x as I,B as p}from"./index-SY1KZpDV.js";import{K as S}from"./chunk-6HTZNHPT-BDPMLxeP.js";import{b as a,u as T}from"./chunk-AYRG2MQL-C-Vmidzb.js";import{T as L}from"./textarea-GoUroCbU.js";import{S as t}from"./select-CdDUEMk1.js";import"./prompt-DfbPhKWW.js";import"./triangles-mini-BT2VjD-k.js";import"./check-DkOvD93P.js";var M=o.object({name:o.string().min(1),handle:o.string().min(1),description:o.string().optional(),status:o.enum(["active","inactive"]),visibility:o.enum(["public","internal"])}),N=({category:l})=>{const{t:i}=g(),{handleSuccess:d}=T(),n=y({defaultValues:{name:l.name,handle:l.handle,description:l.description||"",status:l.is_active?"active":"inactive",visibility:l.is_internal?"internal":"public"},resolver:E(M)}),{mutateAsync:x,isPending:m}=F(l.id),u=n.handleSubmit(async r=>{await x({name:r.name,description:r.description,handle:r.handle,is_active:r.status==="active",is_internal:r.visibility==="internal"},{onSuccess:()=>{h.success(i("categories.edit.successToast")),d()},onError:c=>{h.error(c.message)}})});return e.jsx(a.Form,{form:n,children:e.jsxs(S,{onSubmit:u,className:"flex flex-1 flex-col",children:[e.jsx(a.Body,{children:e.jsxs("div",{className:"flex flex-col gap-y-4",children:[e.jsx(s.Field,{control:n.control,name:"name",render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:i("fields.title")}),e.jsx(s.Control,{children:e.jsx(I,{autoComplete:"off",...r})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:n.control,name:"handle",render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{optional:!0,tooltip:i("collections.handleTooltip"),children:i("fields.handle")}),e.jsx(s.Control,{children:e.jsx(v,{...r})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:n.control,name:"description",render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{optional:!0,children:i("fields.description")}),e.jsx(s.Control,{children:e.jsx(L,{...r})}),e.jsx(s.ErrorMessage,{})]})}),e.jsxs("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:[e.jsx(s.Field,{control:n.control,name:"status",render:({field:{ref:r,onChange:c,...j}})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:i("categories.fields.status.label")}),e.jsx(s.Control,{children:e.jsxs(t,{...j,onValueChange:c,children:[e.jsx(t.Trigger,{ref:r,children:e.jsx(t.Value,{})}),e.jsxs(t.Content,{children:[e.jsx(t.Item,{value:"active",children:i("categories.fields.status.active")}),e.jsx(t.Item,{value:"inactive",children:i("categories.fields.status.inactive")})]})]})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:n.control,name:"visibility",render:({field:{ref:r,onChange:c,...j}})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:i("categories.fields.visibility.label")}),e.jsx(s.Control,{children:e.jsxs(t,{...j,onValueChange:c,children:[e.jsx(t.Trigger,{ref:r,children:e.jsx(t.Value,{})}),e.jsxs(t.Content,{children:[e.jsx(t.Item,{value:"public",children:i("categories.fields.visibility.public")}),e.jsx(t.Item,{value:"internal",children:i("categories.fields.visibility.internal")})]})]})}),e.jsx(s.ErrorMessage,{})]})})]})]})}),e.jsx(a.Footer,{children:e.jsxs("div",{className:"flex items-center gap-x-2",children:[e.jsx(a.Close,{asChild:!0,children:e.jsx(p,{size:"small",variant:"secondary",children:i("actions.cancel")})}),e.jsx(p,{size:"small",type:"submit",isLoading:m,children:i("actions.save")})]})})]})})},K=()=>{const{id:l}=f(),{t:i}=g(),{product_category:d,isPending:n,isError:x,error:m}=b(l),u=!n&&!!d;if(x)throw m;return e.jsxs(a,{children:[e.jsxs(a.Header,{children:[e.jsx(a.Title,{asChild:!0,children:e.jsx(C,{children:i("categories.edit.header")})}),e.jsx(a.Description,{className:"sr-only",children:i("categories.edit.description")})]}),u&&e.jsx(N,{category:d})]})};export{K as Component};
