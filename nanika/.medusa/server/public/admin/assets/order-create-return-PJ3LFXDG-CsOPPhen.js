import{R as Me,C as Te}from"./chunk-P3DRE4IY-CVYkxkqN.js";import{M as De}from"./chunk-NNBHHXXN-DpAFrAkq.js";import{g as me}from"./chunk-PXZ7QYKX-DZ_CHK12.js";import{m as He,c as Le,n as Fe,u as ze,o as Ve,p as Be,q as Oe,s as Ue,t as $e,v as Ge,w as Qe}from"./chunk-A2MEYV4D-CCTFcJlS.js";import{D as Xe}from"./chunk-77TK23EH-oQvnm0M_.js";import{a as z}from"./chunk-PDWBYQOW-BedvhUOI.js";import{a5 as q,R as Je,u as Ke,b as L,aS as We,aV as Ye,r as j,j as e,cS as Ze,a8 as et,a9 as tt,y as st,t as J,H as ne,B as X,w as m,T as V,I as Z,ab as nt,cW as it,aB as rt,x as ie,A as at,X as re,s as lt}from"./index-SY1KZpDV.js";import{P as ot,a as dt}from"./chunk-IQBAUTU5-D9St1EhW.js";import{u as ct,_ as ut}from"./chunk-RAKBTSZ7-CdZyidod.js";import"./lodash-BeKhCikm.js";import{C as ee}from"./chunk-W6N53UNG-D6pxoKSX.js";import{c as mt}from"./chunk-MWVM4TYO-bKUcYSnf.js";import"./chunk-JKKJMCX3-DW5ylHTW.js";import{u as pt}from"./chunk-C76H5USB-CigedK30.js";import{u as ft}from"./chunk-BF3VCHXD-B-a5ALfp.js";import{K as xt}from"./chunk-6HTZNHPT-BDPMLxeP.js";import{R as A,u as ht,a as gt,S as F}from"./chunk-AYRG2MQL-C-Vmidzb.js";import{P as _t}from"./pencil-square-BuQrcyf5.js";import{C as bt}from"./currency-input-B_sjSN-t.js";import{D as jt}from"./document-text-C2YF1doc.js";import{X as yt}from"./x-circle-nYtTNSZh.js";import{u as vt}from"./use-prompt-DituurAu.js";import{A as Nt}from"./alert-BYYPPflL.js";import{C as ae}from"./checkbox-BmfBlwPV.js";import{c as It}from"./index-5btDAmAS.js";import"./Trans-BP16HUvh.js";import"./chunk-P3UUX2T6-BW5wN8bl.js";import"./chunk-YEDAFXMB-wYpKZCuw.js";import"./chunk-AOFGTNG6-Cs5gjUOe.js";import"./table-BU03PSff.js";import"./chunk-WX2SMNCD-DdNYZhvE.js";import"./plus-mini-fsdo4Nhg.js";import"./command-bar-510pWzfB.js";import"./index-KyYmlkaX.js";import"./x-mark-mini-CzXlcZs0.js";import"./triangles-mini-BT2VjD-k.js";import"./chunk-BKWQ2FHJ-D2rzGP8L.js";import"./format-Bxn-3Vm1.js";import"./_isIndex-CcyGJBtC.js";import"./date-picker-DMjyV1xe.js";import"./popover-DE7fVb5v.js";import"./triangle-left-mini-DpeP8AGJ.js";import"./index-Dukf4kgt.js";import"./prompt-DfbPhKWW.js";import"./index.esm-9LUSWeHG.js";var H=It(),St=l=>{const{t:d}=L();return j.useMemo(()=>[H.display({id:"select",header:({table:n})=>e.jsx(ae,{checked:n.getIsSomePageRowsSelected()?"indeterminate":n.getIsAllPageRowsSelected(),onCheckedChange:t=>n.toggleAllPageRowsSelected(!!t)}),cell:({row:n})=>{const t=n.getCanSelect();return e.jsx(ae,{disabled:!t,checked:n.getIsSelected(),onCheckedChange:o=>n.toggleSelected(!!o),onClick:o=>{o.stopPropagation()}})}}),H.display({id:"product",header:()=>e.jsx(ot,{}),cell:({row:n})=>e.jsx(dt,{product:{thumbnail:n.original.thumbnail,title:n.original.product_title}})}),H.accessor("variant.sku",{header:d("fields.sku"),cell:({getValue:n})=>n()||"-"}),H.accessor("variant.title",{header:d("fields.variant")}),H.accessor("quantity",{header:()=>e.jsx("div",{className:"flex size-full items-center overflow-hidden text-right",children:e.jsx("span",{className:"truncate",children:d("fields.quantity")})}),cell:({getValue:n,row:t})=>me(t.original)}),H.accessor("refundable_total",{header:()=>e.jsx("div",{className:"flex size-full items-center justify-end overflow-hidden text-right",children:e.jsx("span",{className:"truncate",children:d("fields.price")})}),cell:({getValue:n})=>{const t=n()||0,o=z(t,l);return e.jsx("div",{className:"flex size-full items-center justify-end overflow-hidden text-right",children:e.jsx("span",{className:"truncate",children:o})})}})],[d,l])},Ct=()=>{const{t:l}=L();return[{key:"returnable_quantity",label:l("orders.returns.returnableQuantityLabel"),type:"number"},{key:"refundable_amount",label:l("orders.returns.refundableAmountLabel"),type:"number"},{key:"created_at",label:l("fields.createdAt"),type:"date"},{key:"updated_at",label:l("fields.updatedAt"),type:"date"}]},Rt=({pageSize:l=50,prefix:d})=>{const n=pt(["q","offset","order","created_at","updated_at","returnable_quantity","refundable_amount"],d),{offset:t,created_at:o,updated_at:u,refundable_amount:c,returnable_quantity:g,...b}=n;return{searchParams:{...b,limit:l,offset:t?Number(t):0,created_at:o?JSON.parse(o):void 0,updated_at:u?JSON.parse(u):void 0,refundable_amount:c?JSON.parse(c):void 0,returnable_quantity:g?JSON.parse(g):void 0},raw:n}},W=50,le="rit",wt=({onSelectionChange:l,selectedItems:d,items:n,currencyCode:t})=>{const{t:o}=L(),[u,c]=j.useState(d.reduce((x,v)=>(x[v]=!0,x),{})),g=x=>{const v=typeof x=="function"?x(u):x;c(v),l(Object.keys(v))},{searchParams:b,raw:p}=Rt({pageSize:W,prefix:le}),y=j.useMemo(()=>{const{order:x,offset:v,limit:k,q:E,created_at:B,updated_at:O,refundable_amount:U,returnable_quantity:$}=b;let N=n;if(E&&(N=N.filter(P=>{var M;return P.product_title.toLowerCase().includes(E.toLowerCase())||P.variant_title.toLowerCase().includes(E.toLowerCase())||((M=P.variant_sku)==null?void 0:M.toLowerCase().includes(E.toLowerCase()))})),x){const P=x[0]==="-"?"desc":"asc",M=x.replace("-","");N=qt(N,M,P)}return B&&(N=oe(N,B,"created_at")),O&&(N=oe(N,O,"updated_at")),$&&(N=ce(N,$,"returnable_quantity",t)),U&&(N=ce(N,U,"refundable_amount",t)),N.slice(v,v+k)},[n,t,b]),w=St(t),I=Ct(),{table:_}=ct({data:y,columns:w,count:y.length,enablePagination:!0,getRowId:x=>x.id,pageSize:W,enableRowSelection:x=>me(x.original)>0,rowSelection:{state:u,updater:g}});return e.jsx("div",{className:"flex size-full flex-col overflow-hidden",children:e.jsx(ut,{table:_,columns:w,pageSize:W,count:y.length,filters:I,pagination:!0,layout:"fill",search:!0,orderBy:[{key:"product_title",label:o("fields.product")},{key:"variant_title",label:o("fields.variant")},{key:"sku",label:o("fields.sku")},{key:"returnable_quantity",label:o("orders.fields.returnableQuantity")},{key:"refundable_amount",label:o("orders.fields.refundableAmount")}],prefix:le,queryObject:p})})},qt=(l,d,n)=>l.sort((t,o)=>{let u,c;return d==="product_title"?(u=t.product_title,c=o.product_title):d==="variant_title"?(u=t.variant_title,c=o.variant_title):d==="sku"?(u=t.variant_sku,c=o.variant_sku):d==="returnable_quantity"?(u=t.quantity-(t.returned_quantity||0),c=o.quantity-(o.returned_quantity||0)):d==="refundable_amount"&&(u=t.refundable||0,c=o.refundable||0),u<c?n==="asc"?-1:1:u>c?n==="asc"?1:-1:0}),oe=(l,d,n)=>{const{gt:t,gte:o,lt:u,lte:c}=d;return l.filter(g=>{const b=new Date(g[n]);let p=!0;return t&&(p=p&&b>new Date(t)),o&&(p=p&&b>=new Date(o)),u&&(p=p&&b<new Date(u)),c&&(p=p&&b<=new Date(c)),p})},de={eq:void 0,gt:void 0,gte:void 0,lt:void 0,lte:void 0},ce=(l,d,n,t)=>{const{eq:o,gt:u,lt:c,gte:g,lte:b}=typeof d=="object"?{...de,...d}:{...de,eq:d};return l.filter(p=>{const y=p.quantity-(p.returned_quantity||0),w=z(p.refundable||0,t),I=n==="returnable_quantity"?y:w;if(o)return I===o;let _=!0;return u&&(_=_&&I>u),g&&(_=_&&I>=g),c&&(_=_&&I<c),b&&(_=_&&I<=b),_})};function kt({item:l,previewItem:d,currencyCode:n,form:t,onRemove:o,onUpdate:u,index:c}){const{t:g}=L(),{return_reasons:b=[]}=it({fields:"+label"}),p=t.watch(`items.${c}`),y=typeof p.reason_id=="string",w=typeof p.note=="string";return e.jsxs("div",{className:"bg-ui-bg-subtle shadow-elevation-card-rest my-2 rounded-xl ",children:[e.jsxs("div",{className:"flex flex-col items-center gap-x-2 gap-y-2 border-b p-3 text-sm md:flex-row",children:[e.jsxs("div",{className:"flex flex-1 items-center gap-x-3",children:[e.jsx(rt,{src:l.thumbnail}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{children:[e.jsxs(V,{className:"txt-small",as:"span",weight:"plus",children:[l.title," "]}),l.variant_sku&&e.jsxs("span",{children:["(",l.variant_sku,")"]})]}),e.jsx(V,{as:"div",className:"text-ui-fg-subtle txt-small",children:l.product_title})]})]}),e.jsxs("div",{className:"flex flex-1 justify-between",children:[e.jsxs("div",{className:"flex flex-grow items-center gap-2",children:[e.jsx(m.Field,{control:t.control,name:`items.${c}.quantity`,render:({field:I})=>e.jsxs(m.Item,{children:[e.jsx(m.Control,{children:e.jsx(ie,{className:"bg-ui-bg-base txt-small w-[67px] rounded-lg",min:1,max:l.quantity,type:"number",...I,onChange:_=>{const x=_.target.value,v=x===""?null:Number(x);I.onChange(v),v&&u({quantity:v})}})}),e.jsx(m.ErrorMessage,{})]})}),e.jsx(V,{className:"txt-small text-ui-fg-subtle",children:g("fields.qty")})]}),e.jsx("div",{className:"text-ui-fg-subtle txt-small mr-2 flex flex-shrink-0",children:e.jsx(De,{currencyCode:n,amount:d.return_requested_total})}),e.jsx(at,{groups:[{actions:[!y&&{label:g("actions.addReason"),onClick:()=>t.setValue(`items.${c}.reason_id`,""),icon:e.jsx(Te,{})},!w&&{label:g("actions.addNote"),onClick:()=>t.setValue(`items.${c}.note`,""),icon:e.jsx(jt,{})},{label:g("actions.remove"),onClick:o,icon:e.jsx(yt,{})}].filter(Boolean)}]})]})]}),e.jsxs(e.Fragment,{children:[y&&e.jsxs("div",{className:"grid grid-cols-1 gap-2 p-3 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx(m.Label,{children:g("orders.returns.reason")}),e.jsx(m.Hint,{className:"!mt-1",children:g("orders.returns.reasonHint")})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("div",{className:"flex-grow",children:e.jsx(m.Field,{control:t.control,name:`items.${c}.reason_id`,render:({field:{ref:I,value:_,onChange:x,...v}})=>e.jsxs(m.Item,{children:[e.jsx(m.Control,{children:e.jsx(ee,{className:"bg-ui-bg-field-component hover:bg-ui-bg-field-component-hover",value:_,onChange:k=>{u({reason_id:k}),x(k)},...v,options:b.map(k=>({label:k.label,value:k.id}))})}),e.jsx(m.ErrorMessage,{})]})})}),e.jsx(Z,{type:"button",className:"flex-shrink",variant:"transparent",onClick:()=>{u({reason_id:null}),t.setValue(`items.${c}.reason_id`,null)},children:e.jsx(re,{className:"text-ui-fg-muted"})})]})]}),w&&e.jsxs("div",{className:"grid grid-cols-1 gap-2 p-3 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx(m.Label,{children:g("orders.returns.note")}),e.jsx(m.Hint,{className:"!mt-1",children:g("orders.returns.noteHint")})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("div",{className:"flex-grow",children:e.jsx(m.Field,{control:t.control,name:`items.${c}.note`,render:({field:{ref:I,onChange:_,...x}})=>e.jsxs(m.Item,{children:[e.jsx(m.Control,{children:e.jsx(ie,{onChange:_,...x,onBlur:()=>u({internal_note:x.value}),className:"bg-ui-bg-field-component hover:bg-ui-bg-field-component-hover"})}),e.jsx(m.ErrorMessage,{})]})})}),e.jsx(Z,{type:"button",className:"flex-shrink",variant:"transparent",onClick:()=>{t.setValue(`items.${c}.note`,{shouldDirty:!0,shouldTouch:!0}),u({internal_note:null})},children:e.jsx(re,{className:"text-ui-fg-muted"})})]})]})]})]})}var Pt=q.object({items:q.array(q.object({item_id:q.string(),quantity:q.number(),reason_id:q.string().optional().nullable(),note:q.string().optional().nullable()})),location_id:q.string().optional(),option_id:q.string(),send_notification:q.boolean().optional(),receive_now:q.boolean().optional()}),ue=[],At=({order:l,preview:d,activeReturn:n})=>{const{t}=L(),{handleSuccess:o}=ht(),u=j.useMemo(()=>new Map((l.items||[]).map(s=>[s.id,s])),[l.items]),c=j.useMemo(()=>d.items.filter(s=>{var i;return!!((i=s.actions)!=null&&i.find(r=>r.return_id===n.id))}),[d.items]),g=j.useMemo(()=>new Map(c.map(s=>[s.id,s])),[c]),{setIsOpen:b}=gt(),[p,y]=j.useState(!1),[w,I]=j.useState(0),[_,x]=j.useState({}),{stock_locations:v=[]}=Ze({limit:999}),{shipping_options:k=[]}=ft({limit:999,fields:"*prices,+service_zone.fulfillment_set.location.id"}),{mutateAsync:E,isPending:B}=Fe(n.id,l.id),{mutateAsync:O,isPending:U}=ze(n.id,l.id),{mutateAsync:$,isPending:N}=Ve(n.id,l.id),{mutateAsync:P,isPending:M}=Be(n.id,l.id),{mutateAsync:pe,isPending:fe}=Oe(n.id,l.id),{mutateAsync:xe,isPending:he}=Ue(n.id,l.id),{mutateAsync:ge,isPending:_e}=$e(n.id,l.id),{mutateAsync:be,isPending:je}=Ge(n.id,l.id),{mutateAsync:ye,isPending:ve}=Qe(n.id,l.id),Ne=B||U||M||fe||he||_e||je||ve||N,C=et({defaultValues:()=>{const s=d.shipping_methods.find(i=>{var r;return!!((r=i.actions)!=null&&r.find(a=>a.action==="SHIPPING_ADD"))});return Promise.resolve({items:c.map(i=>{var r,a,f,h,S;return{item_id:i.id,quantity:i.detail.return_requested_quantity,note:(a=(r=i.actions)==null?void 0:r.find(D=>D.action==="RETURN_ITEM"))==null?void 0:a.internal_note,reason_id:(S=(h=(f=i.actions)==null?void 0:f.find(D=>D.action==="RETURN_ITEM"))==null?void 0:h.details)==null?void 0:S.reason_id}}),option_id:s?s.shipping_option_id:"",location_id:n==null?void 0:n.location_id,send_notification:!1})},resolver:tt(Pt)}),{fields:R,append:Ie,remove:Se,update:Ce}=st({name:"items",control:C.control});j.useEffect(()=>{const s={};c.forEach(i=>{var a,f;const r=R.findIndex(h=>h.item_id===i.id);if(i.detail.return_requested_quantity)if(s[i.id]=!0,r>-1){if(R[r].quantity!==i.detail.return_requested_quantity){const h=(a=i.actions)==null?void 0:a.find(S=>S.action==="RETURN_ITEM");Ce(r,{...R[r],quantity:i.detail.return_requested_quantity,note:h==null?void 0:h.internal_note,reason_id:(f=h==null?void 0:h.details)==null?void 0:f.reason_id})}}else Ie({item_id:i.id,quantity:i.detail.return_requested_quantity})}),R.forEach((i,r)=>{i.item_id in s||Se(r)})},[c]),j.useEffect(()=>{var i;const s=(i=d.shipping_methods)==null?void 0:i.find(r=>{var a;return!!((a=r.actions)!=null&&a.find(f=>f.action==="SHIPPING_ADD"))});s?C.setValue("option_id",s.shipping_option_id):C.setValue("option_id","")},[d.shipping_methods]);const G=!R.length,T=C.watch("location_id"),Re=C.watch("option_id"),we=vt(),qe=C.handleSubmit(async s=>{try{if(!await we({title:t("general.areYouSure"),description:t("orders.returns.confirmText"),confirmText:t("actions.continue"),cancelText:t("actions.cancel"),variant:"confirmation"}))return;await E({no_notification:!s.send_notification}),o()}catch(i){J.error(t("general.error"),{description:i.message,dismissLabel:t("actions.close")})}}),ke=()=>{ge({items:ue.map(s=>({id:s,quantity:1}))}),b("items",!1)},Pe=async s=>{await $({location_id:s})},Ae=async s=>{const i=d.shipping_methods.map(r=>{var a,f;return(f=(a=r.actions)==null?void 0:a.find(h=>h.action==="SHIPPING_ADD"))==null?void 0:f.id}).filter(Boolean).map(xe);await Promise.all(i),await P({shipping_option_id:s})};j.useEffect(()=>{p&&document.getElementById("js-shipping-input").focus()},[p]),j.useEffect(()=>{C.setValue("location_id",(n==null?void 0:n.location_id)||"")},[n]);const Ee=j.useMemo(()=>T?!R.map(i=>{var a,f;const r=u.get(i.item_id);return!(r!=null&&r.variant_id)||!((a=r.variant)!=null&&a.manage_inventory)?!0:(f=_[r.variant_id])==null?void 0:f.find(h=>h.location_id===T)}).every(Boolean):!1,[R,_,T]);j.useEffect(()=>{(async()=>{const i={};return R.length&&(await Promise.all(R.map(async r=>{const a=u.get(r.item_id);if(a.variant_id)return await lt.admin.product.retrieveVariant(a.product_id,a.variant_id,{fields:"*inventory,*inventory.location_levels"})}))).filter(r=>r==null?void 0:r.variant).forEach(r=>{var h;const{variant:a}=r,f=(h=a.inventory[0])==null?void 0:h.location_levels;f&&(i[a.id]=f)}),i})().then(i=>{x(i)})},[R]);const Q=d.return_requested_total,te=j.useMemo(()=>{const s=d.shipping_methods.find(i=>{var r;return!!((r=i.actions)!=null&&r.find(a=>a.action==="SHIPPING_ADD"))});return(s==null?void 0:s.total)||0},[d.shipping_methods]),K=Q-te;return e.jsx(A.Form,{form:C,onClose:s=>{s||O()},children:e.jsxs(xt,{onSubmit:qe,className:"flex h-full flex-col",children:[e.jsx(A.Header,{}),e.jsx(A.Body,{className:"flex size-full justify-center overflow-y-auto",children:e.jsxs("div",{className:"mt-16 w-[720px] max-w-[100%] px-4 md:p-0",children:[e.jsx(ne,{level:"h1",children:t("orders.returns.create")}),e.jsxs("div",{className:"mt-8 flex items-center justify-between",children:[e.jsx(ne,{level:"h2",children:t("orders.returns.inbound")}),e.jsxs(F,{id:"items",children:[e.jsx(F.Trigger,{asChild:!0,children:e.jsx("a",{className:"focus-visible:shadow-borders-focus transition-fg txt-compact-small-plus cursor-pointer text-blue-500 outline-none hover:text-blue-400",children:t("actions.addItems")})}),e.jsxs(F.Content,{children:[e.jsx(F.Header,{}),e.jsx(wt,{items:l.items,selectedItems:R.map(s=>s.item_id),currencyCode:l.currency_code,onSelectionChange:s=>ue=s}),e.jsx(F.Footer,{children:e.jsx("div",{className:"flex w-full items-center justify-end gap-x-4",children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(A.Close,{asChild:!0,children:e.jsx(X,{type:"button",variant:"secondary",size:"small",children:t("actions.cancel")})}),e.jsx(X,{type:"submit",variant:"primary",size:"small",role:"button",onClick:()=>ke(),children:t("actions.save")},"submit-button")]})})})]})]})]}),G&&e.jsx("div",{style:{background:"repeating-linear-gradient(-45deg, rgb(212, 212, 216, 0.15), rgb(212, 212, 216,.15) 10px, transparent 10px, transparent 20px)"},className:"bg-ui-bg-field mt-4 block h-[56px] w-full rounded-lg border border-dashed"}),R.filter(s=>!!g.get(s.item_id)).map((s,i)=>e.jsx(kt,{item:u.get(s.item_id),previewItem:g.get(s.item_id),currencyCode:l.currency_code,form:C,onRemove:()=>{var a,f,h;const r=(h=(f=(a=c.find(S=>S.id===s.item_id))==null?void 0:a.actions)==null?void 0:f.find(S=>S.action==="RETURN_ITEM"))==null?void 0:h.id;r&&be(r)},onUpdate:r=>{var f,h;const a=(h=(f=c.find(S=>S.id===s.item_id))==null?void 0:f.actions)==null?void 0:h.find(S=>S.action==="RETURN_ITEM");a&&ye({...r,actionId:a.id},{onError:S=>{var D,se;(D=a.details)!=null&&D.quantity&&r.quantity&&C.setValue(`items.${i}.quantity`,(se=a.details)==null?void 0:se.quantity),J.error(S.message)}})},index:i},s.id)),!G&&e.jsxs("div",{className:"mt-8 flex flex-col gap-y-4",children:[e.jsxs("div",{className:"grid grid-cols-1 gap-2 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx(m.Label,{children:t("orders.returns.location")}),e.jsx(m.Hint,{className:"!mt-1",children:t("orders.returns.locationHint")})]}),e.jsx(m.Field,{control:C.control,name:"location_id",render:({field:{value:s,onChange:i,...r}})=>e.jsx(m.Item,{children:e.jsx(m.Control,{children:e.jsx(ee,{value:s,onChange:a=>{i(a),Pe(a)},...r,options:(v??[]).map(a=>({label:a.name,value:a.id}))})})})})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-2 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsxs(m.Label,{children:[t("orders.returns.inboundShipping"),e.jsxs(V,{size:"small",leading:"compact",className:"text-ui-fg-muted ml-1 inline",children:["(",t("fields.optional"),")"]})]}),e.jsx(m.Hint,{className:"!mt-1",children:t("orders.returns.inboundShippingHint")})]}),e.jsx(m.Field,{control:C.control,name:"option_id",render:({field:{value:s,onChange:i,...r}})=>e.jsx(m.Item,{children:e.jsx(m.Control,{children:e.jsx(ee,{value:s,onChange:a=>{i(a),Ae(a)},...r,options:(k??[]).filter(a=>(T?a.service_zone.fulfillment_set.location.id===T:!0)&&!!a.rules.find(f=>f.attribute==="is_return"&&f.value==="true")).map(a=>({label:a.name,value:a.id})),disabled:!T,noResultsPlaceholder:e.jsx(Me,{})})})})})]})]}),Ee&&e.jsxs(Nt,{variant:"warning",dismissible:!0,className:"mt-4 p-5",children:[e.jsx("div",{className:"text-ui-fg-subtle txt-small pb-2 font-medium leading-[20px]",children:t("orders.returns.noInventoryLevel")}),e.jsx(V,{className:"text-ui-fg-subtle txt-small leading-normal",children:t("orders.returns.noInventoryLevelDesc")})]}),e.jsxs("div",{className:"mt-8 border-y border-dotted py-4",children:[e.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[e.jsx("span",{className:"txt-small text-ui-fg-subtle",children:t("orders.returns.returnTotal")}),e.jsx("span",{className:"txt-small text-ui-fg-subtle",children:z(Q&&-1*Q,l.currency_code)})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"txt-small text-ui-fg-subtle",children:t("orders.returns.inboundShipping")}),e.jsxs("span",{className:"txt-small text-ui-fg-subtle flex items-center",children:[!p&&e.jsx(Z,{onClick:()=>y(!0),variant:"transparent",className:"text-ui-fg-muted",disabled:G||!Re,children:e.jsx(_t,{})}),p?e.jsx(bt,{id:"js-shipping-input",onBlur:()=>{let s;d.shipping_methods.forEach(i=>{if(i.actions)for(const r of i.actions)r.action==="SHIPPING_ADD"&&(s=r.id)}),s&&pe({actionId:s,custom_amount:typeof w=="string"?null:w}),y(!1)},symbol:mt[l.currency_code.toUpperCase()].symbol_native,code:l.currency_code,onValueChange:s=>I(s?parseFloat(s):""),value:w,disabled:G}):z(te,l.currency_code)]})]}),e.jsxs("div",{className:"mt-4 flex items-center justify-between border-t border-dotted pt-4",children:[e.jsx("span",{className:"txt-small font-medium",children:t("orders.returns.refundAmount")}),e.jsx("span",{className:"txt-small font-medium",children:z(K&&-1*K,l.currency_code)})]})]}),e.jsx("div",{className:"bg-ui-bg-field mt-8 rounded-lg border py-2 pl-2 pr-4",children:e.jsx(m.Field,{control:C.control,name:"send_notification",render:({field:{onChange:s,value:i,...r}})=>e.jsxs(m.Item,{children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx(m.Control,{className:"mr-4 self-start",children:e.jsx(nt,{className:"mt-[2px]",checked:!!i,onCheckedChange:s,...r})}),e.jsxs("div",{className:"block",children:[e.jsx(m.Label,{children:t("orders.returns.sendNotification")}),e.jsx(m.Hint,{className:"!mt-1",children:t("orders.returns.sendNotificationHint")})]})]}),e.jsx(m.ErrorMessage,{})]})})}),e.jsx("div",{className:"p-8"})]})}),e.jsx(A.Footer,{children:e.jsx("div",{className:"flex w-full items-center justify-end gap-x-4",children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(A.Close,{asChild:!0,children:e.jsx(X,{type:"button",variant:"secondary",size:"small",children:t("orders.returns.cancel.title")})}),e.jsx(X,{type:"submit",variant:"primary",size:"small",isLoading:Ne,children:t("orders.returns.confirm")},"submit-button")]})})})]})})},Y=!1,Is=()=>{const{id:l}=Je(),d=Ke(),{t:n}=L(),{order:t}=We(l,{fields:Xe}),{order:o}=Ye(l,void 0,{}),[u,c]=j.useState(),{mutateAsync:g}=He(t.id),{return:b}=Le(u,void 0,{enabled:!!u});return j.useEffect(()=>{async function p(){if(!(Y||!o)){if(o.order_change){o.order_change.change_type==="return_request"?c(o.order_change.return_id):(d(`/orders/${t.id}`,{replace:!0}),J.error(n("orders.returns.activeChangeError")));return}Y=!0;try{const y=await g({order_id:t.id});c(y.id)}catch(y){d(`/orders/${t.id}`,{replace:!0}),J.error(y.message)}finally{Y=!1}}}p()},[o]),e.jsx(A,{children:b&&o&&t&&e.jsx(At,{order:t,activeReturn:b,preview:o})})};export{Is as Component};
