"use strict";(self.webpackChunkwatertracker=self.webpackChunkwatertracker||[]).push([[604],{1604:function(e,r,s){s.r(r),s.d(r,{default:function(){return E}});var n=s(9434),i=s(5861),a=s(9439),t=s(4687),o=s.n(t),c=s(1365),d=s(2791),l=s(7287),u=s(6036),h=s(5757),m=s(5705),x=s(6727),p=x.Ry().shape({email:x.Z_().matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,"Invalid email").required("Email is required"),password:x.Z_().matches(/^(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,64}$/,"Password should have letters, numbers, special characters").min(8,"Too short password").max(64,"Too long password").required("Password is required")}),w=s(9085),j=s(9488),f=s(3824),g=s(184),v={email:"",password:""},y=function(e){var r=e.signin,s=(0,d.useState)(!1),t=(0,a.Z)(s,2),x=t[0],y=t[1],Z=(0,f.a)().error,E=(0,n.I0)();(0,d.useEffect)((function(){Z&&(w.Am.error(Z),E((0,j.q$)()))}),[Z,E]);var S=function(){var e=(0,i.Z)(o().mark((function e(s,n){var i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=n.setSubmitting,r(s),i(!1),localStorage.setItem("registrationEmail","");case 4:case"end":return e.stop()}}),e)})));return function(r,s){return e.apply(this,arguments)}}(),b=function(){y(!x)};return(0,g.jsx)(h.im,{children:(0,g.jsx)(c.Z,{children:(0,g.jsx)(u.xu,{children:(0,g.jsxs)(u.EK,{children:[(0,g.jsx)(m.J9,{initialValues:v,validationSchema:p,onSubmit:S,children:function(e){var r=e.isSubmitting,s=e.errors,n=e.touched;return(0,g.jsxs)(u.Gq,{children:[(0,g.jsx)(u.Dx,{children:"Sign In"}),(0,g.jsxs)("div",{children:[(0,g.jsx)(u.__,{children:"Enter your email"}),(0,g.jsx)(m.gN,{as:u.Fy,type:"email",name:"email",placeholder:"Email",hasError:n.email&&s.email,required:!0}),(0,g.jsx)(m.Bc,{name:"email",component:u.mF})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)(u.__,{children:"Enter your password"}),(0,g.jsxs)(u.FU,{children:[(0,g.jsx)(m.gN,{as:u.Fy,type:x?"text":"password",name:"password",placeholder:"Password",hasError:n.password&&s.password,required:!0}),(0,g.jsx)("span",{onClick:b,children:x?(0,g.jsx)("svg",{className:"eye",children:(0,g.jsx)("use",{href:l.Z+"#eye"})}):(0,g.jsx)("svg",{className:"eye",children:(0,g.jsx)("use",{href:l.Z+"#hidden"})})})]}),(0,g.jsx)(m.Bc,{name:"password",component:u.mF})]}),(0,g.jsx)(u.$2,{type:"submit",width:336,disabled:r,children:"Sign In"})]})}}),(0,g.jsx)(u.Zi,{to:"/forgot-password",children:"Forgot password?"}),(0,g.jsx)(u.Zi,{to:"/signup",children:"Sign up"}),(0,g.jsx)(w.Ix,{})]})})})})},Z=s(3076),E=function(){var e=(0,n.I0)();return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(y,{signin:function(r){e((0,Z.w2)(r))}})})}}}]);
//# sourceMappingURL=604.6216cb4e.chunk.js.map