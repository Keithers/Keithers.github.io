webpackJsonp([17],{"Rkh+":function(e,t){},rqDQ:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("uJNG"),o=s("Fd2+"),a=s("oNbR"),i=s.n(a),n=s("f6Cu"),d=s.n(n),l=s("AkB+"),c=s.n(l),g=s("TIqW"),m=s.n(g),u={data:function(){return{globalApiUrl:domain.testUrl,ossGlobalApiUrl:domain.ossDomain,qdsGlobalApiUrl:domain.qdsDomain,loginTitle:i.a,loginLock:d.a,loginCode:c.a,registerPwd:m.a,contentText:"",textShow:!1,show:!0,count:"",timer:null,registerForm:{oldPassWord:"",passWord:"",checkPass:""},ruleRegister:{},corpNameTipStyle:!1,whetherRegister:"exist",corpNameTipFont:"",loading:!1,companyNameList:[],list:[{value:0,label:"正在加载中"}],checked:!1,clientHeight:{height:""}}},created:function(){window.addEventListener("resize",this.getHeight),this.getHeight()},destroyed:function(){window.removeEventListener("resize",this.getHeight)},mounted:function(){},components:{},methods:{backHistory:function(){window.history.back(-1)},getHeight:function(){this.clientHeight.height=window.innerHeight-0+"px"},setUserPwd:function(e){var t=r.a.getCookie("qdsMToken"),s=this;if(""==s.registerForm.oldPassWord)return Object(o.b)({message:"请输入旧密码",duration:3e3,background:"#E6A23C"}),!1;if(""==s.registerForm.passWord)return Object(o.b)({message:"请输入新密码",duration:3e3,background:"#E6A23C"}),!1;if(""==s.registerForm.checkPass)return Object(o.b)({message:"请确认密码",duration:3e3,background:"#E6A23C"}),!1;if(s.registerForm.checkPass!=s.registerForm.passWord)return Object(o.b)({message:"两次输入密码不一致!",duration:3e3,background:"#E6A23C"}),!1;var a=new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/);if(!a.test(s.registerForm.checkPass)||!a.test(s.registerForm.passWord)||!a.test(s.registerForm.oldPassWord))return Object(o.b)({message:"密码为不少于6位的数字和字母组成",duration:3e3,background:"#E6A23C"}),!1;s.loading=!0,s.axios(s.qdsGlobalApiUrl+"modifyPasswordbyOldPwd?token="+t,{method:"post",params:{oldpwd:s.registerForm.oldPassWord,newPwd:s.registerForm.passWord},timeout:1e4}).then(function(e){"200"==e.data.code?(s.loading=!1,Object(o.b)({message:"密码修改成功",duration:3e3,type:"success",background:"#E6A23C"})):(s.loading=!1,Object(o.b)({message:e.data.message,duration:3e3,type:"error",background:"#E6A23C"}))}).catch(function(e){s.loading=!1,Object(o.b)({message:"修改密码操作异常，请联系客服021-22876396",duration:3e3,background:"#FF6262"})})}}},p={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"register-page input-border-none self-mt-header",style:e.clientHeight},[s("header",{staticClass:"post-head"},[s("a",{staticClass:"back",attrs:{href:"javascript:;"},on:{click:e.backHistory}}),e._v(" "),s("span",{staticClass:"head-font"},[e._v("修改密码")])]),e._v(" "),s("div",{staticClass:"title-logo"}),e._v(" "),s("div",{staticClass:"register-box"},[s("el-form",{ref:"ruleRegister",staticClass:"demo-ruleForm",attrs:{model:e.registerForm,"status-icon":"",rules:e.ruleRegister}},[s("div",{staticClass:"items-line"},[s("img",{attrs:{src:e.registerPwd,alt:""}}),e._v(" "),s("el-form-item",{attrs:{label:"",prop:"passWord"}},[s("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"请输入旧密码"},model:{value:e.registerForm.oldPassWord,callback:function(t){e.$set(e.registerForm,"oldPassWord","string"==typeof t?t.trim():t)},expression:"registerForm.oldPassWord"}})],1)],1),e._v(" "),s("div",{staticClass:"items-line"},[s("img",{attrs:{src:e.registerPwd,alt:""}}),e._v(" "),s("el-form-item",{attrs:{label:"",prop:"passWord"}},[s("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"请输入新密码"},model:{value:e.registerForm.passWord,callback:function(t){e.$set(e.registerForm,"passWord","string"==typeof t?t.trim():t)},expression:"registerForm.passWord"}})],1)],1),e._v(" "),s("div",{staticClass:"items-line"},[s("img",{attrs:{src:e.registerPwd,alt:""}}),e._v(" "),s("el-form-item",{attrs:{label:"",prop:"checkPass"}},[s("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"请确认密码"},model:{value:e.registerForm.checkPass,callback:function(t){e.$set(e.registerForm,"checkPass","string"==typeof t?t.trim():t)},expression:"registerForm.checkPass"}})],1)],1)])],1),e._v(" "),s("div",{staticClass:"zhanwei"}),e._v(" "),s("div",{staticClass:"login-btn-box"},[s("span",{on:{click:e.setUserPwd}},[e._v("确认")])])])},staticRenderFns:[]};var b=s("VU/8")(u,p,!1,function(e){s("Rkh+")},"data-v-3ec8ffd2",null);t.default=b.exports}});
//# sourceMappingURL=17.f991840e179f5304620e.1554213085956.js.map