"use strict";(self.webpackChunkwatertracker=self.webpackChunkwatertracker||[]).push([[229],{2229:function(n,e,t){t.r(e),t.d(e,{default:function(){return Lt}});var i,r,a,o,d,s,p,l,c,x,h,u,m,f,g,y,w,Z,b,j,v,k,P,$,z,C,D,T,M,E,L,S,I,A,N,F,H,O,R,W,q,Y,_,B,X,G,V,J,U,K,Q,nn,en,tn,rn,an,on,dn,sn,pn,ln,cn,xn,hn,un,mn,fn,gn,yn,wn,Zn=t(9439),bn=t(1365),jn=t(5757),vn=t(168),kn=t(6444),Pn=t(8466),$n=kn.ZP.div(i||(i=(0,vn.Z)(["\n  position: relative;\n  width: 264px;\n  height: 474px;\n\n  background-color: ",";\n\n  @media screen and (min-width: 768px) {\n    position: static;\n    width: 646px;\n    height: 318px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    width: 544px;\n  }\n"])),Pn.$.secondary.white),zn=kn.ZP.div(r||(r=(0,vn.Z)(["\n  display: flex;\n  justify-content: space-between;\n\n  margin-bottom: 16px;\n"]))),Cn=kn.ZP.b(a||(a=(0,vn.Z)(["\n  font-weight: 500;\n  font-size: 24px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 26px;\n  }\n"]))),Dn=kn.ZP.ul(o||(o=(0,vn.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  column-gap: 26px;\n  row-gap: 16px;\n\n  @media screen and (min-width: 768px) {\n    column-gap: 34px;\n    row-gap: 20px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    column-gap: 22px;\n  }\n\n  animation: 250ms ease-in-out smoothAppearance;\n"]))),Tn=t(2791),Mn=t(3855),En=t(6916),Ln=function(n){return n.waterData.dataToday},Sn=function(n){return n.waterData.dailyNorma},In=(0,En.P1)(Ln,Sn,(function(n,e){var t=n.reduce((function(n,e){return n+e.dosage}),0);return Number(t/1e3/e*100).toFixed(0)})),An=function(n){return n.waterData.isLoading},Nn=function(n){return n.waterData.todayListModalOpen},Fn=function(n){return n.waterData.targetDay},Hn=function(n){return n.waterData.daysOfMonth},On=function(n){return n.waterData.isLoading},Rn=function(n){return n.waterData.isChangeNote},Wn=t(1413),qn=kn.ZP.div(d||(d=(0,vn.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 12px;\n"]))),Yn=kn.ZP.p(s||(s=(0,vn.Z)(["\n  width: 120px;\n  text-align: center;\n  font-size: 16px;\n\n  color: ",";\n"])),Pn.$.primary.blue),_n=kn.ZP.button(p||(p=(0,vn.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 24px;\n  height: 24px;\n\n  background: transparent;\n\n  border: none;\n\n  transition: transform 250ms ease-in-out;\n\n  &:first-of-type .icon {\n    transform: rotate(90deg);\n  }\n\n  &:last-of-type .icon {\n    transform: rotate(270deg);\n  }\n\n  &:hover,\n  &:focus {\n    transform: scale(1.3);\n  }\n"]))),Bn=t(4835),Xn=t(230),Gn=t(8977),Vn=function(n,e,t){return(0,Gn.Z)(new Date(n,e,t),"MMMM")},Jn=t(184),Un=function(){var n=(0,Tn.useContext)(Et),e=n.date,t=n.setDate,i=n.titleMonth,r=n.setTitleMonth,a=(0,Mn.I0)(),o=(0,Mn.v9)(On);(0,Tn.useEffect)((function(){e&&r(Vn(e.year,e.month,e.day))}),[e,r]);return(0,Jn.jsxs)(qn,{children:[(0,Jn.jsx)(_n,{onClick:function(){if(e.month-1<0)return t((function(n){return(0,Wn.Z)((0,Wn.Z)({},n),{},{year:n.year-1,month:11})})),void a((0,Xn.i1)(!0));t((function(n){return(0,Wn.Z)((0,Wn.Z)({},n),{},{month:n.month-1})})),a((0,Xn.i1)(!0))},disabled:o,children:(0,Jn.jsx)(Bn.Z,{name:"arrow-down",fill:Pn.$.primary.blue,stroke:Pn.$.primary.blue,width:14,height:14})}),(0,Jn.jsxs)(Yn,{children:[i,", ",e.year]}),(0,Jn.jsx)(_n,{onClick:function(){if(e.month+1>11)return t((function(n){return(0,Wn.Z)((0,Wn.Z)({},n),{},{year:n.year+1,month:0})})),void a((0,Xn.i1)(!0));t((function(n){return(0,Wn.Z)((0,Wn.Z)({},n),{},{month:n.month+1})})),a((0,Xn.i1)(!0))},disabled:o,children:(0,Jn.jsx)(Bn.Z,{name:"arrow-down",fill:Pn.$.primary.blue,stroke:Pn.$.primary.blue,width:14,height:14})})]})},Kn=kn.ZP.li(l||(l=(0,vn.Z)(["\n  position: static;\n\n  @media screen and (min-width: 768px) {\n    position: relative;\n  }\n"]))),Qn=kn.ZP.button(c||(c=(0,vn.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 32px;\n  height: 32px;\n\n  border-radius: 50%;\n\n  background-color: ",";\n\n  border: ",";\n\n  margin-bottom: 4px;\n\n  @media screen and (min-width: 768px) {\n    width: 34px;\n    height: 34px;\n  }\n"])),Pn.$.primary.white,(function(n){return n.isDone?"none":"1px solid ".concat(Pn.$.secondary.orange)})),ne=kn.ZP.p(x||(x=(0,vn.Z)(["\n  font-size: 14px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n  }\n"]))),ee=kn.ZP.p(h||(h=(0,vn.Z)(["\n  color: ",";\n\n  text-align: center;\n\n  font-size: 10px;\n  line-height: 1.25;\n\n  @media screen and (min-width: 768px) {\n    font-size: 13px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    font-size: 12px;\n  }\n"])),Pn.$.secondary.azure),te=kn.ZP.div(u||(u=(0,vn.Z)(["\n  position: absolute;\n  top: -160px;\n  left: -7px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n\n  width: 292px;\n  height: 188px;\n\n  padding: 24px 13px;\n\n  background-color: ",";\n\n  border-radius: 10px;\n\n  box-shadow: 0 4px 4px 0 #407bff4d;\n\n  z-index: 10;\n\n  @media screen and (min-width: 768px) {\n    padding: 24px 16px;\n    top: -189px;\n    left: ",";\n  }\n\n  animation: 250ms ease-in-out smoothAppearance;\n"])),Pn.$.primary.white,(function(n){return n.isToLeft?"17px":"-275px"})),ie=kn.ZP.p(m||(m=(0,vn.Z)(["\n  color: ",";\n"])),Pn.$.primary.blue),re=kn.ZP.p(f||(f=(0,vn.Z)(["\n  color: ",";\n"])),Pn.$.primary.black),ae=kn.ZP.span(g||(g=(0,vn.Z)(["\n  color: ",";\n\n  font-weight: 500;\n  font-size: 18px;\n"])),Pn.$.primary.blue),oe=kn.ZP.button(y||(y=(0,vn.Z)(["\n  position: absolute;\n  background: transparent;\n  border: none;\n\n  top: 21px;\n  right: 13px;\n\n  @media screen and (min-width: 768px) {\n    right: 16px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    display: none;\n  }\n\n  & .icon {\n    transform: rotate(45deg);\n  }\n"]))),de=[1,2,3,4,11,12,13,14,21,22,23,24,31],se=function(n){var e=n.targetDay,t=e.day,i=e.month,r=e.servings,a=void 0===r?0:r,o=e.percent,d=(0,Mn.I0)();return(0,Jn.jsxs)(te,{isToLeft:de.includes(t),children:[(0,Jn.jsx)(oe,{onClick:function(){d((0,Xn.ih)())},children:(0,Jn.jsx)(Bn.Z,{name:"plus",stroke:Pn.$.primary.blue})}),(0,Jn.jsxs)(ie,{children:[t,", ",i]}),(0,Jn.jsxs)(re,{children:["Daily norma: ",(0,Jn.jsxs)(ae,{children:[1.5," L"]})]}),(0,Jn.jsxs)(re,{children:["Fulfillment of the daily norm: ",(0,Jn.jsxs)(ae,{children:[o,"%"]})]}),(0,Jn.jsxs)(re,{children:["How many servings of water: ",(0,Jn.jsx)(ae,{children:a})]})]})},pe=new Date,le=(0,Tn.memo)((function(n){var e=n.day,t=(0,Tn.useContext)(Et),i=t.titleMonth,r=t.date,a=(0,Tn.useState)(0),o=(0,Zn.Z)(a,2),d=o[0],s=o[1],p=(0,Tn.useState)(null),l=(0,Zn.Z)(p,2),c=l[0],x=l[1],h=(0,Tn.useState)(window.innerWidth>=1440),u=(0,Zn.Z)(h,2),m=u[0],f=u[1],g=(0,Mn.I0)(),y=(0,Mn.v9)(Fn),w=(0,Mn.v9)(Hn),Z=(0,Mn.v9)(Ln);(0,Tn.useEffect)((function(){e&&x(pe.getFullYear()===r.year&&pe.getMonth()===r.month&&pe.getDate()===e?{day:e.day,overall:Z.reduce((function(n,e){return e.dosage+n}),0),servings:Z.length}:w.find((function(n){return n.day===e})))}),[x,Z,r,e,w]),(0,Tn.useEffect)((function(){if(w&&c){var n=c.overall>=1500?100:Math.round(c.overall/1500*100);s(n)}}),[w,s,c]),(0,Tn.useEffect)((function(){var n=function(){f(window.innerWidth>=1440)};return window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[]);var b=function(){var n=(0,Wn.Z)((0,Wn.Z)({},c),{},{month:i,day:e,percent:d});g((0,Xn.uL)(n))};return(0,Jn.jsxs)(Kn,{children:[m?(0,Jn.jsx)(Qn,{onMouseEnter:b,onMouseLeave:function(){g((0,Xn.ih)())},isDone:100===d,children:(0,Jn.jsx)(ne,{children:e})}):(0,Jn.jsx)(Qn,{onClick:b,isDone:100===d,children:(0,Jn.jsx)(ne,{children:e})}),(0,Jn.jsxs)(ee,{children:[d,"%"]}),(null===y||void 0===y?void 0:y.day)===e&&(0,Jn.jsx)(se,{targetDay:y})]})})),ce=function(){var n=function(n){var e=(0,Tn.useState)(0),t=(0,Zn.Z)(e,2),i=t[0],r=t[1],a=(0,Tn.useState)([]),o=(0,Zn.Z)(a,2),d=o[0],s=o[1];return(0,Tn.useEffect)((function(){n&&(r(new Date(n.year,n.month+1,0).getDate()),s([])),function(){for(var e=[],t=1;t<=i;t++)e.push({year:n.year,month:n.month,day:t});s(e)}()}),[n,i]),d}((0,Tn.useContext)(Et).date),e=(0,Mn.v9)(On);return(0,Jn.jsxs)($n,{children:[(0,Jn.jsxs)(zn,{children:[(0,Jn.jsx)(Cn,{children:"Month"}),(0,Jn.jsx)(Un,{})]}),n.length>0&&!e&&(0,Jn.jsx)(Dn,{children:n.map((function(n){var e=n.year,t=n.month,i=n.day;return(0,Jn.jsx)(le,{day:i},"".concat(e).concat(t).concat(i))}))})]})},xe=kn.ZP.div(w||(w=(0,vn.Z)(["\n    width: 280px;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    gap: 8px;\n\n    @media screen and (min-width: 768px) {\n    width: 704px;\n    gap: 24px;\n    flex-direction: row;\n    align-items: center;\n  }\n\n  @media screen and (min-width: 1440px) {\n    width: 592px;\n    gap: 32px;\n  }\n"]))),he=kn.ZP.input(Z||(Z=(0,vn.Z)(["\n  &[type='range'] {\n    //  overflow: hidden;\n    -webkit-appearance: none;\n    margin: 5px 0;\n    width: 100%;\n  }\n\n  &[type='range']:focus {\n    outline: none;\n  }\n\n  &[type='range']::-webkit-slider-runnable-track {\n    width: 100%;\n    height: 8px;\n    cursor: pointer;\n    animate: 0.2s;\n    background: ",";\n    border-radius: 10px;\n  }\n\n  &[type='range']::-webkit-slider-thumb {\n    height: 14px;\n    width: 14px;\n    border-radius: 50%;\n    background: ",";\n    border: solid 1px ",";\n    // box-shadow: -80px 0 4px 0px rgba(0,0,0, 1);\n    cursor: pointer;\n    -webkit-appearance: none;\n    margin-top: -4px;\n  }\n\n  // &[type=range]:focus::-webkit-slider-runnable-track {\n  //   background: #000;\n  // }\n"])),Pn.$.secondary.azure,Pn.$.primary.white,Pn.$.primary.blue),ue=kn.ZP.p(b||(b=(0,vn.Z)(["\n  font-size: 18px;\n  line-height: 24px;\n  letter-spacing: 0em;\n  text-align: left;\n  margin-bottom: 16px;\n  color: ",";\n"])),Pn.$.primary.blue),me=kn.ZP.div(j||(j=(0,vn.Z)(["\n  position: relative;\n  //width: 391px;\n  height: 102px;   \n  display: flex;\n  flex-direction: column;\n  //gap: 10px;\n\n    @media screen and (min-width: 768px) {\n      width:356px;\n      height: 90px; \n  }\n\n  @media screen and (min-width: 1440px) {\n \n  }\n"]))),fe=kn.ZP.div(v||(v=(0,vn.Z)(["\n  height: 32px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n"]))),ge=kn.ZP.span(k||(k=(0,vn.Z)(["\n  position: absolute;\n  transform: translateX(-50%);\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 20px;\n  text-align: center;\n  margin-bottom: 4px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  color: ",";\n\n  &::before {\n    color: ",";\n    content: '|';\n    justify-content: center;\n    align-items: center;\n  }\n"])),Pn.$.primary.blue,Pn.$.secondary.azure),ye=kn.ZP.span(P||(P=(0,vn.Z)(["\n    transform: translateX(-50%);\n    font-size: 12px;\n    font-weight: 400;\n    line-height: 16px;\n    letter-spacing: 0em;\n    text-align: center;\n    color: ",";\n\n  &::before {\n  color: ",";\n  display: flex;\n  gap:4px\n  flex-direction: column;\n  content: '|';\n  justify-content: center;\n  align-items: center;\n\n}"])),Pn.$.primary.blue,Pn.$.secondary.azure),we=kn.ZP.span($||($=(0,vn.Z)(["\n  transform: translateX(50%);\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 16px;\n  letter-spacing: 0em;\n  text-align: center;\n  color: ",";\n\n  &::before {\n    color: ",";\n    display: flex;\n    flex-direction: column;\n    content: '|';\n    justify-content: center;\n    align-items: center;\n  }\n"])),Pn.$.primary.blue,Pn.$.secondary.azure),Ze=kn.ZP.button(z||(z=(0,vn.Z)(["\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n  align-items: center;\n  border-radius: 10px;\n  padding 6px 76px 6px 76px;\n  background-color: ",";\n  color: ",";\n  border: none;\n\n     @media screen and (min-width: 768px) {\n    width:336px;\n    padding 10px 104px 10px 104px;\n  }\n\n  @media screen and (min-width: 1440px) {\n  width: 178px;\n  height: 44px;\n  padding: 10px 30px 10px 30px;\n  }\n"])),Pn.$.primary.blue,Pn.$.primary.white),be=function(){var n=(0,Mn.v9)(In),e=(0,Mn.I0)();return(0,Tn.useEffect)((function(){var e=document.querySelector("#mark");if(e){var t=Number(100*(n-0)/100);t=t>=100?100:t,e.style.left="calc(".concat(t,"% + (").concat(8-.15*t,"px))")}}),[n]),(0,Jn.jsxs)(xe,{children:[(0,Jn.jsxs)(me,{children:[(0,Jn.jsx)(ue,{children:"Today"}),(0,Jn.jsx)(he,{type:"range",maxValue:100,minValue:0,value:n,readOnly:!0}),(0,Jn.jsxs)(fe,{children:[(0,Jn.jsx)(ye,{children:"0%"}),(0,Jn.jsx)(ge,{id:"mark",children:"".concat(n>100?100:n,"%")}),(0,Jn.jsx)(we,{children:"100%"})]})]}),(0,Jn.jsxs)(Ze,{onClick:function(){e((0,Xn.O0)())},children:[(0,Jn.jsx)(Bn.Z,{name:"add",stroke:Pn.$.primary.white})," Add Water"]})]})},je=kn.ZP.div(C||(C=(0,vn.Z)(["\n// width: 164px;\n// height: 76px;\nposition: absolute;\npadding: 8px 20px 8px 20px;\nborder-radius: 10px;\n// border: 1px solid ",";\ndisplay: flex;\nflex-direction: column;\ngap: 12px;\nbox-shadow: 0px 4px 8px 4px rgba(158, 187, 255, 0.12);\n"])),Pn.$.secondary.azure),ve=kn.ZP.p(D||(D=(0,vn.Z)(["\nfont-size: 18px;\nfont-weight: 500;\nline-height: 24px;\nletter-spacing: 0em;\ntext-align: left;\n"]))),ke=kn.ZP.div(T||(T=(0,vn.Z)(["\ndisplay: flex;\ngap: 12px;\n"]))),Pe=kn.ZP.p(M||(M=(0,vn.Z)(["\nfont-size: 24px;\nfont-weight: 700;\nline-height: 24px;\nletter-spacing: 0em;\ntext-align: left;\ncolor: ","\n"])),Pn.$.primary.blue),$e=kn.ZP.button(E||(E=(0,vn.Z)(["\nfont-size: 16px;\nline-height: 20px;\nletter-spacing: 0em;\ntext-align: left;\nborder: none;\nbackground-color: transparent;\ncolor: ","\n"])),Pn.$.secondary.azure),ze=function(){var n=(0,Mn.v9)(Sn);return(0,Jn.jsxs)(je,{children:[(0,Jn.jsx)(ve,{children:"My daily norma"}),(0,Jn.jsxs)(ke,{children:[(0,Jn.jsx)(Pe,{children:"".concat(n,"L")}),(0,Jn.jsx)($e,{children:"Edit"})]})]})},Ce=kn.ZP.div(L||(L=(0,vn.Z)(["\nwidth: 166px;\nheight: 26px;\ndisplay: flex;\nalign-items: center;\ngap: 12px;\n\n@media screen and (min-width: 768px) {\n    width: 206px;\n    height: 36px;\n  }\n\n  @media screen and (min-width: 1440px) {\n\n  }\n"]))),De=kn.ZP.p(S||(S=(0,vn.Z)(["\nfont-size: 18px;\nline-height: 24px;\nletter-spacing: 0em;\ntext-align: left;\ncolor: ","\n"])),Pn.$.primary.blue),Te=kn.ZP.p(I||(I=(0,vn.Z)(["\nfont-size: 12px;\nline-height: 24px;\nletter-spacing: 0em;\ntext-align: left;\ncolor: ","\n"])),Pn.$.primary.black),Me=kn.ZP.div(A||(A=(0,vn.Z)(["\nwidth: 50px;\nheight: 16px;\ndisplay: flex;\nalign-items: center;\ngap: 18px\n"]))),Ee=kn.ZP.button(N||(N=(0,vn.Z)(["\nwidth: 16px;\nheight: 16px;\nbackground-color: transparent;\nborder: none;\n"]))),Le=t(8111),Se=t(4164),Ie=kn.ZP.div(F||(F=(0,vn.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1200;\n\n  width: 100%;\n  height: 100%;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  background: rgba(0, 0, 0, 0.8);\n"]))),Ae=kn.ZP.div((function(n){return{borderRadius:"10px",background:"#fff",padding:"settings"===n.type?"32px 12px":"24px 12px"}})),Ne=(0,kn.ZP)(Ae)(H||(H=(0,vn.Z)(["\n  @media (min-width: 768px) {\n    padding: 32px 24px;\n  }\n"]))),Fe=document.querySelector("#modal-root"),He=function(n){var e=n.type,t=void 0===e?"default":e,i=n.onClose,r=n.children;(0,Tn.useEffect)((function(){return window.addEventListener("keydown",a),function(){window.removeEventListener("keydown",a)}}));var a=function(n){"Escape"!==n.code&&n.currentTarget!==n.target||i()};return(0,Se.createPortal)((0,Jn.jsx)(Ie,{onClick:a,children:(0,Jn.jsx)(Ne,{type:t,children:r})}),Fe)},Oe=t(6111),Re=t(4242),We=t(8560),qe=kn.ZP.div(O||(O=(0,vn.Z)(["\n  width: 256px;\n  height: 232px;\n  padding: 8px 12px;\n\n  @media screen and (min-width: 767px) {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    width: 544px;\n    height: 144px;\n  }\n"]))),Ye=kn.ZP.div(R||(R=(0,vn.Z)(["\n  display: block;\n  margin-top: 20px;\n\n  @media screen and (min-width: 767px) {\n    display: flex;\n    justify-content: flex-end;\n    margin-bottom: 4px;\n  }\n"]))),_e=kn.ZP.h2(W||(W=(0,vn.Z)(["\n  margin-top: 5px;\n  margin-bottom: 25px;\n  font-family: Roboto;\n  font-size: 26px;\n  font-weight: 500;\n  color: #2f2f2f;\n\n  @media screen and (max-width: 767px) {\n    line-height: 32px;\n  }\n"]))),Be=kn.ZP.span(q||(q=(0,vn.Z)(["\n  font-family: Roboto;\n  font-size: 18px;\n  font-weight: 500;\n  color: #2f2f2f;\n\n  @media screen and (max-width: 767px) {\n    line-height: 20px;\n  }\n"]))),Xe=kn.ZP.div(Y||(Y=(0,vn.Z)([""]))),Ge=kn.ZP.span(_||(_=(0,vn.Z)(["\n  padding: 0 25px;\n\n  @media screen and (max-width: 767px) {\n    width: 232px;\n    font-size: 16px;\n    font-weight: 500;\n  }\n"]))),Ve=kn.ZP.span(B||(B=(0,vn.Z)(["\n  margin-left: 40px;\n"]))),Je=kn.ZP.button(X||(X=(0,vn.Z)(["\n  position: absolute;\n  background: none;\n\n  @media screen and (max-width: 768px) {\n    margin-left: 210px;\n    margin-top: 9px;\n  }\n\n  @media screen and (min-width: 767px) {\n    margin-left: 508px;\n    margin-top: 5px;\n  }\n"]))),Ue=kn.ZP.span(G||(G=(0,vn.Z)(["\n  @media screen and (max-width: 767px) {\n    margin-left: 10px;\n  }\n"]))),Ke=function(n){(0,We.v9)(Ln);var e=(0,Tn.useContext)(Le.t),t=(0,Mn.I0)(),i=function(){e()};return(0,Jn.jsx)(He,{onClose:e,children:(0,Jn.jsxs)(qe,{children:[(0,Jn.jsxs)(Xe,{children:[(0,Jn.jsx)(Je,{onClick:i,children:(0,Jn.jsx)(Bn.Z,{width:"15px",height:"15px",name:"close"})}),(0,Jn.jsx)(_e,{children:"Delete entry"}),(0,Jn.jsxs)(Be,{children:["Are you sure you want to ",(0,Jn.jsx)(Ue,{})," delete the entry?"]})]}),(0,Jn.jsxs)(Ye,{children:[(0,Jn.jsx)(Oe.Z,{buttonType:"cancel",style:{boxShadow:"none"},onClick:i,children:(0,Jn.jsx)(Ge,{children:"Cancel"})}),(0,Jn.jsx)(Ve,{children:(0,Jn.jsx)(Oe.Z,{buttonType:"delete",onClick:function(){t((0,Re.GY)(n.id)),e()},children:(0,Jn.jsx)(Ge,{children:"Delete"})})})]})]})})},Qe=function(n){var e=n.waterInfo,t=(n.handleRemove,(0,Tn.useContext)(Le.t));var i=(0,Mn.I0)();return(0,Jn.jsxs)(Jn.Fragment,{children:[(0,Jn.jsxs)(Ce,{children:[(0,Jn.jsx)(Bn.Z,{name:"glass",stroke:Pn.$.primary.blue}),(0,Jn.jsx)(De,{children:"".concat(e.dosage,"ml")}),(0,Jn.jsx)(Te,{children:"".concat(function(n){var e=n.split(":"),t=e[0]>=12?"PM":"AM";return e[0]=e[0]%12,e[0]=e[0]?e[0]:12,e[0]+":"+e[1]+" "+t}(e.time))})]}),(0,Jn.jsxs)(Me,{children:[(0,Jn.jsx)(Ee,{onClick:function(){return e._id,void i((0,Xn.O0)())},children:(0,Jn.jsx)(Bn.Z,{name:"note",width:"16px",height:"16px",stroke:Pn.$.primary.blue})}),(0,Jn.jsx)(Ee,{onClick:function(){return n=e._id,void t((0,Jn.jsx)(Ke,{id:n}));var n},children:(0,Jn.jsx)(Bn.Z,{name:"remove",width:"16px",height:"16px",stroke:Pn.$.secondary.tomato})})]})]})},nt=kn.ZP.li(V||(V=(0,vn.Z)(["\n// width: 254px;\n// height: 26px;\ndisplay: flex;\njustify-content: space-between;\nalign-items: center;\npadding-bottom: 12px;\nborder-bottom: 1px solid ",";\n\n@media screen and (min-width: 768px) {\n \n  }\n\n  @media screen and (min-width: 1440px) {\n    //width: 534px;\n  }\n"])),Pn.$.secondary.gray),et=kn.ZP.div(J||(J=(0,vn.Z)(["\nwidth: 254px;\n//height: 260px;\ndisplay: flex;\n// gap: 16px;\nflex-direction: column;\njustify-content: center;\n// align-items: center;\n\n@media screen and (min-width: 768px) {\n    width: 656px;\n    \n  }\n\n  @media screen and (min-width: 1440px) {\n    width: 534px;\n  }\n"]))),tt=kn.ZP.ul(U||(U=(0,vn.Z)(["\nwidth: 254px;\nheight: 212px;\ndisplay: flex;\ngap: 12px;\nflex-direction: column;\n// justify-content: center;\n// align-items: center;\noverflow-y: scroll;\n\n@media screen and (min-width: 768px) {\n    width: 656px;\n    height: 212px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    width: 534px;\n  }\n\n&\n/* width */\n::-webkit-scrollbar {\n  width: 4px;\n}\n&\n/* Track */\n::-webkit-scrollbar-track {\n  background: ",";\n}\n&\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: ",";\n}\n&\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: ",";\n}\n"])),Pn.$.secondary.gray,Pn.$.primary.blue,Pn.$.primary.blue),it=kn.ZP.p(K||(K=(0,vn.Z)(["\nfont-size: 24px;\nfont-weight: 500;\nline-height: 30px;\nletter-spacing: 0em;\ntext-align: left;\npadding-bottom:16px;\ncolor: ","\n\n@media screen and (min-width: 768px) {\nfont-size: 26px;\n  }\n\n  @media screen and (min-width: 1440px) {\n\n  }\n"])),Pn.$.primary.black),rt=kn.ZP.button(Q||(Q=(0,vn.Z)(["\ndisplay: flex;\ngap: 8px;\n\nalign-items: center;\n\nfont-size: 16px;\nfont-weight: 500;\nline-height: 20px;\nletter-spacing: 0em;\ntext-align: left;\n\nbackground-color: transparent;\ncolor: ",";\nborder: none;\n\n@media screen and (min-width: 768px) {\nfont-size: 18px;\n\nline-height: 24px;\n  }\n\n  @media screen and (min-width: 1440px) {\n\n  }\n  "])),Pn.$.primary.blue),at=t(9406),ot=kn.ZP.p(nn||(nn=(0,vn.Z)(["\n  font-size: 26px;\n  font-weight: 500;\n  line-height: 32px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: ",";\n"])),Pn.$.primary.black),dt=kn.ZP.p(en||(en=(0,vn.Z)(["\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 20px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: ",";\n"])),Pn.$.primary.black),st=kn.ZP.p(tn||(tn=(0,vn.Z)(["\n  font-size: 16px;\n  line-height: 20px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: ",";\n"])),Pn.$.primary.black),pt=kn.ZP.div(rn||(rn=(0,vn.Z)(["\n  width: 544px;\n  //height: 392px;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n"]))),lt=kn.ZP.div(an||(an=(0,vn.Z)(["\nwidth: 254px;\n//height: 52px;\ndisplay flex;\npadding: 8px 24px 8px 24px;\nborder-radius: 10px;\ngap: 12px;\nbackground-color: ","\n"])),Pn.$.secondary.gray),ct=kn.ZP.p(on||(on=(0,vn.Z)(["\n  font-size: 18px;\n  line-height: 24px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: ",";\n"])),Pn.$.primary.blue),xt=kn.ZP.p(dn||(dn=(0,vn.Z)(["\n  font-size: 12px;\n  line-height: 24px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: ",";\n"])),Pn.$.primary.black),ht=kn.ZP.div(sn||(sn=(0,vn.Z)(["\nwidth: 194px;\n//height:44\ndisplay flex;\nflex-direction: column;\ngap: 12px;\n"]))),ut=kn.ZP.div(pn||(pn=(0,vn.Z)(["\nwidth: 194px;\n//height:44\ndisplay flex;\njustify-content:center;\nalign-items: center;\npadding: 8px 24px 8px 24px;\nborder-radius: 10px;\ngap: 12px;\n//background-color: ","\n"])),Pn.$.secondary.gray),mt=kn.ZP.div(ln||(ln=(0,vn.Z)(["\n  width: 92px;\n  height: 36px;\n  padding: 6px 10px 6px 10px;\n  border-radius: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: ",";\n"])),Pn.$.secondary.gray),ft=kn.ZP.p(cn||(cn=(0,vn.Z)(["\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 24px;\n  letter-spacing: 0em;\n  text-align: center;\n  color: ",";\n"])),Pn.$.primary.blue),gt=kn.ZP.button(xn||(xn=(0,vn.Z)(["\n  width: 44px;\n  height: 44px;\n  padding: 10px;\n  border-radius: 30px;\n  border: 1px solid ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  //cursor: hand;\n  background-color: transparent;\n"])),Pn.$.primary.blue),yt=kn.ZP.div(hn||(hn=(0,vn.Z)(["\n  //  width: 92px;\n  //  height: 36px;\n  // padding: 6px 10px 6px 10px;\n  // border-radius: 40px;\n  display: flex;\n  justify-content: end;\n  align-items: center;\n  gap: 24px;\n  //background-color: ","\n"])),Pn.$.secondary.gray),wt=t(4925),Zt=kn.ZP.label(un||(un=(0,vn.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n\n  font-size: 18px;\n  line-height: 1.33;\n"]))),bt=(0,kn.ZP)(Zt)(mn||(mn=(0,vn.Z)(["\n  gap: 12px;\n"]))),jt=kn.ZP.input(fn||(fn=(0,vn.Z)(["\n  width: 100%;\n\n  padding: 12px 10px;\n\n  color: ",";\n  border-radius: 6px;\n  border: 1px solid ",";\n  background-color: ",";\n\n  font-size: 16px;\n  line-height: 1.25;\n\n  &::placeholder {\n    color: ",";\n  }\n"])),Pn.$.primary.blue,Pn.$.secondary.gray,Pn.$.primary.white,Pn.$.secondary.azure),vt=(0,kn.ZP)(jt)(gn||(gn=(0,vn.Z)(["\n  @media screen and (min-width: 768px) {\n    width: 336px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    width: 384px;\n  }\n"]))),kt=(0,kn.ZP)(jt)(yn||(yn=(0,vn.Z)(["\n  @media screen and (min-width: 768px) {\n    width: 392px;\n  }\n"]))),Pt=kn.ZP.p(wn||(wn=(0,vn.Z)(["\n  color: ",";\n  font-size: 14px;\n  line-height: 1.28;\n"])),Pn.$.secondary.tomato),$t=["inputType","label","error"],zt=function(n){var e=n.inputType,t=n.label,i=n.error,r=(0,wt.Z)(n,$t);switch(e){case"auth":return(0,Jn.jsxs)(Zt,{children:[t,(0,Jn.jsx)(vt,(0,Wn.Z)({},r)),i&&(0,Jn.jsx)(Pt,{children:i})]});case"settings":return(0,Jn.jsxs)(Zt,{children:[t,(0,Jn.jsx)(kt,(0,Wn.Z)({},r)),i&&(0,Jn.jsx)(Pt,{children:i})]});case"dailyNorma":return(0,Jn.jsxs)(Zt,{children:[t,(0,Jn.jsx)(jt,(0,Wn.Z)({},r)),i&&(0,Jn.jsx)(Pt,{children:i})]});case"addEdit":return(0,Jn.jsxs)(bt,{children:[t,(0,Jn.jsx)(jt,(0,Wn.Z)({},r)),i&&(0,Jn.jsx)(Pt,{children:i})]})}},Ct=t(5689),Dt=function(){var n=(0,Tn.useContext)(Le.t),e=(0,Tn.useState)(250),t=(0,Zn.Z)(e,2),i=t[0],r=t[1],a=(0,Tn.useState)("00:00"),o=(0,Zn.Z)(a,2),d=o[0],s=o[1],p=(0,Mn.I0)();return(0,Jn.jsxs)(He,{onClose:n,children:[(0,Jn.jsx)(ot,{children:"Edit the entered amount of water"}),(0,Jn.jsxs)(pt,{children:[(0,Jn.jsxs)(lt,{children:[(0,Jn.jsx)(Bn.Z,{name:"glass",stroke:Pn.$.primary.blue}),(0,Jn.jsx)(ct,{id:"waterInfo",children:"".concat(i,"ml")}),(0,Jn.jsx)(xt,{id:"waterTime",children:"00:00"})]}),(0,Jn.jsx)(dt,{children:"Correct entered data:"}),(0,Jn.jsxs)(ht,{children:[(0,Jn.jsx)(st,{children:"Amount of water:"}),(0,Jn.jsxs)(ut,{children:[(0,Jn.jsxs)(gt,{onClick:function(){r(i-50)},children:[" ",(0,Jn.jsx)(Bn.Z,{name:"minus",stroke:Pn.$.primary.blue})," "]}),(0,Jn.jsx)(mt,{children:(0,Jn.jsx)(ft,{children:"".concat(i,"ml")})}),(0,Jn.jsxs)(gt,{onClick:function(){r(i+50)},children:[" ",(0,Jn.jsx)(Bn.Z,{name:"plus",stroke:Pn.$.primary.blue})," "]})]})]}),(0,Jn.jsx)(zt,{onBlur:function(n){document.querySelector("#waterTime").innerHTML=n.currentTarget.value},onChange:function(n){s(n.currentTarget.value)},inputType:"addEdit",label:"Recording time:",value:d}),(0,Jn.jsx)(zt,{onBlur:function(n){r(Number(n.currentTarget.value)),document.querySelector("#waterInfo").innerHTML=n.currentTarget.value},onChange:function(n){r(Number(n.currentTarget.value))},inputType:"addEdit",label:"Enter the value of the water used:",value:i}),(0,Jn.jsxs)(yt,{children:[(0,Jn.jsx)(ft,{children:"".concat(i,"ml")}),(0,Jn.jsx)(Oe.Z,{width:"160",onClick:function(){var e=new Date,t={dosage:i,time:d,day:e.getDate(),month:Ct.v[e.getMonth()],year:e.getFullYear()};p((0,Re.JU)(t)),n()},children:"Save"})]})]})]})},Tt=function(){var n=(0,Tn.useContext)(Le.t),e=(0,Mn.v9)(Ln),t=(0,Mn.v9)(An);(0,Mn.I0)();return(0,Jn.jsxs)(et,{children:[t&&(0,Jn.jsx)(at.Z,{}),(0,Jn.jsx)(it,{children:"Today"}),(0,Jn.jsxs)(tt,{children:[e.map((function(n){return(0,Jn.jsx)(nt,{children:(0,Jn.jsx)(Qe,{waterInfo:n})},n._id)})),(0,Jn.jsxs)(rt,{onClick:function(){n((0,Jn.jsx)(Dt,{}))},children:[" ",(0,Jn.jsx)(Bn.Z,{name:"plus",stroke:Pn.$.primary.blue})," Add Water"]})]})]})},Mt=new Date,Et=(0,Tn.createContext)(),Lt=function(){var n=(0,Tn.useState)({year:Mt.getFullYear(),month:Mt.getMonth(),day:Mt.getDate()}),e=(0,Zn.Z)(n,2),t=e[0],i=e[1],r=(0,Tn.useState)(Vn(t.year,t.month,t.day)),a=(0,Zn.Z)(r,2),o=a[0],d=a[1],s=(0,Mn.I0)(),p=(0,Mn.v9)(Rn);(0,Tn.useEffect)((function(){s((0,Re.ts)())}),[s]),(0,Tn.useEffect)((function(){if(p){var n={year:t.year,month:Vn(t.year,t.month,t.day)};s((0,Re.G_)(n))}}),[o,t,p,s]);var l=(0,Mn.v9)(Fn),c=(0,Mn.v9)(Nn);return(0,Jn.jsx)(Et.Provider,{value:{date:t,setDate:i,titleMonth:o,setTitleMonth:d},children:(0,Jn.jsx)(jn.im,{children:(0,Jn.jsx)(bn.Z,{children:(0,Jn.jsxs)(jn.xu,{children:[(0,Jn.jsxs)(ze,{children:[(0,Jn.jsx)("div",{children:"1.7"}),(0,Jn.jsxs)("form",{action:"",children:[(0,Jn.jsx)("input",{type:"range"}),(0,Jn.jsx)("button",{children:"add Water"})]})]}),c&&(0,Jn.jsx)(Dt,{}),(0,Jn.jsxs)(jn.sB,{children:[(0,Jn.jsx)(Tt,{}),(0,Jn.jsx)(ce,{}),(0,Jn.jsx)(be,{}),l&&(0,Jn.jsx)(se,{targetDay:l})]})]})})})})}}}]);
//# sourceMappingURL=229.ebe0b832.chunk.js.map