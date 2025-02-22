import{u as g}from"./chunk-6CNRNROJ-BgkEds15.js";import{C as b}from"./chunk-W6N53UNG-D6pxoKSX.js";import{a5 as i,b as L,g as I,j as e,H as q,a8 as K,a9 as k,e6 as w,s as C,t as F,w as a,x as z,B as v}from"./index-SY1KZpDV.js";import{K as M}from"./chunk-6HTZNHPT-BDPMLxeP.js";import{b as t,u as R}from"./chunk-AYRG2MQL-C-Vmidzb.js";import{S as c}from"./select-CdDUEMk1.js";import"./x-mark-mini-CzXlcZs0.js";import"./triangles-mini-BT2VjD-k.js";import"./plus-mini-fsdo4Nhg.js";import"./prompt-DfbPhKWW.js";import"./check-DkOvD93P.js";var B=i.object({name:i.string().min(1),default_currency_code:i.string().optional(),default_region_id:i.string().optional(),default_sales_channel_id:i.string().optional(),default_location_id:i.string().optional()}),H=({store:s})=>{var y,S;const{t:r}=L(),{handleSuccess:x}=R(),l=K({defaultValues:{name:s.name,default_region_id:s.default_region_id||void 0,default_currency_code:((S=(y=s.supported_currencies)==null?void 0:y.find(n=>n.is_default))==null?void 0:S.currency_code)||void 0,default_sales_channel_id:s.default_sales_channel_id||void 0,default_location_id:s.default_location_id||void 0},resolver:k(B)}),{mutateAsync:p,isPending:j}=w(s.id),u=g({queryKey:["regions","default_region_id"],queryFn:n=>C.admin.region.list({...n,fields:"id,name"}),defaultValue:s.default_region_id||void 0,getOptions:n=>n.regions.map(o=>({label:o.name,value:o.id}))}),m=g({queryFn:n=>C.admin.salesChannel.list({...n,fields:"id,name"}),getOptions:n=>n.sales_channels.map(o=>({label:o.name,value:o.id})),queryKey:["sales_channels","default_sales_channel_id"],defaultValue:s.default_sales_channel_id||void 0}),h=g({queryFn:n=>C.admin.stockLocation.list({...n,fields:"id,name"}),getOptions:n=>n.stock_locations.map(o=>({label:o.name,value:o.id})),queryKey:["stock_locations","default_location_id"],defaultValue:s.default_location_id||void 0}),E=l.handleSubmit(async n=>{var V;const{default_currency_code:o,..._}=n,d={..._,supported_currencies:(V=s.supported_currencies)==null?void 0:V.map(f=>({...f,is_default:f.currency_code===o}))};await p(d,{onSuccess:()=>{F.success(r("store.toast.update")),x()},onError:f=>{F.error(f.message)}})});return e.jsx(t.Form,{form:l,children:e.jsxs(M,{onSubmit:E,className:"flex h-full flex-col",children:[e.jsx(t.Body,{children:e.jsxs("div",{className:"flex flex-col gap-y-8",children:[e.jsx(a.Field,{control:l.control,name:"name",render:({field:n})=>e.jsxs(a.Item,{children:[e.jsx(a.Label,{children:r("fields.name")}),e.jsx(a.Control,{children:e.jsx(z,{placeholder:"ACME",...n})}),e.jsx(a.ErrorMessage,{})]})}),e.jsx(a.Field,{control:l.control,name:"default_currency_code",render:({field:{onChange:n,...o}})=>{var _;return e.jsxs(a.Item,{children:[e.jsx(a.Label,{children:r("store.defaultCurrency")}),e.jsx(a.Control,{children:e.jsxs(c,{...o,onValueChange:n,children:[e.jsx(c.Trigger,{ref:o.ref,children:e.jsx(c.Value,{})}),e.jsx(c.Content,{children:(_=s.supported_currencies)==null?void 0:_.map(d=>e.jsx(c.Item,{value:d.currency_code,children:d.currency_code.toUpperCase()},d.currency_code))})]})})]})}}),e.jsx(a.Field,{control:l.control,name:"default_region_id",render:({field:n})=>e.jsxs(a.Item,{children:[e.jsx(a.Label,{children:r("store.defaultRegion")}),e.jsx(a.Control,{children:e.jsx(b,{...n,options:u.options,searchValue:u.searchValue,onSearchValueChange:u.onSearchValueChange,disabled:u.disabled})})]})}),e.jsx(a.Field,{control:l.control,name:"default_sales_channel_id",render:({field:n})=>e.jsxs(a.Item,{children:[e.jsx(a.Label,{children:r("store.defaultSalesChannel")}),e.jsx(a.Control,{children:e.jsx(b,{...n,options:m.options,searchValue:m.searchValue,onSearchValueChange:m.onSearchValueChange,disabled:m.disabled})})]})}),e.jsx(a.Field,{control:l.control,name:"default_location_id",render:({field:n})=>e.jsxs(a.Item,{children:[e.jsx(a.Label,{children:r("store.defaultLocation")}),e.jsx(a.Control,{children:e.jsx(b,{...n,options:h.options,searchValue:h.searchValue,onSearchValueChange:h.onSearchValueChange,disabled:h.disabled})})]})})]})}),e.jsx(t.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(t.Close,{asChild:!0,children:e.jsx(v,{size:"small",variant:"secondary",children:r("actions.cancel")})}),e.jsx(v,{size:"small",isLoading:j,type:"submit",children:r("actions.save")})]})})]})})},W=()=>{const{t:s}=L(),{store:r,isPending:x,isError:l,error:p}=I();if(l)throw p;const j=!!r&&!x;return e.jsxs(t,{children:[e.jsx(t.Header,{children:e.jsx(q,{children:s("store.edit.header")})}),j&&e.jsx(H,{store:r})]})};export{W as Component};
