(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{Wbz7:function(t,e,n){"use strict";n.r(e),n.d(e,"SettingsPageModule",(function(){return f}));var s=n("sYmb"),i=n("TEn/"),r=n("ofXK"),a=n("3Pt+"),o=n("28K6"),c=n("tyNb"),l=n("mrSG"),b=n("ec16"),u=n("fXoL"),h=n("kt0X"),g=n("iHIt");const d=[{path:"",component:(()=>{class t extends b.a{constructor(t,e,n,s,i,r){super(s,i,r),this.actionSheetController=t,this.router=e,this.toastController=n,this.store=s,this.utils=i,this.translateService=r,this.translateService.setDefaultLang("es"),this.translateService.use("es")}openLenguageActionSheet(){return Object(l.a)(this,void 0,void 0,(function*(){const t=yield this.actionSheetController.create({header:this.translateService.instant("settings.languages"),buttons:[{text:this.translateService.instant("settings.spanish"),handler:()=>{this.setLanguage("es")}},{text:this.translateService.instant("settings.english"),handler:()=>{this.setLanguage("en")}}]});yield t.present()}))}presentToast(){return Object(l.a)(this,void 0,void 0,(function*(){(yield this.toastController.create({message:this.translateService.instant("settings.closeSessionToast"),duration:2e3})).present()}))}setLanguage(t){this.translateService.use(t)}closeSession(){this.presentToast(),this.router.navigate(["/login-register-main"])}}return t.\u0275fac=function(e){return new(e||t)(u.Jb(i.a),u.Jb(c.g),u.Jb(i.I),u.Jb(h.h),u.Jb(g.a),u.Jb(s.d))},t.\u0275cmp=u.Db({type:t,selectors:[["app-settings"]],features:[u.wb],decls:17,vars:14,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],["expand","block",3,"click"],["routerLinkActive","router-link-active","expand","block",3,"click"]],template:function(t,e){1&t&&(u.Ob(0,"ion-header",0),u.Ob(1,"ion-toolbar"),u.Ob(2,"ion-title"),u.mc(3),u.Zb(4,"translate"),u.Nb(),u.Nb(),u.Nb(),u.Ob(5,"ion-content",1),u.Ob(6,"ion-header",2),u.Ob(7,"ion-toolbar"),u.Ob(8,"ion-title",3),u.mc(9),u.Zb(10,"translate"),u.Nb(),u.Nb(),u.Nb(),u.Ob(11,"ion-button",4),u.Wb("click",(function(){return e.openLenguageActionSheet()})),u.mc(12),u.Zb(13,"translate"),u.Nb(),u.Ob(14,"ion-button",5),u.Wb("click",(function(){return e.closeSession()})),u.mc(15),u.Zb(16,"translate"),u.Nb(),u.Nb()),2&t&&(u.dc("translucent",!0),u.zb(3),u.oc(" ",u.ac(4,6,"settings.settingsTitle")," "),u.zb(2),u.dc("fullscreen",!0),u.zb(4),u.oc(" ",u.ac(10,8,"settings.settingsTitle")," "),u.zb(3),u.oc(" ",u.ac(13,10,"settings.selectLenguage")," "),u.zb(3),u.oc(" ",u.ac(16,12,"settings.disconnect")," "))},directives:[i.l,i.B,i.A,i.j,i.e,c.i],pipes:[s.c],styles:[""]}),t})()}];let p=(()=>{class t{}return t.\u0275mod=u.Hb({type:t}),t.\u0275inj=u.Gb({factory:function(e){return new(e||t)},imports:[[c.k.forChild(d)],c.k]}),t})(),f=(()=>{class t{}return t.\u0275mod=u.Hb({type:t}),t.\u0275inj=u.Gb({factory:function(e){return new(e||t)},imports:[[i.C,r.b,a.d,o.a,p,s.b]]}),t})()}}]);