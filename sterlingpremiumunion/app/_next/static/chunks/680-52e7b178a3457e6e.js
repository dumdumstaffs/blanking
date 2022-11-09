"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[680],{45:function(e,t,i){i.d(t,{I:function(){return l},v:function(){return m}});var r=i(865),n=i(6297),a=i(2322),o=i(7567),s=i(1586),u=i(6277),c=i(2784),d=(0,c.forwardRef)(function(e,t){var i=e.className,o=e.type,s=(0,n.Z)(e,["className","type"]);return(0,a.jsx)("input",(0,r.Z)({ref:t,type:void 0===o?"text":o,className:(0,u.Z)("py-3 rounded-md border-0 focus:ring-0 bg-gray-100 focus:bg-gray-200",i)},s))});d.displayName="Input";var l=(0,o.B)(d,{WithError:function(e){var t=e.children,i=e.error,r=e.className;return(0,a.jsxs)("div",{className:(0,u.Z)("space-y-2 w-full transform transition-all",r),children:[t,(0,a.jsx)(s.u,{show:!!i,className:"transform-gpu",enter:"transition-all duration-500",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-all duration-150",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,a.jsx)("p",{className:"px-2 text-xs text-red-400",children:i})})]})}}),m=(0,c.forwardRef)(function(e,t){var i=e.label,o=e.className,s=e.id,c=(0,n.Z)(e,["label","className","id"]);return(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("label",{htmlFor:s,className:"text-gray-600",children:i}),(0,a.jsx)(d,(0,r.Z)({id:s,ref:t,className:(0,u.Z)("w-full py-4",o)},c))]})});m.displayName="LabelledInput"},8295:function(e,t,i){i.d(t,{Z:function(){return a}});var r=i(9644),n=i.n(r);function a(e){var t,i="Something went wrong";if(!n().isAxiosError(e))return i;var r=null===(t=e.response)||void 0===t?void 0:t.data;return r&&"object"==typeof r&&r.message||i}},9814:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.DocumentStatus=t.AccountLevels=t.AccountTypes=void 0,t.AccountTypes=["savings","checking"],t.AccountLevels=["premier","platinum"],t.DocumentStatus=["idle","reviewing","accepted","rejected"]},5451:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},3030:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},1527:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},1675:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},9706:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},5445:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},1693:function(e,t,i){var r=this&&this.__createBinding||(Object.create?function(e,t,i,r){void 0===r&&(r=i);var n=Object.getOwnPropertyDescriptor(t,i);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,r,n)}:function(e,t,i,r){void 0===r&&(r=i),e[r]=t[i]}),n=this&&this.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||r(t,e,i)};Object.defineProperty(t,"__esModule",{value:!0}),n(i(9814),t),n(i(5451),t),n(i(3030),t),n(i(1527),t),n(i(1675),t),n(i(9706),t),n(i(5445),t),n(i(4995),t),n(i(9239),t),n(i(8497),t),n(i(251),t),n(i(2639),t)},4995:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},9239:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},8497:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},251:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},2639:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},9697:function(e,t,i){var r=this&&this.__createBinding||(Object.create?function(e,t,i,r){void 0===r&&(r=i);var n=Object.getOwnPropertyDescriptor(t,i);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,r,n)}:function(e,t,i,r){void 0===r&&(r=i),e[r]=t[i]}),n=this&&this.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||r(t,e,i)};Object.defineProperty(t,"__esModule",{value:!0}),n(i(1693),t),n(i(6139),t)},7620:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.AccountSchema=void 0;let r=i(6750),n=i(1693);class a{}t.AccountSchema=a,a.update=r.z.object({name:r.z.string().min(1,"name is required"),pin:r.z.string().length(4,"pin must be 4 characters").optional()}),a.adminCreate=r.z.object({name:r.z.string().min(1,"account name is required"),type:r.z.enum(n.AccountTypes,{errorMap:()=>({message:"invalid account type"})}),level:r.z.enum(n.AccountLevels,{errorMap:()=>({message:"invalid account level"})})}),a.adminUpdate=r.z.object({name:r.z.string().min(1,"account name is required"),type:r.z.enum(n.AccountTypes,{errorMap:()=>({message:"invalid account type"})}),level:r.z.enum(n.AccountLevels,{errorMap:()=>({message:"invalid account level"})}),pin:r.z.string().length(4,"pin must be 4 characters").nullable(),isActive:r.z.boolean(),externalAccount:r.z.object({accountNumber:r.z.string().min(1,"account number is required"),routingNumber:r.z.string().min(1,"routing number is required")}).nullable(),alert:r.z.object({title:r.z.string().min(1,"title is required"),desc:r.z.string().min(1,"description is required")}).nullable(),documentRequest:r.z.object({name:r.z.string().min(1,"name is required"),desc:r.z.string().min(1,"description is required"),status:r.z.enum(n.DocumentStatus,{errorMap:()=>({message:"invalid document status"})})}).nullable(),permissions:r.z.object({canTransfer:r.z.boolean(),canTransferExternal:r.z.boolean(),canWithdraw:r.z.boolean(),canSetPin:r.z.boolean()})})},8117:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.AuthSchema=void 0;let r=i(6750),n=i(1693);class a{}t.AuthSchema=a,a.requestOtp=r.z.object({email:r.z.string().email(),password:r.z.string().min(8,"password should be at least 8 characters")}),a.login=r.z.object({email:r.z.string().email(),password:r.z.string().min(8,"password should be at least 8 characters"),otp:r.z.string().min(1,"otp code is required")}),a.register=r.z.object({email:r.z.string().email(),firstName:r.z.string().min(1,"first name is required"),lastName:r.z.string().min(1,"last name is required"),phone:r.z.string().min(1,"phone is required"),city:r.z.string().min(1,"city is required"),state:r.z.string().min(1,"state is required"),nationality:r.z.string().min(1,"country is required"),address:r.z.string().min(1,"address is required"),accountType:r.z.enum(n.AccountTypes,{errorMap:()=>({message:"invalid account type"})}),password:r.z.string().min(8,"password should be at least 8 characters")})},5936:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.BonusSchema=void 0;let r=i(6750),n=i(5170);class a{}t.BonusSchema=a,a.adminCreate=r.z.object({amount:r.z.number().positive()}),a.adminUpdate=r.z.object({amount:r.z.number().positive(),createdAt:n.zDate.optional()})},8096:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.ChargeSchema=void 0;let r=i(6750),n=i(5170);class a{}t.ChargeSchema=a,a.adminCreate=r.z.object({amount:r.z.number().positive()}),a.adminUpdate=r.z.object({amount:r.z.number().positive(),createdAt:n.zDate.optional()})},5244:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.DepositSchema=void 0;let r=i(6750),n=i(5170);class a{}t.DepositSchema=a,a.adminCreate=r.z.object({amount:r.z.number().positive()}),a.adminUpdate=r.z.object({amount:r.z.number().positive(),createdAt:n.zDate.optional()})},7157:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.DocumentSchema=void 0;let r=i(6750);class n{}t.DocumentSchema=n,n.create=r.z.object({name:r.z.string().min(1,"document name is required"),url:r.z.string().url("invalid document url")})},84:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.EmailSchema=void 0;let r=i(6750);class n{}t.EmailSchema=n,n.send=r.z.object({receiver:r.z.string().email(),subject:r.z.string().min(1,"subject is required"),body:r.z.string().min(1,"body is required")})},5031:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.ExternalTransferOutSchema=t.ExternalTransferInSchema=void 0;let r=i(6750),n=i(5170);class a{}t.ExternalTransferInSchema=a,a.adminCreate=r.z.object({amount:r.z.number().positive(),accountName:r.z.string().min(1,"acount name is required"),bankName:r.z.string().min(1,"bank name is required"),narration:r.z.string({required_error:"narration is required"})}),a.adminUpdate=r.z.object({amount:r.z.number().positive(),accountName:r.z.string().min(1,"account name is required"),bankName:r.z.string().min(1,"bank name is required"),narration:r.z.string({required_error:"narration is required"}),createdAt:n.zDate.optional()});class o{}t.ExternalTransferOutSchema=o,o.create=r.z.object({pin:r.z.string().min(1,"transaction pin is required"),amount:r.z.number().positive(),accountNumber:r.z.string().min(1,"account number is required"),routingNumber:r.z.string().min(1,"routing number is required"),bankName:r.z.string().min(1,"bank name is required"),swiftCode:r.z.string().min(1,"swift code is required"),narration:r.z.string({required_error:"narration is required"})}),o.adminCreate=r.z.object({amount:r.z.number().positive(),accountNumber:r.z.string().min(1,"account number is required"),routingNumber:r.z.string().min(1,"routing number is required"),bankName:r.z.string().min(1,"bank name is required"),swiftCode:r.z.string().min(1,"swift code is required"),narration:r.z.string({required_error:"narration is required"})}),o.adminUpdate=r.z.object({amount:r.z.number().positive(),accountNumber:r.z.string().min(1,"account number is required"),routingNumber:r.z.string().min(1,"routing number is required"),bankName:r.z.string().min(1,"bank name is required"),swiftCode:r.z.string().min(1,"swift code is required"),narration:r.z.string({required_error:"narration is required"}),createdAt:n.zDate.optional()})},6139:function(e,t,i){var r=this&&this.__createBinding||(Object.create?function(e,t,i,r){void 0===r&&(r=i);var n=Object.getOwnPropertyDescriptor(t,i);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,r,n)}:function(e,t,i,r){void 0===r&&(r=i),e[r]=t[i]}),n=this&&this.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||r(t,e,i)};Object.defineProperty(t,"__esModule",{value:!0}),n(i(7620),t),n(i(8117),t),n(i(5936),t),n(i(8096),t),n(i(5244),t),n(i(7157),t),n(i(84),t),n(i(5031),t),n(i(5161),t),n(i(2282),t),n(i(731),t),n(i(7041),t),n(i(7997),t)},5161:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.TokenSchema=void 0;let r=i(6750);class n{}t.TokenSchema=n,n.verify=r.z.object({token:r.z.string()})},2282:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},731:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.TransferOutSchema=void 0;let r=i(6750),n=i(5170);class a{}t.TransferOutSchema=a,a.create=r.z.object({pin:r.z.string().min(1,"transaction pin is required"),amount:r.z.number({invalid_type_error:"Invalid amount"}).positive(),accountNumber:r.z.string().min(1,"account number is required"),narration:r.z.string({required_error:"narration is required"})}),a.adminCreate=r.z.object({amount:r.z.number().positive(),accountNumber:r.z.string().min(1,"account number is required"),narration:r.z.string({required_error:"narration is required"})}),a.adminUpdate=r.z.object({amount:r.z.number().positive(),narration:r.z.string({required_error:"narration is required"}),createdAt:n.zDate.optional()})},7041:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.UserSchema=void 0;let r=i(6750);class n{}t.UserSchema=n,n.update=r.z.object({phone:r.z.string().min(1,"phone is required"),avatar:r.z.string().min(1,"invalid url").optional(),address:r.z.string().min(1,"address is required").optional(),city:r.z.string().min(1,"city is required").optional(),state:r.z.string().min(1,"state is required").optional(),nationality:r.z.string().min(1,"nationality is required").optional(),ssn:r.z.string().optional()}),n.adminCreate=r.z.object({email:r.z.string().email(),firstName:r.z.string().min(1,"first name is required"),lastName:r.z.string().min(1,"last name is required"),password:r.z.string().min(8,"password should be at least 8 characters"),isAdmin:r.z.boolean(),isVerified:r.z.boolean()}),n.adminUpdate=r.z.object({firstName:r.z.string().min(1,"first name is required"),lastName:r.z.string().min(1,"last name is required"),phone:r.z.string().min(1,"phone is required"),avatar:r.z.string().min(1,"invalid url").optional(),address:r.z.string().min(1,"address is required").optional(),city:r.z.string().min(1,"city is required").optional(),state:r.z.string().min(1,"state is required").optional(),nationality:r.z.string().min(1,"nationality is required").optional(),ssn:r.z.string().optional(),password:r.z.string().min(8,"password should be at least 8 characters"),isAdmin:r.z.boolean(),isVerified:r.z.boolean()})},5170:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.zDate=void 0;let r=i(6750);t.zDate=r.z.preprocess(e=>{if("string"==typeof e||e instanceof Date)return new Date(e)},r.z.date({invalid_type_error:"invalid date"}))},7997:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.WithdrawalSchema=void 0;let r=i(6750),n=i(5170);class a{}t.WithdrawalSchema=a,a.create=r.z.object({pin:r.z.string().min(1,"transaction pin is required"),amount:r.z.number().positive(),method:r.z.string().min(1,"withdrawal method is required")}),a.adminCreate=r.z.object({amount:r.z.number().positive(),method:r.z.string().min(1,"withdrawal method is required")}),a.adminUpdate=r.z.object({amount:r.z.number().positive(),method:r.z.string().min(1,"withdrawal method is required"),createdAt:n.zDate.optional()})}}]);