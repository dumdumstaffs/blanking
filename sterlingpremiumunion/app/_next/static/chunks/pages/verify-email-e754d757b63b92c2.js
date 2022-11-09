(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[70],{7715:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/verify-email",function(){return r(2177)}])},7545:function(e,n,r){"use strict";r.d(n,{oc:function(){return j},aC:function(){return w},YA:function(){return N},_y:function(){return k},l4:function(){return _},yI:function(){return b},Mp:function(){return Z},Su:function(){return C}});var t=r(8788),i=r(5163),s=r(7079);function a(e){return u.apply(this,arguments)}function u(){return(u=(0,t.Z)(function(e){var n;return(0,i.__generator)(this,function(n){switch(n.label){case 0:return[4,s.dJ.post("/auth/request-otp",e)];case 1:return[2,n.sent().data]}})})).apply(this,arguments)}function c(e){return o.apply(this,arguments)}function o(){return(o=(0,t.Z)(function(e){var n;return(0,i.__generator)(this,function(n){switch(n.label){case 0:return[4,s.dJ.post("/auth/login",e)];case 1:return[2,n.sent().data]}})})).apply(this,arguments)}function l(){return d.apply(this,arguments)}function d(){return(d=(0,t.Z)(function(){var e;return(0,i.__generator)(this,function(e){switch(e.label){case 0:return[4,s.dJ.get("/auth/profile")];case 1:return[2,e.sent().data]}})})).apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return(h=(0,t.Z)(function(e){var n;return(0,i.__generator)(this,function(n){switch(n.label){case 0:return[4,s.dJ.post("/auth/register",e)];case 1:return[2,n.sent().data]}})})).apply(this,arguments)}function p(e){return m.apply(this,arguments)}function m(){return(m=(0,t.Z)(function(e){var n;return(0,i.__generator)(this,function(n){switch(n.label){case 0:return[4,s.dJ.post("/auth/verify",e)];case 1:return[2,n.sent().data]}})})).apply(this,arguments)}function x(){return v.apply(this,arguments)}function v(){return(v=(0,t.Z)(function(){var e;return(0,i.__generator)(this,function(e){switch(e.label){case 0:return[4,s.dJ.post("/auth/verify/request")];case 1:return[2,e.sent().data]}})})).apply(this,arguments)}var g=r(5148),y=r(2066),j=(0,g.no)("auth"),w=function(){return(0,y.useQuery)(j._def,l,{retry:!1})},b=function(){return(0,y.useMutation)(a)},N=function(){var e=(0,y.useQueryClient)();return(0,y.useMutation)(c,{onSuccess:function(n){var r=n.token;return(0,s.o4)(r),e.invalidateQueries(j._def)}})},_=function(){return(0,y.useMutation)(f)},k=function(){var e=(0,y.useQueryClient)();return(0,y.useMutation)((0,t.Z)(function(){return(0,i.__generator)(this,function(e){return[2,(0,s.gy)()]})}),{onMutate:function(){return e.cancelQueries(j._def)},onSuccess:function(){return e.invalidateQueries(j._def)}})},Z=function(){var e=(0,y.useQueryClient)();return(0,y.useMutation)(p,{onSuccess:function(){return e.invalidateQueries(j._def)}})},C=function(){return(0,y.useMutation)(x)}},412:function(e,n,r){"use strict";r.d(n,{p:function(){return d},z:function(){return l}});var t=r(865),i=r(6670),s=r(6297),a=r(2322),u=r(6277),c=r(2784),o=r(5392),l=(0,c.forwardRef)(function(e,n){var r=e.loading,c=e.variant,l=void 0===c?"dark":c,d=e.className,f=e.children,h=(0,s.Z)(e,["loading","variant","className","children"]);return(0,a.jsx)("button",(0,i.Z)((0,t.Z)({ref:n,disabled:r},h),{className:(0,u.Z)(["flex-center px-4 py-2 border font-medium","focus:outline-none focus:ring-2 focus:ring-theme-1 focus:ring-offset-1","light"===l&&["border-white bg-white text-gray-800",],"dark"===l&&["border-blue-900 bg-blue-900 text-white",],"critical"===l&&["border-red-100 bg-red-100 text-red-700 focus:!ring-red-700"],"transparent-light"===l&&["border-white text-white"],"transparent-dark"===l&&["border-gray-200 text-gray-800"],d,]),children:r?(0,a.jsx)(o.$,{className:"w-5 h-5"}):f}))});l.displayName="Button";var d=function(e){var n=e.onClick,r=e.variant,u=e.children,o=(0,s.Z)(e,["onClick","variant","children"]),d=(0,c.useState)(!1),f=d[0],h=d[1],p=function(){return h(!0)},m=function(){return h(!1)},x=function(e){h(!1),n(e)};return f?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l,(0,i.Z)((0,t.Z)({},o),{variant:"dark",onClick:m,children:"Cancel"})),(0,a.jsx)(l,(0,i.Z)((0,t.Z)({},o),{variant:"critical",onClick:x,children:"Proceed"}))]}):(0,a.jsx)(l,(0,i.Z)((0,t.Z)({},o),{variant:void 0===r?"critical":r,onClick:p,children:u}))}},1396:function(e,n,r){"use strict";r.d(n,{g:function(){return d}});var t=r(865),i=r(6670),s=r(2322),a=r(7545),u=r(4005),c=r(4819),o=r(7729),l=r.n(o);function d(e){var n,r=e.mode,o=e.description,d=e.children,f=(0,a.aC)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(l(),{children:[(0,s.jsx)("title",{children:c.$.app.NAME}),(0,s.jsx)("meta",{name:"description",content:(o?o+" | ":"")+"Premium Edge Bank - Banking, Loan & Insurance"}),(0,s.jsx)("link",{rel:"shortcut icon",type:"image/png",href:"/logo.jpg"}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0",id:"viewport"})]}),(0,s.jsx)("div",{className:"bg-grad-bluegreen text-sm",children:(0,s.jsx)("div",{className:"bg-[url('/pattern.png')] bg-cover bg-center",children:(0,s.jsx)(u.n,(0,i.Z)((0,t.Z)({query:f},"unverified"===(n=void 0===r?"guest":r)?{showOn:"success",redirectTo:"/signin",onSuccessRedirectCondition:function(e){if(e.isVerified)return"/"}}:"authenticated"===n?{showOn:"success",redirectTo:"/signin"}:"guest"===n?{showOn:"failure",redirectTo:"/"}:{showOn:"all"}),{children:(0,s.jsx)("main",{className:"min-h-screen flex flex-col items-center justify-center px-3 py-12 md:pt-16",children:d})}))})})]})}},2177:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return p}});var t=r(2322),i=r(7545),s=r(5392),a=r(412),u=r(1396),c=r(8295),o=r(9097),l=r.n(o),d=r(5632),f=r(2784),h=r(2202);function p(){var e=(0,d.useRouter)().query.token;return(0,t.jsx)(u.g,{mode:"unverified",description:"Verify Email",children:e&&"string"==typeof e?(0,t.jsx)(m,{token:e}):(0,t.jsx)(x,{})})}function m(e){var n=e.token,r=(0,f.useState)(!0),u=r[0],o=r[1],p=(0,d.useRouter)(),m=(0,i.Mp)().mutate;return(0,f.useEffect)(function(){m({token:n},{onSuccess:function(){h.ZP.success("Account verified successfully"),p.push("/")},onError:function(e){o(!1),h.ZP.error((0,c.Z)(e),{id:"invalid-token"})}})},[m,n,p]),(0,t.jsxs)("div",{className:"w-full max-w-md px-3 sm:px-6 py-4 bg-white rounded-md shadow-sm",children:[(0,t.jsx)("h2",{className:"py-2 text-xl font-medium text-center",children:"Verifying Email Address"}),u?(0,t.jsx)("div",{className:"flex-center py-12",children:(0,t.jsx)(s.$,{className:"w-10 h-10 text-theme-1"})}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"py-6 space-y-2",children:(0,t.jsxs)("p",{className:"text-gray-500 text-center",children:["Verification Failed",(0,t.jsx)("br",{})]})}),(0,t.jsx)("div",{className:"py-6",children:(0,t.jsx)(l(),{href:"/verify-email",children:(0,t.jsx)("a",{children:(0,t.jsx)(a.z,{variant:"transparent-light",className:"!py-3 rounded-full w-full !bg-grad-bluegreen",children:"Retry Verification"})})})})]})]})}function x(){var e=(0,f.useState)(!1),n=e[0],r=e[1],s=(0,i.Su)(),u=function(){return s.mutate(void 0,{onSuccess:function(){r(!0)},onError:function(e){h.ZP.error((0,c.Z)(e))}})};return(0,t.jsx)("div",{className:"w-full max-w-md px-3 sm:px-6 py-4 bg-white rounded-md shadow-sm",children:n?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h2",{className:"py-2 text-xl font-medium text-center",children:"Verification Link Sent"}),(0,t.jsxs)("div",{className:"py-6 space-y-4",children:[(0,t.jsxs)("p",{className:"text-gray-500",children:["We have sent you a verification link. Check your email including spam folder for instructions on verifying your account.",(0,t.jsx)("br",{})]}),(0,t.jsx)("p",{className:"text-gray-500",children:"NOTE: verification link will become invalid if not used before expiration"})]}),(0,t.jsx)("div",{className:"py-6",children:(0,t.jsx)(l(),{href:"/",children:(0,t.jsx)("a",{children:(0,t.jsx)(a.z,{variant:"transparent-dark",className:"!py-3 rounded-full w-full",children:"I have verified"})})})})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h2",{className:"py-2 text-xl font-medium text-center",children:"Verify Email Address"}),(0,t.jsxs)("div",{className:"py-6 space-y-4",children:[(0,t.jsxs)("p",{className:"text-gray-500",children:["Please verify your email address. Your email address must be verified in order to complete account creation.",(0,t.jsx)("br",{})]}),(0,t.jsx)("p",{className:"text-gray-500",children:"Click on the link below to verify your account."})]}),(0,t.jsx)("div",{className:"py-6",children:(0,t.jsx)(a.z,{loading:s.isLoading,onClick:u,variant:"transparent-light",className:"!py-3 rounded-full w-full !bg-grad-bluegreen",children:"Verify"})})]})})}},8295:function(e,n,r){"use strict";r.d(n,{Z:function(){return s}});var t=r(9644),i=r.n(t);function s(e){var n,r="Something went wrong";if(!i().isAxiosError(e))return r;var t=null===(n=e.response)||void 0===n?void 0:n.data;return t&&"object"==typeof t&&t.message||r}}},function(e){e.O(0,[949,774,888,179],function(){return e(e.s=7715)}),_N_E=e.O()}]);