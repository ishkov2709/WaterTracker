"use strict";(self.webpackChunkwatertracker=self.webpackChunkwatertracker||[]).push([[180],{2180:function(n,e,t){t.r(e),t.d(e,{default:function(){return ci}});var i,r,a,o,d,l,s,c,p,x,h,u,m,f,g,y,w,Z,b,j,v,k,P,$,z,C,T,D,M,E,S,F,N,A,L,V,W,q,I,R,_,B,H,O,X,Y,G,U,J,K,Q,nn,en,tn,rn,an,on,dn,ln,sn,cn,pn,xn,hn,un,mn,fn,gn,yn,wn,Zn,bn,jn,vn,kn,Pn,$n,zn,Cn,Tn,Dn,Mn,En=t(9439),Sn=t(8977),Fn=function(n,e,t){return(0,Sn.Z)(new Date(n,e,t),"MMMM")},Nn=t(3855),An=t(6916),Ln=function(n){return n.waterData.dataToday},Vn=function(n){return n.auth.user.dailyNorma},Wn=(0,An.P1)(Ln,Vn,(function(n,e){var t=n.reduce((function(n,e){return n+e.dosage}),0);return Number(t/1e3/e*100).toFixed(0)})),qn=function(n){return n.waterData.isLoading},In=function(n){return n.waterData.targetDay},Rn=function(n){return n.waterData.daysOfMonth},_n=function(n){return n.waterData.isChangeNote},Bn=function(){return{dataToday:(0,Nn.v9)(Ln),totalTodayDailyWater:(0,Nn.v9)(Wn),isLoading:(0,Nn.v9)(qn),targetDay:(0,Nn.v9)(In),daysOfTheMonth:(0,Nn.v9)(Rn),isChangeNote:(0,Nn.v9)(_n)}},Hn=t(4242),On=t(2791),Xn=t(5757),Yn=t(1365),Gn=t(168),Un=t(6444),Jn=t(8466),Kn=Un.ZP.div(i||(i=(0,Gn.Z)(["\nwidth: 164px;\n// height: 76px;\n/* position: absolute; */\npadding: 8px 20px 8px 20px;\nborder-radius: 10px;\n// border: 1px solid ",";\ndisplay: flex;\nflex-direction: column;\ngap: 12px;\nbox-shadow: 0px 4px 8px 4px rgba(158, 187, 255, 0.12);\n"])),Jn.$.secondary.azure),Qn=Un.ZP.p(r||(r=(0,Gn.Z)(["\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 24px;\n  letter-spacing: 0em;\n  text-align: left;\n"]))),ne=Un.ZP.div(a||(a=(0,Gn.Z)(["\n  display: flex;\n  gap: 12px;\n"]))),ee=Un.ZP.p(o||(o=(0,Gn.Z)(["\n  font-size: 24px;\n  font-weight: 700;\n  line-height: 24px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: ",";\n"])),Jn.$.primary.blue),te=Un.ZP.button(d||(d=(0,Gn.Z)(["\n  font-size: 16px;\n  line-height: 20px;\n  letter-spacing: 0em;\n  text-align: left;\n  border: none;\n  background-color: transparent;\n  color: ",";\n"])),Jn.$.secondary.azure),ie=t(8111),re=t(5861),ae=t(4687),oe=t.n(ae),de=t(5705),le=t(6727),se=le.Ry({gender:le.Z_().required("Required"),weight:le.Rx().required("Required").min(0,"Weight must be a positive number"),activityTime:le.Rx().required("Required").min(0,"Activity time must be a positive number"),drankWaterAmount:le.Rx().required("Required")}),ce=se,pe=t(1413),xe=t(4925),he=Un.ZP.label(l||(l=(0,Gn.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n\n  font-size: 18px;\n  line-height: 1.33;\n"]))),ue=(0,Un.ZP)(he)(s||(s=(0,Gn.Z)(["\n  gap: 12px;\n"]))),me=Un.ZP.input(c||(c=(0,Gn.Z)(["\n  width: 100%;\n\n  padding: 12px 10px;\n\n  color: ",";\n  border-radius: 6px;\n  border: 1px solid ",";\n  background-color: ",";\n\n  font-size: 16px;\n  line-height: 1.25;\n\n  &::placeholder {\n    color: ",";\n  }\n"])),Jn.$.primary.blue,Jn.$.secondary.gray,Jn.$.primary.white,Jn.$.secondary.azure),fe=(0,Un.ZP)(me)(p||(p=(0,Gn.Z)(["\n  @media screen and (min-width: 768px) {\n    width: 336px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    width: 384px;\n  }\n"]))),ge=(0,Un.ZP)(me)(x||(x=(0,Gn.Z)(["\n  @media screen and (min-width: 768px) {\n    width: 392px;\n  }\n"]))),ye=Un.ZP.p(h||(h=(0,Gn.Z)(["\n  color: ",";\n  font-size: 14px;\n  line-height: 1.28;\n"])),Jn.$.secondary.tomato),we=t(184),Ze=["inputType","label","error"],be=function(n){var e=n.inputType,t=n.label,i=n.error,r=(0,xe.Z)(n,Ze);switch(e){case"auth":return(0,we.jsxs)(he,{children:[t,(0,we.jsx)(fe,(0,pe.Z)({},r)),i&&(0,we.jsx)(ye,{children:i})]});case"settings":return(0,we.jsxs)(he,{children:[t,(0,we.jsx)(ge,(0,pe.Z)({},r)),i&&(0,we.jsx)(ye,{children:i})]});case"dailyNorma":return(0,we.jsxs)(he,{children:[t,(0,we.jsx)(me,(0,pe.Z)({},r)),i&&(0,we.jsx)(ye,{children:i})]});case"addEdit":return(0,we.jsxs)(ue,{children:[t,(0,we.jsx)(me,(0,pe.Z)({},r)),i&&(0,we.jsx)(ye,{children:i})]});default:return}},je=t(6111),ve=t(3459),ke=t(784),Pe=t(9406),$e=(t(7287),Un.ZP.div(u||(u=(0,Gn.Z)(["\n  width: 256px;\n  margin: 0 auto;\n\n  @media screen and (min-width: 768px) {\n    width: 652px;\n    margin: 0 auto;\n  }\n\n  @media screen and (min-width: 1440px) {\n    width: 544px;\n    margin: 0 auto;\n  }\n"])))),ze=Un.ZP.div(m||(m=(0,Gn.Z)(["\n  margin-bottom: 24px;\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  font-size: 26px;\n  font-weight: 500;\n  line-height: 1.23;\n"]))),Ce=Un.ZP.button(f||(f=(0,Gn.Z)(["\n  background-color: transparent;\n"]))),Te=Un.ZP.div(g||(g=(0,Gn.Z)(["\n  margin-bottom: 12px;\n\n  display: flex;\n  align-items: center;\n  gap: 24px;\n\n  @media screen and (max-width: 767px) {\n    flex-direction: column;\n    align-items: start;\n    gap: 16px;\n  }\n"]))),De=Un.ZP.p(y||(y=(0,Gn.Z)(["\n  font-size: 16px;\n  line-height: 1.25;\n"]))),Me=Un.ZP.span(w||(w=(0,Gn.Z)(["\n  color: ",";\n\n  font-size: 18px;\n  line-height: 1.33;\n"])),Jn.$.primary.blue),Ee=Un.ZP.p(Z||(Z=(0,Gn.Z)(["\n  padding: 10px;\n  margin-bottom: 24px;\n\n  color: #8f8f8f;\n  border-radius: 10px;\n  border: 1px solid ",";\n\n  font-size: 12px;\n  line-height: 1.33;\n"])),Jn.$.secondary.gray),Se=Un.ZP.form(b||(b=(0,Gn.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n"]))),Fe=Un.ZP.p(j||(j=(0,Gn.Z)(["\n  // margin-bottom: 16px;\n\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 1.11;\n"]))),Ne=Un.ZP.div(v||(v=(0,Gn.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 24px;\n\n  label {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n\n    font-size: 16px;\n    line-height: 1.25;\n  }\n\n  input:checked {\n    fill: blue;\n  }\n"]))),Ae=Un.ZP.div(k||(k=(0,Gn.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 6px;\n"]))),Le=Un.ZP.b(P||(P=(0,Gn.Z)(["\n  display: flex;\n  align-items: center;\n  margin-left: 6px;\n  font-size: 18px;\n  line-height: 24px;\n  display: inline-block;\n  color: #407bff;\n  flex-shrink: 0;\n"]))),Ve=Un.ZP.div($||($=(0,Gn.Z)(["\n  margin-top: 8px;\n  display: flex;\n  justify-content: flex-end;\n\n  @media (min-width: 768px) {\n    button {\n      width: 160px;\n      height: 44px;\n    }\n  }\n"]))),We=t(3076),qe=t(7834),Ie=function(){var n=(0,On.useContext)(ie.t),e=(0,Nn.I0)(),t=(0,qe.a)().user,i=(0,On.useState)(0),r=(0,En.Z)(i,2),a=r[0],o=r[1],d=(0,On.useCallback)((function(n){var e="female"===n.gender?.03:.04,t="female"===n.gender?.4:.6,i=n.weight*e+n.activityTime*t;o(i.toFixed(2))}),[]),l=function(n,e){c.handleChange(n);var t=n.target.value,i=parseFloat(t);isNaN(i)&&(i=0),c.setFieldValue(e,i)},s=function(){var t=(0,re.Z)(oe().mark((function t(){return oe().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e((0,We.X7)(parseFloat(a))),c.resetForm(),n();case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),c=(0,de.TA)({initialValues:{gender:t.gender,weight:0,activityTime:0,drankWaterAmount:0},validationSchema:ce,onSubmit:s});(0,On.useEffect)((function(){d(c.values)}),[d,c.values]);return(0,we.jsx)(ke.Z,{onClose:n,children:(0,we.jsx)($e,{children:(0,we.jsxs)(we.Fragment,{children:[(0,we.jsxs)(ze,{children:["My daily norma",(0,we.jsx)(Ce,{onClick:function(){n()},children:(0,we.jsx)(ve.Z,{name:"close",width:12,height:12,fill:"#ffffff00",stroke:"#407bff",className:"icon"})})]}),(0,we.jsxs)(Te,{children:[(0,we.jsxs)(De,{children:["For girl:",(0,we.jsx)(Me,{children:" V=(M*0.03) + (T*0.4)"})]}),(0,we.jsxs)(De,{children:["For man:",(0,we.jsx)(Me,{children:" V=(M*0.04) + (T*0.6)"})]})]}),(0,we.jsx)(Ee,{children:"*V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"}),(0,we.jsxs)(Se,{children:[(0,we.jsx)(Fe,{children:"Calculate your rate:"}),(0,we.jsxs)(Ne,{children:[(0,we.jsxs)("label",{children:[(0,we.jsx)("input",{type:"radio",name:"gender",checked:"female"===c.values.gender,onChange:function(){return c.setFieldValue("gender","female")}}),"For girl"]}),(0,we.jsxs)("label",{children:[(0,we.jsx)("input",{type:"radio",name:"gender",checked:"male"===c.values.gender,onChange:function(){return c.setFieldValue("gender","male")}}),"For man"]})]}),(0,we.jsx)(be,{label:"Enter your weight in kilograms:",inputType:"dailyNorma",value:c.values.weight,onChange:function(n){return l(n,"weight")},onBlur:c.handleBlur,name:"weight",error:c.touched.weight&&c.errors.weight}),(0,we.jsx)(be,{label:"Enter the time of active participation in sports or other\r activities with a high physical load:",inputType:"dailyNorma",value:c.values.activityTime,onChange:function(n){return l(n,"activityTime")},onBlur:c.handleBlur,name:"activityTime",error:c.touched.activityTime&&c.errors.activityTime}),(0,we.jsxs)(Ae,{children:[(0,we.jsx)(we.Fragment,{children:"The required amount of water in liters per day:"}),(0,we.jsx)(Le,{children:isNaN(a)?"Invalid":"".concat(a," L")})]}),(0,we.jsx)(be,{label:"Write down how much water you will drink:",inputType:"dailyNorma",value:c.values.drankWaterAmount,onChange:function(n){return l(n,"drankWaterAmount")},onBlur:c.handleBlur,name:"drankWaterAmount",error:c.touched.drankWaterAmount&&c.errors.drankWaterAmount}),(0,we.jsx)(Ve,{children:(0,we.jsx)(je.Z,{type:"submit",onClick:s,children:"Save"})})]})]})})})},Re=function(){var n=(0,On.useContext)(ie.t),e=(0,Nn.v9)(Vn);return(0,we.jsxs)(Kn,{children:[(0,we.jsx)(Qn,{children:"My daily norma"}),(0,we.jsxs)(ne,{children:[(0,we.jsx)(ee,{children:"".concat(e,"L")}),(0,we.jsx)(te,{onClick:function(){n((0,we.jsx)(Ie,{}))},children:"Edit"})]})]})},_e=Un.ZP.div(z||(z=(0,Gn.Z)(["\nwidth: 166px;\nheight: 26px;\ndisplay: flex;\nalign-items: center;\ngap: 12px;\n\n@media screen and (min-width: 768px) {\n    width: 206px;\n    height: 36px;\n  }\n\n  @media screen and (min-width: 1440px) {\n\n  }\n"]))),Be=Un.ZP.p(C||(C=(0,Gn.Z)(["\nfont-size: 18px;\nline-height: 24px;\nletter-spacing: 0em;\ntext-align: left;\ncolor: ","\n"])),Jn.$.primary.blue),He=Un.ZP.p(T||(T=(0,Gn.Z)(["\nfont-size: 12px;\nline-height: 24px;\nletter-spacing: 0em;\ntext-align: left;\ncolor: ","\n"])),Jn.$.primary.black),Oe=Un.ZP.div(D||(D=(0,Gn.Z)(["\nwidth: 50px;\nheight: 16px;\ndisplay: flex;\nalign-items: center;\ngap: 18px\n"]))),Xe=Un.ZP.button(M||(M=(0,Gn.Z)(["\nwidth: 16px;\nheight: 16px;\nbackground-color: transparent;\nborder: none;\n"]))),Ye=t(5513),Ge=t(230),Ue=t(8560),Je=Un.ZP.div(E||(E=(0,Gn.Z)(["\n  width: 256px;\n  height: 232px;\n  padding: 8px 12px;\n\n  @media screen and (min-width: 767px) {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    width: 544px;\n    height: 144px;\n  }\n"]))),Ke=Un.ZP.div(S||(S=(0,Gn.Z)(["\n  display: block;\n  margin-top: 20px;\n\n  @media screen and (min-width: 767px) {\n    display: flex;\n    justify-content: flex-end;\n    margin-bottom: 4px;\n  }\n"]))),Qe=Un.ZP.h2(F||(F=(0,Gn.Z)(["\n  margin-top: 5px;\n  margin-bottom: 25px;\n  font-family: Roboto;\n  font-size: 26px;\n  font-weight: 500;\n  color: #2f2f2f;\n\n  @media screen and (max-width: 767px) {\n    line-height: 32px;\n  }\n"]))),nt=Un.ZP.span(N||(N=(0,Gn.Z)(["\n  font-family: Roboto;\n  font-size: 18px;\n  font-weight: 500;\n  color: #2f2f2f;\n\n  @media screen and (max-width: 767px) {\n    line-height: 20px;\n  }\n"]))),et=Un.ZP.div(A||(A=(0,Gn.Z)([""]))),tt=Un.ZP.span(L||(L=(0,Gn.Z)(["\n  padding: 0 25px;\n\n  @media screen and (max-width: 767px) {\n    width: 232px;\n    font-size: 16px;\n    font-weight: 500;\n  }\n"]))),it=Un.ZP.span(V||(V=(0,Gn.Z)(["\n  margin-left: 40px;\n"]))),rt=Un.ZP.button(W||(W=(0,Gn.Z)(["\n  position: absolute;\n  background: none;\n\n  @media screen and (max-width: 768px) {\n    margin-left: 210px;\n    margin-top: 9px;\n  }\n\n  @media screen and (min-width: 767px) {\n    margin-left: 508px;\n    margin-top: 5px;\n  }\n"]))),at=Un.ZP.span(q||(q=(0,Gn.Z)(["\n  @media screen and (max-width: 767px) {\n    margin-left: 10px;\n  }\n"]))),ot=function(n){(0,Ue.v9)(Ln);var e=(0,On.useContext)(ie.t),t=(0,Nn.I0)(),i=function(){e()};return(0,we.jsx)(ke.Z,{onClose:e,children:(0,we.jsxs)(Je,{children:[(0,we.jsxs)(et,{children:[(0,we.jsx)(rt,{onClick:i,children:(0,we.jsx)(Ye.Z,{width:"15px",height:"15px",name:"close"})}),(0,we.jsx)(Qe,{children:"Delete entry"}),(0,we.jsxs)(nt,{children:["Are you sure you want to ",(0,we.jsx)(at,{})," delete the entry?"]})]}),(0,we.jsxs)(Ke,{children:[(0,we.jsx)(je.Z,{buttonType:"cancel",style:{boxShadow:"none"},onClick:i,children:(0,we.jsx)(tt,{children:"Cancel"})}),(0,we.jsx)(it,{children:(0,we.jsx)(je.Z,{buttonType:"delete",onClick:function(){t((0,Hn.GY)(n.id)),e()},children:(0,we.jsx)(tt,{children:"Delete"})})})]})]})})},dt=Un.ZP.p(I||(I=(0,Gn.Z)(["\n  font-size: 26px;\n  font-weight: 500;\n  line-height: 32px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: ",";\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"])),Jn.$.primary.black),lt=Un.ZP.p(R||(R=(0,Gn.Z)(["\n  width: 256px;\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 20px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: ",";\n"])),Jn.$.primary.black),st=Un.ZP.p(_||(_=(0,Gn.Z)(["\n  font-size: 16px;\n  line-height: 20px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: ",";\n"])),Jn.$.primary.black),ct=Un.ZP.div(B||(B=(0,Gn.Z)(["\n  position: relative;\n  width: 256px;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n\n  @media screen and (min-width: 768px) {\n    width: 656px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    width: 544px;\n    display: flex;\n    flex-direction: column;\n    gap: 24px;\n  }\n"]))),pt=Un.ZP.div(H||(H=(0,Gn.Z)(["\nwidth: 254px;\n//height: 52px;\ndisplay flex;\npadding: 8px 24px 8px 24px;\nborder-radius: 10px;\ngap: 12px;\nbackground-color: ","\n"])),Jn.$.secondary.gray),xt=Un.ZP.p(O||(O=(0,Gn.Z)(["\n  font-size: 18px;\n  line-height: 24px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: ",";\n"])),Jn.$.primary.blue),ht=Un.ZP.p(X||(X=(0,Gn.Z)(["\n  font-size: 12px;\n  line-height: 24px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: ",";\n"])),Jn.$.primary.black),ut=Un.ZP.div(Y||(Y=(0,Gn.Z)(["\nwidth: 194px;\ndisplay flex;\nflex-direction: column;\ngap: 12px;\n"]))),mt=Un.ZP.div(G||(G=(0,Gn.Z)(["\nwidth: 194px;\ndisplay flex;\njustify-content:center;\nalign-items: center;\npadding: 8px 24px 8px 24px;\nborder-radius: 10px;\ngap: 12px;\n"]))),ft=Un.ZP.div(U||(U=(0,Gn.Z)(["\n  width: 92px;\n  height: 36px;\n  padding: 6px 10px 6px 10px;\n  border-radius: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: ",";\n"])),Jn.$.secondary.gray),gt=Un.ZP.p(J||(J=(0,Gn.Z)(["\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 24px;\n  letter-spacing: 0em;\n  text-align: center;\n  color: ",";\n"])),Jn.$.primary.blue),yt=Un.ZP.button(K||(K=(0,Gn.Z)(["\n  width: 44px;\n  height: 44px;\n  padding: 10px;\n  border-radius: 30px;\n  border: 1px solid ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: transparent;\n"])),Jn.$.primary.blue),wt=Un.ZP.div(Q||(Q=(0,Gn.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: end;\n  align-items: center;\n  gap: 24px;\n\n  //background-color: ","\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n  }\n\n  @media screen and (min-width: 1440px) {\n  }\n"])),Jn.$.secondary.gray),Zt=Un.ZP.button(nn||(nn=(0,Gn.Z)(["\n  // position: absolute;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  // top: 0;\n  // right: 0;\n  border: none;\n  background: none;\n\n  @media screen and (min-width: 768px) {\n  }\n\n  @media screen and (min-width: 1440px) {\n  }\n"]))),bt=t(5689),jt=function(n){var e=n.type,t=void 0===e?"save":e,i=n.id,r=(0,Nn.I0)(),a=(0,Nn.v9)(Ln),o=(0,On.useState)((function(){if(0===a.length)return Number(0);var n=a.length-1;return a[n].dosage})),d=(0,En.Z)(o,2),l=d[0],s=d[1],c=(0,On.useState)((function(){var n=new Date,e=n.getHours().toString(),t=n.getMinutes().toString();return 1===e.length&&(e="0"+e),1===t.length&&(t="0"+t),"".concat(e,":").concat(t)})),p=(0,En.Z)(c,2),x=p[0],h=p[1];(0,On.useEffect)((function(){if("edit"===t){var n=a.find((function(n){return n._id===i}));h(n.time),s(n.dosage)}}),[a,i,t]);var u=(0,On.useContext)(ie.t),m=function(){u()};return(0,we.jsx)(ke.Z,{onClose:u,children:(0,we.jsxs)(ct,{children:["edit"===t?(0,we.jsxs)(dt,{children:["Edit the entered amount of water",(0,we.jsx)(Zt,{onClick:m,children:(0,we.jsx)(Ye.Z,{width:"12",height:"12",name:"close"})})]}):(0,we.jsxs)(dt,{children:["Add of water",(0,we.jsx)(Zt,{onClick:m,children:(0,we.jsx)(Ye.Z,{width:"12",height:"12",name:"close"})})]}),"edit"===t&&(0,we.jsxs)(pt,{children:[(0,we.jsx)(Ye.Z,{name:"glass",stroke:Jn.$.primary.blue}),(0,we.jsx)(xt,{water_attr:"waterValue",id:"waterInfo",children:"".concat(l,"ml")}),(0,we.jsx)(ht,{water_attr:"timeValue",id:"waterTime",children:"".concat(x)})]}),"edit"===t?(0,we.jsx)(lt,{children:"Correct entered data:"}):(0,we.jsx)(lt,{children:"Chose a value:"}),(0,we.jsxs)(ut,{children:[(0,we.jsx)(st,{children:"Amount of water:"}),(0,we.jsxs)(mt,{children:[(0,we.jsx)(yt,{onClick:function(){s(l-50)},children:(0,we.jsx)(Ye.Z,{name:"minus",stroke:Jn.$.primary.blue})}),(0,we.jsx)(ft,{children:(0,we.jsx)(gt,{water_attr:"waterValue",children:"".concat(l,"ml")})}),(0,we.jsx)(yt,{onClick:function(){s(l+50)},children:(0,we.jsx)(Ye.Z,{name:"plus",stroke:Jn.$.primary.blue})})]})]}),(0,we.jsx)(be,{type:"time",onBlur:function(n){document.querySelectorAll('[water_attr="timeValue"]').forEach((function(n){return n.innerHTML=x}))},onChange:function(n){h(n.currentTarget.value)},inputType:"addEdit",label:"Recording time:",value:x}),(0,we.jsx)(be,{type:"number",min:"1",max:"3000",onBlur:function(n){s(Number(n.currentTarget.value)),document.querySelectorAll('[water_attr="waterValue"]').forEach((function(n){return n.innerHTML=l}))},onChange:function(n){s(n.currentTarget.value)},inputType:"addEdit",label:"Enter the value of the water used:",value:l}),(0,we.jsxs)(wt,{children:[(0,we.jsx)(gt,{water_attr:"waterValue",children:"".concat(l,"ml")}),(0,we.jsx)(je.Z,{onClick:function(){var n=new Date,e={dosage:l,time:x,day:n.getDate(),month:bt.v[n.getMonth()],year:n.getFullYear()};r("edit"===t?(0,Hn.l2)({id:i,data:e}):(0,Hn.JU)(e)),u()},width:"160",children:"Save"})]})]})})},vt=function(n){var e=n.waterInfo,t=(n.handleRemove,(0,On.useContext)(ie.t));return(0,we.jsxs)(we.Fragment,{children:[(0,we.jsxs)(_e,{children:[(0,we.jsx)(Ye.Z,{name:"glass",stroke:Jn.$.primary.blue}),(0,we.jsx)(Be,{children:"".concat(e.dosage,"ml")}),(0,we.jsx)(He,{children:"".concat(e.time)})]}),(0,we.jsxs)(Oe,{children:[(0,we.jsx)(Xe,{onClick:function(){return n=e._id,void t((0,we.jsx)(jt,{type:"edit",id:n}));var n},children:(0,we.jsx)(Ye.Z,{name:"note",width:"16px",height:"16px",stroke:Jn.$.primary.blue})}),(0,we.jsx)(Xe,{onClick:function(){return n=e._id,void t((0,we.jsx)(ot,{id:n}));var n},children:(0,we.jsx)(Ye.Z,{name:"remove",width:"16px",height:"16px",stroke:Jn.$.secondary.tomato})})]})]})},kt=Un.ZP.li(en||(en=(0,Gn.Z)(["\n  // width: 254px;\n  // height: 26px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 12px;\n  border-bottom: 1px solid ",";\n\n  @media screen and (min-width: 768px) {\n  }\n\n  @media screen and (min-width: 1440px) {\n    //width: 534px;\n  }\n"])),Jn.$.secondary.gray),Pt=Un.ZP.div(tn||(tn=(0,Gn.Z)(["\n  width: 254px;\n  //height: 260px;\n  display: flex;\n  // gap: 16px;\n  flex-direction: column;\n  justify-content: center;\n  // align-items: center;\n\n  margin-bottom: 24px;\n\n  @media screen and (min-width: 768px) {\n    width: 656px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    width: 534px;\n  }\n"]))),$t=Un.ZP.ul(rn||(rn=(0,Gn.Z)(["\n  width: 254px;\n  height: 212px;\n  display: flex;\n  gap: 12px;\n  flex-direction: column;\n  // justify-content: center;\n  // align-items: center;\n  overflow-y: scroll;\n\n  @media screen and (min-width: 768px) {\n    width: 656px;\n    height: 212px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    width: 534px;\n  }\n\n  &\n/* width */\n::-webkit-scrollbar {\n    width: 4px;\n  }\n  &\n/* Track */\n::-webkit-scrollbar-track {\n    background: ",";\n  }\n  &\n/* Handle */\n::-webkit-scrollbar-thumb {\n    background: ",";\n  }\n  &\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n    background: ",";\n  }\n"])),Jn.$.secondary.gray,Jn.$.primary.blue,Jn.$.primary.blue),zt=Un.ZP.p(an||(an=(0,Gn.Z)(["\n  font-size: 24px;\n  font-weight: 500;\n  line-height: 30px;\n  letter-spacing: 0em;\n  text-align: left;\n  padding-bottom: 16px;\n  color: "," @media screen and (min-width: 768px) {\n    font-size: 26px;\n  }\n\n  @media screen and (min-width: 1440px) {\n  }\n"])),Jn.$.primary.black),Ct=Un.ZP.button(on||(on=(0,Gn.Z)(["\n  display: flex;\n  gap: 8px;\n\n  align-items: center;\n\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 20px;\n  letter-spacing: 0em;\n  text-align: left;\n\n  background-color: transparent;\n  color: ",";\n  border: none;\n\n  margin-top: 12px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 18px;\n\n    line-height: 24px;\n  }\n\n  @media screen and (min-width: 1440px) {\n  }\n"])),Jn.$.primary.blue),Tt=Un.ZP.div(dn||(dn=(0,Gn.Z)(["\n    width: 280px;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    gap: 8px;\n\n    @media screen and (min-width: 768px) {\n    width: 704px;\n    gap: 24px;\n    flex-direction: row;\n    align-items: center;\n  }\n\n  @media screen and (min-width: 1440px) {\n    width: 592px;\n    gap: 32px;\n  }\n"]))),Dt=Un.ZP.input(ln||(ln=(0,Gn.Z)(["\n  &[type='range'] {\n    //  overflow: hidden;\n    -webkit-appearance: none;\n    margin: 5px 0;\n    width: 100%;\n    border-radius: 10px;\n    background-color: ",";\n    background-image: linear-gradient(",",",");\n    background-repeat: no-repeat;\n  }\n\n  &[type='range']:focus {\n    outline: none;\n  }\n\n  &[type='range']::-webkit-slider-runnable-track {\n    width: 100%;\n    height: 8px;\n    animate: 0.2s;\n    border-radius: 10px;\n     -webkit-appearance: none;\n    box-shadow: none;\n    border: none;\n    background: transparent;\n  }\n\n  &[type='range']::-webkit-slider-thumb {\n    height: 14px;\n    width: 14px;\n    border-radius: 50%;\n    background: ",";\n    border: solid 1px ",";\n    // box-shadow: -80px 0 4px 0px rgba(0,0,0, 1);\n    -webkit-appearance: none;\n    margin-top: -4px;\n  }\n\n  &[type=range]:focus::-webkit-slider-runnable-track {\n    //background: #000;\n   }\n"])),Jn.$.secondary.azure,Jn.$.primary.blue,Jn.$.primary.blue,Jn.$.primary.white,Jn.$.primary.blue),Mt=Un.ZP.p(sn||(sn=(0,Gn.Z)(["\n  font-size: 18px;\n  line-height: 24px;\n  letter-spacing: 0em;\n  text-align: left;\n  margin-bottom: 16px;\n  color: ",";\n"])),Jn.$.primary.blue),Et=Un.ZP.div(cn||(cn=(0,Gn.Z)(["\n  position: relative;\n  //width: 391px;\n  height: 102px;   \n  display: flex;\n  flex-direction: column;\n  //gap: 10px;\n\n    @media screen and (min-width: 768px) {\n      width:356px;\n      height: 90px; \n  }\n\n  @media screen and (min-width: 1440px) {\n \n  }\n"]))),St=Un.ZP.div(pn||(pn=(0,Gn.Z)(["\n  height: 32px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n"]))),Ft=Un.ZP.span(xn||(xn=(0,Gn.Z)(["\n  position: absolute;\n  transform: translateX(-50%);\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 20px;\n  text-align: center;\n  margin-bottom: 4px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  color: ",";\n\n  &::before {\n    color: ",";\n    content: '|';\n    justify-content: center;\n    align-items: center;\n  }\n"])),Jn.$.primary.blue,Jn.$.secondary.azure),Nt=Un.ZP.span(hn||(hn=(0,Gn.Z)(["\n    transform: translateX(-50%);\n    font-size: 12px;\n    font-weight: 400;\n    line-height: 16px;\n    letter-spacing: 0em;\n    text-align: center;\n    color: ",";\n\n  &::before {\n  color: ",";\n  display: flex;\n  gap:4px\n  flex-direction: column;\n  content: '|';\n  justify-content: center;\n  align-items: center;\n\n}"])),Jn.$.primary.blue,Jn.$.secondary.azure),At=Un.ZP.span(un||(un=(0,Gn.Z)(["\n  transform: translateX(50%);\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 16px;\n  letter-spacing: 0em;\n  text-align: center;\n  color: ",";\n\n  &::before {\n    color: ",";\n    display: flex;\n    flex-direction: column;\n    content: '|';\n    justify-content: center;\n    align-items: center;\n  }\n"])),Jn.$.primary.blue,Jn.$.secondary.azure),Lt=Un.ZP.button(mn||(mn=(0,Gn.Z)(["\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n  align-items: center;\n  border-radius: 10px;\n  padding 6px 76px 6px 76px;\n  background-color: ",";\n  color: ",";\n  border: none;\n\n     @media screen and (min-width: 768px) {\n    width:336px;\n    padding 10px 104px 10px 104px;\n  }\n\n  @media screen and (min-width: 1440px) {\n  width: 178px;\n  height: 44px;\n  padding: 10px 30px 10px 30px;\n  }\n"])),Jn.$.primary.blue,Jn.$.primary.white),Vt=function(){var n=(0,On.useContext)(ie.t),e=(0,Nn.v9)(Wn);(0,On.useEffect)((function(){var n=document.querySelector("#mark");if(n){var t=Number(100*(e-0)/100);t=t>=100?100:t,n.style.left="calc(".concat(t,"% + (").concat(8-.15*t,"px))")}}),[e]);return(0,we.jsxs)(Tt,{children:[(0,we.jsxs)(Et,{children:[(0,we.jsx)(Mt,{children:"Today"}),(0,we.jsx)(Dt,{type:"range",maxValue:100,minValue:0,value:e,readOnly:!0,style:{backgroundSize:"".concat(e,"%")}}),(0,we.jsxs)(St,{children:[(0,we.jsx)(Nt,{children:"0%"}),(0,we.jsx)(Ft,{id:"mark",children:"".concat(e>100?100:e,"%")}),(0,we.jsx)(At,{children:"100%"})]})]}),(0,we.jsxs)(Lt,{onClick:function(){n((0,we.jsx)(jt,{}))},children:[(0,we.jsx)(Ye.Z,{name:"add",stroke:Jn.$.primary.white})," Add Water"]})]})},Wt=function(){var n=(0,On.useContext)(ie.t),e=(0,Nn.v9)(Ln),t=(0,Nn.v9)(qn);(0,Nn.I0)();return(0,we.jsxs)(Pt,{children:[t&&(0,we.jsx)(Pe.Z,{}),(0,we.jsx)(zt,{children:"Today"}),(0,we.jsx)($t,{children:e.map((function(n){return(0,we.jsx)(kt,{children:(0,we.jsx)(vt,{waterInfo:n})},n._id)}))}),(0,we.jsxs)(Ct,{onClick:function(){n((0,we.jsx)(jt,{}))},children:[" ",(0,we.jsx)(Ye.Z,{name:"plus",stroke:Jn.$.primary.blue})," Add Water"]})]})},qt=Un.ZP.div(fn||(fn=(0,Gn.Z)(["\n  position: relative;\n  width: 264px;\n  height: 474px;\n\n  background-color: ",";\n\n  @media screen and (min-width: 768px) {\n    position: static;\n    width: 646px;\n    height: 318px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    width: 544px;\n  }\n"])),Jn.$.secondary.white),It=Un.ZP.div(gn||(gn=(0,Gn.Z)(["\n  display: flex;\n  justify-content: space-between;\n\n  margin-bottom: 16px;\n"]))),Rt=Un.ZP.b(yn||(yn=(0,Gn.Z)(["\n  font-weight: 500;\n  font-size: 24px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 26px;\n  }\n"]))),_t=Un.ZP.ul(wn||(wn=(0,Gn.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  column-gap: 26px;\n  row-gap: 16px;\n\n  @media screen and (min-width: 768px) {\n    column-gap: 34px;\n    row-gap: 20px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    column-gap: 22px;\n  }\n\n  animation: 250ms ease-in-out smoothAppearance;\n"]))),Bt=Un.ZP.div(Zn||(Zn=(0,Gn.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 12px;\n"]))),Ht=Un.ZP.p(bn||(bn=(0,Gn.Z)(["\n  width: 120px;\n  text-align: center;\n  font-size: 16px;\n\n  color: ",";\n"])),Jn.$.primary.blue),Ot=Un.ZP.button(jn||(jn=(0,Gn.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 24px;\n  height: 24px;\n\n  background: transparent;\n\n  border: none;\n\n  transition: transform 250ms ease-in-out;\n\n  &:first-of-type .icon {\n    transform: rotate(90deg);\n  }\n\n  &:last-of-type .icon {\n    transform: rotate(270deg);\n  }\n\n  &:hover,\n  &:focus {\n    transform: scale(1.3);\n  }\n"]))),Xt=function(){var n=(0,On.useContext)(si),e=n.date,t=n.setDate,i=n.titleMonth,r=n.setTitleMonth,a=(0,Nn.I0)(),o=Bn().isLoading;(0,On.useEffect)((function(){e&&r(Fn(e.year,e.month,e.day))}),[e,r]);return(0,we.jsxs)(Bt,{children:[(0,we.jsx)(Ot,{onClick:function(){return e.month-1<0?(t((function(n){return(0,pe.Z)((0,pe.Z)({},n),{},{year:n.year-1,month:11})})),a((0,Ge.i1)(!0))):(t((function(n){return(0,pe.Z)((0,pe.Z)({},n),{},{month:n.month-1})})),a((0,Ge.i1)(!0)))},disabled:o,children:(0,we.jsx)(Ye.Z,{name:"arrow-down",fill:Jn.$.primary.blue,stroke:Jn.$.primary.blue,width:14,height:14})}),(0,we.jsxs)(Ht,{children:[i,", ",e.year]}),(0,we.jsx)(Ot,{onClick:function(){return e.month+1>11?(t((function(n){return(0,pe.Z)((0,pe.Z)({},n),{},{year:n.year+1,month:0})})),a((0,Ge.i1)(!0))):(t((function(n){return(0,pe.Z)((0,pe.Z)({},n),{},{month:n.month+1})})),a((0,Ge.i1)(!0)))},disabled:o,children:(0,we.jsx)(Ye.Z,{name:"arrow-down",fill:Jn.$.primary.blue,stroke:Jn.$.primary.blue,width:14,height:14})})]})},Yt=Un.ZP.li(vn||(vn=(0,Gn.Z)(["\n  position: static;\n\n  @media screen and (min-width: 768px) {\n    position: relative;\n  }\n"]))),Gt=Un.ZP.button(kn||(kn=(0,Gn.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 32px;\n  height: 32px;\n\n  border-radius: 50%;\n\n  background-color: ",";\n\n  border: ",";\n\n  margin-bottom: 4px;\n\n  @media screen and (min-width: 768px) {\n    width: 34px;\n    height: 34px;\n  }\n"])),Jn.$.primary.white,(function(n){return n.isDone?"none":"1px solid ".concat(Jn.$.secondary.orange)})),Ut=Un.ZP.p(Pn||(Pn=(0,Gn.Z)(["\n  font-size: 14px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n  }\n"]))),Jt=Un.ZP.p($n||($n=(0,Gn.Z)(["\n  color: ",";\n\n  text-align: center;\n\n  font-size: 10px;\n  line-height: 1.25;\n\n  @media screen and (min-width: 768px) {\n    font-size: 13px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    font-size: 12px;\n  }\n"])),Jn.$.secondary.azure),Kt=Un.ZP.div(zn||(zn=(0,Gn.Z)(["\n  position: absolute;\n  top: -160px;\n  left: -7px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n\n  width: 292px;\n  height: 188px;\n\n  padding: 24px 13px;\n\n  background-color: ",";\n\n  border-radius: 10px;\n\n  box-shadow: 0 4px 4px 0 #407bff4d;\n\n  z-index: 10;\n\n  @media screen and (min-width: 768px) {\n    padding: 24px 16px;\n    top: -189px;\n    left: ",";\n  }\n\n  animation: 250ms ease-in-out smoothAppearance;\n"])),Jn.$.primary.white,(function(n){return n.isToLeft?"17px":"-275px"})),Qt=Un.ZP.p(Cn||(Cn=(0,Gn.Z)(["\n  color: ",";\n"])),Jn.$.primary.blue),ni=Un.ZP.p(Tn||(Tn=(0,Gn.Z)(["\n  color: ",";\n"])),Jn.$.primary.black),ei=Un.ZP.span(Dn||(Dn=(0,Gn.Z)(["\n  color: ",";\n\n  font-weight: 500;\n  font-size: 18px;\n"])),Jn.$.primary.blue),ti=Un.ZP.button(Mn||(Mn=(0,Gn.Z)(["\n  position: absolute;\n  background: transparent;\n  border: none;\n\n  top: 21px;\n  right: 13px;\n\n  @media screen and (min-width: 768px) {\n    right: 16px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    display: none;\n  }\n\n  & .icon {\n    transform: rotate(45deg);\n  }\n"]))),ii=[1,2,3,4,11,12,13,14,21,22,23,24,31],ri=function(n){var e=n.targetDay,t=e.day,i=e.month,r=e.servings,a=void 0===r?0:r,o=e.percent,d=(0,Nn.I0)(),l=(0,qe.a)().dailyNorma;return(0,we.jsxs)(Kt,{isToLeft:ii.includes(t),children:[(0,we.jsx)(ti,{onClick:function(){d((0,Ge.ih)())},children:(0,we.jsx)(Ye.Z,{name:"plus",stroke:Jn.$.primary.blue})}),(0,we.jsxs)(Qt,{children:[t,", ",i]}),(0,we.jsxs)(ni,{children:["Daily norma: ",(0,we.jsxs)(ei,{children:[l," L"]})]}),(0,we.jsxs)(ni,{children:["Fulfillment of the daily norm: ",(0,we.jsxs)(ei,{children:[o,"%"]})]}),(0,we.jsxs)(ni,{children:["How many servings of water: ",(0,we.jsx)(ei,{children:a})]})]})},ai=new Date,oi=(0,On.memo)((function(n){var e=n.day,t=(0,On.useContext)(si),i=t.titleMonth,r=t.date,a=(0,On.useState)(0),o=(0,En.Z)(a,2),d=o[0],l=o[1],s=(0,On.useState)(null),c=(0,En.Z)(s,2),p=c[0],x=c[1],h=(0,On.useState)(window.innerWidth>=1440),u=(0,En.Z)(h,2),m=u[0],f=u[1],g=Bn(),y=g.targetDay,w=g.daysOfMonth,Z=g.dataToday,b=(0,qe.a)().dailyNorma,j=(0,Nn.I0)();(0,On.useEffect)((function(){e&&x(ai.getFullYear()===r.year&&ai.getMonth()===r.month&&ai.getDate()===e?{day:e.day,overall:Z.reduce((function(n,e){return e.dosage+n}),0),servings:Z.length}:null===w||void 0===w?void 0:w.find((function(n){return n.day===e})))}),[x,Z,r,e,w]),(0,On.useEffect)((function(){if(w&&p){var n=p.overall>=1e3*b?100:Math.round(p.overall/(1e3*b)*100);l(n)}}),[w,l,p,b]),(0,On.useEffect)((function(){var n=function(){f(window.innerWidth>=1440)};return window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[]);var v=function(){var n=(0,pe.Z)((0,pe.Z)({},p),{},{month:i,day:e,percent:d});j((0,Ge.uL)(n))};return(0,we.jsxs)(Yt,{children:[m?(0,we.jsx)(Gt,{onMouseEnter:v,onMouseLeave:function(){j((0,Ge.ih)())},isDone:100===d,children:(0,we.jsx)(Ut,{children:e})}):(0,we.jsx)(Gt,{onClick:v,isDone:100===d,children:(0,we.jsx)(Ut,{children:e})}),(0,we.jsxs)(Jt,{children:[d,"%"]}),(null===y||void 0===y?void 0:y.day)===e&&(0,we.jsx)(ri,{targetDay:y})]})})),di=function(){var n=function(n){var e=(0,On.useState)(0),t=(0,En.Z)(e,2),i=t[0],r=t[1],a=(0,On.useState)([]),o=(0,En.Z)(a,2),d=o[0],l=o[1];return(0,On.useEffect)((function(){n&&(r(new Date(n.year,n.month+1,0).getDate()),l([])),function(){for(var e=[],t=1;t<=i;t++)e.push({year:n.year,month:n.month,day:t});l(e)}()}),[n,i]),d}((0,On.useContext)(si).date),e=Bn().isLoading;return(0,we.jsxs)(qt,{children:[(0,we.jsxs)(It,{children:[(0,we.jsx)(Rt,{children:"Month"}),(0,we.jsx)(Xt,{})]}),n.length>0&&!e&&(0,we.jsx)(_t,{children:n.map((function(n){var e=n.year,t=n.month,i=n.day;return(0,we.jsx)(oi,{day:i},"".concat(e).concat(t).concat(i))}))})]})},li=new Date,si=(0,On.createContext)(),ci=function(){var n=(0,On.useState)({year:li.getFullYear(),month:li.getMonth(),day:li.getDate()}),e=(0,En.Z)(n,2),t=e[0],i=e[1],r=(0,On.useState)(Fn(t.year,t.month,t.day)),a=(0,En.Z)(r,2),o=a[0],d=a[1],l=Bn(),s=l.isChangeNote,c=l.todayListModalOpen,p=(0,Nn.I0)();return(0,On.useEffect)((function(){p((0,Hn.ts)())}),[p]),(0,On.useEffect)((function(){if(s){var n={year:t.year,month:Fn(t.year,t.month,t.day)};p((0,Hn.G_)(n))}}),[o,t,s,p]),(0,we.jsx)(si.Provider,{value:{date:t,setDate:i,titleMonth:o,setTitleMonth:d},children:(0,we.jsx)(Xn.im,{children:(0,we.jsx)(Yn.Z,{children:(0,we.jsxs)(Xn.xu,{children:[(0,we.jsxs)(Xn.OU,{children:[(0,we.jsx)(Re,{}),(0,we.jsx)(Vt,{})]}),c&&(0,we.jsx)(jt,{}),(0,we.jsxs)(Xn.sB,{children:[(0,we.jsx)(Wt,{}),(0,we.jsx)(di,{})]})]})})})})}}}]);
//# sourceMappingURL=180.db7438eb.chunk.js.map