import{S as d}from"./chunk-LFLGEXIG-DPevxZ-8.js";import{S as u}from"./chunk-2RQLKDBF-BhxlG4RV.js";import{en as l,j as n,q as m,R as f,d as g,a as h,dn as x,eo as y,s as P,b as S,u as j,el as v,H as w,A as _,t as p}from"./index-SY1KZpDV.js";import{T as b}from"./trash-C2nS7g6s.js";import{u as D}from"./use-prompt-DituurAu.js";import{C}from"./container-D7E0xgGl.js";import"./Trans-BP16HUvh.js";import"./x-mark-mini-CzXlcZs0.js";import"./check-DkOvD93P.js";import"./prompt-DfbPhKWW.js";var J=e=>{const{shipping_profile_id:i}=e.params||{},{shipping_profile:s}=l(i,void 0,{initialData:e.data,enabled:!!i});return s?n.jsx("span",{children:s.name}):null},T=e=>({queryKey:y.detail(e),queryFn:async()=>P.admin.shippingProfile.retrieve(e)}),K=async({params:e})=>{const i=e.shipping_profile_id,s=T(i);return m.ensureQueryData(s)},q=({profile:e})=>{const{t:i}=S(),s=D(),t=j(),{mutateAsync:a}=v(e.id),r=async()=>{await s({title:i("shippingProfile.delete.title"),description:i("shippingProfile.delete.description",{name:e.name}),verificationText:e.name,verificationInstruction:i("general.typeToConfirm"),confirmText:i("actions.delete"),cancelText:i("actions.cancel")})&&await a(void 0,{onSuccess:()=>{p.success(i("shippingProfile.delete.successToast",{name:e.name})),t("/settings/locations/shipping-profiles",{replace:!0})},onError:c=>{p.error(c.message)}})};return n.jsxs(C,{className:"divide-y p-0",children:[n.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[n.jsx(w,{children:e.name}),n.jsx(_,{groups:[{actions:[{icon:n.jsx(b,{}),label:i("actions.delete"),onClick:r}]}]})]}),n.jsx(d,{title:i("fields.type"),value:e.type})]})},O=()=>{const{shipping_profile_id:e}=f(),i=g(),{shipping_profile:s,isLoading:t,isError:a,error:r}=l(e,void 0,{initialData:i}),{getWidgets:o}=h();if(t||!s)return n.jsx(x,{sections:1,showJSON:!0,showMetadata:!0});if(a)throw r;return n.jsx(u,{widgets:{before:o("shipping_profile.details.before"),after:o("shipping_profile.details.after")},showMetadata:!0,showJSON:!0,data:s,children:n.jsx(q,{profile:s})})};export{J as Breadcrumb,O as Component,K as loader};
