(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{XBt0:function(t,o,n){"use strict";n.r(o),n.d(o,"LoginPageModule",(function(){return g}));var e=n("TEn/"),r=n("ofXK"),i=n("3Pt+"),s=n("tyNb"),b=n("ec16"),a=n("lvzd");const c=[{name:"email"},{name:"password"}];var l=n("fXoL"),u=n("kt0X"),p=n("iHIt"),m=n("sYmb");const d=function(){return["/forgot-password"]},f=[{path:"",component:(()=>{class t extends b.a{constructor(t,o,n){super(t,o,n),this.store=t,this.utils=o,this.translateService=n,this.formGroup=this.utils.buildForm(c)}logIn(){const t={email:this.formGroup.get("email").value,password:this.formGroup.get("password").value};this.store.dispatch(new a.b(t))}}return t.\u0275fac=function(o){return new(o||t)(l.Jb(u.h),l.Jb(p.a),l.Jb(m.d))},t.\u0275cmp=l.Db({type:t,selectors:[["app-login"]],features:[l.wb],decls:27,vars:18,consts:[["slot","start"],[3,"formGroup"],["lines","full"],["position","floating"],["type","text","required","","formControlName","email"],["type","password","required","","formControlName","password"],["type","submit","color","danger","expand","block",3,"click"],[1,"small-text",3,"routerLink"]],template:function(t,o){1&t&&(l.Ob(0,"ion-header"),l.Ob(1,"ion-toolbar"),l.Ob(2,"ion-buttons",0),l.Kb(3,"ion-back-button"),l.Nb(),l.Ob(4,"ion-title"),l.mc(5),l.Zb(6,"translate"),l.Nb(),l.Nb(),l.Nb(),l.Ob(7,"ion-content"),l.Ob(8,"form",1),l.Ob(9,"ion-item",2),l.Ob(10,"ion-label",3),l.mc(11),l.Zb(12,"translate"),l.Nb(),l.Kb(13,"ion-input",4),l.Nb(),l.Ob(14,"ion-item",2),l.Ob(15,"ion-label",3),l.mc(16),l.Zb(17,"translate"),l.Nb(),l.Kb(18,"ion-input",5),l.Nb(),l.Ob(19,"ion-row"),l.Ob(20,"ion-col"),l.Ob(21,"ion-button",6),l.Wb("click",(function(){return o.logIn()})),l.mc(22),l.Zb(23,"translate"),l.Nb(),l.Ob(24,"a",7),l.mc(25),l.Zb(26,"translate"),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Nb()),2&t&&(l.zb(5),l.nc(l.ac(6,7,"login.title")),l.zb(3),l.dc("formGroup",o.formGroup),l.zb(3),l.nc(l.ac(12,9,"login.email")),l.zb(5),l.nc(l.ac(17,11,"login.password")),l.zb(6),l.oc(" ",l.ac(23,13,"login.signIn"),""),l.zb(2),l.dc("routerLink",l.fc(17,d)),l.zb(1),l.nc(l.ac(26,15,"login.forgotPassword")))},directives:[e.l,e.B,e.f,e.c,e.d,e.A,e.j,i.k,i.h,i.c,e.o,e.p,e.n,e.H,i.j,i.g,i.b,e.s,e.i,e.e,s.j,e.F],pipes:[m.c],styles:[""]}),t})()}];let w=(()=>{class t{}return t.\u0275mod=l.Hb({type:t}),t.\u0275inj=l.Gb({factory:function(o){return new(o||t)},imports:[[s.k.forChild(f)],s.k]}),t})(),g=(()=>{class t{}return t.\u0275mod=l.Hb({type:t}),t.\u0275inj=l.Gb({factory:function(o){return new(o||t)},imports:[[e.C,r.b,i.d,w,m.b,i.i]]}),t})()}}]);