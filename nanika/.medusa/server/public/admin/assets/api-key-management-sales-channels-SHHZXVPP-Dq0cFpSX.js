import{V as h}from"./chunk-F6ZOHZVB-Cjt9qEyl.js";import{u as E,a as F,b as M,c as P}from"./chunk-6TVXQXDC-Cwn-sVgo.js";import{a1 as D,ad as k,a3 as H,R as z,eW as B,j as e,b as C,a8 as I,a9 as N,r as f,e_ as V,J as L,t as p,E as q,B as x,cq as G,k as J}from"./index-SY1KZpDV.js";import{D as O,c as Q}from"./chunk-FPVDKY3X-qUFJolwU.js";import{K as W}from"./chunk-6HTZNHPT-BDPMLxeP.js";import{R as o,u as X}from"./chunk-AYRG2MQL-C-Vmidzb.js";import{C as Z}from"./checkbox-BmfBlwPV.js";import"./chunk-JGKUKVRC-8UCJIXwR.js";import"./chunk-BKWQ2FHJ-D2rzGP8L.js";import"./format-Bxn-3Vm1.js";import"./chunk-C76H5USB-CigedK30.js";import"./index-5btDAmAS.js";import"./command-bar-510pWzfB.js";import"./index-KyYmlkaX.js";import"./table-BU03PSff.js";import"./arrow-up-mini-EmEx92Fm.js";import"./date-picker-DMjyV1xe.js";import"./popover-DE7fVb5v.js";import"./x-mark-mini-CzXlcZs0.js";import"./triangle-left-mini-DpeP8AGJ.js";import"./prompt-DfbPhKWW.js";var $=D({sales_channel_ids:k(H()).min(1)}),S=50,y="sc_add",U=({apiKey:l,preSelected:a=[]})=>{const{t:s}=C(),{handleSuccess:r}=X(),t=I({defaultValues:{sales_channel_ids:[]},resolver:N($)}),{setValue:i}=t,[d,c]=f.useState({}),{mutateAsync:m,isPending:g}=V(l),j=E({pageSize:S,prefix:y}),b=ee(),T=F(),_=M(),{sales_channels:v,count:K,isPending:A}=L({...j},{placeholderData:J}),R=n=>{const u=Object.keys(n);i("sales_channel_ids",u,{shouldDirty:!0,shouldTouch:!0}),c(n)},w=t.handleSubmit(async n=>{await m(n.sales_channel_ids,{onSuccess:()=>{p.success(s("apiKeyManagement.salesChannels.successToast",{count:n.sales_channel_ids.length})),r()},onError:u=>{p.error(u.message)}})});return e.jsx(o.Form,{form:t,children:e.jsxs(W,{onSubmit:w,className:"flex h-full flex-col",children:[e.jsxs(o.Header,{children:[e.jsx(o.Title,{asChild:!0,children:e.jsx(h,{children:s("apiKeyManagement.salesChannels.title")})}),e.jsx(o.Description,{asChild:!0,children:e.jsx(h,{children:s("apiKeyManagement.salesChannels.description")})}),e.jsx("div",{className:"flex items-center justify-end gap-x-2",children:t.formState.errors.sales_channel_ids&&e.jsx(q,{variant:"error",children:t.formState.errors.sales_channel_ids.message})})]}),e.jsx(o.Body,{className:"flex flex-1 flex-col overflow-auto",children:e.jsx(O,{data:v,columns:b,filters:T,getRowId:n=>n.id,rowCount:K,layout:"fill",emptyState:_,isLoading:A,rowSelection:{state:d,onRowSelectionChange:R,enableRowSelection:n=>!a.includes(n.id)},prefix:y,pageSize:S,autoFocusSearch:!0})}),e.jsx(o.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(o.Close,{asChild:!0,children:e.jsx(x,{size:"small",variant:"secondary",children:s("actions.cancel")})}),e.jsx(x,{size:"small",type:"submit",isLoading:g,children:s("actions.save")})]})})]})})},Y=Q(),ee=()=>{const{t:l}=C(),a=P();return f.useMemo(()=>[Y.select({cell:({row:s})=>{const r=!s.getCanSelect(),t=s.getIsSelected()||r;return e.jsx(G,{content:l("apiKeyManagement.salesChannels.alreadyAddedTooltip"),showTooltip:r,children:e.jsx("div",{children:e.jsx(Z,{checked:t,disabled:r,onCheckedChange:i=>s.toggleSelected(!!i),onClick:i=>{i.stopPropagation()}})})})}}),...a],[l,a])},be=()=>{var c;const{id:l}=z(),{api_key:a,isLoading:s,isError:r,error:t}=B(l),i=(c=a==null?void 0:a.sales_channels)==null?void 0:c.map(m=>m.id),d=!s&&a;if(r)throw t;return e.jsx(o,{children:d&&e.jsx(U,{apiKey:l,preSelected:i})})};export{be as Component};
