webpackJsonp([15],{Q8dT:function(e,t){},v6CH:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("Fd2+"),o=s("oNbR"),i=s.n(o),a=s("QOrE"),n=s.n(a),c=s("f6Cu"),l=s.n(c),d=s("AkB+"),m=s.n(d),g=s("4dIy"),u=s.n(g),p=s("TIqW"),b=s.n(p),h={data:function(){return{globalApiUrl:domain.testUrl,qdsGlobalApiUrl:domain.qdsDomain,loginTitle:i.a,loginPhone:n.a,loginLock:l.a,loginCode:m.a,registerCode:u.a,registerPwd:b.a,contentText:"",textShow:!1,show:!0,count:"",timer:null,registerForm:{corpName:"",mobile:"",smsCode:"",passWord:"",checkPass:""},ruleRegister:{},corpNameTipStyle:!1,whetherRegister:"exist",corpNameTipFont:"",loading:!1,companyNameList:[],list:[{value:0,label:"正在加载中"}],checked:!1,clientHeight:{height:""}}},created:function(){window.addEventListener("resize",this.getHeight),this.getHeight()},destroyed:function(){window.removeEventListener("resize",this.getHeight)},mounted:function(){},components:{Notify:r.b},methods:{backHistory:function(){window.history.back(-1)},getHeight:function(){this.clientHeight.height=window.innerHeight-0+"px"},getValidateCode:function(){var e=this;""==e.registerForm.mobile?Object(r.b)({message:"请输入手机号",duration:2e3,background:"#FF6262"}):e.registerForm.mobile.match(/^1[0-9]{10}$/)?e.axios(e.qdsGlobalApiUrl+"notValidate/getforgetnSignCode",{method:"post",params:{mobile:e.registerForm.mobile}}).then(function(t){if(1==t.data.success){e.timer||(e.count=60,e.show=!1,e.timer=setInterval(function(){e.count>0&&e.count<=60?e.count--:(e.show=!0,clearInterval(e.timer),e.timer=null)},1e3)),Object(r.b)({message:"发送成功",duration:2e3,background:"#20D3B3"})}else e.timer=null,Object(r.b)({message:t.data.message+"(错误码: "+t.data.code+")",duration:2e3,background:"#FF6262"})}).catch(function(t){e.timer=null}):Object(r.b)({message:"手机号格式不正确",duration:2e3,background:"#FF6262"})},goRegister:function(e){var t=this,s=new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/);return""==t.registerForm.mobile?(Object(r.b)({message:"请输入手机号码",duration:2e3,background:"#FF6262"}),!1):""==t.registerForm.smsCode?(Object(r.b)({message:"请输入验证码",duration:2e3,background:"#FF6262"}),!1):""==t.registerForm.passWord?(Object(r.b)({message:"请输入密码",duration:2e3,background:"#FF6262"}),!1):""==t.registerForm.checkPass?(Object(r.b)({message:"请确认密码",duration:2e3,background:"#FF6262"}),!1):t.registerForm.checkPass!=t.registerForm.passWord?(Object(r.b)({message:"两次输入密码不一致!",duration:2e3,background:"#FF6262"}),!1):s.test(t.registerForm.checkPass)&&s.test(t.registerForm.passWord)?void t.axios(t.qdsGlobalApiUrl+"notValidate/modifyPasswordbyMobile",{method:"post",params:{mobile:t.registerForm.mobile,smsCode:t.registerForm.smsCode,newPwd:t.registerForm.passWord}}).then(function(e){"200"==e.data.code?(Object(r.b)({message:"密码修改成功",duration:2e3,background:"#20D3B3"}),setTimeout(function(){t.$router.push({path:"/"})},2e3)):Object(r.b)({message:e.data.message+"(错误码: "+e.data.code+")",duration:2e3,background:"#FF6262"})}).catch(function(e){}):(Object(r.b)({message:"密码为不少于6位的数字和字母组成",duration:2e3,background:"#FF6262"}),!1)}}},v={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"register-page input-border-none self-mt-header",style:e.clientHeight},[s("header",{staticClass:"post-head"},[s("a",{staticClass:"back",attrs:{href:"javascript:;"},on:{click:e.backHistory}}),e._v(" "),s("span",{staticClass:"head-font"},[e._v("忘记密码")])]),e._v(" "),s("div",{staticClass:"title-logo"}),e._v(" "),s("div",{staticClass:"register-box"},[s("el-form",{ref:"ruleRegister",staticClass:"demo-ruleForm",attrs:{model:e.registerForm,"status-icon":"",rules:e.ruleRegister},on:{submit:function(t){return t.preventDefault(),e.goRegister(t)}}},[s("div",{staticClass:"items-line"},[s("img",{attrs:{src:e.loginPhone,alt:""}}),e._v(" "),s("el-form-item",{attrs:{label:"",prop:"mobile"}},[s("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"请输入手机号码",maxlength:"11"},model:{value:e.registerForm.mobile,callback:function(t){e.$set(e.registerForm,"mobile","string"==typeof t?t.trim():t)},expression:"registerForm.mobile"}})],1)],1),e._v(" "),s("div",{staticClass:"items-line"},[s("img",{attrs:{src:e.registerCode,alt:""}}),e._v(" "),s("el-input",{attrs:{placeholder:"请输入验证码"},model:{value:e.registerForm.smsCode,callback:function(t){e.$set(e.registerForm,"smsCode","string"==typeof t?t.trim():t)},expression:"registerForm.smsCode"}},[s("template",{slot:"append"},[s("span",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],on:{click:e.getValidateCode}},[e._v("获取验证码")]),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:!e.show,expression:"!show"}]},[e._v("重新获取 "+e._s(e.count)+" S")])])],2)],1),e._v(" "),s("div",{staticClass:"items-line"},[s("img",{attrs:{src:e.registerPwd,alt:""}}),e._v(" "),s("el-form-item",{attrs:{label:"",prop:"passWord"}},[s("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"请输入密码"},model:{value:e.registerForm.passWord,callback:function(t){e.$set(e.registerForm,"passWord","string"==typeof t?t.trim():t)},expression:"registerForm.passWord"}})],1)],1),e._v(" "),s("div",{staticClass:"items-line"},[s("img",{attrs:{src:e.registerPwd,alt:""}}),e._v(" "),s("el-form-item",{attrs:{label:"",prop:"checkPass"}},[s("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"请确认密码"},model:{value:e.registerForm.checkPass,callback:function(t){e.$set(e.registerForm,"checkPass","string"==typeof t?t.trim():t)},expression:"registerForm.checkPass"}})],1)],1)])],1),e._v(" "),s("div",{staticClass:"zhanwei"}),e._v(" "),s("div",{staticClass:"login-btn-box"},[s("span",{on:{click:e.goRegister}},[e._v("确认")])])])},staticRenderFns:[]};var F=s("VU/8")(h,v,!1,function(e){s("Q8dT")},"data-v-680cfd9e",null);t.default=F.exports}});
//# sourceMappingURL=15.e74f44b45d153af0baa1.1554207017993.js.map