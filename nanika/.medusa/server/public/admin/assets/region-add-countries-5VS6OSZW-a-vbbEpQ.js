import{u as k,a as T,b as E}from"./chunk-NOAFLTPV-DSYcSqwg.js";import{u as I,_ as A}from"./chunk-RAKBTSZ7-CdZyidod.js";import{a1 as F,ad as z,a3 as B,R as D,e1 as H,j as o,b as M,r as g,a8 as N,a9 as K,cI as L,e3 as O,t as x,B as S}from"./index-SY1KZpDV.js";import"./lodash-BeKhCikm.js";import"./chunk-JKKJMCX3-DW5ylHTW.js";import{K as V}from"./chunk-6HTZNHPT-BDPMLxeP.js";import{R as n,u as q}from"./chunk-AYRG2MQL-C-Vmidzb.js";import{C as b}from"./checkbox-BmfBlwPV.js";import{c as G}from"./index-5btDAmAS.js";import"./chunk-C76H5USB-CigedK30.js";import"./chunk-YEDAFXMB-wYpKZCuw.js";import"./chunk-AOFGTNG6-Cs5gjUOe.js";import"./table-BU03PSff.js";import"./chunk-WX2SMNCD-DdNYZhvE.js";import"./plus-mini-fsdo4Nhg.js";import"./command-bar-510pWzfB.js";import"./index-KyYmlkaX.js";import"./chunk-BKWQ2FHJ-D2rzGP8L.js";import"./format-Bxn-3Vm1.js";import"./_isIndex-CcyGJBtC.js";import"./x-mark-mini-CzXlcZs0.js";import"./date-picker-DMjyV1xe.js";import"./popover-DE7fVb5v.js";import"./triangle-left-mini-DpeP8AGJ.js";import"./index-Dukf4kgt.js";import"./prompt-DfbPhKWW.js";var Q=F({countries:z(B()).min(1)}),m=50,p="ac",U=({region:r})=>{const{t:e}=M(),{handleSuccess:a}=q(),[t,l]=g.useState({}),u=N({defaultValues:{countries:[]},resolver:K(Q)}),{setValue:h}=u;g.useEffect(()=>{const s=Object.keys(t).filter(i=>t[i]);h("countries",s,{shouldDirty:!0,shouldTouch:!0})},[t,h]);const{searchParams:C,raw:j}=k({pageSize:m,prefix:p}),{countries:_,count:f}=T({countries:L.map((s,i)=>({display_name:s.display_name,name:s.name,id:i,iso_2:s.iso_2,iso_3:s.iso_3,num_code:s.num_code,region_id:null,region:{}})),...C}),y=Z(),{table:R}=I({data:_||[],columns:y,count:f,enablePagination:!0,enableRowSelection:s=>{var i;return((i=r.countries)==null?void 0:i.findIndex(c=>c.iso_2===s.original.iso_2))===-1},getRowId:s=>s.iso_2,pageSize:m,rowSelection:{state:t,updater:l},prefix:p}),{mutateAsync:v,isPending:P}=O(r.id),w=u.handleSubmit(async s=>{var c;const i=[...((c=r.countries)==null?void 0:c.map(d=>d.iso_2))??[],...s.countries];await v({countries:i},{onSuccess:()=>{x.success(e("regions.toast.countries")),a()},onError:d=>{x.error(d.message)}})});return o.jsx(n.Form,{form:u,children:o.jsxs(V,{onSubmit:w,className:"flex h-full flex-col overflow-hidden",children:[o.jsx(n.Header,{children:o.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[o.jsx(n.Close,{asChild:!0,children:o.jsx(S,{size:"small",variant:"secondary",children:e("actions.cancel")})}),o.jsx(S,{size:"small",isLoading:P,type:"submit",children:e("actions.add")})]})}),o.jsx(n.Body,{className:"overflow-hidden",children:o.jsx(A,{table:R,columns:y,pageSize:m,count:f,search:"autofocus",pagination:!0,layout:"fill",orderBy:[{key:"display_name",label:e("fields.name")},{key:"iso_2",label:e("fields.code")}],queryObject:j,prefix:p})})]})})},X=G(),Z=()=>{const r=E();return g.useMemo(()=>[X.display({id:"select",header:({table:e})=>o.jsx(b,{checked:e.getIsSomePageRowsSelected()?"indeterminate":e.getIsAllPageRowsSelected(),onCheckedChange:a=>e.toggleAllPageRowsSelected(!!a)}),cell:({row:e})=>{const a=!e.getCanSelect();return o.jsx(b,{checked:e.getIsSelected()||a,disabled:a,onCheckedChange:t=>e.toggleSelected(!!t),onClick:t=>{t.stopPropagation()}})}}),...r],[r])},je=()=>{const{id:r}=D(),{region:e,isPending:a,isError:t,error:l}=H(r,{fields:"*payment_providers"});if(t)throw l;return o.jsx(n,{children:!a&&e&&o.jsx(U,{region:e})})};export{je as Component};
