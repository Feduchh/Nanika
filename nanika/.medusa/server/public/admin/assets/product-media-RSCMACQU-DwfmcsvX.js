import{E as $,U as J}from"./chunk-HP4JZCP4-BFIEFOai.js";import{u as Z,a as K,s as ee,K as se,P as te,D as ae,S as ie,r as re,b as ne,e as le,c as oe,C as de,d as ce}from"./sortable.esm-hqTLq8UO.js";import"./chunk-ZQRKUG6J-LdO72lSl.js";import{r as j,b as P,R as ue,Q as me,j as e,a6 as he,a8 as fe,a9 as xe,y as pe,U as H,s as ge,t as G,B as I,L as B,m as z,V as W,c as be,I as E,am as je,T as O,aj as ve}from"./index-SY1KZpDV.js";import{K as ye}from"./chunk-6HTZNHPT-BDPMLxeP.js";import{R as v,u as we}from"./chunk-AYRG2MQL-C-Vmidzb.js";import{T as F}from"./thumbnail-badge-r4tOm7ai.js";import{T as Te}from"./trash-C2nS7g6s.js";import{T as Ce}from"./triangle-left-mini-DpeP8AGJ.js";import{u as Ne}from"./use-prompt-DituurAu.js";import{C as T}from"./command-bar-510pWzfB.js";import{C as q}from"./checkbox-BmfBlwPV.js";import"./chunk-TYTNUPXB-C1Ec0QgA.js";import"./chunk-6GU6IDUA-CDc7wW5L.js";import"./prompt-DfbPhKWW.js";import"./index-KyYmlkaX.js";var Se=({product:s})=>{const[t,i]=j.useState({}),{t:a}=P(),{handleSuccess:o}=we(),h=fe({defaultValues:{media:ke(s.images,s.thumbnail)},resolver:xe($)}),{fields:l,append:r,remove:d,update:g}=pe({name:"media",control:h.control,keyName:"field_id"}),[m,p]=j.useState(null),N=Z(K(te),K(se,{coordinateGetter:ee})),y=n=>{p(n.active.id)},M=n=>{p(null);const{active:x,over:u}=n;if(x.id!==(u==null?void 0:u.id)){const b=l.findIndex(C=>C.field_id===x.id),V=l.findIndex(C=>C.field_id===(u==null?void 0:u.id));h.setValue("media",ce(l,b,V),{shouldDirty:!0,shouldTouch:!0})}},c=()=>{p(null)},{mutateAsync:S,isPending:_}=H(s.id),D=h.handleSubmit(async({media:n})=>{var C;const x=n.map((f,k)=>({file:f.file,index:k})).filter(f=>!!f.file);let u=[];if(x.length){const{files:f}=await ge.admin.upload.create({files:x.map(k=>k.file)}).catch(()=>(h.setError("media",{type:"invalid_file",message:a("products.media.failedToUpload")}),{files:[]}));u=f}const b=n.map((f,k)=>{var U;const R=x.findIndex(Y=>Y.index===k);return R>-1?{...f,url:(U=u[R])==null?void 0:U.url}:f}),V=(C=b.find(f=>f.isThumbnail))==null?void 0:C.url;await S({images:b.map(f=>({url:f.url,id:f.id})),thumbnail:V||null},{onSuccess:()=>{G.success(a("products.media.successToast")),o()},onError:f=>{G.error(f.message)}})}),w=j.useCallback(n=>x=>{if(x)i(u=>({...u,[n]:!0}));else{const{[n]:u,...b}=t;i(b)}},[t]),Q=()=>{const x=Object.keys(t).map(u=>l.findIndex(b=>b.id===u));d(x),i({})},X=()=>{const n=Object.keys(t);if(!n.length)return;const x=l.findIndex(b=>b.isThumbnail);x>-1&&g(x,{...l[x],isThumbnail:!1});const u=l.findIndex(b=>b.id===n[0]);g(u,{...l[u],isThumbnail:!0}),i({})},L=Object.keys(t).length;return e.jsx(v.Form,{blockSearchParams:!0,form:h,children:e.jsxs(ye,{className:"flex size-full flex-col overflow-hidden",onSubmit:D,children:[e.jsx(v.Header,{children:e.jsx("div",{className:"flex items-center justify-end gap-x-2",children:e.jsx(I,{variant:"secondary",size:"small",asChild:!0,children:e.jsx(B,{to:{pathname:".",search:void 0},children:a("products.media.galleryLabel")})})})}),e.jsx(v.Body,{className:"flex flex-col overflow-hidden",children:e.jsxs("div",{className:"flex size-full flex-col-reverse lg:grid lg:grid-cols-[1fr_560px]",children:[e.jsx(ae,{sensors:N,onDragEnd:M,onDragStart:y,onDragCancel:c,children:e.jsx("div",{className:"bg-ui-bg-subtle size-full overflow-auto",children:e.jsxs("div",{className:"grid h-fit auto-rows-auto grid-cols-4 gap-6 p-6",children:[e.jsx(ie,{items:l.map(n=>n.field_id),strategy:re,children:l.map(n=>e.jsx(ze,{onCheckedChange:w(n.id),checked:!!t[n.id],media:n},n.field_id))}),e.jsx(ne,{dropAnimation:Ie,children:m?e.jsx(Pe,{media:l.find(n=>n.field_id===m),checked:!!t[l.find(n=>n.field_id===m).id]}):null})]})})}),e.jsx("div",{className:"bg-ui-bg-base overflow-auto border-b px-6 py-4 lg:border-b-0 lg:border-l",children:e.jsx(J,{form:h,append:r})})]})}),e.jsx(T,{open:!!L,children:e.jsxs(T.Bar,{children:[e.jsx(T.Value,{children:a("general.countSelected",{count:L})}),e.jsx(T.Seperator,{}),L===1&&e.jsxs(j.Fragment,{children:[e.jsx(T.Command,{action:X,label:a("products.media.makeThumbnail"),shortcut:"t"}),e.jsx(T.Seperator,{})]}),e.jsx(T.Command,{action:Q,label:a("actions.delete"),shortcut:"d"})]})}),e.jsx(v.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(v.Close,{asChild:!0,children:e.jsx(I,{variant:"secondary",size:"small",children:a("actions.cancel")})}),e.jsx(I,{size:"small",type:"submit",isLoading:_,children:a("actions.save")})]})})]})})},ke=(s,t)=>{const i=(s==null?void 0:s.map(a=>({id:a.id,url:a.url,isThumbnail:a.url===t,file:null})))||[];if(t&&!i.some(a=>a.url===t)){const a=Math.random().toString(36).substring(7);i.unshift({id:a,url:t,isThumbnail:!0,file:null})}return i},Ie={sideEffects:le({styles:{active:{opacity:"0.4"}}})},ze=({media:s,checked:t,onCheckedChange:i})=>{const{t:a}=P(),o=j.useCallback(y=>{i(y)},[i]),{attributes:h,listeners:l,setNodeRef:r,setActivatorNodeRef:d,transform:g,transition:m,isDragging:p}=oe({id:s.field_id}),N={opacity:p?.4:void 0,transform:de.Transform.toString(g),transition:m};return e.jsxs("div",{className:z("shadow-elevation-card-rest hover:shadow-elevation-card-hover focus-visible:shadow-borders-focus bg-ui-bg-subtle-hover group relative aspect-square h-auto max-w-full overflow-hidden rounded-lg outline-none"),style:N,ref:r,children:[s.isThumbnail&&e.jsx("div",{className:"absolute left-2 top-2",children:e.jsx(W,{content:a("products.media.thumbnailTooltip"),children:e.jsx(F,{})})}),e.jsx("div",{className:z("absolute inset-0 cursor-grab touch-none outline-none",{"cursor-grabbing":p}),ref:d,...h,...l}),e.jsx("div",{className:z("transition-fg absolute right-2 top-2 opacity-0",{"group-focus-within:opacity-100 group-hover:opacity-100 group-focus:opacity-100":!p&&!t,"opacity-100":t}),children:e.jsx(q,{onClick:y=>{y.stopPropagation()},checked:t,onCheckedChange:o})}),e.jsx("img",{src:s.url,alt:"",className:"size-full object-cover object-center"})]})},Pe=({media:s,checked:t})=>e.jsxs("div",{className:"shadow-elevation-card-rest hover:shadow-elevation-card-hover focus-visible:shadow-borders-focus bg-ui-bg-subtle-hover group relative aspect-square h-auto max-w-full cursor-grabbing overflow-hidden rounded-lg outline-none",children:[s.isThumbnail&&e.jsx("div",{className:"absolute left-2 top-2",children:e.jsx(F,{})}),e.jsx("div",{className:z("transition-fg absolute right-2 top-2 opacity-0",{"opacity-100":t}),children:e.jsx(q,{checked:t})}),e.jsx("img",{src:s.url,alt:"",className:"size-full object-cover object-center"})]}),Me=({product:s})=>{const{state:t}=be(),[i,a]=j.useState((t==null?void 0:t.curr)||0),{t:o}=P(),h=Ne(),{mutateAsync:l,isPending:r}=H(s.id),d=_e(s.images,s.thumbnail),g=j.useCallback(()=>{r||a(c=>(c+1)%d.length)},[d,r]),m=j.useCallback(()=>{r||a(c=>(c-1+d.length)%d.length)},[d,r]),p=j.useCallback(c=>{r||a(c)},[r]),N=()=>{if(r)return;const c=document.createElement("a");c.href=d[i].url,c.download="image",c.target="_blank",c.click()},y=async()=>{var D;const c=d[i];if(!await h({title:o("general.areYouSure"),description:c.isThumbnail?o("products.media.deleteWarningWithThumbnail",{count:1}):o("products.media.deleteWarning",{count:1}),confirmText:o("actions.delete"),cancelText:o("actions.cancel")}))return;const _=((D=s.images)==null?void 0:D.filter(w=>w.id!==c.id).map(w=>({url:w.url})))||[];i===d.length-1&&a(w=>w-1),await l({images:_,thumbnail:c.isThumbnail?"":void 0})};j.useEffect(()=>{const c=S=>{S.key==="ArrowRight"?g():S.key==="ArrowLeft"&&m()};return document.addEventListener("keydown",c),()=>{document.removeEventListener("keydown",c)}},[g,m]);const M=!d.length;return e.jsxs("div",{className:"flex size-full flex-col overflow-hidden",children:[e.jsx(v.Header,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsxs(E,{size:"small",type:"button",onClick:y,disabled:M,children:[e.jsx(Te,{}),e.jsx("span",{className:"sr-only",children:o("products.media.deleteImageLabel")})]}),e.jsxs(E,{size:"small",type:"button",onClick:N,disabled:M,children:[e.jsx(je,{}),e.jsx("span",{className:"sr-only",children:o("products.media.downloadImageLabel")})]}),e.jsx(I,{variant:"secondary",size:"small",asChild:!0,children:e.jsx(B,{to:{pathname:".",search:"view=edit"},children:o("actions.edit")})})]})}),e.jsxs(v.Body,{className:"flex flex-col overflow-hidden",children:[e.jsx(De,{curr:i,media:d}),e.jsx(Ee,{curr:i,media:d,prev:m,next:g,goTo:p})]})]})},De=({media:s,curr:t})=>{const{t:i}=P();return s.length===0?e.jsxs("div",{className:"bg-ui-bg-subtle flex size-full flex-col items-center justify-center gap-y-4 pb-8 pt-6",children:[e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx(O,{size:"small",leading:"compact",weight:"plus",className:"text-ui-fg-subtle",children:i("products.media.emptyState.header")}),e.jsx(O,{size:"small",className:"text-ui-fg-muted",children:i("products.media.emptyState.description")})]}),e.jsx(I,{size:"small",variant:"secondary",asChild:!0,children:e.jsx(B,{to:"?view=edit",children:i("products.media.emptyState.action")})})]}):e.jsx("div",{className:"bg-ui-bg-subtle relative size-full overflow-hidden",children:e.jsx("div",{className:"flex size-full items-center justify-center p-6",children:e.jsxs("div",{className:"relative inline-block max-h-full max-w-full",children:[s[t].isThumbnail&&e.jsx("div",{className:"absolute left-2 top-2",children:e.jsx(W,{content:i("products.media.thumbnailTooltip"),children:e.jsx(F,{})})}),e.jsx("img",{src:s[t].url,alt:"",className:"object-fit shadow-elevation-card-rest max-h-[calc(100vh-200px)] w-auto rounded-xl object-contain"})]})})})},A=8,Ee=({media:s,curr:t,prev:i,next:a,goTo:o})=>{if(!s.length)return null;const l=((r,d)=>{if(r.length<=A)return r;const g=Math.floor(A/2),m=(d-g+r.length)%r.length,p=(m+A)%r.length;return p<m?[...r.slice(m),...r.slice(0,p)]:r.slice(m,p)})(s,t);return e.jsxs("div",{className:"flex shrink-0 items-center justify-center gap-x-2 border-t p-3",children:[e.jsx(E,{size:"small",variant:"transparent",className:"text-ui-fg-muted",type:"button",onClick:i,children:e.jsx(Ce,{})}),e.jsx("div",{className:"flex items-center gap-x-2",children:l.map(r=>{const d=r.id===s[t].id,g=s.findIndex(m=>m.id===r.id);return e.jsx("button",{type:"button",onClick:()=>o(g),className:z("transition-fg size-7 overflow-hidden rounded-[4px] outline-none",{"shadow-borders-focus":d}),children:e.jsx("img",{src:r.url,alt:"",className:"size-full object-cover"})},r.id)})}),e.jsx(E,{size:"small",variant:"transparent",className:"text-ui-fg-muted",type:"button",onClick:a,children:e.jsx(ve,{})})]})},_e=(s,t)=>{const i=(s==null?void 0:s.map(a=>({id:a.id,url:a.url,isThumbnail:a.url===t})))||[];return t&&!i.some(a=>a.isThumbnail)&&i.unshift({id:"thumbnail_only",url:t,isThumbnail:!0}),i},Le=j.createContext(null),Ve=s=>s.get("view")==="edit"?"edit":"gallery",Ae=({product:s})=>{const[t,i]=he(),a=Ve(t),o=h=>()=>{i({view:h})};return e.jsx(Le.Provider,{value:{goToGallery:o("gallery"),goToEdit:o("edit")},children:Be(a,s)})},Be=(s,t)=>{switch(s){case"gallery":return e.jsx(Me,{product:t});case"edit":return e.jsx(Se,{product:t})}},ss=()=>{const{t:s}=P(),{id:t}=ue(),{product:i,isLoading:a,isError:o,error:h}=me(t),l=!a&&i;if(o)throw h;return e.jsxs(v,{children:[e.jsx(v.Title,{asChild:!0,children:e.jsx("span",{className:"sr-only",children:s("products.media.label")})}),e.jsx(v.Description,{asChild:!0,children:e.jsx("span",{className:"sr-only",children:s("products.media.editHint")})}),l&&e.jsx(Ae,{product:i})]})};export{ss as Component};
