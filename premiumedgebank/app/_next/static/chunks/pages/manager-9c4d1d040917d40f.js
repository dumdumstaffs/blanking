(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[543],{9563:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/manager",function(){return n(5661)}])},9213:function(e,s,n){"use strict";n.d(s,{d:function(){return i}});var r=n(2322),a=n(6277),c=n(5392);function i(e){var s=e.query,n=e.children,i=e.fallback,l=e.className;return s.isLoading?(0,r.jsx)("div",{className:(0,a.Z)("h-full w-full flex-center",l),children:(0,r.jsx)(c.$,{className:"w-10 h-10 text-theme-primary"})}):s.isSuccess?(0,r.jsx)(r.Fragment,{children:n(s.data)}):i?!0===i||"string"==typeof i?(0,r.jsx)("div",{className:(0,a.Z)("h-full w-full flex-center",l),children:(0,r.jsx)("p",{className:"font-medium text-sm",children:"string"==typeof i?i:"Something went wrong"})}):(0,r.jsx)(r.Fragment,{children:i}):(0,r.jsx)(r.Fragment,{children:n(void 0)})}},5661:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return o}});var r=n(2322),a=n(9447),c=n(4649),i=n(9213),l=n(412),t=n(9097),d=n.n(t);function m(e){var s=e.user;return(0,r.jsxs)("div",{className:"grid items-baseline grid-cols-6 sm:grid-cols-8 px-2 sm:px-4 py-4 group even:bg-gray-50 cursor-pointer",children:[(0,r.jsx)("span",{className:"col-span-2 sm:col-span-2 text-xs sm:text-sm",children:new Date(s.createdAt).toLocaleDateString()}),(0,r.jsxs)("div",{className:"col-span-2 sm:col-span-4 flex flex-col",children:[(0,r.jsx)("p",{className:"text-theme-primary font-medium group-hover:underline",children:s.firstName+" "+s.lastName}),(0,r.jsxs)("p",{className:"text-xs",children:[(0,r.jsx)("span",{children:s.email}),(0,r.jsx)("span",{className:"ml-4 italic",children:s.isAdmin?"(admin)":""})]})]}),(0,r.jsx)("div",{className:"col-span-2 sm:col-span-2 my-auto flex justify-end",children:(0,r.jsx)(d(),{href:"/manager/".concat(s.id),children:(0,r.jsx)("a",{children:(0,r.jsx)(l.z,{children:"Manage"})})})})]})}function x(){var e=(0,c.Rm)();return(0,r.jsx)(a.$.Content,{children:(0,r.jsx)(i.d,{query:e,fallback:!0,children:function(e){return(0,r.jsxs)(r.Fragment,{children:[e.map(function(e){return(0,r.jsx)(m,{user:e},e.id)}),!e.length&&(0,r.jsx)("div",{className:"py-40 flex-center",children:(0,r.jsx)("p",{className:"font-medium",children:"No users found"})}),(0,r.jsxs)("div",{className:"flex items-center justify-between mt-6",children:[(0,r.jsx)(l.z,{variant:"secondary",className:"w-24",children:"Previous"}),(0,r.jsx)("p",{className:"text-xs text-theme-primary font-medium",children:"Page 1 of 1"}),(0,r.jsx)(l.z,{variant:"secondary",className:"w-24",children:"Next"})]})]})}})})}var u=n(385);function o(){return(0,r.jsx)(u.c,{children:(0,r.jsx)(u.c.Manager,{children:(0,r.jsxs)(a.$,{children:[(0,r.jsx)(a.$.Title,{children:(0,r.jsx)("h3",{children:"All Users"})}),(0,r.jsx)(x,{})]})})})}}},function(e){e.O(0,[949,226,385,774,888,179],function(){return e(e.s=9563)}),_N_E=e.O()}]);