import{I as ve}from"./chunk-QJ6SBVJ2-pILArIB5.js";import{R as He,O as Fe,C as Le}from"./chunk-P3DRE4IY-CVYkxkqN.js";import{M as ye}from"./chunk-NNBHHXXN-DpAFrAkq.js";import{c as ze,d as Be,e as Ve,u as Ue,f as Ge,g as $e,h as Xe,i as Qe,j as Je,k as We,l as Ke,m as Ze,n as Ye,o as et,p as tt,q as nt}from"./chunk-AODKPQIG-Cn0yFA7Z.js";import{g as Ie}from"./chunk-PXZ7QYKX-DZ_CHK12.js";import{c as st,o as it}from"./chunk-A2MEYV4D-CCTFcJlS.js";import{D as at}from"./chunk-77TK23EH-oQvnm0M_.js";import{a as W}from"./chunk-PDWBYQOW-BedvhUOI.js";import{a5 as O,R as ot,u as rt,b as V,aS as lt,aV as dt,r as j,j as e,a8 as ct,a9 as ut,t as R,H as ce,I as ee,w as b,ab as mt,B as K,cS as pt,y as Ne,T as G,cW as ht,aB as Se,x as de,A as Ee,X as me,s as Ce,cX as ft}from"./index-SY1KZpDV.js";import{P as Pe,a as Me}from"./chunk-IQBAUTU5-D9St1EhW.js";import{u as ke,_ as Ae}from"./chunk-RAKBTSZ7-CdZyidod.js";import"./lodash-BeKhCikm.js";import{C as te}from"./chunk-W6N53UNG-D6pxoKSX.js";import{c as pe}from"./chunk-MWVM4TYO-bKUcYSnf.js";import"./chunk-JKKJMCX3-DW5ylHTW.js";import{u as we}from"./chunk-C76H5USB-CigedK30.js";import{u as De}from"./chunk-BF3VCHXD-B-a5ALfp.js";import{K as xt}from"./chunk-6HTZNHPT-BDPMLxeP.js";import{R as X,u as gt,a as Re,S as U}from"./chunk-AYRG2MQL-C-Vmidzb.js";import{P as he}from"./pencil-square-BuQrcyf5.js";import{u as _t}from"./use-prompt-DituurAu.js";import{D as bt}from"./document-text-C2YF1doc.js";import{X as Te}from"./x-circle-nYtTNSZh.js";import{C as fe}from"./currency-input-B_sjSN-t.js";import{A as qe}from"./alert-BYYPPflL.js";import{C as ne}from"./checkbox-BmfBlwPV.js";import{c as Oe}from"./index-5btDAmAS.js";import"./Trans-BP16HUvh.js";import"./chunk-P3UUX2T6-BW5wN8bl.js";import"./chunk-YEDAFXMB-wYpKZCuw.js";import"./chunk-AOFGTNG6-Cs5gjUOe.js";import"./table-BU03PSff.js";import"./chunk-WX2SMNCD-DdNYZhvE.js";import"./plus-mini-fsdo4Nhg.js";import"./command-bar-510pWzfB.js";import"./index-KyYmlkaX.js";import"./x-mark-mini-CzXlcZs0.js";import"./triangles-mini-BT2VjD-k.js";import"./chunk-BKWQ2FHJ-D2rzGP8L.js";import"./format-Bxn-3Vm1.js";import"./_isIndex-CcyGJBtC.js";import"./date-picker-DMjyV1xe.js";import"./popover-DE7fVb5v.js";import"./triangle-left-mini-DpeP8AGJ.js";import"./index-Dukf4kgt.js";import"./prompt-DfbPhKWW.js";import"./index.esm-9LUSWeHG.js";var jt=O.object({inbound_items:O.array(O.object({item_id:O.string(),quantity:O.number(),reason_id:O.string().nullish(),note:O.string().nullish()})),outbound_items:O.array(O.object({item_id:O.string(),quantity:O.number()})),location_id:O.string().optional(),inbound_option_id:O.string().nullish(),outbound_option_id:O.string().nullish(),send_notification:O.boolean().optional()}),J=Oe(),vt=s=>{const{t:l}=V();return j.useMemo(()=>[J.display({id:"select",header:({table:o})=>e.jsx(ne,{checked:o.getIsSomePageRowsSelected()?"indeterminate":o.getIsAllPageRowsSelected(),onCheckedChange:r=>o.toggleAllPageRowsSelected(!!r)}),cell:({row:o})=>{const r=o.getCanSelect();return e.jsx(ne,{disabled:!r,checked:o.getIsSelected(),onCheckedChange:a=>o.toggleSelected(!!a),onClick:a=>{a.stopPropagation()}})}}),J.display({id:"product",header:()=>e.jsx(Pe,{}),cell:({row:o})=>e.jsx(Me,{product:{thumbnail:o.original.thumbnail,title:o.original.product_title}})}),J.accessor("variant.sku",{header:l("fields.sku"),cell:({getValue:o})=>o()||"-"}),J.accessor("variant.title",{header:l("fields.variant")}),J.accessor("quantity",{header:()=>e.jsx("div",{className:"flex size-full items-center overflow-hidden text-right",children:e.jsx("span",{className:"truncate",children:l("fields.quantity")})}),cell:({getValue:o,row:r})=>Ie(r.original)}),J.accessor("refundable_total",{header:()=>e.jsx("div",{className:"flex size-full items-center justify-end overflow-hidden text-right",children:e.jsx("span",{className:"truncate",children:l("fields.price")})}),cell:({getValue:o})=>{const r=o()||0,a=W(r,s);return e.jsx("div",{className:"flex size-full items-center justify-end overflow-hidden text-right",children:e.jsx("span",{className:"truncate",children:a})})}})],[l,s])},yt=()=>{const{t:s}=V();return[{key:"created_at",label:s("fields.createdAt"),type:"date"},{key:"updated_at",label:s("fields.updatedAt"),type:"date"}]},It=({pageSize:s=50,prefix:l})=>{const o=we(["q","offset","order","created_at","updated_at"],l),{offset:r,created_at:a,updated_at:m,...g}=o;return{searchParams:{...g,limit:s,offset:r?Number(r):0,created_at:a?JSON.parse(a):void 0,updated_at:m?JSON.parse(m):void 0},raw:o}},se=50,xe="rit",Nt=({onSelectionChange:s,selectedItems:l,items:o,currencyCode:r})=>{const{t:a}=V(),[m,g]=j.useState(l.reduce((f,I)=>(f[I]=!0,f),{})),N=f=>{const I=typeof f=="function"?f(m):f;g(I),s(Object.keys(I))},{searchParams:v,raw:S}=It({pageSize:se,prefix:xe}),P=j.useMemo(()=>{const{order:f,offset:I,limit:E,q:L,created_at:H,updated_at:$}=v;let q=o;if(L&&(q=q.filter(F=>{var C;return F.product_title.toLowerCase().includes(L.toLowerCase())||F.variant_title.toLowerCase().includes(L.toLowerCase())||((C=F.variant_sku)==null?void 0:C.toLowerCase().includes(L.toLowerCase()))})),f){const F=f[0]==="-"?"desc":"asc",C=f.replace("-","");q=St(q,C,F)}return H&&(q=ge(q,H,"created_at")),$&&(q=ge(q,$,"updated_at")),q.slice(I,I+E)},[o,r,v]),w=vt(r),T=yt(),{table:k}=ke({data:P,columns:w,count:P.length,enablePagination:!0,getRowId:f=>f.id,pageSize:se,enableRowSelection:f=>Ie(f.original)>0,rowSelection:{state:m,updater:N}});return e.jsx("div",{className:"flex size-full flex-col overflow-hidden",children:e.jsx(Ae,{table:k,columns:w,pageSize:se,count:P.length,filters:T,pagination:!0,layout:"fill",search:!0,orderBy:[{key:"product_title",label:a("fields.product")},{key:"variant_title",label:a("fields.variant")},{key:"sku",label:a("fields.sku")}],prefix:xe,queryObject:S})})},St=(s,l,o)=>s.sort((r,a)=>{let m,g;return l==="product_title"?(m=r.product_title,g=a.product_title):l==="variant_title"?(m=r.variant_title,g=a.variant_title):l==="sku"&&(m=r.variant_sku,g=a.variant_sku),m<g?o==="asc"?-1:1:m>g?o==="asc"?1:-1:0}),ge=(s,l,o)=>{const{gt:r,gte:a,lt:m,lte:g}=l;return s.filter(N=>{const v=new Date(N[o]);let S=!0;return r&&(S=S&&v>new Date(r)),a&&(S=S&&v>=new Date(a)),m&&(S=S&&v<new Date(m)),g&&(S=S&&v<=new Date(g)),S})};function Et({item:s,previewItem:l,currencyCode:o,form:r,onRemove:a,onUpdate:m,index:g}){const{t:N}=V(),{return_reasons:v=[]}=ht({fields:"+label"}),S=r.watch(`inbound_items.${g}`),P=typeof S.reason_id=="string",w=typeof S.note=="string";return e.jsxs("div",{className:"bg-ui-bg-subtle shadow-elevation-card-rest my-2 rounded-xl ",children:[e.jsxs("div",{className:"flex flex-col items-center gap-x-2 gap-y-2 p-3 text-sm md:flex-row",children:[e.jsxs("div",{className:"flex flex-1 items-center gap-x-3",children:[e.jsx(Se,{src:s.thumbnail}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{children:[e.jsxs(G,{className:"txt-small",as:"span",weight:"plus",children:[s.title," "]}),s.variant_sku&&e.jsxs("span",{children:["(",s.variant_sku,")"]})]}),e.jsx(G,{as:"div",className:"text-ui-fg-subtle txt-small",children:s.product_title})]})]}),e.jsxs("div",{className:"flex flex-1 justify-between",children:[e.jsxs("div",{className:"flex flex-grow items-center gap-2",children:[e.jsx(b.Field,{control:r.control,name:`inbound_items.${g}.quantity`,render:({field:T})=>e.jsxs(b.Item,{children:[e.jsx(b.Control,{children:e.jsx(de,{...T,className:"bg-ui-bg-base txt-small w-[67px] rounded-lg",min:1,max:s.quantity,type:"number",onBlur:k=>{const f=k.target.value,I=f===""?null:Number(f);T.onChange(I),I&&m({quantity:I})}})}),e.jsx(b.ErrorMessage,{})]})}),e.jsx(G,{className:"txt-small text-ui-fg-subtle",children:N("fields.qty")})]}),e.jsx("div",{className:"text-ui-fg-subtle txt-small mr-2 flex flex-shrink-0",children:e.jsx(ye,{currencyCode:o,amount:l.return_requested_total})}),e.jsx(Ee,{groups:[{actions:[!P&&{label:N("actions.addReason"),onClick:()=>r.setValue(`inbound_items.${g}.reason_id`,""),icon:e.jsx(Le,{})},!w&&{label:N("actions.addNote"),onClick:()=>r.setValue(`inbound_items.${g}.note`,""),icon:e.jsx(bt,{})},{label:N("actions.remove"),onClick:a,icon:e.jsx(Te,{})}].filter(Boolean)}]})]})]}),e.jsxs(e.Fragment,{children:[P&&e.jsxs("div",{className:"grid grid-cols-1 gap-2 p-3 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx(b.Label,{children:N("orders.returns.reason")}),e.jsx(b.Hint,{className:"!mt-1",children:N("orders.returns.reasonHint")})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("div",{className:"flex-grow",children:e.jsx(b.Field,{control:r.control,name:`inbound_items.${g}.reason_id`,render:({field:{ref:T,value:k,onChange:f,...I}})=>e.jsxs(b.Item,{children:[e.jsx(b.Control,{children:e.jsx(te,{className:"bg-ui-bg-field-component hover:bg-ui-bg-field-component-hover",value:k,onChange:E=>{m({reason_id:E}),f(E)},...I,options:v.map(E=>({label:E.label,value:E.id}))})}),e.jsx(b.ErrorMessage,{})]})})}),e.jsx(ee,{type:"button",className:"flex-shrink",variant:"transparent",onClick:()=>{r.setValue(`inbound_items.${g}.reason_id`,null),m({reason_id:null})},children:e.jsx(me,{className:"text-ui-fg-muted"})})]})]}),w&&e.jsxs("div",{className:"grid grid-cols-1 gap-2 p-3 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx(b.Label,{children:N("orders.returns.note")}),e.jsx(b.Hint,{className:"!mt-1",children:N("orders.returns.noteHint")})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("div",{className:"flex-grow",children:e.jsx(b.Field,{control:r.control,name:`inbound_items.${g}.note`,render:({field:{ref:T,...k}})=>e.jsxs(b.Item,{children:[e.jsx(b.Control,{children:e.jsx(de,{...k,onBlur:()=>{k.onChange(k.value),m({internal_note:k.value})},className:"bg-ui-bg-field-component hover:bg-ui-bg-field-component-hover"})}),e.jsx(b.ErrorMessage,{})]})})}),e.jsx(ee,{type:"button",className:"flex-shrink",variant:"transparent",onClick:()=>{r.setValue(`inbound_items.${g}.note`,null),m({internal_note:null})},children:e.jsx(me,{className:"text-ui-fg-muted"})})]})]})]})]})}var ie=[],_e=[],Ct=({order:s,preview:l,exchange:o,form:r,orderReturn:a})=>{var D;const{t:m}=V(),{setIsOpen:g}=Re(),[N,v]=j.useState({}),{mutateAsync:S}=it((D=l==null?void 0:l.order_change)==null?void 0:D.return_id,s.id),{mutateAsync:P}=Xe(o.id,s.id),{mutateAsync:w}=Qe(o.id,s.id),{mutateAsync:T}=Je(o.id,s.id),{mutateAsync:k}=We(o.id,s.id),{mutateAsync:f}=Ke(o.id,s.id),I=j.useMemo(()=>{var u;return(u=l==null?void 0:l.items)==null?void 0:u.filter(n=>{var i;return!!((i=n.actions)!=null&&i.find(t=>t.exchange_id===o.id))})},[l.items]),E=I.filter(u=>{var n;return!!((n=u.actions)!=null&&n.find(i=>i.action==="RETURN_ITEM"))}),L=j.useMemo(()=>{var u;return new Map((u=s==null?void 0:s.items)==null?void 0:u.map(n=>[n.id,n]))},[s.items]),H=r.watch("location_id"),{stock_locations:$=[]}=pt({limit:999}),{shipping_options:q=[]}=De({limit:999,fields:"*prices,+service_zone.fulfillment_set.location.id",stock_location_id:H},{enabled:!!H}),F=q.filter(u=>!!u.rules.find(n=>n.attribute==="is_return"&&n.value==="true")),{fields:C,append:Q,remove:z,update:B}=Ne({name:"inbound_items",control:r.control}),p=j.useMemo(()=>new Map(I.map(u=>[u.id,u])),[I,C]);j.useEffect(()=>{const u={};E.forEach(n=>{var t,d;const i=C.findIndex(h=>h.item_id===n.id);if(u[n.id]=!0,i>-1){if(C[i].quantity!==n.detail.return_requested_quantity){const h=(t=n.actions)==null?void 0:t.find(M=>M.action==="RETURN_ITEM");B(i,{...C[i],quantity:n.detail.return_requested_quantity,note:h==null?void 0:h.internal_note,reason_id:(d=h==null?void 0:h.details)==null?void 0:d.reason_id})}}else Q({item_id:n.id,quantity:n.detail.return_requested_quantity},{shouldFocus:!1})}),C.forEach((n,i)=>{n.item_id in u||z(i)})},[I]),j.useEffect(()=>{const u=l.shipping_methods.find(n=>{var i;return(i=n.actions)==null?void 0:i.find(t=>t.action==="SHIPPING_ADD"&&!!t.return_id)});u?r.setValue("inbound_option_id",u.shipping_option_id):r.setValue("inbound_option_id",null)},[l.shipping_methods]),j.useEffect(()=>{r.setValue("location_id",a==null?void 0:a.location_id)},[a]);const x=!C.length,c=async()=>{var u,n,i;ie.length&&await T({items:ie.map(t=>({id:t,quantity:1}))},{onError:t=>{R.error(t.message)}});for(const t of _e){const d=(i=(n=(u=I.find(h=>h.id===t))==null?void 0:u.actions)==null?void 0:n.find(h=>h.action==="RETURN_ITEM"))==null?void 0:i.id;d&&await f(d,{onError:h=>{R.error(h.message)}})}g("inbound-items",!1)},_=async u=>{await S({location_id:u})},y=async u=>{const i=l.shipping_methods.filter(t=>{var d;return(d=t.actions)==null?void 0:d.find(h=>h.action==="SHIPPING_ADD"&&!!h.return_id)}).filter(Boolean).map(t=>{var h;const d=(h=t.actions)==null?void 0:h.find(M=>M.action==="SHIPPING_ADD"&&!!M.return_id);if(d)return w(d.id)});await Promise.all(i),await P({shipping_option_id:u},{onError:t=>{R.error(t.message)}})},A=j.useMemo(()=>H?!C.map(n=>{var t,d;const i=L.get(n.item_id);return!(i!=null&&i.variant_id)||!(i!=null&&i.variant)||!((t=i.variant)!=null&&t.manage_inventory)?!0:(d=N[i.variant_id])==null?void 0:d.find(h=>h.location_id===H)}).every(Boolean):!1,[C,N,H]);return j.useEffect(()=>{(async()=>{const n={};if(!C.length)return n;const i=C.map(d=>d==null?void 0:d.variant_id).filter(Boolean);return(await Ce.admin.productVariant.list({id:i},{fields:"*inventory,*inventory.location_levels"})).variants.forEach(d=>{var h,M;n[d.id]=((M=(h=d.inventory)==null?void 0:h[0])==null?void 0:M.location_levels)||[]}),n})().then(n=>{v(n)})},[C]),e.jsxs("div",{children:[e.jsxs("div",{className:"mt-8 flex items-center justify-between",children:[e.jsx(ce,{level:"h2",children:m("orders.returns.inbound")}),e.jsxs(U,{id:"inbound-items",children:[e.jsx(U.Trigger,{asChild:!0,children:e.jsx("a",{className:"focus-visible:shadow-borders-focus transition-fg txt-compact-small-plus cursor-pointer text-blue-500 outline-none hover:text-blue-400",children:m("actions.addItems")})}),e.jsxs(U.Content,{children:[e.jsx(U.Header,{}),e.jsx(Nt,{items:s.items,selectedItems:C.map(u=>u.item_id),currencyCode:s.currency_code,onSelectionChange:u=>{const n=C.map(i=>i.item_id);ie=u.filter(i=>!n.includes(i)),_e=n.filter(i=>!u.includes(i))}}),e.jsx(U.Footer,{children:e.jsx("div",{className:"flex w-full items-center justify-end gap-x-4",children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(X.Close,{asChild:!0,children:e.jsx(K,{type:"button",variant:"secondary",size:"small",children:m("actions.cancel")})}),e.jsx(K,{type:"submit",variant:"primary",size:"small",role:"button",onClick:async()=>await c(),children:m("actions.save")},"submit-button")]})})})]})]})]}),x&&e.jsx(ve,{}),C.map((u,n)=>p.get(u.item_id)&&L.get(u.item_id)&&e.jsx(Et,{item:L.get(u.item_id),previewItem:p.get(u.item_id),currencyCode:s.currency_code,form:r,onRemove:()=>{var t,d,h;const i=(h=(d=(t=I.find(M=>M.id===u.item_id))==null?void 0:t.actions)==null?void 0:d.find(M=>M.action==="RETURN_ITEM"))==null?void 0:h.id;i&&f(i,{onError:M=>{R.error(M.message)}})},onUpdate:i=>{var d,h;const t=(h=(d=I.find(M=>M.id===u.item_id))==null?void 0:d.actions)==null?void 0:h.find(M=>M.action==="RETURN_ITEM");t&&k({...i,actionId:t.id},{onError:M=>{var Z,ue;(Z=t.details)!=null&&Z.quantity&&i.quantity&&r.setValue(`inbound_items.${n}.quantity`,(ue=t.details)==null?void 0:ue.quantity),R.error(M.message)}})},index:n},u.id)),!x&&e.jsxs("div",{className:"mt-8 flex flex-col gap-y-4",children:[e.jsxs("div",{className:"grid grid-cols-1 gap-2 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx(b.Label,{children:m("orders.returns.location")}),e.jsx(b.Hint,{className:"!mt-1",children:m("orders.returns.locationHint")})]}),e.jsx(b.Field,{control:r.control,name:"location_id",render:({field:{value:u,onChange:n,...i}})=>e.jsx(b.Item,{children:e.jsx(b.Control,{children:e.jsx(te,{...i,value:u??void 0,onChange:t=>{n(t),_(t)},options:($??[]).map(t=>({label:t.name,value:t.id}))})})})})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-2 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsxs(b.Label,{children:[m("orders.returns.inboundShipping"),e.jsxs(G,{size:"small",leading:"compact",className:"text-ui-fg-muted ml-1 inline",children:["(",m("fields.optional"),")"]})]}),e.jsx(b.Hint,{className:"!mt-1",children:m("orders.returns.inboundShippingHint")})]}),e.jsx(b.Field,{control:r.control,name:"inbound_option_id",render:({field:{value:u,onChange:n,...i}})=>e.jsx(b.Item,{children:e.jsx(b.Control,{children:e.jsx(te,{value:u??void 0,onChange:t=>{n(t),t&&y(t)},...i,options:F.map(t=>({label:t.name,value:t.id})),disabled:!H,noResultsPlaceholder:e.jsx(He,{})})})})})]})]}),A&&e.jsxs(qe,{variant:"warning",dismissible:!0,className:"mt-4 p-5",children:[e.jsx("div",{className:"text-ui-fg-subtle txt-small pb-2 font-medium leading-[20px]",children:m("orders.returns.noInventoryLevel")}),e.jsx(G,{className:"text-ui-fg-subtle txt-small leading-normal",children:m("orders.returns.noInventoryLevelDesc")})]})]})},Y=Oe(),Pt=s=>{const{t:l}=V();return j.useMemo(()=>[Y.display({id:"select",header:({table:o})=>e.jsx(ne,{checked:o.getIsSomePageRowsSelected()?"indeterminate":o.getIsAllPageRowsSelected(),onCheckedChange:r=>o.toggleAllPageRowsSelected(!!r)}),cell:({row:o})=>{const r=o.getCanSelect();return e.jsx(ne,{disabled:!r,checked:o.getIsSelected(),onCheckedChange:a=>o.toggleSelected(!!a),onClick:a=>{a.stopPropagation()}})}}),Y.display({id:"product",header:()=>e.jsx(Pe,{}),cell:({row:o})=>e.jsx(Me,{product:o.original.product})}),Y.accessor("sku",{header:l("fields.sku"),cell:({getValue:o})=>o()||"-"}),Y.accessor("title",{header:l("fields.title")})],[l,s])},Mt=()=>{const{t:s}=V();return[{key:"created_at",label:s("fields.createdAt"),type:"date"},{key:"updated_at",label:s("fields.updatedAt"),type:"date"}]},kt=({pageSize:s=50,prefix:l})=>{const o=we(["q","offset","order","created_at","updated_at"],l),{offset:r,created_at:a,updated_at:m,...g}=o;return{searchParams:{...g,limit:s,offset:r?Number(r):0,created_at:a?JSON.parse(a):void 0,updated_at:m?JSON.parse(m):void 0},raw:o}},ae=50,be="rit",At=({onSelectionChange:s,selectedItems:l,currencyCode:o})=>{const{t:r}=V(),[a,m]=j.useState(l.reduce((f,I)=>(f[I]=!0,f),{})),g=f=>{const I=typeof f=="function"?f(a):f;m(I),s(Object.keys(I))},{searchParams:N,raw:v}=kt({pageSize:ae,prefix:be}),{variants:S=[],count:P}=ft({...N,fields:"*inventory_items.inventory.location_levels,+inventory_quantity"}),w=Pt(o),T=Mt(),{table:k}=ke({data:S,columns:w,count:P,enablePagination:!0,getRowId:f=>f.id,pageSize:ae,enableRowSelection:f=>!0,rowSelection:{state:a,updater:g}});return e.jsx("div",{className:"flex size-full flex-col overflow-hidden",children:e.jsx(Ae,{table:k,columns:w,pageSize:ae,count:P,filters:T,pagination:!0,layout:"fill",search:!0,orderBy:[{key:"product_id",label:r("fields.product")},{key:"title",label:r("fields.title")},{key:"sku",label:r("fields.sku")}],prefix:be,queryObject:v})})};function wt({previewItem:s,currencyCode:l,form:o,onRemove:r,onUpdate:a,index:m}){const{t:g}=V();return e.jsx("div",{className:"bg-ui-bg-subtle shadow-elevation-card-rest my-2 rounded-xl ",children:e.jsxs("div",{className:"flex flex-col items-center gap-x-2 gap-y-2 p-3 text-sm md:flex-row",children:[e.jsxs("div",{className:"flex flex-1 items-center gap-x-3",children:[e.jsx(Se,{src:s.thumbnail}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{children:[e.jsxs(G,{className:"txt-small",as:"span",weight:"plus",children:[s.title," "]}),s.variant_sku&&e.jsxs("span",{children:["(",s.variant_sku,")"]})]}),e.jsx(G,{as:"div",className:"text-ui-fg-subtle txt-small",children:s.product_title})]})]}),e.jsxs("div",{className:"flex flex-1 justify-between",children:[e.jsxs("div",{className:"flex flex-grow items-center gap-2",children:[e.jsx(b.Field,{control:o.control,name:`outbound_items.${m}.quantity`,render:({field:N})=>e.jsxs(b.Item,{children:[e.jsx(b.Control,{children:e.jsx(de,{...N,className:"bg-ui-bg-base txt-small w-[67px] rounded-lg",min:1,type:"number",onBlur:v=>{const S=v.target.value,P=S===""?null:Number(S);N.onChange(P),P&&a({quantity:P})}})}),e.jsx(b.ErrorMessage,{})]})}),e.jsx(G,{className:"txt-small text-ui-fg-subtle",children:g("fields.qty")})]}),e.jsx("div",{className:"text-ui-fg-subtle txt-small mr-2 flex flex-shrink-0",children:e.jsx(ye,{currencyCode:l,amount:s.total})}),e.jsx(Ee,{groups:[{actions:[{label:g("actions.remove"),onClick:r,icon:e.jsx(Te,{})}].filter(Boolean)}]})]})]})})}var oe=[],je=[],Dt=({order:s,preview:l,exchange:o,form:r})=>{const{t:a}=V(),{setIsOpen:m}=Re(),[g,N]=j.useState({}),{shipping_options:v=[]}=De({limit:999,fields:"*prices,+service_zone.fulfillment_set.location.id"}),{mutateAsync:S}=Ze(o.id,s.id),{mutateAsync:P}=Ye(o.id,s.id),{mutateAsync:w}=et(o.id,s.id),{mutateAsync:T}=tt(o.id,s.id),{mutateAsync:k}=nt(o.id,s.id),f=j.useMemo(()=>{var p;return(p=l==null?void 0:l.items)==null?void 0:p.filter(x=>{var c;return!!((c=x.actions)!=null&&c.find(_=>_.exchange_id===o.id&&_.action==="ITEM_ADD"))})},[l.items]),I=j.useMemo(()=>{var p;return new Map((p=s==null?void 0:s.items)==null?void 0:p.map(x=>[x.variant_id,x]))},[s.items]),{fields:E,append:L,remove:H,update:$}=Ne({name:"outbound_items",control:r.control}),q=j.useMemo(()=>new Map(f.map(p=>[p.variant_id,p])),[f,E]);j.useEffect(()=>{const p={};f.forEach(x=>{const c=E.findIndex(_=>_.item_id===x.id);p[x.id]=!0,c>-1?E[c].quantity!==x.detail.quantity&&$(c,{...E[c],quantity:x.detail.quantity}):L({item_id:x.id,quantity:x.detail.quantity,variant_id:x.variant_id},{shouldFocus:!1})}),E.forEach((x,c)=>{x.item_id in p||H(c)})},[f]);const F=r.watch("location_id"),C=!E.length,Q=async()=>{var p,x;oe.length&&await w({items:oe.map(c=>({variant_id:c,quantity:1}))},{onError:c=>{R.error(c.message)}});for(const c of je){const _=(x=(p=f.find(y=>y.variant_id===c))==null?void 0:p.actions)==null?void 0:x.find(y=>y.action==="ITEM_ADD");_!=null&&_.id&&await k(_==null?void 0:_.id,{onError:y=>{R.error(y.message)}})}m("outbound-items",!1)};j.useEffect(()=>{const p=l.shipping_methods.find(x=>{var c;return!!((c=x.actions)!=null&&c.find(_=>_.action==="SHIPPING_ADD"&&!_.return_id))});p?r.setValue("outbound_option_id",p.shipping_option_id):r.setValue("outbound_option_id",null)},[l.shipping_methods]);const z=async p=>{const c=l.shipping_methods.filter(_=>{var y;return!!((y=_.actions)!=null&&y.find(A=>A.action==="SHIPPING_ADD"&&!A.return_id))}).filter(Boolean).map(_=>{var A;const y=(A=_.actions)==null?void 0:A.find(D=>D.action==="SHIPPING_ADD"&&!D.return_id);if(y)return P(y.id)});await Promise.all(c),await S({shipping_option_id:p},{onError:_=>{R.error(_.message)}})},B=j.useMemo(()=>F?!E.map(x=>{var _,y;const c=I.get(x.variant_id);return!(c!=null&&c.variant_id)||!(c!=null&&c.variant)||!((_=c.variant)!=null&&_.manage_inventory)?!0:(y=g[c.variant_id])==null?void 0:y.find(A=>A.location_id===F)}).every(Boolean):!1,[E,g,F]);return j.useEffect(()=>{(async()=>{const x={};if(!E.length)return x;const c=E.map(y=>y==null?void 0:y.variant_id).filter(Boolean);return(await Ce.admin.productVariant.list({id:c},{fields:"*inventory,*inventory.location_levels"})).variants.forEach(y=>{var A,D;x[y.id]=((D=(A=y.inventory)==null?void 0:A[0])==null?void 0:D.location_levels)||[]}),x})().then(x=>{N(x)})},[E]),e.jsxs("div",{children:[e.jsxs("div",{className:"mt-8 flex items-center justify-between",children:[e.jsx(ce,{level:"h2",children:a("orders.returns.outbound")}),e.jsxs(U,{id:"outbound-items",children:[e.jsx(U.Trigger,{asChild:!0,children:e.jsx("a",{className:"focus-visible:shadow-borders-focus transition-fg txt-compact-small-plus cursor-pointer text-blue-500 outline-none hover:text-blue-400",children:a("actions.addItems")})}),e.jsxs(U.Content,{children:[e.jsx(U.Header,{}),e.jsx(At,{selectedItems:E.map(p=>p.variant_id),currencyCode:s.currency_code,onSelectionChange:p=>{const x=E.map(c=>c.variant_id);oe=p.filter(c=>!x.includes(c)),je=x.filter(c=>!p.includes(c))}}),e.jsx(U.Footer,{children:e.jsx("div",{className:"flex w-full items-center justify-end gap-x-4",children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(X.Close,{asChild:!0,children:e.jsx(K,{type:"button",variant:"secondary",size:"small",children:a("actions.cancel")})}),e.jsx(K,{type:"submit",variant:"primary",size:"small",role:"button",onClick:async()=>await Q(),children:a("actions.save")},"submit-button")]})})})]})]})]}),C&&e.jsx(ve,{}),E.map((p,x)=>q.get(p.variant_id)&&e.jsx(wt,{previewItem:q.get(p.variant_id),currencyCode:s.currency_code,form:r,onRemove:()=>{var _,y,A;const c=(A=(y=(_=f.find(D=>D.id===p.item_id))==null?void 0:_.actions)==null?void 0:y.find(D=>D.action==="ITEM_ADD"))==null?void 0:A.id;c&&k(c,{onError:D=>{R.error(D.message)}})},onUpdate:c=>{var y,A,D;const _=(D=(A=(y=f.find(u=>u.id===p.item_id))==null?void 0:y.actions)==null?void 0:A.find(u=>u.action==="ITEM_ADD"))==null?void 0:D.id;_&&T({...c,actionId:_},{onError:u=>{R.error(u.message)}})},index:x},p.id)),!C&&e.jsx("div",{className:"mt-8 flex flex-col gap-y-4",children:e.jsxs("div",{className:"grid grid-cols-1 gap-2 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx(b.Label,{children:a("orders.exchanges.outboundShipping")}),e.jsx(b.Hint,{className:"!mt-1",children:a("orders.exchanges.outboundShippingHint")})]}),e.jsx(b.Field,{control:r.control,name:"outbound_option_id",render:({field:{value:p,onChange:x,...c}})=>e.jsx(b.Item,{children:e.jsx(b.Control,{children:e.jsx(te,{noResultsPlaceholder:e.jsx(Fe,{}),value:p??void 0,onChange:_=>{x(_),_&&z(_)},...c,options:v.map(_=>({label:_.name,value:_.id})),disabled:!v.length})})})})]})}),B&&e.jsxs(qe,{variant:"warning",dismissible:!0,className:"mt-4 p-5",children:[e.jsx("div",{className:"text-ui-fg-subtle txt-small pb-2 font-medium leading-[20px]",children:a("orders.returns.noInventoryLevel")}),e.jsx(G,{className:"text-ui-fg-subtle txt-small leading-normal",children:a("orders.returns.noInventoryLevelDesc")})]})]})},re=!1,Rt=({order:s,preview:l,exchange:o,orderReturn:r})=>{const{t:a}=V(),{handleSuccess:m}=gt(),[g,N]=j.useState(!1),[v,S]=j.useState(!1),[P,w]=j.useState(0),[T,k]=j.useState(0),{mutateAsync:f,isPending:I}=Ve(o.id,s.id),{mutateAsync:E,isPending:L}=Ue(o.id,s.id),{mutateAsync:H,isPending:$}=Ge(o.id,s.id),{mutateAsync:q,isPending:F}=$e(o.id,s.id),C=I||L||F||$,Q=j.useMemo(()=>{var n;return(n=l==null?void 0:l.items)==null?void 0:n.filter(i=>{var t;return!!((t=i.actions)!=null&&t.find(d=>d.exchange_id===o.id))})},[l.items]),z=Q.filter(n=>{var i;return!!((i=n.actions)!=null&&i.find(t=>t.action==="RETURN_ITEM"))}),B=Q.filter(n=>{var i;return!!((i=n.actions)!=null&&i.find(t=>t.action==="ITEM_ADD"))}),p=ct({defaultValues:()=>{const n=l.shipping_methods.find(t=>{var d;return!!((d=t.actions)!=null&&d.find(h=>h.action==="SHIPPING_ADD"&&!!h.return_id))}),i=l.shipping_methods.find(t=>{var d;return!!((d=t.actions)!=null&&d.find(h=>h.action==="SHIPPING_ADD"&&!h.return_id))});return Promise.resolve({inbound_items:z.map(t=>{var h,M;const d=(h=t.actions)==null?void 0:h.find(Z=>Z.action==="RETURN_ITEM");return{item_id:t.id,variant_id:t.variant_id,quantity:t.detail.return_requested_quantity,note:d==null?void 0:d.internal_note,reason_id:(M=d==null?void 0:d.details)==null?void 0:M.reason_id}}),outbound_items:B.map(t=>({item_id:t.id,variant_id:t.variant_id,quantity:t.detail.quantity})),inbound_option_id:n?n.shipping_option_id:"",outbound_option_id:i?i.shipping_option_id:"",location_id:r==null?void 0:r.location_id,send_notification:!1})},resolver:ut(jt)}),x=l.shipping_methods.find(n=>{var i;return!!((i=n.actions)!=null&&i.find(t=>t.action==="SHIPPING_ADD"&&!!t.return_id))}),c=l.shipping_methods.find(n=>{var i;return!!((i=n.actions)!=null&&i.find(t=>t.action==="SHIPPING_ADD"&&!t.return_id))});j.useEffect(()=>{x&&w(x.total)},[x]),j.useEffect(()=>{c&&k(c.total)},[c]);const _=p.watch("inbound_option_id"),y=p.watch("outbound_option_id"),A=_t(),D=p.handleSubmit(async n=>{try{if(!await A({title:a("general.areYouSure"),description:a("orders.exchanges.confirmText"),confirmText:a("actions.continue"),cancelText:a("actions.cancel"),variant:"confirmation"}))return;await f({no_notification:!n.send_notification}),m()}catch(i){R.error(a("general.error"),{description:i.message})}});j.useEffect(()=>{var n;g&&((n=document.getElementById("js-inbound-shipping-input"))==null||n.focus())},[g]),j.useEffect(()=>{var n;v&&((n=document.getElementById("js-outbound-shipping-input"))==null||n.focus())},[v]),j.useEffect(()=>()=>{re&&(E(void 0,{onSuccess:()=>{R.success(a("orders.exchanges.actions.cancelExchange.successToast"))},onError:n=>{R.error(n.message)}}),re=!1)},[]);const u=j.useMemo(()=>{const n=l.shipping_methods.find(i=>{var t;return!!((t=i.actions)!=null&&t.find(d=>d.action==="SHIPPING_ADD"&&!!d.return_id))});return(n==null?void 0:n.total)||0},[l.shipping_methods]);return e.jsx(X.Form,{form:p,children:e.jsxs(xt,{onSubmit:D,className:"flex h-full flex-col",children:[e.jsx(X.Header,{}),e.jsx(X.Body,{className:"flex size-full justify-center overflow-y-auto",children:e.jsxs("div",{className:"mt-16 w-[720px] max-w-[100%] px-4 md:p-0",children:[e.jsx(ce,{level:"h1",children:a("orders.exchanges.create")}),e.jsx(Ct,{form:p,preview:l,order:s,exchange:o,orderReturn:r}),e.jsx(Dt,{form:p,preview:l,order:s,exchange:o}),e.jsxs("div",{className:"mt-8 border-y border-dotted py-4",children:[e.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[e.jsx("span",{className:"txt-small text-ui-fg-subtle",children:a("orders.returns.inboundTotal")}),e.jsx("span",{className:"txt-small text-ui-fg-subtle",children:W(z.reduce((n,i)=>{var d;const t=(d=i.actions)==null?void 0:d.find(h=>h.action==="RETURN_ITEM");return n=n+((t==null?void 0:t.amount)||0),n},0)*-1,s.currency_code)})]}),e.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[e.jsx("span",{className:"txt-small text-ui-fg-subtle",children:a("orders.exchanges.outboundTotal")}),e.jsx("span",{className:"txt-small text-ui-fg-subtle",children:W(B.reduce((n,i)=>{var d;const t=(d=i.actions)==null?void 0:d.find(h=>h.action==="ITEM_ADD");return n=n+((t==null?void 0:t.amount)||0),n},0),s.currency_code)})]}),e.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[e.jsx("span",{className:"txt-small text-ui-fg-subtle",children:a("orders.returns.inboundShipping")}),e.jsxs("span",{className:"txt-small text-ui-fg-subtle flex items-center",children:[!g&&e.jsx(ee,{onClick:()=>N(!0),variant:"transparent",className:"text-ui-fg-muted",disabled:!(z!=null&&z.length)||!_,children:e.jsx(he,{})}),g?e.jsx(fe,{id:"js-inbound-shipping-input",onBlur:()=>{let n;l.shipping_methods.forEach(t=>{if(t.actions)for(const d of t.actions)d.action==="SHIPPING_ADD"&&d.return_id&&(n=d.id)});const i=P===""?null:parseFloat(P);n&&H({actionId:n,custom_amount:i},{onError:t=>{R.error(t.message)}}),N(!1)},symbol:pe[s.currency_code.toUpperCase()].symbol_native,code:s.currency_code,onValueChange:w,value:P,disabled:!(z!=null&&z.length)}):W(u,s.currency_code)]})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"txt-small text-ui-fg-subtle",children:a("orders.exchanges.outboundShipping")}),e.jsxs("span",{className:"txt-small text-ui-fg-subtle flex items-center",children:[!v&&e.jsx(ee,{onClick:()=>S(!0),variant:"transparent",className:"text-ui-fg-muted",disabled:!(B!=null&&B.length)||!y,children:e.jsx(he,{})}),v?e.jsx(fe,{id:"js-outbound-shipping-input",onBlur:()=>{let n;l.shipping_methods.forEach(t=>{if(t.actions)for(const d of t.actions)d.action==="SHIPPING_ADD"&&!d.return_id&&(n=d.id)});const i=T===""?null:parseFloat(T);n&&q({actionId:n,custom_amount:i},{onError:t=>{R.error(t.message)}}),S(!1)},symbol:pe[s.currency_code.toUpperCase()].symbol_native,code:s.currency_code,onValueChange:k,value:T,disabled:!(B!=null&&B.length)}):W((c==null?void 0:c.amount)??0,s.currency_code)]})]}),e.jsxs("div",{className:"mt-4 flex items-center justify-between border-t border-dotted pt-4",children:[e.jsx("span",{className:"txt-small font-medium",children:a("orders.exchanges.refundAmount")}),e.jsx("span",{className:"txt-small font-medium",children:W(l.summary.pending_difference,s.currency_code)})]})]}),e.jsx("div",{className:"bg-ui-bg-field mt-8 rounded-lg border py-2 pl-2 pr-4",children:e.jsx(b.Field,{control:p.control,name:"send_notification",render:({field:{onChange:n,value:i,...t}})=>e.jsxs(b.Item,{children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx(b.Control,{className:"mr-4 self-start",children:e.jsx(mt,{className:"mt-[2px]",checked:!!i,onCheckedChange:n,...t})}),e.jsxs("div",{className:"block",children:[e.jsx(b.Label,{children:a("orders.returns.sendNotification")}),e.jsx(b.Hint,{className:"!mt-1",children:a("orders.returns.sendNotificationHint")})]})]}),e.jsx(b.ErrorMessage,{})]})})}),e.jsx("div",{className:"p-8"})]})}),e.jsx(X.Footer,{children:e.jsx("div",{className:"flex w-full items-center justify-end gap-x-4",children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(X.Close,{asChild:!0,children:e.jsx(K,{type:"button",onClick:()=>re=!0,variant:"secondary",size:"small",children:a("orders.exchanges.cancel.title")})}),e.jsx(K,{type:"submit",variant:"primary",size:"small",isLoading:C,children:a("orders.exchanges.confirm")},"submit-button")]})})})]})})},le=!1,Mn=()=>{const{id:s}=ot(),l=rt(),{t:o}=V(),{order:r}=lt(s,{fields:at}),{order:a}=dt(s),[m,g]=j.useState(),{mutateAsync:N}=ze(r.id),{exchange:v}=Be(m,void 0,{enabled:!!m}),{return:S}=st(v==null?void 0:v.return_id,void 0,{enabled:!!(v!=null&&v.return_id)});return j.useEffect(()=>{async function P(){if(!(le||!a)){if(a.order_change){a.order_change.change_type==="exchange"?g(a.order_change.exchange_id):(l(`/orders/${a.id}`,{replace:!0}),R.error(o("orders.exchanges.activeChangeError")));return}le=!0;try{const{exchange:w}=await N({order_id:a.id});g(w.id)}catch(w){R.error(w.message),l(`/orders/${a.id}`,{replace:!0})}finally{le=!1}}}P()},[a]),e.jsx(X,{children:v&&a&&r&&e.jsx(Rt,{order:r,exchange:v,preview:a,orderReturn:S})})};export{Mn as Component};
