webpackJsonp([12],{"8moP":function(e,t){},ov5y:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=o("Au9i"),a=o("Fd2+"),i=o("uJNG"),r=o("oNbR"),n=o.n(r),l=o("QOrE"),c=o.n(l),d=o("f6Cu"),m=o.n(d),g=o("AkB+"),u=o.n(g),h=o("4dIy"),b=o.n(h),p={data:function(){return{globalApiUrl:domain.testUrl,ossGlobalApiUrl:domain.ossDomain,qdsGlobalApiUrl:domain.qdsDomain,loginTitle:n.a,loginPhone:c.a,loginLock:m.a,loginCode:u.a,registerCode:b.a,contentText:"",textShow:!1,show:!0,count:"",timer:null,registerForm:{corpName:"",mobile:"",smsCode:"",passWord:"",checkPass:""},ruleRegister:{},corpNameTipStyle:!1,whetherRegister:"exist",corpNameTipFont:"",loading:!1,companyNameList:[],list:[{value:0,label:"正在加载中"}],checked:!1,clientHeight:{height:""}}},created:function(){window.addEventListener("resize",this.getHeight),this.getHeight()},destroyed:function(){window.removeEventListener("resize",this.getHeight)},mounted:function(){},components:{},methods:{backHistory:function(){window.history.back(-1)},getHeight:function(){this.clientHeight.height=window.innerHeight-0+"px"},getValidateCode:function(){var e=this;""==e.registerForm.mobile?Object(a.b)({message:"请输入手机号",duration:3e3,background:"#E6A23C"}):e.registerForm.mobile.match(/^1[0-9]{10}$/)?e.axios(e.qdsGlobalApiUrl+"notValidate/getRegisterSignCode",{method:"post",params:{mobile:e.registerForm.mobile}}).then(function(t){if(1==t.data.success){e.timer||(e.count=60,e.show=!1,e.timer=setInterval(function(){e.count>0&&e.count<=60?e.count--:(e.show=!0,clearInterval(e.timer),e.timer=null)},1e3)),Object(a.b)({message:"发送成功",duration:1500,background:"#20D3B3"})}else e.timer=null,Object(a.b)({message:t.data.message,duration:3e3,background:"#FF6262"})}).catch(function(t){e.timer=null}):Object(a.b)({message:"手机号格式不正确",duration:3e3,type:"warning",background:"#E6A23C"})},showChangePhoneSure:function(){var e=i.a.getCookie("qdsMToken"),t=this;if(""==t.registerForm.mobile)Object(a.b)({message:"请输入手机号",duration:3e3,background:"#E6A23C"});else if(t.registerForm.mobile.match(/^1[0-9]{10}$/)){if(""==t.registerForm.smsCode)return Object(a.b)({message:"请输入验证码",duration:3e3,background:"#E6A23C"}),!1;t.loading=!0,t.axios(t.qdsGlobalApiUrl+"changeMobiles?token="+e,{method:"post",params:{newMobile:t.registerForm.mobile,smsCode:t.registerForm.smsCode,flage:"stepOne"},timeout:1e4}).then(function(e){"200"==e.data.code?(t.loading=!1,Object(s.MessageBox)({title:"提示",message:"修改成功后, 您登陆的手机号将发生改变，是否继续修改？",showCancelButton:!0}).then(function(e){"confirm"==e&&t.changePhoneSure()}).catch(function(e){})):"411"==e.data.code?(t.loading=!1,Object(a.b)({message:"验证码输入错误，请重新输入",duration:3e3,background:"#E6A23C"})):"412"==e.data.code?(t.loading=!1,Object(a.b)({message:"该手机号已经绑定用户名，不能再做修改",duration:3e3,background:"#E6A23C"})):(t.loading=!1,Object(a.b)({message:e.data.message,duration:3e3,background:"#E6A23C"}))}).catch(function(e){t.loading=!1})}else Object(a.b)({message:"手机号格式不正确",duration:3e3,background:"#E6A23C"})},changePhoneSure:function(){var e=i.a.getCookie("qdsMToken"),t=this;t.loading=!0,t.axios(t.qdsGlobalApiUrl+"changeMobiles?token="+e,{method:"post",params:{newMobile:t.registerForm.mobile,smsCode:t.registerForm.smsCode,flage:"stepTwo"},timeout:1e4}).then(function(e){"200"==e.data.code?(t.loading=!1,Object(a.b)({message:"成功修改绑定手机号",duration:3e3,background:"#20D3B3"}),setTimeout(function(){-1==location.href.indexOf("m.qh.uat.youlanw.com")?(document.cookie="qdsToken=;path=/",sessionStorage.removeItem("qdsCertificationStatus"),localStorage.removeItem("qdsSCorpUserId"),t.$router.push({path:"/"})):(document.cookie="qdsToken=;domain=m.qh.uat.youlanw.com;path=/",sessionStorage.removeItem("qdsCertificationStatus"),localStorage.removeItem("qdsSCorpUserId"),t.$router.push({path:"/"}))},1100)):(e.data.code,t.loading=!1,Object(a.b)({message:e.data.message,duration:3e3,background:"#FF6262"}))}).catch(function(e){t.loading=!1,Object(a.b)({message:"修改手机号操作异常，请联系客服021-22876396",duration:2e3,type:"error",background:"#FF6262"})})}}},f={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"register-page input-border-none self-mt-header",style:e.clientHeight},[o("header",{staticClass:"post-head"},[o("a",{staticClass:"back",attrs:{href:"javascript:;"},on:{click:e.backHistory}}),e._v(" "),o("span",{staticClass:"head-font"},[e._v("换绑手机")])]),e._v(" "),o("div",{staticClass:"title-logo"}),e._v(" "),o("div",{staticClass:"register-box"},[o("el-form",{ref:"ruleRegister",staticClass:"demo-ruleForm",attrs:{model:e.registerForm,"status-icon":"",rules:e.ruleRegister}},[o("div",{staticClass:"items-line"},[o("img",{attrs:{src:e.loginPhone,alt:""}}),e._v(" "),o("el-form-item",{attrs:{label:"",prop:"mobile"}},[o("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"请输入手机号码",maxlength:"11"},model:{value:e.registerForm.mobile,callback:function(t){e.$set(e.registerForm,"mobile","string"==typeof t?t.trim():t)},expression:"registerForm.mobile"}})],1)],1),e._v(" "),o("div",{staticClass:"items-line"},[o("img",{attrs:{src:e.registerCode,alt:""}}),e._v(" "),o("el-input",{attrs:{placeholder:"请输入验证码"},model:{value:e.registerForm.smsCode,callback:function(t){e.$set(e.registerForm,"smsCode","string"==typeof t?t.trim():t)},expression:"registerForm.smsCode"}},[o("template",{slot:"append"},[o("span",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],on:{click:e.getValidateCode}},[e._v("获取验证码")]),e._v(" "),o("span",{directives:[{name:"show",rawName:"v-show",value:!e.show,expression:"!show"}]},[e._v("重新获取 "+e._s(e.count)+" S")])])],2)],1)])],1),e._v(" "),o("div",{staticClass:"zhanwei"}),e._v(" "),o("div",{staticClass:"login-btn-box"},[o("span",{on:{click:e.showChangePhoneSure}},[e._v("确认")])])])},staticRenderFns:[]};var v=o("VU/8")(p,f,!1,function(e){o("8moP")},"data-v-b1f3085e",null);t.default=v.exports}});
//# sourceMappingURL=12.9f1776834a61740d90f2.1554207390350.js.map