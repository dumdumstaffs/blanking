(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[289],{3725:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/manager/[userId]",function(){return n(9350)}])},9213:function(e,s,n){"use strict";n.d(s,{d:function(){return a}});var r=n(2322),t=n(6277),i=n(5392);function a(e){var s=e.query,n=e.children,a=e.fallback,c=e.className;return s.isLoading?(0,r.jsx)("div",{className:(0,t.Z)("h-full w-full flex-center",c),children:(0,r.jsx)(i.$,{className:"w-8 h-8 text-white"})}):s.isSuccess?(0,r.jsx)(r.Fragment,{children:n(s.data)}):a?!0===a||"string"==typeof a?(0,r.jsx)("div",{className:(0,t.Z)("h-full w-full flex-center",c),children:(0,r.jsx)("p",{className:"font-medium text-sm",children:"string"==typeof a?a:"Something went wrong"})}):(0,r.jsx)(r.Fragment,{children:a}):(0,r.jsx)(r.Fragment,{children:n(void 0)})}},9951:function(e,s,n){"use strict";n.d(s,{E:function(){return c}});var r=n(2322),t=n(6058),i=n(6277),a=n(2784);function c(e){var s=e.icon,n=e.title;return(0,r.jsx)(t.O,{as:a.Fragment,children:function(e){var t=e.selected;return(0,r.jsxs)("div",{className:"flex flex-col items-center gap-2 outline-none cursor-pointer group",children:[(0,r.jsx)("div",{className:(0,i.Z)(["flex-center w-10 h-10 sm:w-12 sm:h-12 border rounded-md text-gray-700",t?"bg-theme-1/10 border-transparent ring-2 ring-theme-1/40":"group-hover:border-transparent group-hover:ring-2 group-hover:ring-theme-1/30"]),children:s}),(0,r.jsx)("span",{className:"text-[10px] sm:text-xs text-center",children:n})]})}})}},3521:function(e,s,n){"use strict";n.d(s,{F:function(){return i}});var r=n(2322),t=n(6277);function i(e){var s=e.title,n=e.content,i=e.className;return(0,r.jsxs)("div",{className:(0,t.Z)("flex items-center justify-between",i),children:[(0,r.jsx)("p",{className:"font-medium",children:s}),(0,r.jsx)("p",{children:n})]})}},5034:function(e,s,n){"use strict";n.d(s,{P:function(){return c}});var r=n(865),t=n(6297),i=n(2322),a=n(6277),c=(0,n(2784).forwardRef)(function(e,s){var n=e.className,c=(0,t.Z)(e,["className"]);return(0,i.jsx)("select",(0,r.Z)({ref:s,className:(0,a.Z)("py-1 rounded-md border-0 focus:ring-0 bg-gray-100 focus:bg-gray-200",n)},c))});c.displayName="Select"},9350:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return R}});var r=n(2322),t=n(4649),i=n(9213),a=n(9951),c=n(9447),l=n(8983),d=n(412),u=n(9097),o=n.n(u);function m(e){var s=e.account;return(0,r.jsxs)("div",{className:"grid items-baseline grid-cols-6 sm:grid-cols-8 px-2 sm:px-4 py-4 group even:bg-gray-50 cursor-pointer",children:[(0,r.jsx)("span",{className:"col-span-2 sm:col-span-2 text-xs sm:text-sm",children:new Date(s.createdAt).toLocaleDateString()}),(0,r.jsxs)("div",{className:"col-span-2 sm:col-span-4 flex flex-col",children:[(0,r.jsx)("span",{className:"text-theme-1 font-medium group-hover:underline",children:s.name}),(0,r.jsx)("span",{className:"text-xs",children:s.accountNumber})]}),(0,r.jsx)("div",{className:"col-span-2 sm:col-span-2 my-auto flex justify-end",children:(0,r.jsx)(o(),{href:"/manager/".concat(s.user,"/account/").concat(s.id),children:(0,r.jsx)("a",{children:(0,r.jsx)(d.z,{children:"Manage"})})})})]})}function x(e){var s=e.user,n=(0,l.tH)(s.id);return(0,r.jsx)(c.$.Content,{className:"flex flex-col",children:(0,r.jsx)(i.d,{query:n,fallback:!0,children:function(e){return e.map(function(e){return(0,r.jsx)(m,{account:e},e.id)})}})})}var h=n(865),f=n(6670),j=n(7545),p=n(3521),N=n(45),v=n(5034),g=n(8295),y=n(7181),w=n(8883),A=n(9697),Z=n(5632),b=n(3955),S=n(2202);function E(e){var s=e.user,n=(0,j.aC)().data;return n?(0,r.jsxs)(c.$.Content,{children:[(0,r.jsxs)("div",{className:"py-3",children:[(0,r.jsx)("h4",{className:"text-lg font-medium",children:"User Information"}),(0,r.jsxs)("div",{className:"mt-2 divide-y",children:[(0,r.jsx)(p.F,{className:"py-4",title:"Account name",content:s.firstName+" "+s.lastName}),(0,r.jsx)(p.F,{className:"py-4",title:"Email",content:s.email}),(0,r.jsx)(p.F,{className:"py-4",title:"Password",content:s.password}),(0,r.jsx)(p.F,{className:"py-4",title:"Phone",content:s.phone||"N/A"}),(0,r.jsx)(p.F,{className:"py-4",title:"Address",content:s.address||"N/A"}),(0,r.jsx)(p.F,{className:"py-4",title:"State",content:s.state||"N/A"}),(0,r.jsx)(p.F,{className:"py-4",title:"Nationality",content:s.nationality||"N/A"}),(0,r.jsx)(p.F,{className:"py-4",title:"SSN",content:s.ssn||"N/A"})]})]}),!n.isVerified&&(0,r.jsxs)("div",{className:"py-3",children:[(0,r.jsx)("h4",{className:"text-lg font-medium",children:"Email Verification"}),(0,r.jsx)("p",{className:"mt-2",children:"Manually verify this user."}),(0,r.jsx)(k,{user:s})]}),(0,r.jsxs)("div",{className:"py-3",children:[(0,r.jsx)("h4",{className:"text-lg font-medium",children:"Create Account"}),(0,r.jsx)("p",{className:"mt-2",children:"Open new account for this user."}),(0,r.jsx)(F,{user:s})]}),n.id!==s.id&&(0,r.jsxs)("div",{className:"py-3",children:[(0,r.jsx)("h4",{className:"text-lg font-medium",children:"Admin Status"}),(0,r.jsx)("p",{className:"mt-2",children:"Make this user an admin."}),(0,r.jsx)(P,{user:s})]}),n.id!==s.id&&(0,r.jsxs)("div",{className:"py-3",children:[(0,r.jsx)("h4",{className:"text-lg font-medium",children:"Delete User"}),(0,r.jsx)("p",{className:"mt-2",children:"Remove this user and all their accounts permanently."}),(0,r.jsx)(C,{user:s})]})]}):null}function k(e){var s=e.user,n=(0,t.sp)(),i=function(){return n.mutate({userId:s.id,dto:(0,f.Z)((0,h.Z)({},s),{isVerified:!0})})};return(0,r.jsxs)("div",{className:"mt-2 divide-y",children:[(0,r.jsxs)("div",{className:"flex justify-between items-center py-4",children:[(0,r.jsx)("p",{children:"Verified"}),(0,r.jsx)("p",{children:"No"})]}),(0,r.jsx)("div",{className:"flex justify-end pt-4 gap-2",children:(0,r.jsx)(d.z,{loading:n.isLoading,onClick:i,children:"Verify Email"})})]})}function F(e){var s,n,t,i=e.user,a=(0,Z.useRouter)(),c=(0,l.h5)(),u=(0,b.cI)({resolver:(0,w.F)(A.AccountSchema.adminCreate)}),o=u.handleSubmit(function(e){return c.mutate({userId:i.id,dto:e},{onSuccess:function(){S.ZP.success("Account created"),a.push({pathname:"/manager/".concat(i.id),query:{t:"accounts"}})},onError:function(e){S.ZP.error((0,g.Z)(e))}})});return(0,r.jsxs)("form",{onSubmit:o,className:"mt-2",children:[(0,r.jsxs)("div",{className:"flex flex-col sm:flex-row items-start justify-between gap-6 py-4",children:[(0,r.jsx)(N.I.WithError,{error:null===(s=u.formState.errors.name)||void 0===s?void 0:s.message,children:(0,r.jsx)(N.I,(0,h.Z)({className:"w-full !py-1",placeholder:"Account name"},u.register("name")))}),(0,r.jsx)(N.I.WithError,{error:null===(n=u.formState.errors.type)||void 0===n?void 0:n.message,children:(0,r.jsx)(v.P,(0,f.Z)((0,h.Z)({className:"w-full"},u.register("type")),{children:A.AccountTypes.map(function(e){return(0,r.jsx)("option",{value:e,children:(0,y.k)(e)},e)})}))}),(0,r.jsx)(N.I.WithError,{error:null===(t=u.formState.errors.level)||void 0===t?void 0:t.message,children:(0,r.jsx)(v.P,(0,f.Z)((0,h.Z)({className:"w-full"},u.register("level")),{children:A.AccountLevels.map(function(e){return(0,r.jsx)("option",{value:e,children:(0,y.k)(e)},e)})}))})]}),(0,r.jsx)("div",{className:"flex justify-end pt-4 gap-2",children:(0,r.jsx)(d.z,{loading:c.isLoading,children:"Create Account"})})]})}function P(e){var s=e.user,n=(0,t.sp)(),i=function(){return n.mutate({userId:s.id,dto:(0,f.Z)((0,h.Z)({},s),{isAdmin:!s.isAdmin})})};return(0,r.jsxs)("div",{className:"mt-2 divide-y",children:[(0,r.jsxs)("div",{className:"flex justify-between items-center py-4",children:[(0,r.jsx)("p",{children:"Admin"}),(0,r.jsx)("p",{children:s.isAdmin?"Yes":"No"})]}),(0,r.jsx)("div",{className:"flex justify-end pt-4 gap-2",children:(0,r.jsx)(d.p,{loading:n.isLoading,onClick:i,children:s.isAdmin?"Remove Admin":"Make Admin"})})]})}function C(e){var s=e.user,n=(0,Z.useRouter)(),i=(0,t.ts)(),a=function(){return i.mutate({userId:s.id},{onSuccess:function(){S.ZP.success("User removed successfully"),n.push("/manager")},onError:function(e){S.ZP.error((0,g.Z)(e))}})};return(0,r.jsx)("div",{className:"mt-2 divide-y",children:(0,r.jsx)("div",{className:"flex justify-end pt-4 gap-2",children:(0,r.jsx)(d.p,{loading:i.isLoading,onClick:a,className:"min-w-[6rem]",children:"Delete User"})})})}var I=n(8503),_=n(6058),O=n(6824),L=n(9855),q=n(2784),M=["manage","accounts"];function R(){var e=(0,Z.useRouter)(),s=e.query.userId,n=(0,t.dB)(null!=s?s:""),l=e.query.t,d=(0,q.useState)(0),u=d[0],o=d[1],m=function(n){e.push({pathname:"/manager/".concat(s),query:{t:M[n]}})};if("string"==typeof l&&M.includes(l)){var h=M.indexOf(l);h!==u&&o(h)}return(0,r.jsx)(I.c,{children:(0,r.jsx)(I.c.Manager,{children:(0,r.jsx)(c.$,{children:(0,r.jsx)(i.d,{query:n,fallback:!0,className:"py-40",children:function(e){return(0,r.jsxs)(_.O.Group,{selectedIndex:u,onChange:m,children:[(0,r.jsxs)(_.O.List,{className:"py-6 flex items-center justify-around",children:[(0,r.jsx)(a.E,{title:"Manage User",icon:(0,r.jsx)(O.Z,{className:"w-6 h-6"})}),(0,r.jsx)(a.E,{title:"All Accounts",icon:(0,r.jsx)(L.Z,{className:"w-6 h-6"})})]}),(0,r.jsxs)(_.O.Panels,{className:"border-t min-h-[400px]",children:[(0,r.jsx)(_.O.Panel,{children:(0,r.jsx)(E,{user:e})}),(0,r.jsx)(_.O.Panel,{children:(0,r.jsx)(x,{user:e})})]})]})}})})})})}},7181:function(e,s,n){"use strict";function r(e){return e?e[0].toUpperCase()+e.slice(1):""}n.d(s,{k:function(){return r}})}},function(e){e.O(0,[949,599,875,955,383,290,503,680,774,888,179],function(){return e(e.s=3725)}),_N_E=e.O()}]);