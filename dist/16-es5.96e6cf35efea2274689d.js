function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{Zj2Y:function(e,n,t){"use strict";t.r(n),t.d(n,"LoginRegisterMainPageModule",(function(){return d}));var r,i,o,a=t("sYmb"),l=t("TEn/"),u=t("ofXK"),c=t("3Pt+"),s=t("tyNb"),f=t("fXoL"),h=t("7dP1"),p=[{path:"login-register-main",component:(r=function(){function e(n,t){_classCallCheck(this,e),this.authService=n,this.router=t}return _createClass(e,[{key:"ngOnInit",value:function(){this.authService.currentUserValue&&this.router.navigate(["/tabs/principal-menu"])}}]),e}(),r.\u0275fac=function(e){return new(e||r)(f.Jb(h.a),f.Jb(s.g))},r.\u0275cmp=f.Db({type:r,selectors:[["app-login-register-main"]],decls:1,vars:0,template:function(e,n){1&e&&f.Kb(0,"ion-router-outlet")},directives:[l.r],encapsulation:2}),r),children:[{path:"login-register",loadChildren:function(){return t.e(17).then(t.bind(null,"0wXX")).then((function(e){return e.LoginRegisterPageModule}))}},{path:"login",loadChildren:function(){return Promise.all([t.e(0),t.e(18)]).then(t.bind(null,"XBt0")).then((function(e){return e.LoginPageModule}))}},{path:"register",loadChildren:function(){return Promise.all([t.e(0),t.e(19)]).then(t.bind(null,"2MyU")).then((function(e){return e.RegisterPageModule}))}},{path:"",redirectTo:"/login-register-main/login-register",pathMatch:"full"}]},{path:"",redirectTo:"/login-register-main/login-register",pathMatch:"full"}],g=((o=function e(){_classCallCheck(this,e)}).\u0275mod=f.Hb({type:o}),o.\u0275inj=f.Gb({factory:function(e){return new(e||o)},imports:[[s.k.forChild(p)],s.k]}),o),d=((i=function e(){_classCallCheck(this,e)}).\u0275mod=f.Hb({type:i}),i.\u0275inj=f.Gb({factory:function(e){return new(e||i)},imports:[[l.C,u.b,c.d,g,a.b]]}),i)}}]);