(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[673],{3090:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/transactions",function(){return n(5803)}])},3403:function(e,t,n){"use strict";n.d(t,{D:function(){return v}});var r=n(865),s=n(6670),a=n(2322),l=n(630),o=n(8366),i=n(5459);function c(e){return e&&e.constructor===Symbol?"symbol":typeof e}var u=n(412),d=n(45),m=n(2784);function f(e){var t=e.pinLength,n=e.onSubmit,r=(0,m.useState)(""),s=r[0],f=r[1],p=(0,m.useState)([]),h=p[0],v=p[1],y=(0,m.useCallback)(function(e){v(function(t){var n;return((function(e){if(Array.isArray(e))return(0,l.Z)(e)})(t)||(0,o.Z)(t)||(0,i.Z)(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).concat([e])})},[]),j=function(e){e.preventDefault(),s.length===t&&n(s)};return(0,a.jsxs)("form",{onSubmit:j,children:[(0,a.jsx)("p",{className:"text-center text-gray-700",children:"Please enter your transaction PIN to complete this action"}),(0,a.jsx)("div",{className:"flex justify-between gap-4 h-16 sm:h-20 my-12",children:Array.from({length:t}).map(function(e,n){return(0,a.jsx)(d.I,{ref:y,onChange:function(){var e;return function(e){var t=e.inputs,n=e.index,r=e.value,s=e.setValue,a=e.pinLength,l=t[n];if(l){if(r.length-1===n&&""===l.value){s(function(e){return e.slice(0,-1)});return}if(r.length!==n){l.value=null!==(i=r[n])&&void 0!==i?i:"";return}if(1===l.value.length){if(!x(l.value)){l.value=null!==(u=r[n])&&void 0!==u?u:"";return}if(s(function(e){return e+l.value}),n!==a-1){var o=t[n+1];null==o||o.focus()}return}if(l.value.length>1&&0===n){var i,u,d,m=function(e){var r=t[n+e];if(!r)return{v:void 0};r.value=f[e],s(function(t){return t+f[e]}),e===f.length-1&&r.focus()},f=l.value.split("");if(f.length!==a||!f.every(x)){l.value=null!==(d=r[n])&&void 0!==d?d:"";return}for(var p=0;p<f.length;p++){var h=m(p);if("object"===c(h))return h.v}return}}}({inputs:h,index:n,pinLength:t,value:s,setValue:f})},type:"tel",className:"text-center text-3xl h-full w-full bg-gray-100"},n)})}),(0,a.jsx)("div",{className:"flex justify-end",children:(0,a.jsx)(u.z,{className:"!px-12 !py-2",children:"Confirm"})})]})}var p=["0","1","2","3","4","5","6","7","8","9"],x=function(e){return p.includes(e)},h=n(9744);function v(e){var t=e.title,n=e.onVerify,l=e.controls,o=function(e){n(e),l.onClose()};return(0,a.jsx)(h.u,(0,s.Z)((0,r.Z)({title:t},l),{children:(0,a.jsx)(f,{pinLength:4,onSubmit:o})}))}},5803:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ev}});var r=n(2322),s=n(9951),a=n(9447),l=n(3569),o=n(9213),i=n(2973),c=n(412),u=n(8720);function d(){var e=(0,u.Mq)().account,t=(0,l.nC)(e.id);return(0,r.jsx)("div",{className:"flex flex-col pb-4",children:(0,r.jsx)(o.d,{query:t,fallback:!0,children:function(e){return(0,r.jsxs)(r.Fragment,{children:[e.map(function(e){return(0,r.jsx)(i.A,{transaction:e},e.id)}),!e.length&&(0,r.jsx)("div",{className:"py-40 flex-center",children:(0,r.jsx)("p",{className:"font-medium",children:"No transactions found"})}),(0,r.jsxs)("div",{className:"flex items-center justify-between mt-6",children:[(0,r.jsx)(c.z,{variant:"secondary",className:"w-24",children:"Previous"}),(0,r.jsx)("p",{className:"text-xs text-theme-1 font-medium",children:"Page 1 of 1"}),(0,r.jsx)(c.z,{variant:"secondary",className:"w-24",children:"Next"})]})]})}})})}var m,f,p=n(2784),x=n(3703),h=n(544),v=n(3401),y=n(586),j=n(9108),b=n(5426),g=n(7215),N=n(7352),w=n(9833),E=n(5559),k=((m=k||{})[m.Open=0]="Open",m[m.Closed=1]="Closed",m),S=((f=S||{})[f.ToggleDisclosure=0]="ToggleDisclosure",f[f.CloseDisclosure=1]="CloseDisclosure",f[f.SetButtonId=2]="SetButtonId",f[f.SetPanelId=3]="SetPanelId",f[f.LinkPanel=4]="LinkPanel",f[f.UnlinkPanel=5]="UnlinkPanel",f);let P={0:e=>({...e,disclosureState:(0,x.E)(e.disclosureState,{0:1,1:0})}),1:e=>1===e.disclosureState?e:{...e,disclosureState:1},4:e=>!0===e.linkedPanel?e:{...e,linkedPanel:!0},5:e=>!1===e.linkedPanel?e:{...e,linkedPanel:!1},2:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},3:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},I=(0,p.createContext)(null);function R(e){let t=(0,p.useContext)(I);if(null===t){let n=Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,R),n}return t}I.displayName="DisclosureContext";let C=(0,p.createContext)(null);C.displayName="DisclosureAPIContext";let A=(0,p.createContext)(null);function T(e,t){return(0,x.E)(t.type,P,e,t)}A.displayName="DisclosurePanelContext";let M=p.Fragment,Z=(0,h.yV)(function(e,t){let{defaultOpen:n=!1,...r}=e,s=`headlessui-disclosure-button-${(0,y.M)()}`,a=`headlessui-disclosure-panel-${(0,y.M)()}`,l=(0,p.useRef)(null),o=(0,v.T)(t,(0,v.h)(e=>{l.current=e},void 0===e.as||e.as===p.Fragment)),i=(0,p.useRef)(null),c=(0,p.useRef)(null),u=(0,p.useReducer)(T,{disclosureState:n?0:1,linkedPanel:!1,buttonRef:c,panelRef:i,buttonId:s,panelId:a}),[{disclosureState:d},m]=u;(0,p.useEffect)(()=>m({type:2,buttonId:s}),[s,m]),(0,p.useEffect)(()=>m({type:3,panelId:a}),[a,m]);let f=(0,E.z)(e=>{m({type:1});let t=(0,w.r)(l);if(!t)return;let n=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:t.getElementById(s):t.getElementById(s);null==n||n.focus()}),j=(0,p.useMemo)(()=>({close:f}),[f]),b=(0,p.useMemo)(()=>({open:0===d,close:f}),[d,f]);return p.createElement(I.Provider,{value:u},p.createElement(C.Provider,{value:j},p.createElement(g.up,{value:(0,x.E)(d,{0:g.ZM.Open,1:g.ZM.Closed})},(0,h.sY)({ourProps:{ref:o},theirProps:r,slot:b,defaultTag:M,name:"Disclosure"}))))}),O=(0,h.yV)(function(e,t){let[n,r]=R("Disclosure.Button"),s=(0,p.useContext)(A),a=null!==s&&s===n.panelId,l=(0,p.useRef)(null),o=(0,v.T)(l,t,a?null:n.buttonRef),i=(0,E.z)(e=>{var t;if(a){if(1===n.disclosureState)return;switch(e.key){case j.R.Space:case j.R.Enter:e.preventDefault(),e.stopPropagation(),r({type:0}),null==(t=n.buttonRef.current)||t.focus()}}else switch(e.key){case j.R.Space:case j.R.Enter:e.preventDefault(),e.stopPropagation(),r({type:0})}}),c=(0,E.z)(e=>{e.key===j.R.Space&&e.preventDefault()}),u=(0,E.z)(t=>{var s;(0,b.P)(t.currentTarget)||e.disabled||(a?(r({type:0}),null==(s=n.buttonRef.current)||s.focus()):r({type:0}))}),d=(0,p.useMemo)(()=>({open:0===n.disclosureState}),[n]),m=(0,N.f)(e,l),f=a?{ref:o,type:m,onKeyDown:i,onClick:u}:{ref:o,id:n.buttonId,type:m,"aria-expanded":e.disabled?void 0:0===n.disclosureState,"aria-controls":n.linkedPanel?n.panelId:void 0,onKeyDown:i,onKeyUp:c,onClick:u};return(0,h.sY)({ourProps:f,theirProps:e,slot:d,defaultTag:"button",name:"Disclosure.Button"})}),D=h.AN.RenderStrategy|h.AN.Static,L=(0,h.yV)(function(e,t){let[n,r]=R("Disclosure.Panel"),{close:s}=function e(t){let n=(0,p.useContext)(C);if(null===n){let r=Error(`<${t} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,e),r}return n}("Disclosure.Panel"),a=(0,v.T)(t,n.panelRef,e=>{r({type:e?4:5})}),l=(0,g.oJ)(),o=null!==l?l===g.ZM.Open:0===n.disclosureState,i=(0,p.useMemo)(()=>({open:0===n.disclosureState,close:s}),[n,s]),c={ref:a,id:n.panelId};return p.createElement(A.Provider,{value:n.panelId},(0,h.sY)({ourProps:c,theirProps:e,slot:i,defaultTag:"div",features:D,visible:o,name:"Disclosure.Panel"}))}),q=Object.assign(Z,{Button:O,Panel:L}),V=p.forwardRef(function({title:e,titleId:t,...n},r){return p.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":t},n),e?p.createElement("title",{id:t},e):null,p.createElement("path",{fillRule:"evenodd",d:"M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",clipRule:"evenodd"}))});var z=n(6277);function B(e){var t=e.title,n=e.defaultOpen,s=e.children;return(0,r.jsx)(q,{defaultOpen:n,children:function(e){var n=e.open;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(q.Button,{className:"w-full flex items-center justify-between px-4 sm:px-8 py-4 bg-gray-100",children:[(0,r.jsx)("h3",{className:"text-lg sm:text-xl text-gray-800",children:t}),(0,r.jsx)(V,{className:(0,z.Z)(["w-5 h-5 sm:w-6 sm:h-6 text-gray-500 transition-transform",n&&"transform rotate-90"])})]}),(0,r.jsx)(q.Panel,{className:"px-4 sm:px-8 pb-4",children:s})]})}})}var _=n(4819),F=n(2202);function W(){return(0,r.jsxs)("div",{className:"space-y-4 pt-12 pb-12",children:[(0,r.jsx)($,{}),(0,r.jsx)(H,{})]})}function $(){var e=(0,u.Mq)().account;return(0,r.jsxs)(B,{title:"Request money from same bank",defaultOpen:!0,children:[(0,r.jsxs)("p",{children:[(0,r.jsx)("span",{className:"text-red-500",children:"* "}),"Request money from another ",_.$.app.NAME," account with your designated account number."]}),(0,r.jsxs)("div",{className:"mt-6 py-6 space-y-4 flex flex-col items-center gap-6",children:[(0,r.jsx)("div",{className:"px-6 py-2 bg-gray-200 rounded-sm",children:(0,r.jsxs)("p",{className:"flex flex-col items-center",children:[(0,r.jsx)("span",{className:"text-xs font-medium",children:"Account Number"}),(0,r.jsx)("span",{className:"text-xl tracking-wide",children:e.accountNumber})]})}),(0,r.jsx)(c.z,{className:"!px-6 !py-2",children:"Copy Account Number"})]})]})}function H(){var e=(0,u.Mq)().account,t=function(){return(0,F.ZP)("Please send us a formal request to provision an external account for this account via email.")};return(0,r.jsxs)(B,{title:"Request money from other banks",children:[(0,r.jsxs)("p",{children:[(0,r.jsx)("span",{className:"text-red-500",children:"* "}),"Request money from other banks with your designated external account. Funds transferred to the account below will be available on your account."]}),e.externalAccount?(0,r.jsxs)("div",{className:"mt-6 py-6 space-y-4 flex flex-col items-center gap-6",children:[(0,r.jsxs)("div",{className:"space-y-6 px-16 py-4 bg-gray-200 rounded-sm",children:[(0,r.jsxs)("p",{className:"flex flex-col items-center",children:[(0,r.jsx)("span",{className:"text-xs font-medium",children:"Account Number"}),(0,r.jsx)("span",{className:"text-xl tracking-wide",children:e.externalAccount.accountNumber})]}),(0,r.jsxs)("p",{className:"flex flex-col items-center",children:[(0,r.jsx)("span",{className:"text-xs font-medium",children:"Routing Number"}),(0,r.jsx)("span",{className:"text-xl tracking-wide",children:e.externalAccount.routingNumber})]})]}),(0,r.jsx)(c.z,{className:"!px-6 !py-2",children:"Copy Account Info"})]}):(0,r.jsxs)("div",{className:"mt-6 py-6 space-y-4 flex flex-col items-center gap-6",children:[(0,r.jsx)("div",{className:"flex-center",children:(0,r.jsx)("p",{className:"p-6 text-lg text-gray-600",children:"External Account not provisioned"})}),(0,r.jsx)(c.z,{onClick:t,variant:"secondary",className:"!px-6 !py-2",children:"Request External Account"})]})]})}var K=n(865),U=n(6670),Y=n(6383),X=n(7536),G=n(4219),J=n(9744),Q=n(45),ee=n(8295),et=n(8883),en=n(9697),er=n(5632),es=n(3955),ea=n(3403);function el(){return(0,r.jsxs)("div",{className:"space-y-4 pt-12 pb-12",children:[(0,r.jsx)(ei,{}),(0,r.jsx)(eu,{})]})}var eo=en.TransferOutSchema.create.omit({pin:!0});function ei(){var e,t,n=(0,er.useRouter)(),s=(0,u.Mq)().account,a=(0,G.u3)(),l=(0,Y.Z)((0,J.d)(),2),o=l[0],i=l[1],d=(0,es.cI)({resolver:(0,et.F)(eo)}),m=function(e){return a.mutate({accountId:s.id,dto:(0,U.Z)((0,K.Z)({},d.getValues()),{pin:e})},{onSuccess:function(){F.ZP.success("Transfer successful"),n.push({pathname:"transactions",query:{t:"history"}})},onError:function(e){F.ZP.error((0,ee.Z)(e))}})},f=d.handleSubmit(o);return(0,r.jsxs)(B,{title:"Transfer to same bank",defaultOpen:!0,children:[(0,r.jsxs)("p",{children:[(0,r.jsx)("span",{className:"text-red-500",children:"* "}),"Send money to another ",_.$.app.NAME," account. Funds are transferred instantly."]}),(0,r.jsxs)("form",{onSubmit:f,className:"mt-6 space-y-4",children:[(0,r.jsx)(Q.I.WithError,{error:null===(e=d.formState.errors.accountNumber)||void 0===e?void 0:e.message,children:(0,r.jsx)(Q.v,(0,K.Z)({label:"Receipient Account Number",placeholder:"Enter Receipient Account Number",type:"tel"},d.register("accountNumber")))}),(0,r.jsx)(Q.I.WithError,{error:null===(t=d.formState.errors.amount)||void 0===t?void 0:t.message,children:(0,r.jsx)(Q.v,(0,K.Z)({label:"Transfer Amount",placeholder:"Enter Amount",type:"number",step:"0.01",min:"0"},d.register("amount",{valueAsNumber:!0})))}),(0,r.jsx)("div",{className:"flex justify-end pt-4",children:(0,r.jsx)(c.z,{loading:a.isLoading,className:"!px-12 !py-2",children:"Transfer"})})]}),(0,r.jsx)(ea.D,{title:"Confirm Transaction",onVerify:m,controls:i})]})}var ec=en.ExternalTransferOutSchema.create.omit({pin:!0});function eu(){var e,t,n,s=(0,er.useRouter)(),a=(0,u.Mq)().account,l=(0,X.w7)(),o=(0,Y.Z)((0,J.d)(),2),i=o[0],d=o[1],m=(0,es.cI)({resolver:(0,et.F)(ec)}),f=function(e){return l.mutate({accountId:a.id,dto:(0,U.Z)((0,K.Z)({},m.getValues()),{pin:e})},{onSuccess:function(){F.ZP.success("Transfer successful"),s.push({pathname:"transactions",query:{t:"history"}})},onError:function(e){F.ZP.error((0,ee.Z)(e))}})},p=m.handleSubmit(i);return(0,r.jsxs)(B,{title:"Transfer to other banks",children:[(0,r.jsxs)("p",{children:[(0,r.jsx)("span",{className:"text-red-500",children:"* "}),"Send money to an external bank account. Funds will be processed by receiving bank within 2-4 days, weekends excluded. This transaction will incur higher fees."]}),(0,r.jsxs)("form",{onSubmit:p,className:"mt-6 space-y-4",children:[(0,r.jsx)(Q.I.WithError,{error:null===(e=m.formState.errors.accountNumber)||void 0===e?void 0:e.message,children:(0,r.jsx)(Q.v,(0,K.Z)({label:"Account Number",placeholder:"Enter Account Number",type:"tel"},m.register("accountNumber")))}),(0,r.jsx)(Q.I.WithError,{error:null===(t=m.formState.errors.routingNumber)||void 0===t?void 0:t.message,children:(0,r.jsx)(Q.v,(0,K.Z)({label:"Routing Number",placeholder:"Enter Routing Number",type:"tel"},m.register("routingNumber")))}),(0,r.jsx)(Q.I.WithError,{error:null===(n=m.formState.errors.amount)||void 0===n?void 0:n.message,children:(0,r.jsx)(Q.v,(0,K.Z)({label:"Transfer Amount",placeholder:"Enter Amount",type:"number",step:"0.01",min:"0"},m.register("amount",{valueAsNumber:!0})))}),(0,r.jsx)("div",{className:"flex justify-end pt-4",children:(0,r.jsx)(c.z,{loading:l.isLoading,className:"!px-12 !py-2",children:"Transfer"})})]}),(0,r.jsx)(ea.D,{title:"Confirm Transaction",onVerify:f,controls:d})]})}var ed=n(385),em=n(6058);let ef=p.forwardRef(function({title:e,titleId:t,...n},r){return p.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":t},n),e?p.createElement("title",{id:t},e):null,p.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"}))}),ep=p.forwardRef(function({title:e,titleId:t,...n},r){return p.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":t},n),e?p.createElement("title",{id:t},e):null,p.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"}))}),ex=p.forwardRef(function({title:e,titleId:t,...n},r){return p.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":t},n),e?p.createElement("title",{id:t},e):null,p.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"}))});var eh=["history","send","request"];function ev(){var e=(0,er.useRouter)(),t=e.query.t,n=(0,p.useState)(0),l=n[0],o=n[1],i=function(t){e.push({pathname:"/transactions",query:{t:eh[t]}})};if("string"==typeof t&&eh.includes(t)){var c=eh.indexOf(t);c!==l&&o(c)}return(0,r.jsx)(ed.c,{description:"Transactions",children:(0,r.jsx)(ed.c.Account,{children:(0,r.jsx)(a.$,{children:(0,r.jsxs)(em.O.Group,{selectedIndex:l,onChange:i,children:[(0,r.jsxs)(em.O.List,{className:"py-6 flex items-center justify-around",children:[(0,r.jsx)(s.E,{title:"Transaction history",icon:(0,r.jsx)(ef,{className:"w-6 h-6"})}),(0,r.jsx)(s.E,{title:"Send Money",icon:(0,r.jsx)(ep,{className:"w-6 h-6"})}),(0,r.jsx)(s.E,{title:"Request Money",icon:(0,r.jsx)(ex,{className:"w-6 h-6"})})]}),(0,r.jsxs)(em.O.Panels,{className:"border-t min-h-[400px]",children:[(0,r.jsx)(em.O.Panel,{children:(0,r.jsx)(d,{})}),(0,r.jsx)(em.O.Panel,{children:(0,r.jsx)(el,{})}),(0,r.jsx)(em.O.Panel,{children:(0,r.jsx)(W,{})})]})]})})})})}}},function(e){e.O(0,[949,226,955,383,385,918,774,888,179],function(){return e(e.s=3090)}),_N_E=e.O()}]);