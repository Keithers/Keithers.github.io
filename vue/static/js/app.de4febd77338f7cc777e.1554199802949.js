webpackJsonp([21],{"4ml/":function(e,t){},M93x:function(e,t,n){"use strict";var a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var o=n("VU/8")({name:"App"},a,!1,function(e){n("Y2hI")},null,null);t.a=o.exports},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){var t=n("7+uW"),a=n("M93x"),o=n("YaEn"),i=n("zL8q"),r=n.n(i),u=n("tvR6"),s=(n.n(u),n("Au9i")),l=n.n(s),c=n("d8/S"),m=(n.n(c),n("/ocq")),h=n("dAEq"),p=n.n(h),d=n("Fd2+"),f=n("4ml/"),q=(n.n(f),n("mtWM")),v=n.n(q),y=n("Rf8U"),P=n.n(y),w=n("u8N1"),b=(n.n(w),n("krjB")),A=n("uJNG");t.default.use(r.a),t.default.use(l.a),t.default.use(m.a),t.default.use(p.a,{ak:"1jtvvshwlALgPCCRN43N2r6P"}),t.default.use(d.e),t.default.use(P.a,v.a),t.default.config.productionTip=!1,v.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8",e.domain=b.a,t.default.prototype.setCookie=function(e,t,n){var a=new Date;a.setTime(a.getTime()+24*n*60*60*1e3);var o="expires="+a.toUTCString();-1==n&&(o=""),document.cookie=e+"="+t+"; "+o},o.a.beforeEach(function(e,t,n){if(window.document.title=e.meta.title,e.matched.some(function(e){return e.meta.requireAuth})){var a=A.a.getCookie("qdsMToken");a?n():null!=a&&""!=a||n({path:"/",query:{redirect:e.fullPath}})}else n()}),new t.default({el:"#app",router:o.a,components:{App:a.a},template:"<App/>"}),v.a.interceptors.response.use(function(e){return 10011==e.data.code&&(document.cookie="qdsMToken=;path=/",o.a.push("/")),e},function(e){e.response&&(e.response.status,e.response.status)})}.call(t,n("DuR2"))},Y2hI:function(e,t){},YaEn:function(e,t,n){"use strict";var a=n("7+uW"),o=n("/ocq");a.default.use(o.a);t.a=new o.a({routes:[{path:"/",name:"qdsLogin",meta:{title:"登录"},component:function(e){return Promise.all([n.e(0),n.e(10)]).then(function(){var t=[n("W2Q3")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/qdsRegister",name:"qdsRegister",meta:{title:"注册"},component:function(e){return Promise.all([n.e(0),n.e(7)]).then(function(){var t=[n("12H5")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/qdsForgetPassword",name:"qdsForgetPassword",meta:{title:"忘记密码"},component:function(e){return Promise.all([n.e(0),n.e(15)]).then(function(){var t=[n("v6CH")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/qdsSearchResume",name:"qdsSearchResume",meta:{title:"人才管理",requireAuth:!0},component:function(e){return Promise.all([n.e(0),n.e(1)]).then(function(){var t=[n("jcbP")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/qdsSearchResume/deliverRecoredDetial",name:"resumeDetial",meta:{title:"投递记录详情页",requireAuth:!0},component:function(e){return Promise.all([n.e(0),n.e(11)]).then(function(){var t=[n("aVQU")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/qdsSearchResume/myResumeDetial",name:"myResumeDetial",meta:{title:"我的简历详情页",requireAuth:!0},component:function(e){return Promise.all([n.e(0),n.e(8)]).then(function(){var t=[n("kDRj")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/qdsCustomerManager",name:"qdsCustomerManager",meta:{title:"客户",requireAuth:!0},component:function(e){return Promise.all([n.e(0),n.e(3)]).then(function(){var t=[n("KQFT")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/qdsNewCustomer",name:"qdsNewCustomer",meta:{title:"新增客户",requireAuth:!0},component:function(e){return Promise.all([n.e(0),n.e(5)]).then(function(){var t=[n("77Bm")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/qdsViewCustomer",name:"qdsViewCustomer",meta:{title:"客户详情",requireAuth:!0},component:function(e){return Promise.all([n.e(0),n.e(16)]).then(function(){var t=[n("1+wR")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/qdsReleaseNewPost",name:"qdsReleaseNewPost",meta:{title:"发布职位",requireAuth:!0},component:function(e){return Promise.all([n.e(0),n.e(13)]).then(function(){var t=[n("Bl3b")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/qdsPostList",name:"qdsPostList",meta:{title:"优蓝快招",requireAuth:!0},component:function(e){return Promise.all([n.e(0),n.e(9)]).then(function(){var t=[n("r7pC")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/postDetails",name:"postDetails",meta:{title:"职位详情",requireAuth:!0},component:function(e){return Promise.all([n.e(0),n.e(6)]).then(function(){var t=[n("/kpH")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/qdsPersonal",name:"qdsPersonal",meta:{title:"个人中心",requireAuth:!0},component:function(e){return Promise.all([n.e(0),n.e(2)]).then(function(){var t=[n("obAr")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/qdsAttestation",name:"qdsAttestation",meta:{title:"企业认证",requireAuth:!0},component:function(e){return Promise.all([n.e(0),n.e(4)]).then(function(){var t=[n("gNrv")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/qdsChangePhone",name:"qdsChangePhone",meta:{title:"换绑手机号",requireAuth:!0},component:function(e){return Promise.all([n.e(0),n.e(12)]).then(function(){var t=[n("ov5y")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/qdsChangePassword",name:"qdsChangePassword",meta:{title:"修改密码",requireAuth:!0},component:function(e){return Promise.all([n.e(0),n.e(17)]).then(function(){var t=[n("rqDQ")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/qdsAdvisorySetup",name:"qdsAdvisorySetup",meta:{title:"咨询设置",requireAuth:!0},component:function(e){return Promise.all([n.e(0),n.e(19)]).then(function(){var t=[n("gVoe")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/qdsCompanyInfor",name:"qdsCompanyInfor",meta:{title:"公司信息"},component:function(e){return Promise.all([n.e(0),n.e(14)]).then(function(){var t=[n("vRyh")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/qdsBasicInfor",name:"qdsBasicInfor",meta:{title:"基本信息"},component:function(e){return Promise.all([n.e(0),n.e(18)]).then(function(){var t=[n("0mdK")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]})},"d8/S":function(e,t){},krjB:function(e,t,n){"use strict";var a,o,i,r,u=location.href;a=-1!=u.indexOf("localhost")?"http://10.0.11.103:18885/":"http://b.youlanw.com/",o=-1!=u.indexOf("m.qh.uat.youlanw.com")?"http://omsapi.youlanw.com/es/":"http://omsapi.test.tkinghr.com/es/",i=-1!=u.indexOf("m.qh.uat.youlanw.com")?"http://omsservice.youlanw.com/":"http://10.0.21.131:18914/",r=-1!=u.indexOf("m.qh.uat.youlanw.com")?"http://ylkz.youlanw.com/":"http://10.0.21.126:19000/",t.a={testUrl:a,searchTestUrl:o,ossDomain:i,qdsDomain:r}},tvR6:function(e,t){},u8N1:function(e,t){var n,a,o,i,r;n=document,a=window,o=n.documentElement,i="orientationchange"in window?"orientationchange":"resize",r=function(){var e=o.clientWidth;e&&(o.style.fontSize=e/375*16+"px")},n.addEventListener&&(a.addEventListener(i,r,!1),n.addEventListener("DOMContentLoaded",r,!1))},uJNG:function(e,t,n){"use strict";var a=n("mvHQ");n.n(a);t.a={getCookie:function(e){e+="=";var t=document.cookie.indexOf(e),n=null;if(t>-1){var a=document.cookie.indexOf(";",t);-1==a&&(a=document.cookie.length),n=document.cookie.substring(t+e.length,a)}return n}}}},["NHnr"]);
//# sourceMappingURL=app.de4febd77338f7cc777e.1554199802949.js.map