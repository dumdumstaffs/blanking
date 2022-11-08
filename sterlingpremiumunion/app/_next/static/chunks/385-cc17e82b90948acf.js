"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[385],{7545:function(e,t,n){n.d(t,{oc:function(){return v},aC:function(){return g},YA:function(){return y},_y:function(){return b},l4:function(){return N},Mp:function(){return w},Su:function(){return Z}});var r=n(8788),s=n(5163),a=n(7079);function c(e){return i.apply(this,arguments)}function i(){return(i=(0,r.Z)(function(e){var t;return(0,s.__generator)(this,function(t){switch(t.label){case 0:return[4,a.dJ.post("/auth/login",e)];case 1:return[2,t.sent().data]}})})).apply(this,arguments)}function l(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(function(){var e;return(0,s.__generator)(this,function(e){switch(e.label){case 0:return[4,a.dJ.get("/auth/profile")];case 1:return[2,e.sent().data]}})})).apply(this,arguments)}function o(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(function(e){var t;return(0,s.__generator)(this,function(t){switch(t.label){case 0:return[4,a.dJ.post("/auth/register",e)];case 1:return[2,t.sent().data]}})})).apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(function(e){var t;return(0,s.__generator)(this,function(t){switch(t.label){case 0:return[4,a.dJ.post("/auth/verify",e)];case 1:return[2,t.sent().data]}})})).apply(this,arguments)}function x(){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(function(){var e;return(0,s.__generator)(this,function(e){switch(e.label){case 0:return[4,a.dJ.post("/auth/verify/request")];case 1:return[2,e.sent().data]}})})).apply(this,arguments)}var p=n(5148),j=n(2066),v=(0,p.no)("auth"),g=function(){return(0,j.useQuery)(v._def,l,{retry:!1})},y=function(){var e=(0,j.useQueryClient)();return(0,j.useMutation)(c,{onSuccess:function(t){var n=t.token;return(0,a.o4)(n),e.invalidateQueries(v._def)}})},N=function(){return(0,j.useMutation)(o)},b=function(){var e=(0,j.useQueryClient)();return(0,j.useMutation)((0,r.Z)(function(){return(0,s.__generator)(this,function(e){return[2,(0,a.gy)()]})}),{onMutate:function(){return e.cancelQueries(v._def)},onSuccess:function(){return e.invalidateQueries(v._def)}})},w=function(){var e=(0,j.useQueryClient)();return(0,j.useMutation)(f,{onSuccess:function(){return e.invalidateQueries(v._def)}})},Z=function(){return(0,j.useMutation)(x)}},3569:function(e,t,n){n.d(t,{PO:function(){return m},lB:function(){return f},cR:function(){return p},ep:function(){return j},nC:function(){return h},Oe:function(){return x}});var r=n(8788),s=n(5163),a=n(7079);function c(){return(c=(0,r.Z)(function(e){var t,n;return(0,s.__generator)(this,function(n){switch(n.label){case 0:return t=e.accountId,[4,a.dJ.get("/transactions/".concat(t))];case 1:return[2,n.sent().data]}})})).apply(this,arguments)}function i(){return(i=(0,r.Z)(function(e){var t,n;return(0,s.__generator)(this,function(n){switch(n.label){case 0:return t=e.accountId,[4,a.dJ.get("/transactions/".concat(t,"/balance"))];case 1:return[2,n.sent().data]}})})).apply(this,arguments)}function l(){return(l=(0,r.Z)(function(e){var t,n;return(0,s.__generator)(this,function(n){switch(n.label){case 0:return t=e.accountId,[4,a.dJ.get("/admin/transactions/".concat(t))];case 1:return[2,n.sent().data]}})})).apply(this,arguments)}function u(){return(u=(0,r.Z)(function(e){var t,n;return(0,s.__generator)(this,function(n){switch(n.label){case 0:return t=e.accountId,[4,a.dJ.get("/admin/transactions/".concat(t,"/balance"))];case 1:return[2,n.sent().data]}})})).apply(this,arguments)}var o=n(5148),d=n(2066),f=(0,o.no)("transactions",{for:function(e){return[e]}}),h=function(e){return(0,d.useQuery)(f.for(e),function(){return function(e){return c.apply(this,arguments)}({accountId:e})})},x=function(e){return(0,d.useQuery)(f.for(e).concat("balance"),function(){return function(e){return i.apply(this,arguments)}({accountId:e})})},m=(0,o.no)("adminTransactions",{for:function(e){return[e]},getFor:function(e,t,n){return[e,t,n]}}),p=function(e){return(0,d.useQuery)(m.for(e),function(){return function(e){return l.apply(this,arguments)}({accountId:e})})},j=function(e){return(0,d.useQuery)(m.for(e).concat("balance"),function(){return function(e){return u.apply(this,arguments)}({accountId:e})},{enabled:""!==e})}},4649:function(e,t,n){n.d(t,{dB:function(){return N},ts:function(){return w},sp:function(){return b},Rm:function(){return y},R2:function(){return v}});var r=n(8788),s=n(5163),a=n(7079);function c(e){return i.apply(this,arguments)}function i(){return(i=(0,r.Z)(function(e){var t;return(0,s.__generator)(this,function(t){switch(t.label){case 0:return[4,a.dJ.put("/users",e)];case 1:return[2,t.sent().data]}})})).apply(this,arguments)}function l(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(function(){var e;return(0,s.__generator)(this,function(e){switch(e.label){case 0:return[4,a.dJ.get("/admin/users")];case 1:return[2,e.sent().data]}})})).apply(this,arguments)}function o(){return(o=(0,r.Z)(function(e){var t,n;return(0,s.__generator)(this,function(n){switch(n.label){case 0:return t=e.userId,[4,a.dJ.get("/admin/users/".concat(t))];case 1:return[2,n.sent().data]}})})).apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(function(e){var t,n,r;return(0,s.__generator)(this,function(r){switch(r.label){case 0:return t=e.userId,n=e.dto,[4,a.dJ.put("/admin/users/".concat(t),n)];case 1:return[2,r.sent().data]}})})).apply(this,arguments)}function h(e){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(function(e){var t,n;return(0,s.__generator)(this,function(n){switch(n.label){case 0:return t=e.userId,[4,a.dJ.delete("/admin/users/".concat(t))];case 1:return[2,n.sent().data]}})})).apply(this,arguments)}var m=n(5148),p=n(2066),j=n(7545),v=function(){var e=(0,p.useQueryClient)();return(0,p.useMutation)(c,{onSuccess:function(){return e.invalidateQueries(j.oc._def)}})},g=(0,m.no)("adminUsers",{get:function(e){return[e]}}),y=function(){return(0,p.useQuery)(g._def,l)},N=function(e){return(0,p.useQuery)(g.get(e),function(){return function(e){return o.apply(this,arguments)}({userId:e})},{enabled:""!==e})},b=function(){var e=(0,p.useQueryClient)();return(0,p.useMutation)(d,{onSuccess:function(t,n){var r=n.userId;return e.invalidateQueries(g.get(r))}})},w=function(){var e=(0,p.useQueryClient)();return(0,p.useMutation)(h,{onSuccess:function(t,n){var r=n.userId;return Promise.all([e.invalidateQueries(g._def),e.invalidateQueries(g.get(r)),])}})}},412:function(e,t,n){n.d(t,{p:function(){return d},z:function(){return o}});var r=n(865),s=n(6670),a=n(6297),c=n(2322),i=n(6277),l=n(2784),u=n(5392),o=(0,l.forwardRef)(function(e,t){var n=e.loading,l=e.variant,o=void 0===l?"primary":l,d=e.className,f=e.children,h=(0,a.Z)(e,["loading","variant","className","children"]);return(0,c.jsx)("button",(0,s.Z)((0,r.Z)({ref:t,disabled:n},h),{className:(0,i.Z)(["flex-center px-4 py-2 border font-medium","focus:outline-none focus:ring-2 focus:ring-theme-1 focus:ring-offset-1","primary"===o&&["border-theme-1 bg-theme-1 text-white font-medium",],"critical"===o&&["border-red-100 bg-red-100 text-red-700 focus:!ring-red-700"],"secondary"===o&&["text-gray-800"],d,]),children:n?(0,c.jsx)(u.$,{className:"w-5 h-5"}):f}))});o.displayName="Button";var d=function(e){var t=e.onClick,n=e.variant,i=e.children,u=(0,a.Z)(e,["onClick","variant","children"]),d=(0,l.useState)(!1),f=d[0],h=d[1],x=function(){return h(!0)},m=function(){return h(!1)},p=function(e){h(!1),t(e)};return f?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o,(0,s.Z)((0,r.Z)({},u),{variant:"secondary",onClick:m,children:"Cancel"})),(0,c.jsx)(o,(0,s.Z)((0,r.Z)({},u),{variant:"critical",onClick:p,children:"Proceed"}))]}):(0,c.jsx)(o,(0,s.Z)((0,r.Z)({},u),{variant:void 0===n?"critical":n,onClick:x,children:i}))}},5848:function(e,t,n){n.d(t,{t:function(){return u}});var r=n(2322),s=n(7567),a=n(6277),c=n(9097),i=n.n(c);function l(e){var t=e.href,n=e.className,s=e.children;return(0,r.jsx)(i(),{href:t,children:(0,r.jsx)("a",{className:(0,a.Z)("text-theme-1 hover:underline",n),children:s})})}var u=(0,s.B)(l,{Group:function(e){var t=e.className,n=e.children;return(0,r.jsx)("ul",{className:(0,a.Z)("space-y-2",t),children:n})},Item:function(e){var t=e.href,n=e.children;return(0,r.jsx)("li",{children:(0,r.jsx)(l,{href:t,children:n})})}})},9447:function(e,t,n){n.d(t,{$:function(){return c}});var r=n(2322),s=n(7567),a=n(6277),c=(0,s.B)(function(e){var t=e.className,n=e.children;return(0,r.jsx)("section",{className:(0,a.Z)("bg-white border rounded-md px-4 sm:px-6",t),children:n})},{Title:function(e){var t=e.className,n=e.children;return(0,r.jsx)("div",{className:(0,a.Z)("border-b py-6 text-xl",t),children:n})},SubTitle:function(e){var t=e.className,n=e.children;return(0,r.jsx)("div",{className:(0,a.Z)("border-b py-3 text-lg",t),children:n})},Content:function(e){var t=e.className,n=e.children;return(0,r.jsx)("div",{className:(0,a.Z)("py-3",t),children:n})}})},385:function(e,t,n){n.d(t,{c:function(){return F}});var r=n(865),s=n(6670),a=n(2322),c=n(7545),i=n(4005),l=n(4819),u=n(8720),o=n(7584),d=n(6131);function f(){var e=(0,u.Mq)(!0).account;return(null==e?void 0:e.alert)?(0,a.jsx)("div",{className:"bg-red-100 text-red-500 text-xs py-2 px-content",children:(0,a.jsxs)("div",{className:"relative flex gap-2",children:[(0,a.jsx)("div",{className:"pt-0.5",children:(0,a.jsx)(d.Z,{className:"w-5 h-5"})}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h5",{className:"text-sm font-bold",children:e.alert.title}),(0,a.jsx)("p",{className:"mt-1",children:e.alert.desc})]}),(0,a.jsx)("div",{className:"absolute top-0 right-2 cursor-pointer text-lg",children:(0,a.jsx)(o.Z,{className:"w-4 h-4"})})]})}):null}function h(){return(0,a.jsx)("footer",{className:"flex-center py-8",children:(0,a.jsxs)("p",{className:"text-xs",children:["\xa9 ",l.$.app.NAME," ",new Date().getFullYear()]})})}var x=n(6277),m=n(9097),p=n.n(m),j=n(2202);function v(){var e=(0,u.Mq)(!0).account,t=function(){return(0,j.ZP)("Your document is in review and you will be notified once it is accepted or rejected.")};return(null==e?void 0:e.documentRequest)&&(null==e?void 0:e.documentRequest.status)!=="accepted"?"reviewing"===e.documentRequest.status?(0,a.jsxs)("div",{className:"flex flex-col items-start gap-2 sm:flex-row sm:items-center justify-between px-content py-2 bg-yellow-200/60",children:[(0,a.jsx)("p",{className:"font-medium text-yellow-600",children:"Your document is currently in review"}),(0,a.jsx)("button",{onClick:t,className:"px-4 py-1 font-medium bg-white text-yellow-600",children:"Need help?"})]}):(0,a.jsxs)("div",{className:(0,x.Z)(["flex flex-col items-start gap-2 sm:flex-row sm:items-center justify-between px-content py-2","rejected"===e.documentRequest.status?"bg-red-100 text-red-500":"bg-yellow-200/60 text-yellow-600",]),children:[(0,a.jsx)("p",{className:"font-medium ",children:"rejected"===e.documentRequest.status?"Your document has been rejected please reupload":e.documentRequest.desc}),(0,a.jsx)(p(),{href:"/settings/documents/upload",children:(0,a.jsx)("a",{children:(0,a.jsx)("button",{className:"px-4 py-1 font-medium bg-white",children:"Upload now"})})})]}):null}function g(e){var t=e.onClick,n=e.children;return(0,a.jsx)("li",{className:"h-full flex-center border-b-2 border-transparent hover:border-white md:hover:bg-white/10",children:(0,a.jsx)("button",{className:"h-full px-4 font-semibold",onClick:t,children:n})})}function y(e){var t=e.href,n=e.children,r=e.isActive;return(0,a.jsx)("li",{className:(0,x.Z)(["h-full flex-center border-b-2 hover:border-white md:hover:bg-white/10",r?"border-white":"border-transparent"]),children:(0,a.jsx)(p(),{href:t,children:(0,a.jsx)("a",{className:"flex-center h-full px-4 font-semibold",children:n})})})}var N=n(1586),b=n(6875),w=n(3341),Z=n(5632),_=n(2784);function C(){var e,t=(0,Z.useRouter)(),n=(0,c.aC)(),r=(0,c._y)(),s=(0,_.useState)(!1),i=s[0],u=s[1],o=function(){return u(function(e){return!e})},d=function(){return r.mutate(void 0)},f=function(e){return t.pathname.startsWith(e)};return(0,a.jsxs)("header",{className:"bg-theme-1 text-white flex items-center justify-between h-16 px-content",children:[(0,a.jsx)(p(),{href:"/",children:(0,a.jsx)("a",{className:"text-base flex-center h-full font-semibold",children:l.$.app.NAME})}),(0,a.jsxs)("ul",{className:"h-full hidden md:flex items-center",children:[(0,a.jsx)(y,{href:"/account",isActive:f("/account"),children:"Account"}),(0,a.jsx)(y,{href:"/transactions",isActive:f("/transactions"),children:"Transactions"}),(0,a.jsx)(y,{href:"/settings",isActive:f("/settings"),children:"Settings"}),(null===(e=n.data)||void 0===e?void 0:e.isAdmin)&&(0,a.jsx)(y,{href:"/manager",isActive:f("/manager"),children:"Manager"}),n.data?(0,a.jsx)(g,{onClick:d,children:"Sign Out"}):(0,a.jsx)(y,{href:"/signin",isActive:f("/signin"),children:"Sign In"})]}),(0,a.jsx)("div",{onClick:o,className:"flex md:hidden items-center justify-center",children:(0,a.jsx)(w.Z,{className:"w-6 h-6"})}),(0,a.jsx)(A,{isOpen:i,onClose:o})]})}function A(e){var t,n=e.isOpen,r=e.onClose,s=(0,Z.useRouter)(),i=(0,c.aC)(),u=(0,c._y)(),d=function(){return u.mutate(void 0)},f=function(e){return s.pathname.startsWith(e)};return(0,a.jsx)(N.u,{appear:!0,show:n,as:_.Fragment,children:(0,a.jsx)(b.V,{as:"div",className:"relative z-10",onClose:r,children:(0,a.jsx)("div",{className:"fixed inset-0",children:(0,a.jsx)("div",{className:"h-full flex items-center justify-center",children:(0,a.jsx)(N.u.Child,{as:_.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 -translate-x-full",enterTo:"opacity-100 translate-x-0",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-x-0",leaveTo:"opacity-0 -translate-x-full",children:(0,a.jsxs)(b.V.Panel,{className:"h-full w-full overflow-hidden bg-theme-1 text-white p-6 text-center",children:[(0,a.jsx)("div",{onClick:r,className:"absolute top-4 right-4 cursor-pointer text-lg",children:(0,a.jsx)(o.Z,{className:"w-6 h-6"})}),(0,a.jsxs)("div",{className:"h-full flex flex-col",children:[(0,a.jsx)(p(),{href:"/",children:(0,a.jsx)("a",{className:"font-semibold",children:l.$.app.NAME})}),(0,a.jsxs)("ul",{className:"mt-12 flex flex-col items-center gap-6 text-lg",children:[(0,a.jsx)(y,{href:"/account",isActive:f("/account"),children:"Account"}),(0,a.jsx)(y,{href:"/transactions",isActive:f("/transactions"),children:"Transactions"}),(0,a.jsx)(y,{href:"/settings",isActive:f("/settings"),children:"Settings"}),(null===(t=i.data)||void 0===t?void 0:t.isAdmin)&&(0,a.jsx)(y,{href:"/manager",isActive:f("/manager"),children:"Manager"}),i.data?(0,a.jsx)(g,{onClick:d,children:"Sign Out"}):(0,a.jsx)(y,{href:"/signin",isActive:f("/signin"),children:"Sign In"})]})]})]})})})})})})}var q=n(7567),k=n(7729),M=n.n(k),S=n(3569),I=n(412),Q=n(5848),$=n(9447),O=n(8837),R=n(6175),T=n(8709),J=n(8983),U=n(4649),B=n(3912),F=(0,q.B)(function(e){var t,n=e.mode,o=e.description,d=e.children,x=(0,c.aC)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(M(),{children:[(0,a.jsx)("title",{children:l.$.app.NAME}),(0,a.jsx)("meta",{name:"description",content:(o?o+" | ":"")+"Premium Edge Bank - Banking, Loan & Insurance"}),(0,a.jsx)("link",{rel:"shortcut icon",type:"image/png",href:"/favicon.png"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0",id:"viewport"})]}),(0,a.jsx)("div",{className:"bg-gray-100 text-sm",children:(0,a.jsxs)(i.n,(0,s.Z)((0,r.Z)({query:x},"verified"===(t=void 0===n?"verified":n)?{showOn:"success",redirectTo:"/signin",onSuccessRedirectCondition:function(e){if(!e.isVerified)return"/verify-email"}}:"authenticated"===t?{showOn:"success",redirectTo:"/signin"}:"guest"===t?{showOn:"failure",redirectTo:"/"}:{showOn:"all"}),{children:[(0,a.jsx)(f,{}),(0,a.jsx)(C,{}),(0,a.jsx)(v,{}),(0,a.jsx)(u.gX,{children:(0,a.jsx)("main",{className:"px-content py-6",children:d})}),(0,a.jsx)(h,{})]}))})]})},{Account:function(e){var t,n=e.children,r=(0,u.Mq)().account,s=(0,S.Oe)(r.id);return(0,a.jsxs)("div",{className:"flex flex-col-reverse lg:flex-row gap-8",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-6 lg:w-80",children:[(0,a.jsxs)($.$,{className:"py-6",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)("p",{className:"font-bold text-gray-800",children:r.name}),(0,a.jsx)(T.Z,{className:"w-5 h-5"})]}),(0,a.jsxs)("div",{className:"mt-4 space-y-2",children:[(0,a.jsxs)("p",{className:"text-2xl font-light text-gray-700",children:["$",(0,O.a)(null===(t=s.data)||void 0===t?void 0:t.total)," USD"]}),(0,a.jsx)("p",{className:"text-xs text-gray-400 font-medium",children:"Available"})]}),(0,a.jsx)("div",{className:"mt-6",children:(0,a.jsx)(p(),{href:{pathname:"/transactions",query:{t:"send"}},children:(0,a.jsx)("a",{children:(0,a.jsxs)(I.z,{className:"gap-1 rounded-full text-xs !px-6 !py-2 !font-semibold",children:[(0,a.jsx)("span",{children:"Transfer funds"}),(0,a.jsx)(R.Z,{className:"w-4 h-4"})]})})})}),(0,a.jsxs)("div",{className:"mt-4 border-t pt-2 flex flex-col gap-1",children:[(0,a.jsx)(Q.t,{href:{pathname:"/account",query:{t:"manage"}},className:"text-xs",children:"Account settings"}),(0,a.jsx)(Q.t,{href:"/settings",className:"text-xs",children:"User settings"})]})]}),(0,a.jsxs)($.$,{className:"py-6",children:[(0,a.jsx)("p",{className:"font-bold text-gray-800",children:"Money In"}),(0,a.jsxs)("div",{className:"mt-4 space-y-1",children:[(0,a.jsxs)("p",{className:"text-xl font-light text-gray-700",children:["$",(0,O.a)((0,O.s)(s.data).credit)," USD"]}),(0,a.jsx)("p",{className:"text-xs text-gray-400 font-medium",children:"Total received"})]}),(0,a.jsxs)("div",{className:"mt-4 border-t pt-2 flex gap-4",children:[(0,a.jsx)(Q.t,{href:{pathname:"/transactions",query:{t:"request"}},className:"text-xs",children:"Request money"}),(0,a.jsx)(Q.t,{href:{pathname:"/transactions",query:{t:"history"}},className:"text-xs",children:"View transactions"})]})]}),(0,a.jsxs)($.$,{className:"py-6",children:[(0,a.jsx)("p",{className:"font-bold text-gray-800",children:"Money Out"}),(0,a.jsxs)("div",{className:"mt-4 space-y-1",children:[(0,a.jsxs)("p",{className:"text-xl font-light text-gray-700",children:["$",(0,O.a)((0,O.s)(s.data).debit)," USD"]}),(0,a.jsx)("p",{className:"text-xs text-gray-400 font-medium",children:"Total sent"})]}),(0,a.jsxs)("div",{className:"mt-4 border-t pt-2 flex gap-4",children:[(0,a.jsx)(Q.t,{href:{pathname:"/transactions",query:{t:"send"}},className:"text-xs",children:"Send money"}),(0,a.jsx)(Q.t,{href:{pathname:"/transactions",query:{t:"history"}},className:"text-xs",children:"View transactions"})]})]})]}),(0,a.jsx)("div",{className:"flex-1",children:n})]})},User:function(e){var t=e.children,n=(0,c.aC)().data;return n?(0,a.jsxs)("div",{className:"flex flex-col lg:flex-row gap-8",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-6 lg:w-80",children:[(0,a.jsxs)($.$,{className:"py-6",children:[(0,a.jsx)("div",{className:"flex-center",children:(0,a.jsx)(B.Z,{className:"w-28 h-28 p-3 rounded-full text-sky-800 bg-sky-500"})}),(0,a.jsx)("div",{className:"mt-6 flex flex-col items-center",children:(0,a.jsxs)("p",{className:"text-base font-medium",children:[n.firstName," ",n.lastName]})})]}),(0,a.jsxs)($.$,{className:"py-6",children:[(0,a.jsx)("p",{className:"font-bold text-gray-800",children:"Quick Links"}),(0,a.jsx)("div",{className:"mt-2 flex flex-col gap-1",children:(0,a.jsx)(Q.t,{href:"/transactions",className:"text-xs",children:"View transactions"})}),(0,a.jsxs)("div",{className:"mt-4 border-t pt-2 flex gap-4",children:[(0,a.jsx)(Q.t,{href:{pathname:"/transactions",query:{t:"request"}},className:"text-xs",children:"Request money"}),(0,a.jsx)(Q.t,{href:{pathname:"/transactions",query:{t:"send"}},className:"text-xs",children:"Send money"})]})]})]}),(0,a.jsx)("div",{className:"flex-1",children:t})]}):null},Manager:function(e){var t,n,r=e.children,s=(0,c.aC)().data,i=(0,Z.useRouter)(),l=i.query.userId,u=i.query.accountId,o=(0,U.dB)(null!=l?l:""),d=(0,J.Ds)(null!=l?l:"",null!=u?u:""),f=(0,S.ep)(null!=u?u:"");return s?(0,a.jsxs)("div",{className:"flex flex-col-reverse lg:flex-row gap-8",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-6 lg:w-80",children:[(0,a.jsx)($.$,{className:"py-6",children:(0,a.jsx)("div",{className:"flex-center",children:(0,a.jsx)(B.Z,{className:(0,x.Z)(["w-28 h-28 p-3 rounded-full",(null===(t=o.data)||void 0===t?void 0:t.isAdmin)?"text-red-800 bg-red-400":"text-sky-800 bg-sky-500"])})})}),(0,a.jsxs)($.$,{className:"py-6",children:[(0,a.jsx)("p",{className:"font-bold text-gray-800",children:"Quick Actions"}),(0,a.jsxs)("div",{className:"mt-2 flex flex-col gap-1",children:[(0,a.jsx)(Q.t,{href:"/manager",className:"text-xs",children:"View Users"}),(0,a.jsx)(Q.t,{href:"/manager/email",className:"text-xs",children:"Send Mail"})]})]}),o.data&&(0,a.jsxs)($.$,{className:"py-6",children:[(0,a.jsx)("p",{className:"font-bold text-gray-800",children:o.data.firstName+" "+o.data.lastName}),(0,a.jsxs)("div",{className:"mt-2 flex flex-col gap-1",children:[(0,a.jsx)(Q.t,{href:{pathname:"/manager/".concat(o.data.id),query:{t:"manage"}},className:"text-xs",children:"Manage User"}),(0,a.jsx)(Q.t,{href:{pathname:"/manager/".concat(o.data.id),query:{t:"accounts"}},className:"text-xs",children:"View Accounts"})]}),(0,a.jsx)("div",{className:"mt-4 border-t pt-2 flex gap-4",children:(0,a.jsx)(Q.t,{href:"/manager",className:"text-xs",children:"All Users"})})]}),d.data&&(0,a.jsxs)($.$,{className:"py-6",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)("p",{className:"font-bold text-gray-800",children:d.data.name}),(0,a.jsx)(T.Z,{className:"w-5 h-5"})]}),f.data&&(0,a.jsxs)("div",{className:"mt-4 space-y-2",children:[(0,a.jsxs)("p",{className:"text-2xl font-light text-gray-700",children:["$",(0,O.a)(null===(n=f.data)||void 0===n?void 0:n.total)," USD"]}),(0,a.jsx)("p",{className:"text-xs text-gray-400 font-medium",children:"Available"})]}),(0,a.jsxs)("div",{className:"mt-2 flex flex-col gap-1",children:[(0,a.jsx)(Q.t,{href:{pathname:"/manager/".concat(d.data.user,"/account/").concat(d.data.id),query:{t:"manage"}},className:"text-xs",children:"Manage Account"}),(0,a.jsx)(Q.t,{href:{pathname:"/manager/".concat(d.data.user,"/account/").concat(d.data.id),query:{t:"transactions"}},className:"text-xs",children:"View Transactions"})]}),(0,a.jsx)("div",{className:"mt-4 border-t pt-2 flex gap-4",children:(0,a.jsx)(Q.t,{href:{pathname:"/manager/".concat(d.data.user),query:{t:"accounts"}},className:"text-xs",children:"All Accounts"})})]})]}),(0,a.jsx)("div",{className:"flex-1 min-h-screen",children:r})]}):null}})},8837:function(e,t,n){function r(e){return(null!=e?e:0).toFixed(2)}function s(e){return e?{debit:e.withdrawal+e.charge+e.transferOut+e.externalTransferOut,credit:e.deposit+e.bonus+e.transferIn+e.externalTransferIn}:{debit:0,credit:0}}n.d(t,{a:function(){return r},s:function(){return s}})},7567:function(e,t,n){n.d(t,{B:function(){return i}});var r=n(7842),s=n(865),a=n(6670),c=n(6383);function i(e,t){return Object.defineProperties(e,Object.entries(t).reduce(function(e,t){var n=(0,c.Z)(t,2),i=n[0],l=n[1];return(0,a.Z)((0,s.Z)({},e),(0,r.Z)({},i,{value:l}))},{})),e}}}]);