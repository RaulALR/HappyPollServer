(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"2MyU":function(t,e,r){"use strict";r.r(e),r.d(e,"RegisterPageModule",(function(){return N}));var o=r("TEn/"),n=r("ofXK"),s=r("3Pt+"),i=r("tyNb"),a=r("ec16"),b=r("lvzd");const l=[{name:"email"},{name:"firstName"},{name:"lastName"},{name:"password"},{name:"repeatPassword"}];var c=r("fXoL"),m=r("sYmb"),p=r("kt0X"),u=r("iHIt");const f=[{path:"",component:(()=>{class t extends a.a{constructor(t,e,r,o,n){super(o,n,e),this.toastController=t,this.translateService=e,this.router=r,this.store=o,this.utils=n,this.formGroup=this.utils.buildForm(l),console.log(this.formGroup)}signUp(){const t={email:this.formGroup.get("email").value,firstName:this.formGroup.get("firstName").value,lastName:this.formGroup.get("lastName").value,password:this.formGroup.get("password").value,repeatPassword:this.formGroup.get("repeatPassword").value};this.store.dispatch(new b.e(t))}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(c.Jb(o.I),c.Jb(m.d),c.Jb(i.g),c.Jb(p.h),c.Jb(u.a))},t.\u0275cmp=c.Db({type:t,selectors:[["app-register"]],features:[c.wb],decls:39,vars:22,consts:[["slot","start"],[3,"formGroup"],["lines","full"],["position","floating"],["type","text","required","","formControlName","firstName"],["type","text","required","","formControlName","lastName"],["type","email","required","","formControlName","email"],["type","password","required","","formControlName","password"],["type","password","required","","formControlName","repeatPassword"],["type","submit","color","danger","expand","block",3,"click"]],template:function(t,e){1&t&&(c.Ob(0,"ion-header"),c.Ob(1,"ion-toolbar"),c.Ob(2,"ion-buttons",0),c.Kb(3,"ion-back-button"),c.Nb(),c.Ob(4,"ion-title"),c.mc(5),c.Zb(6,"translate"),c.Nb(),c.Nb(),c.Nb(),c.Ob(7,"ion-content"),c.Ob(8,"form",1),c.Ob(9,"ion-item",2),c.Ob(10,"ion-label",3),c.mc(11),c.Zb(12,"translate"),c.Nb(),c.Kb(13,"ion-input",4),c.Nb(),c.Ob(14,"ion-item",2),c.Ob(15,"ion-label",3),c.mc(16),c.Zb(17,"translate"),c.Nb(),c.Kb(18,"ion-input",5),c.Nb(),c.Ob(19,"ion-item",2),c.Ob(20,"ion-label",3),c.mc(21),c.Zb(22,"translate"),c.Nb(),c.Kb(23,"ion-input",6),c.Nb(),c.Ob(24,"ion-item",2),c.Ob(25,"ion-label",3),c.mc(26),c.Zb(27,"translate"),c.Nb(),c.Kb(28,"ion-input",7),c.Nb(),c.Ob(29,"ion-item",2),c.Ob(30,"ion-label",3),c.mc(31),c.Zb(32,"translate"),c.Nb(),c.Kb(33,"ion-input",8),c.Nb(),c.Ob(34,"ion-row"),c.Ob(35,"ion-col"),c.Ob(36,"ion-button",9),c.Wb("click",(function(){return e.signUp()})),c.mc(37),c.Zb(38,"translate"),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb()),2&t&&(c.zb(5),c.nc(c.ac(6,8,"register.title")),c.zb(3),c.dc("formGroup",e.formGroup),c.zb(3),c.nc(c.ac(12,10,"register.firstName")),c.zb(5),c.nc(c.ac(17,12,"register.lastName")),c.zb(5),c.nc(c.ac(22,14,"register.email")),c.zb(5),c.nc(c.ac(27,16,"register.password")),c.zb(5),c.nc(c.ac(32,18,"register.repeatPassword")),c.zb(6),c.oc("",c.ac(38,20,"register.signUp")," "))},directives:[o.l,o.B,o.f,o.c,o.d,o.A,o.j,s.k,s.h,s.c,o.o,o.p,o.n,o.H,s.j,s.g,s.b,o.s,o.i,o.e],pipes:[m.c],styles:[""]}),t})()}];let d=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[i.k.forChild(f)],i.k]}),t})(),N=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[o.C,n.b,s.d,s.i,d,m.b]]}),t})()}}]);