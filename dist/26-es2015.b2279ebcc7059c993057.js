(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{jcuU:function(t,e,i){"use strict";i.r(e),i.d(e,"ViewPollsModule",(function(){return O}));var n=i("sYmb"),o=i("TEn/"),s=i("tyNb"),r=i("ofXK"),c=i("3Pt+"),l=i("mrSG"),a=i("ec16"),b=i("kt0X"),u=i("F8ix"),p=i("vifI"),d=i("fXoL"),f=i("iHIt");function h(t,e){if(1&t){const t=d.Pb();d.Mb(0),d.Ob(1,"ion-item",6),d.Wb("click",(function(){d.ic(t);const i=e.$implicit;return d.Yb(2).navigateToPoll(i)})),d.Ob(2,"ion-label"),d.mc(3),d.Nb(),d.Nb(),d.Lb()}if(2&t){const t=e.$implicit;d.zb(3),d.nc(t.pollName)}}function m(t,e){if(1&t&&(d.Ob(0,"ion-list"),d.lc(1,h,4,1,"ng-container",5),d.Nb()),2&t){const t=d.Yb();d.zb(1),d.dc("ngForOf",t.pollsData)}}let w=(()=>{class t extends a.a{constructor(t,e,i,n,o,s,r){super(n,o,s),this.formBuilder=t,this.router=e,this.toastController=i,this.store=n,this.utils=o,this.translateService=s,this.activatedRoute=r}navigateToPoll(t){this.store.dispatch(new p.d({_id:t._id}))}getPolls(){const t={user:JSON.parse(sessionStorage.user).email};this.store.dispatch(new p.f(t))}presentToast(){return Object(l.a)(this,void 0,void 0,(function*(){(yield this.toastController.create({message:this.translateService.instant("viewPolls.pollCreated"),duration:2e3})).present()}))}ngOnInit(){this.store.pipe(Object(b.p)(u.a)).subscribe(t=>{Array.isArray(t)&&(this.pollsData=t)}),this.activatedRoute.url.subscribe(t=>{this.getPolls()})}}return t.\u0275fac=function(e){return new(e||t)(d.Jb(c.a),d.Jb(s.g),d.Jb(o.I),d.Jb(b.h),d.Jb(f.a),d.Jb(n.d),d.Jb(s.a))},t.\u0275cmp=d.Db({type:t,selectors:[["app-view-poll"]],features:[d.wb],decls:9,vars:6,consts:[[3,"translucent"],["slot","start"],["defaultHref","/tabs/principal-menu"],[3,"fullscreen"],[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"click"]],template:function(t,e){1&t&&(d.Ob(0,"ion-header",0),d.Ob(1,"ion-toolbar"),d.Ob(2,"ion-buttons",1),d.Kb(3,"ion-back-button",2),d.Ob(4,"ion-title"),d.mc(5),d.Zb(6,"translate"),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.Ob(7,"ion-content",3),d.lc(8,m,2,1,"ion-list",4),d.Nb()),2&t&&(d.dc("translucent",!0),d.zb(5),d.oc(" ",d.ac(6,4,"viewPoll.title")," "),d.zb(2),d.dc("fullscreen",!0),d.zb(1),d.dc("ngIf",e.pollsData))},directives:[o.l,o.B,o.f,o.c,o.d,o.A,o.j,r.j,o.q,r.i,o.o,o.p],pipes:[n.c],styles:[""]}),t})();const v=[{path:"",component:w}];let g=(()=>{class t{}return t.\u0275mod=d.Hb({type:t}),t.\u0275inj=d.Gb({factory:function(e){return new(e||t)},imports:[[s.k.forChild(v)],s.k]}),t})(),O=(()=>{class t{}return t.\u0275mod=d.Hb({type:t}),t.\u0275inj=d.Gb({factory:function(e){return new(e||t)},imports:[[o.C,r.b,c.d,c.i,s.k.forChild([{path:"",component:w}]),g,n.b]]}),t})()}}]);