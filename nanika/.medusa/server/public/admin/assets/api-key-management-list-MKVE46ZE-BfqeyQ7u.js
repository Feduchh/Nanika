import{g as h,p as v,a as _,b as j}from"./chunk-G22WWLPG-C9g-VuwI.js";import{a as g}from"./chunk-B4FQDBC3-BXkaOMZl.js";import{a as A}from"./chunk-MSDRGCRR-CDhS3pCd.js";import{S as T}from"./chunk-ADOCJB6L-B_8JU6Oc.js";import{c as S,a as M,j as a,b as u,eQ as K,H as w,T as C,L as P,B as N,r as D,Y as E,k as q,eR as z,eS as R,A as L,t as m}from"./index-SY1KZpDV.js";import{u as O,_ as H}from"./chunk-RAKBTSZ7-CdZyidod.js";import"./lodash-BeKhCikm.js";import"./chunk-JKKJMCX3-DW5ylHTW.js";import{S as B,a as F}from"./chunk-2RQLKDBF-BhxlG4RV.js";import{u as J}from"./chunk-C76H5USB-CigedK30.js";import{P as Q}from"./pencil-square-BuQrcyf5.js";import{X as Y}from"./x-circle-nYtTNSZh.js";import{T as I}from"./trash-C2nS7g6s.js";import{u as X}from"./use-prompt-DituurAu.js";import{C as G}from"./container-D7E0xgGl.js";import{c as U}from"./index-5btDAmAS.js";import"./chunk-P3UUX2T6-BW5wN8bl.js";import"./format-Bxn-3Vm1.js";import"./chunk-YEDAFXMB-wYpKZCuw.js";import"./chunk-AOFGTNG6-Cs5gjUOe.js";import"./table-BU03PSff.js";import"./chunk-WX2SMNCD-DdNYZhvE.js";import"./plus-mini-fsdo4Nhg.js";import"./command-bar-510pWzfB.js";import"./index-KyYmlkaX.js";import"./chunk-BKWQ2FHJ-D2rzGP8L.js";import"./_isIndex-CcyGJBtC.js";import"./x-mark-mini-CzXlcZs0.js";import"./date-picker-DMjyV1xe.js";import"./popover-DE7fVb5v.js";import"./triangle-left-mini-DpeP8AGJ.js";import"./index-Dukf4kgt.js";import"./Trans-BP16HUvh.js";import"./check-DkOvD93P.js";import"./prompt-DfbPhKWW.js";var W=({apiKey:t})=>{const{mutateAsync:e}=z(t.id),{mutateAsync:r}=R(t.id),{t:s}=u(),i=X(),l=async()=>{await i({title:s("general.areYouSure"),description:s("apiKeyManagement.delete.warning",{title:t.title}),confirmText:s("actions.delete"),cancelText:s("actions.cancel")})&&await r(void 0,{onSuccess:()=>{m.success(s("apiKeyManagement.delete.successToast",{title:t.title}))},onError:c=>{m.error(c.message)}})},o=async()=>{await i({title:s("general.areYouSure"),description:s("apiKeyManagement.revoke.warning",{title:t.title}),confirmText:s("apiKeyManagement.actions.revoke"),cancelText:s("actions.cancel")})&&await e(void 0,{onSuccess:()=>{m.success(s("apiKeyManagement.revoke.successToast",{title:t.title}))},onError:c=>{m.error(c.message)}})},d=()=>{navigator.clipboard.writeText(t.token),m.success(s("apiKeyManagement.actions.copySuccessToast"))};return a.jsx(L,{groups:[{actions:[{icon:a.jsx(Q,{}),label:s("actions.edit"),to:`${t.id}/edit`},...t.type!=="secret"?[{label:s("apiKeyManagement.actions.copy"),onClick:d,icon:a.jsx(F,{})}]:[]]},{actions:[{icon:a.jsx(Y,{}),label:s("apiKeyManagement.actions.revoke"),onClick:o,disabled:!!t.revoked_at},{icon:a.jsx(I,{}),label:s("actions.delete"),onClick:l,disabled:!t.revoked_at}]}]})},n=U(),Z=()=>{const{t}=u();return D.useMemo(()=>[n.accessor("title",{header:t("fields.title"),cell:({getValue:e})=>a.jsx("div",{className:"flex size-full items-center",children:a.jsx("span",{className:"truncate",children:e()})})}),n.accessor("redacted",{header:"Token",cell:({getValue:e})=>{const r=e();return a.jsx(E,{size:"2xsmall",children:v(r)})}}),n.accessor("type",{header:t("fields.type"),cell:({getValue:e})=>{const{label:r}=_(e(),t);return a.jsx(A,{text:r})}}),n.accessor("revoked_at",{header:t("fields.status"),cell:({getValue:e})=>{const{color:r,label:s}=j(e(),t);return a.jsx(T,{color:r,children:s})}}),n.accessor("last_used_at",{header:t("apiKeyManagement.table.lastUsedAtHeader"),cell:({getValue:e})=>{const r=e();return a.jsx(g,{date:r})}}),n.accessor("created_at",{header:t("fields.created"),cell:({getValue:e})=>{const r=e();return a.jsx(g,{date:r})}}),n.display({id:"actions",cell:({row:e})=>a.jsx(W,{apiKey:e.original})})],[t])},$=()=>{const{t}=u();let e=[];const r=[{label:t("fields.createdAt"),key:"created_at",type:"date"},{label:t("fields.updatedAt"),key:"updated_at",type:"date"},{label:t("fields.revokedAt"),key:"revoked_at",type:"date"}];return e=[...e,...r],e},V=({prefix:t,pageSize:e=20})=>{const r=J(["offset","q","created_at","updated_at","revoked_at","order"],t),{offset:s,created_at:i,updated_at:l,revoked_at:o,q:d,order:p}=r;return{searchParams:{limit:e,offset:s?Number(s):0,created_at:i?JSON.parse(i):void 0,updated_at:l?JSON.parse(l):void 0,revoked_at:o?JSON.parse(o):void 0,order:p,q:d},raw:r}},f=20,ee=({keyType:t})=>{const{t:e}=u(),{searchParams:r,raw:s}=V({pageSize:f}),i={...r,type:t,fields:"id,title,redacted,token,type,created_at,updated_at,revoked_at,last_used_at,created_by,revoked_by"},{api_keys:l,count:o,isLoading:d,isError:p,error:c}=K(i,{placeholderData:q}),k=$(),b=Z(),{table:x}=O({data:l||[],columns:b,count:o,enablePagination:!0,getRowId:y=>y.id,pageSize:f});if(p)throw c;return a.jsxs(G,{className:"divide-y p-0",children:[a.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[a.jsxs("div",{children:[a.jsx(w,{level:"h2",children:e(t==="publishable"?"apiKeyManagement.domain.publishable":"apiKeyManagement.domain.secret")}),a.jsx(C,{className:"text-ui-fg-subtle",size:"small",children:e(t==="publishable"?"apiKeyManagement.subtitle.publishable":"apiKeyManagement.subtitle.secret")})]}),a.jsx(P,{to:"create",children:a.jsx(N,{variant:"secondary",size:"small",children:e("actions.create")})})]}),a.jsx(H,{table:x,filters:k,columns:b,count:o,pageSize:f,orderBy:[{key:"title",label:e("fields.title")},{key:"created_at",label:e("fields.createdAt")},{key:"updated_at",label:e("fields.updatedAt")},{key:"revoked_at",label:e("fields.revokedAt")}],navigateTo:y=>y.id,pagination:!0,search:!0,queryObject:s,isLoading:d})]})},ze=()=>{const{pathname:t}=S(),{getWidgets:e}=M(),r=h(t);return a.jsx(B,{hasOutlet:!0,widgets:{before:e("api_key.list.before"),after:e("api_key.list.after")},children:a.jsx(ee,{keyType:r})})};export{ze as Component};
