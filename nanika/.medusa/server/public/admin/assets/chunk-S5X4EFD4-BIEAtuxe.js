import{C as F}from"./chunk-UGE5SYTC-Vg5_877h.js";import{a1 as S,a3 as T,a2 as E,b as N,a8 as B,a9 as z,d4 as I,t as v,v as f,r as C,j as e,B as b,w as r,T as i,H as y}from"./index-SY1KZpDV.js";import{K as P}from"./chunk-6HTZNHPT-BDPMLxeP.js";import{u as R,b as p}from"./chunk-AYRG2MQL-C-Vmidzb.js";import{T as V}from"./Trans-BP16HUvh.js";import{R as u}from"./radio-group-CQHU1b7t.js";import{S as g}from"./select-CdDUEMk1.js";var A=({campaign:s})=>{var o,t,l,d,c,n;const{t:a}=N();if(s)return e.jsxs(C.Fragment,{children:[e.jsxs("div",{children:[e.jsx(y,{level:"h2",className:"mb-4",children:a("campaigns.details")}),e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-center py-1",children:[e.jsx(i,{className:"txt-small-plus font-",children:a("campaigns.fields.identifier")}),e.jsx("div",{className:"flex items-center gap-1",children:e.jsx(i,{className:"txt-small",children:s.campaign_identifier||"-"})})]}),e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-center py-1",children:[e.jsx(i,{className:"txt-small-plus",children:a("fields.description")}),e.jsx("div",{className:"flex items-center gap-1",children:e.jsx(i,{className:"txt-small",children:s.description||"-"})})]}),e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-center py-1",children:[e.jsx(i,{className:"txt-small-plus",children:a("campaigns.fields.start_date")}),e.jsx("div",{className:"flex items-center gap-1",children:e.jsx(i,{className:"txt-small",children:((o=s.starts_at)==null?void 0:o.toString())||"-"})})]}),e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-center py-1",children:[e.jsx(i,{className:"txt-small-plus",children:a("campaigns.fields.end_date")}),e.jsx("div",{className:"flex items-center gap-1",children:e.jsx(i,{className:"txt-small",children:((t=s.ends_at)==null?void 0:t.toString())||"-"})})]})]}),e.jsxs("div",{children:[e.jsx(y,{level:"h2",className:"mb-4",children:a("campaigns.budget.details")}),e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-center py-1",children:[e.jsx(i,{className:"txt-small-plus font-",children:a("campaigns.budget.fields.type")}),e.jsx("div",{className:"flex items-center gap-1",children:e.jsx(i,{className:"txt-small",children:((l=s.budget)==null?void 0:l.type)||"-"})})]}),e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-center py-1",children:[e.jsx(i,{className:"txt-small-plus",children:a("campaigns.budget.fields.currency")}),e.jsx("div",{className:"flex items-center gap-1",children:e.jsx(i,{className:"txt-small",children:((d=s==null?void 0:s.budget)==null?void 0:d.currency_code)||"-"})})]}),e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-center py-1",children:[e.jsx(i,{className:"txt-small-plus",children:a("campaigns.budget.fields.limit")}),e.jsx("div",{className:"flex items-center gap-1",children:e.jsx(i,{className:"txt-small",children:((c=s.budget)==null?void 0:c.limit)||"-"})})]}),e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-center py-1",children:[e.jsx(i,{className:"txt-small-plus",children:a("campaigns.budget.fields.used")}),e.jsx("div",{className:"flex items-center gap-1",children:e.jsx(i,{className:"txt-small",children:((n=s.budget)==null?void 0:n.used)||"-"})})]})]})]})},K=S({campaign_id:T().optional().nullable(),campaign_choice:E(["none","existing"]).optional()}),L=({form:s,campaigns:a,withNewCampaign:o=!0})=>{const{t}=N(),l=f({control:s.control,name:"campaign_id"}),d=f({control:s.control,name:"campaign_choice"}),c=a.find(n=>n.id===l);return e.jsxs("div",{className:"flex flex-col gap-y-8",children:[e.jsx(r.Field,{control:s.control,name:"campaign_choice",render:({field:n})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{children:t("promotions.fields.campaign")}),e.jsx(r.Control,{children:e.jsxs(u,{className:"grid grid-cols-1 gap-3",...n,value:n.value,onValueChange:n.onChange,children:[e.jsx(u.ChoiceBox,{value:"none",label:t("promotions.form.campaign.none.title"),description:t("promotions.form.campaign.none.description")}),e.jsx(u.ChoiceBox,{value:"existing",label:t("promotions.form.campaign.existing.title"),description:t("promotions.form.campaign.existing.description")}),o&&e.jsx(u.ChoiceBox,{value:"new",label:t("promotions.form.campaign.new.title"),description:t("promotions.form.campaign.new.description")})]})}),e.jsx(r.ErrorMessage,{})]})}),d==="existing"&&e.jsx(r.Field,{control:s.control,name:"campaign_id",render:({field:{onChange:n,ref:h,...j}})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{children:t("promotions.form.campaign.existing.title")}),e.jsx(r.Control,{children:e.jsxs(g,{onValueChange:n,...j,children:[e.jsx(g.Trigger,{ref:h,children:e.jsx(g.Value,{})}),e.jsxs(g.Content,{children:[!a.length&&e.jsxs("div",{className:"flex h-[120px] flex-col items-center justify-center gap-2 p-2",children:[e.jsx("span",{className:"txt-small text-ui-fg-subtle font-medium",children:t("promotions.form.campaign.existing.placeholder.title")}),e.jsx("span",{className:"txt-small text-ui-fg-muted",children:t("promotions.form.campaign.existing.placeholder.desc")})]}),a.map(x=>{var m;return e.jsx(g.Item,{value:x.id,children:(m=x.name)==null?void 0:m.toUpperCase()},x.id)})]})]})}),e.jsx(i,{size:"small",leading:"compact",className:"text-ui-fg-subtle",children:e.jsx(V,{t,i18nKey:"campaigns.fields.campaign_id.hint",components:[e.jsx("br",{},"break")]})}),e.jsx(r.ErrorMessage,{})]})}),d==="new"&&e.jsx(F,{form:s,fieldScope:"campaign."}),e.jsx(A,{campaign:c})]})},$=({promotion:s,campaigns:a})=>{const{t:o}=N(),{handleSuccess:t}=R(),{campaign:l}=s,d=l==null?void 0:l.id,c=B({defaultValues:{campaign_id:l==null?void 0:l.id,campaign_choice:l!=null&&l.id?"existing":"none"},resolver:z(K)}),{setValue:n}=c,{mutateAsync:h,isPending:j}=I(s.id),x=c.handleSubmit(async _=>{await h({campaign_id:_.campaign_id},{onSuccess:()=>{v.success(o("promotions.campaign.edit.successToast")),t()},onError:w=>{v.error(w.message)}})}),m=f({control:c.control,name:"campaign_choice"});return C.useEffect(()=>{m==="none"&&n("campaign_id",null),m==="existing"&&n("campaign_id",d)},[m,n,d]),e.jsx(p.Form,{form:c,children:e.jsxs(P,{onSubmit:x,className:"flex size-full flex-col overflow-hidden",children:[e.jsx(p.Body,{className:"size-full overflow-auto",children:e.jsx(L,{form:c,campaigns:a,withNewCampaign:!1})}),e.jsx(p.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(p.Close,{asChild:!0,children:e.jsx(b,{size:"small",variant:"secondary",children:o("actions.cancel")})}),e.jsx(b,{size:"small",type:"submit",isLoading:j,children:o("actions.save")})]})})]})})};export{L as A,$ as a};
