(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{Zj2Y:function(e,t,n){"use strict";n.r(t),n.d(t,"LoginRegisterMainPageModule",(function(){return h}));var r=n("sYmb"),i=n("TEn/"),o=n("ofXK"),a=n("3Pt+"),l=n("tyNb"),s=n("fXoL"),u=n("7dP1");const c=[{path:"login-register-main",component:(()=>{class e{constructor(e,t){this.authService=e,this.router=t}ngOnInit(){this.authService.currentUserValue&&this.router.navigate(["/tabs/principal-menu"])}}return e.\u0275fac=function(t){return new(t||e)(s.Jb(u.a),s.Jb(l.g))},e.\u0275cmp=s.Db({type:e,selectors:[["app-login-register-main"]],decls:1,vars:0,template:function(e,t){1&e&&s.Kb(0,"ion-router-outlet")},directives:[i.r],encapsulation:2}),e})(),children:[{path:"login-register",loadChildren:()=>n.e(17).then(n.bind(null,"0wXX")).then(e=>e.LoginRegisterPageModule)},{path:"login",loadChildren:()=>Promise.all([n.e(0),n.e(18)]).then(n.bind(null,"XBt0")).then(e=>e.LoginPageModule)},{path:"register",loadChildren:()=>Promise.all([n.e(0),n.e(19)]).then(n.bind(null,"2MyU")).then(e=>e.RegisterPageModule)},{path:"",redirectTo:"/login-register-main/login-register",pathMatch:"full"}]},{path:"",redirectTo:"/login-register-main/login-register",pathMatch:"full"}];let g=(()=>{class e{}return e.\u0275mod=s.Hb({type:e}),e.\u0275inj=s.Gb({factory:function(t){return new(t||e)},imports:[[l.k.forChild(c)],l.k]}),e})(),h=(()=>{class e{}return e.\u0275mod=s.Hb({type:e}),e.\u0275inj=s.Gb({factory:function(t){return new(t||e)},imports:[[i.C,o.b,a.d,g,r.b]]}),e})()}}]);