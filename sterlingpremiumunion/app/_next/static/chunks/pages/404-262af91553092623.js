(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{9133:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return e(2831)}])},7545:function(n,t,e){"use strict";e.d(t,{oc:function(){return _},aC:function(){return j},YA:function(){return Z},_y:function(){return N},l4:function(){return w},yI:function(){return b},Mp:function(){return S},Su:function(){return C}});var r=e(8788),u=e(5163),i=e(7079);function c(n){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(function(n){var t;return(0,u.__generator)(this,function(t){switch(t.label){case 0:return[4,i.dJ.post("/auth/request-otp",n)];case 1:return[2,t.sent().data]}})})).apply(this,arguments)}function a(n){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(function(n){var t;return(0,u.__generator)(this,function(t){switch(t.label){case 0:return[4,i.dJ.post("/auth/login",n)];case 1:return[2,t.sent().data]}})})).apply(this,arguments)}function f(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(function(){var n;return(0,u.__generator)(this,function(n){switch(n.label){case 0:return[4,i.dJ.get("/auth/profile")];case 1:return[2,n.sent().data]}})})).apply(this,arguments)}function d(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(function(n){var t;return(0,u.__generator)(this,function(t){switch(t.label){case 0:return[4,i.dJ.post("/auth/register",n)];case 1:return[2,t.sent().data]}})})).apply(this,arguments)}function p(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(function(n){var t;return(0,u.__generator)(this,function(t){switch(t.label){case 0:return[4,i.dJ.post("/auth/verify",n)];case 1:return[2,t.sent().data]}})})).apply(this,arguments)}function v(){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(function(){var n;return(0,u.__generator)(this,function(n){switch(n.label){case 0:return[4,i.dJ.post("/auth/verify/request")];case 1:return[2,n.sent().data]}})})).apply(this,arguments)}var y=e(5148),x=e(2066),_=(0,y.no)("auth"),j=function(){return(0,x.useQuery)(_._def,f,{retry:!1})},b=function(){return(0,x.useMutation)(c)},Z=function(){var n=(0,x.useQueryClient)();return(0,x.useMutation)(a,{onSuccess:function(t){var e=t.token;return(0,i.o4)(e),n.invalidateQueries(_._def)}})},w=function(){return(0,x.useMutation)(d)},N=function(){var n=(0,x.useQueryClient)();return(0,x.useMutation)((0,r.Z)(function(){return(0,u.__generator)(this,function(n){return[2,(0,i.gy)()]})}),{onMutate:function(){return n.cancelQueries(_._def)},onSuccess:function(){return n.invalidateQueries(_._def)}})},S=function(){var n=(0,x.useQueryClient)();return(0,x.useMutation)(p,{onSuccess:function(){return n.invalidateQueries(_._def)}})},C=function(){return(0,x.useMutation)(v)}},5848:function(n,t,e){"use strict";e.d(t,{t:function(){return o}});var r=e(2322),u=e(7567),i=e(6277),c=e(9097),s=e.n(c);function a(n){var t=n.href,e=n.className,u=n.children;return(0,r.jsx)(s(),{href:t,children:(0,r.jsx)("a",{className:(0,i.Z)("text-theme-1 hover:underline",e),children:u})})}var o=(0,u.B)(a,{Group:function(n){var t=n.className,e=n.children;return(0,r.jsx)("ul",{className:(0,i.Z)("space-y-2",t),children:e})},Item:function(n){var t=n.href,e=n.children;return(0,r.jsx)("li",{children:(0,r.jsx)(a,{href:t,children:e})})}})},1396:function(n,t,e){"use strict";e.d(t,{g:function(){return l}});var r=e(865),u=e(6670),i=e(2322),c=e(7545),s=e(4005),a=e(4819),o=e(7729),f=e.n(o);function l(n){var t,e=n.mode,o=n.description,l=n.children,d=(0,c.aC)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(f(),{children:[(0,i.jsx)("title",{children:a.$.app.NAME}),(0,i.jsx)("meta",{name:"description",content:(o?o+" | ":"")+"Premium Edge Bank - Banking, Loan & Insurance"}),(0,i.jsx)("link",{rel:"shortcut icon",type:"image/png",href:"/logo.jpg"}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0",id:"viewport"})]}),(0,i.jsx)("div",{className:"bg-grad-bluegreen text-sm",children:(0,i.jsx)("div",{className:"bg-[url('/pattern.png')] bg-cover bg-center",children:(0,i.jsx)(s.n,(0,u.Z)((0,r.Z)({query:d},"unverified"===(t=void 0===e?"guest":e)?{showOn:"success",redirectTo:"/signin",onSuccessRedirectCondition:function(n){if(n.isVerified)return"/"}}:"authenticated"===t?{showOn:"success",redirectTo:"/signin"}:"guest"===t?{showOn:"failure",redirectTo:"/"}:{showOn:"all"}),{children:(0,i.jsx)("main",{className:"min-h-screen flex flex-col items-center justify-center px-3 py-12 md:pt-16",children:l})}))})})]})}},2831:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return c}});var r=e(2322),u=e(5848),i=e(1396);function c(){return(0,r.jsxs)(i.g,{mode:"all",description:"Page not Found",children:[(0,r.jsx)("h2",{className:"text-lg font-medium mb-6",children:"Page Not Found"}),(0,r.jsxs)("div",{className:"text-left",children:[(0,r.jsx)("p",{className:"text-base mb-3",children:"Useful links:"}),(0,r.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,r.jsx)(u.t,{href:"/signin",children:"Sign In"}),(0,r.jsx)(u.t,{href:"/signin",children:"Create an account"})]})]})]})}},7567:function(n,t,e){"use strict";e.d(t,{B:function(){return s}});var r=e(7842),u=e(865),i=e(6670),c=e(6383);function s(n,t){return Object.defineProperties(n,Object.entries(t).reduce(function(n,t){var e=(0,c.Z)(t,2),s=e[0],a=e[1];return(0,i.Z)((0,u.Z)({},n),(0,r.Z)({},s,{value:a}))},{})),n}},630:function(n,t,e){"use strict";function r(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=Array(t);e<t;e++)r[e]=n[e];return r}e.d(t,{Z:function(){return r}})},8366:function(n,t,e){"use strict";function r(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}e.d(t,{Z:function(){return r}})},6383:function(n,t,e){"use strict";e.d(t,{Z:function(){return i}});var r=e(8366),u=e(5459);function i(n,t){return function(n){if(Array.isArray(n))return n}(n)||(0,r.Z)(n,t)||(0,u.Z)(n,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},5459:function(n,t,e){"use strict";e.d(t,{Z:function(){return u}});var r=e(630);function u(n,t){if(n){if("string"==typeof n)return(0,r.Z)(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);if("Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return(0,r.Z)(n,t)}}}},function(n){n.O(0,[949,774,888,179],function(){return n(n.s=9133)}),_N_E=n.O()}]);