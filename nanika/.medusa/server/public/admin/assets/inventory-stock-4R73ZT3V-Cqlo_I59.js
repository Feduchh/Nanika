import{I as O}from"./chunk-JHATTPS3-DKo14Q46.js";import{D as V}from"./chunk-NOZD6HRU-BFpYKEoT.js";import{D as B,d as L,a as G}from"./chunk-GE4APTT2-BxRZOQsw.js";import{a5 as i,b as x,a6 as H,dO as $,cS as Q,j as t,r as z,a8 as U,a9 as Y,aA as A,t as N,B as R}from"./index-SY1KZpDV.js";import{c as F}from"./chunk-6GU6IDUA-CDc7wW5L.js";import{K as J}from"./chunk-6HTZNHPT-BDPMLxeP.js";import{R as l,u as W}from"./chunk-AYRG2MQL-C-Vmidzb.js";import"./index.esm-9LUSWeHG.js";import"./chunk-MWVM4TYO-bKUcYSnf.js";import"./_isIndex-CcyGJBtC.js";import"./index-5btDAmAS.js";import"./checkbox-BmfBlwPV.js";import"./prompt-DfbPhKWW.js";var v=G(),X=(o=[])=>{const{t:r}=x();return z.useMemo(()=>[v.column({id:"title",name:"Title",header:"Title",cell:s=>{const n=s.row.original;return t.jsx(L,{context:s,color:"normal",children:t.jsx("span",{title:n.title||void 0,children:n.title||"-"})})},disableHiding:!0}),v.column({id:"sku",name:"SKU",header:"SKU",cell:s=>{const n=s.row.original;return t.jsx(L,{context:s,color:"normal",children:t.jsx("span",{title:n.sku||void 0,children:n.sku||"-"})})},disableHiding:!0}),...o.map(s=>v.column({id:`location_${s.id}`,name:s.name,header:s.name,field:n=>`inventory_items.${n.row.original.id}.locations.${s.id}`,type:"togglable-number",cell:n=>t.jsx(V,{context:n,disabledToggleTooltip:r("inventory.stock.disabledToggleTooltip")})}))],[o,r])},Z=i.object({id:i.string().optional(),quantity:i.union([i.number(),i.string()]),checked:i.boolean(),disabledToggle:i.boolean()}),ee=i.record(Z),te=i.object({locations:ee}),se=i.object({inventory_items:i.record(te)}),ne=({items:o,locations:r})=>{const{t:s}=x(),{setCloseOnEscape:n,handleSuccess:m}=W(),c=z.useRef(P(o,r));console.log("initialValues",c.current);const d=U({defaultValues:P(o,r),resolver:Y(se)}),e=X(r),{mutateAsync:y,isPending:p}=A(),j=d.handleSubmit(async f=>{var b,k,_,S,I,T,q,C,E,w;const u={create:[],update:[],delete:[],force:!0};for(const[h,K]of Object.entries(f.inventory_items))for(const[g,a]of Object.entries(K.locations)){if(a.id)if(((I=(S=(_=(k=(b=c.current)==null?void 0:b.inventory_items)==null?void 0:k[h])==null?void 0:_.locations)==null?void 0:S[g])==null?void 0:I.checked)&&!a.checked)u.delete.push(a.id);else{const D=a.quantity!==""?F(a.quantity):0,M=(w=(E=(C=(q=(T=c.current)==null?void 0:T.inventory_items)==null?void 0:q[h])==null?void 0:C.locations)==null?void 0:E[g])==null?void 0:w.quantity;D!==M&&u.update.push({id:a.id,inventory_item_id:h,location_id:g,stocked_quantity:D})}!a.id&&a.quantity!==""&&u.create.push({inventory_item_id:h,location_id:g,stocked_quantity:F(a.quantity)})}await y(u,{onSuccess:()=>{N.success(s("inventory.stock.successToast")),m()},onError:h=>{N.error(h.message)}})});return t.jsx(l.Form,{form:d,children:t.jsxs(J,{onSubmit:j,className:"flex size-full flex-col",children:[t.jsx(l.Header,{}),t.jsx(l.Body,{className:"size-full flex-1 overflow-y-auto",children:t.jsx(B,{columns:e,data:o,state:d,onEditingChange:f=>{n(!f)}})}),t.jsx(l.Footer,{children:t.jsxs("div",{className:"flex items-center justify-end gap-2",children:[t.jsx(l.Close,{asChild:!0,children:t.jsx(R,{variant:"secondary",size:"small",type:"button",children:s("actions.cancel")})}),t.jsx(R,{type:"submit",size:"small",isLoading:p,children:s("actions.save")})]})})]})})};function P(o,r){return{inventory_items:o.reduce((s,n)=>{const m=r.reduce((c,d)=>{var y;const e=(y=n.location_levels)==null?void 0:y.find(p=>p.location_id===d.id);return c[d.id]={id:e==null?void 0:e.id,quantity:typeof(e==null?void 0:e.stocked_quantity)=="number"?e==null?void 0:e.stocked_quantity:"",checked:!!e,disabledToggle:((e==null?void 0:e.incoming_quantity)||0)>0||((e==null?void 0:e.reserved_quantity)||0)>0},c},{});return s[n.id]={locations:m},s},{})}}var je=()=>{var u;const{t:o}=x(),[r]=H(),s=((u=r.get(O))==null?void 0:u.split(","))||void 0,{inventory_items:n,isPending:m,isError:c,error:d}=$({id:s}),{stock_locations:e,isPending:y,isError:p,error:j}=Q({limit:9999,fields:"id,name"}),f=!m&&!!n&&!y&&!!e;if(c)throw d;if(p)throw j;return t.jsxs(l,{children:[t.jsx(l.Title,{asChild:!0,children:t.jsx("span",{className:"sr-only",children:o("inventory.stock.title")})}),t.jsx(l.Description,{asChild:!0,children:t.jsx("span",{className:"sr-only",children:o("inventory.stock.description")})}),f&&t.jsx(ne,{items:n,locations:e})]})};export{je as Component};
