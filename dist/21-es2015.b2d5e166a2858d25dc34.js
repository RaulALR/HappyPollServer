(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{xjHI:function(t,e,o){"use strict";o.r(e),o.d(e,"CreatePollModule",(function(){return z}));var i=o("sYmb"),s=o("TEn/"),n=o("tyNb"),a=o("ofXK"),r=o("3Pt+"),l=o("mrSG"),c=o("kt0X"),u=o("NQLq"),b=o("fkgO"),p=o("vifI"),d=o("F8ix"),m=o("ec16");const h=[{name:"pollName"},{name:"groupPoll"},{name:"questions"}];var f=o("fXoL"),g=o("iHIt");function N(t,e){if(1&t&&(f.Ob(0,"ion-select-option",15),f.mc(1),f.Nb()),2&t){const t=e.$implicit;f.ec("value",t.groupName),f.zb(1),f.oc("",t.groupName," ")}}function O(t,e){if(1&t){const t=f.Pb();f.Mb(0),f.Ob(1,"ion-item"),f.Ob(2,"ion-label"),f.mc(3),f.Nb(),f.Ob(4,"ion-icon",17),f.Wb("click",(function(){f.ic(t);const o=e.index;return f.Yb(2).deleteQuestion(o)})),f.Nb(),f.Nb(),f.Lb()}if(2&t){const t=e.$implicit;f.zb(3),f.nc(t)}}function v(t,e){if(1&t&&(f.Ob(0,"ion-list"),f.lc(1,O,5,1,"ng-container",16),f.Nb()),2&t){const t=f.Yb();f.zb(1),f.dc("ngForOf",t.questionData)}}function P(t,e){if(1&t){const t=f.Pb();f.Ob(0,"ion-button",21),f.Wb("click",(function(){return f.ic(t),f.Yb(2).deletePoll()})),f.mc(1),f.Zb(2,"translate"),f.Nb()}if(2&t){const t=f.Yb(2);f.ec("disabled",t.getDisableDelete()),f.zb(1),f.oc(" ",f.ac(2,2,"commons.delete")," ")}}function D(t,e){if(1&t){const t=f.Pb();f.Ob(0,"ion-button",21),f.Wb("click",(function(){return f.ic(t),f.Yb(2).navigateToPoll()})),f.mc(1),f.Zb(2,"translate"),f.Nb()}if(2&t){const t=f.Yb(2);f.ec("disabled",t.getDisableDelete()),f.zb(1),f.oc(" ",f.ac(2,2,"commons.showData")," ")}}function G(t,e){if(1&t){const t=f.Pb();f.Ob(0,"div",18),f.Ob(1,"ion-button",19),f.Wb("click",(function(){return f.ic(t),f.Yb().saveData()})),f.mc(2),f.Zb(3,"translate"),f.Nb(),f.lc(4,P,3,4,"ion-button",20),f.lc(5,D,3,4,"ion-button",20),f.Nb()}if(2&t){const t=f.Yb();f.zb(1),f.dc("disabled",!t.formGroup.valid),f.zb(1),f.oc(" ",f.ac(3,4,t.isUpdate?"commons.update":"commons.create")," "),f.zb(2),f.dc("ngIf",t.isUpdate),f.zb(1),f.dc("ngIf",t.isUpdate)}}let w=(()=>{class t extends m.a{constructor(t,e,o,i,s,n,a){super(i,s,n),this.formBuilder=t,this.router=e,this.toastController=o,this.store=i,this.utils=s,this.translateService=n,this.activatedRoute=a,this.isUpdate=!1,this.groupData=[],this.questionData=[],this.compareWithGroup=(t,e)=>t===e,this.formGroup=this.utils.buildForm(h),this.utils.resetForm(this.formGroup)}saveData(){const t={_id:this.pollId,pollName:this.formGroup.get("pollName").value?this.formGroup.get("pollName").value:null,groupPoll:this.formGroup.get("groupPoll").value?this.formGroup.get("groupPoll").value:null,questions:this.questionData||null,owner:JSON.parse(sessionStorage.user).email};this.isUpdate?this.store.dispatch(new p.g(t)):(delete t._id,this.store.dispatch(new p.a(t)))}pollCreated(){this.presentToast(),this.router.navigate(["/tabs"])}getDisableDelete(){let t=!0;return this.groupData&&this.formGroup.get("groupPoll").value&&this.groupData.forEach(e=>{e.groupName===this.formGroup.get("groupPoll").value&&e.owner===JSON.parse(sessionStorage.user).email&&(this.formGroup.get("groupPoll").enable(),t=!1)}),t}showButtons(){return!this.isUpdate||this.groupData&&this.groupData[0]&&this.groupData[0].owner===JSON.parse(sessionStorage.user).email}deletePoll(){this.store.dispatch(new p.b({_id:this.pollId}))}addQuestion(){this.formGroup.get("questions").value&&(this.questionData.push(this.formGroup.get("questions").value),this.formGroup.get("questions").setValue(""))}deleteQuestion(t){this.questionData.splice(t,1)}navigateToPoll(){this.store.dispatch(new p.d({_id:this.pollId,showResults:!0}))}updateForm(t){this.formGroup.get("pollName").setValue(t.pollName),this.formGroup.get("groupPoll").setValue(t.groupPoll),this.questionData=t.questions}presentToast(){return Object(l.a)(this,void 0,void 0,(function*(){(yield this.toastController.create({message:this.translateService.instant("createPoll.pollCreated"),duration:2e3})).present()}))}ngOnInit(){this.store.pipe(Object(c.p)(d.a)).subscribe(t=>{t.length>0&&this.isUpdate&&this.updateForm(t[0])}),this.store.pipe(Object(c.p)(b.a)).subscribe(t=>{Array.isArray(t)&&(this.groupData=t)}),this.activatedRoute.url.subscribe(t=>{const e=this.router.getCurrentNavigation().extras.state;this.isUpdate=!(!e||!e.data),this.store.dispatch(new u.f({owner:JSON.parse(sessionStorage.user).email})),this.questionData=[],this.isUpdate?(this.formGroup.get("groupPoll").disable(),this.pollId=e.data._id,this.store.dispatch(new p.d({_id:e.data._id}))):this.utils.resetForm(this.formGroup)})}}return t.\u0275fac=function(e){return new(e||t)(f.Jb(r.a),f.Jb(n.g),f.Jb(s.I),f.Jb(c.h),f.Jb(g.a),f.Jb(i.d),f.Jb(n.a))},t.\u0275cmp=f.Db({type:t,selectors:[["app-create-poll"]],features:[f.wb],decls:31,vars:25,consts:[[3,"translucent"],["slot","start"],["defaultHref","/tabs/principal-menu"],[3,"fullscreen"],[3,"formGroup"],["lines","full"],["position","floating"],["type","text","required","","formControlName","pollName"],["required","","formControlName","groupPoll",3,"okText","cancelText","compareWith"],["value",""],[3,"value",4,"ngFor","ngForOf"],["type","text","formControlName","questions"],["name","add-outline","slot","end",3,"click"],[4,"ngIf"],["padding","",4,"ngIf"],[3,"value"],[4,"ngFor","ngForOf"],["name","close-outline","slot","end",3,"click"],["padding",""],["block","","type","submit",3,"disabled","click"],["type","submit","color","danger",3,"disabled","click",4,"ngIf"],["type","submit","color","danger",3,"disabled","click"]],template:function(t,e){1&t&&(f.Ob(0,"ion-header",0),f.Ob(1,"ion-toolbar"),f.Ob(2,"ion-buttons",1),f.Kb(3,"ion-back-button",2),f.Ob(4,"ion-title"),f.mc(5),f.Zb(6,"translate"),f.Nb(),f.Nb(),f.Nb(),f.Nb(),f.Ob(7,"ion-content",3),f.Ob(8,"form",4),f.Ob(9,"ion-item",5),f.Ob(10,"ion-label",6),f.mc(11),f.Zb(12,"translate"),f.Nb(),f.Kb(13,"ion-input",7),f.Nb(),f.Ob(14,"ion-item",5),f.Ob(15,"ion-label",6),f.mc(16),f.Zb(17,"translate"),f.Nb(),f.Ob(18,"ion-select",8),f.Zb(19,"translate"),f.Zb(20,"translate"),f.Kb(21,"ion-select-option",9),f.lc(22,N,2,2,"ion-select-option",10),f.Nb(),f.Nb(),f.Ob(23,"ion-item",5),f.Ob(24,"ion-label",6),f.mc(25),f.Zb(26,"translate"),f.Nb(),f.Kb(27,"ion-input",11),f.Ob(28,"ion-icon",12),f.Wb("click",(function(){return e.addQuestion()})),f.Nb(),f.Nb(),f.lc(29,v,2,1,"ion-list",13),f.lc(30,G,6,6,"div",14),f.Nb(),f.Nb()),2&t&&(f.dc("translucent",!0),f.zb(5),f.nc(f.ac(6,13,e.isUpdate?"createPoll.titleUpdate":"createPoll.title")),f.zb(2),f.dc("fullscreen",!0),f.zb(1),f.dc("formGroup",e.formGroup),f.zb(3),f.nc(f.ac(12,15,"createPoll.pollName")),f.zb(5),f.nc(f.ac(17,17,"createPoll.groupPoll")),f.zb(2),f.ec("okText",f.ac(19,19,"commons.select")),f.ec("cancelText",f.ac(20,21,"commons.cancel")),f.dc("compareWith",e.compareWithGroup),f.zb(4),f.dc("ngForOf",e.groupData),f.zb(3),f.nc(f.ac(26,23,"createPoll.questions")),f.zb(4),f.dc("ngIf",e.questionData),f.zb(1),f.dc("ngIf",e.showButtons()))},directives:[s.l,s.B,s.f,s.c,s.d,s.A,s.j,r.k,r.h,r.c,s.o,s.p,s.n,s.H,r.j,r.g,r.b,s.u,s.G,s.v,a.i,s.m,a.j,s.q,s.e],pipes:[i.c],styles:[""]}),t})();const k=[{path:"",component:w}];let q=(()=>{class t{}return t.\u0275mod=f.Hb({type:t}),t.\u0275inj=f.Gb({factory:function(e){return new(e||t)},imports:[[n.k.forChild(k)],n.k]}),t})(),z=(()=>{class t{}return t.\u0275mod=f.Hb({type:t}),t.\u0275inj=f.Gb({factory:function(e){return new(e||t)},imports:[[s.C,a.b,r.d,r.i,n.k.forChild([{path:"",component:w}]),q,i.b]]}),t})()}}]);