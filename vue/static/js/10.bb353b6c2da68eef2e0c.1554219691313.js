webpackJsonp([10],{W2Q3:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=o("oNbR"),a=o.n(s),i=o("fslZ"),n=o.n(i),r=o("QOrE"),d=o.n(r),c=o("f6Cu"),l=o.n(c),u=o("Fd2+"),g={data:function(){return{qdsGlobalApiUrl:domain.qdsDomain,qdsPhoneNum:"",qdsCheckPass:"",show:!1,loginTitle:a.a,loginPhone:d.a,loginLock:l.a,loginHeadBack:n.a,clientHeight:{height:""},authAState:""}},created:function(){window.addEventListener("resize",this.getHeight),this.getHeight()},destroyed:function(){window.removeEventListener("resize",this.getHeight)},mounted:function(){},components:{Notify:u.b},methods:{login:function(){var e=this;return""==e.qdsPhoneNum?(Object(u.b)({message:"请输入手机号码",duration:2e3,background:"#FF6262"}),!1):/^1[0-9]{10}$/.test(e.qdsPhoneNum)?""==e.qdsCheckPass?(Object(u.b)({message:"请输入密码",duration:2e3,background:"#FF6262"}),!1):void e.axios(e.qdsGlobalApiUrl+"notValidate/login",{method:"post",params:{userName:e.qdsPhoneNum,passWord:e.qdsCheckPass}}).then(function(t){if("200"==t.data.code)if(e.authAState=t.data.entity.corpUser.certificationStatus,null==e.authAState||""==e.authAState||void 0==e.authAState)Object(u.b)({message:"快招渠道商登录异常，请拨打021-22876396联系管理员",duration:2e3,background:"#FF6262"});else{localStorage.setItem("qdsSCorpUserId",t.data.entity.corpUser.id),localStorage.setItem("qdsMobile",t.data.entity.corpUser.mobile),sessionStorage.setItem("qdsMCertificationStatus",t.data.entity.corpUser.certificationStatus);var o=t.data.entity.token,s=encodeURIComponent(o);-1==location.href.indexOf("m.qh.uat.youlanw.com")?document.cookie="qdsMToken="+s+";path=/":document.cookie="qdsMToken="+s+";domain=m.qh.uat.youlanw.com;path=/";var a=t.data.entity.corpUser.id,i=localStorage.getItem("qdslocalSCorpUserId"+a),n=localStorage.getItem("closeRefreshShelfTipLstorage"+a);i&&n?Number(i)==t.data.entity.corpUser.id&&"true"==n?(localStorage.setItem("qdslocalSCorpUserId"+a,t.data.entity.corpUser.id),localStorage.setItem("closeRefreshShelfTipLstorage"+a,"true")):localStorage.setItem("qdslocalSCorpUserId"+a,t.data.entity.corpUser.id):(localStorage.setItem("qdslocalSCorpUserId"+a,t.data.entity.corpUser.id),localStorage.setItem("closeRefreshShelfTipLstorage"+a,"false")),e.$router.push("/qdsSearchResume")}else Object(u.b)({message:t.data.message+"(错误码: "+t.data.code+")",duration:2e3,background:"#FF6262"})}).catch(function(e){}):(Object(u.b)({message:"手机号格式不对",duration:2e3,background:"#FF6262"}),!1)},goRegister:function(){this.$router.push("/qdsRegister")},goForgetPassword:function(){this.$router.push("/qdsForgetPassword")},getHeight:function(){this.clientHeight.height=window.innerHeight-0+"px"}}},m={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"login-page",style:e.clientHeight},[o("div",{staticClass:"title-logo"},[o("img",{attrs:{src:e.loginHeadBack,alt:""}})]),e._v(" "),o("div",{staticClass:"input"},[o("div",{staticClass:"input-user"},[o("img",{attrs:{src:e.loginPhone,alt:""}}),o("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.qdsPhoneNum,expression:"qdsPhoneNum",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"请输入用户名",maxlength:11},domProps:{value:e.qdsPhoneNum},on:{input:function(t){t.target.composing||(e.qdsPhoneNum=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),e._v(" "),o("div",{staticClass:"input-user"},[o("img",{attrs:{src:e.loginLock,alt:""}}),o("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.qdsCheckPass,expression:"qdsCheckPass",modifiers:{trim:!0}}],attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:e.qdsCheckPass},on:{input:function(t){t.target.composing||(e.qdsCheckPass=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login(t)}}})])]),e._v(" "),o("div",{staticClass:"login-btn-box"},[o("span",{on:{click:e.login}},[e._v("登录")])]),e._v(" "),o("div",{staticClass:"footer"},[o("span",{on:{click:e.goRegister}},[e._v("立即注册 "),o("i",{staticClass:"arrow-right"})]),o("span",{staticClass:"line"},[e._v("|")]),o("span",{on:{click:e.goForgetPassword}},[e._v("忘记密码 "),o("i",{staticClass:"arrow-right"})])])])},staticRenderFns:[]};var h=o("VU/8")(g,m,!1,function(e){o("Xg8o")},"data-v-67058e7e",null);t.default=h.exports},Xg8o:function(e,t){},fslZ:function(e,t,o){e.exports=o.p+"static/img/login_head_back.8be36dd.png"}});
//# sourceMappingURL=10.bb353b6c2da68eef2e0c.1554219691313.js.map