webpackJsonp([18],{"0mdK":function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=t("uJNG"),o=t("Fd2+"),s=(t("Au9i"),t("6xvc"),{data:function(){return{globalApiUrl:domain.testUrl,ossGlobalApiUrl:domain.ossDomain,qdsGlobalApiUrl:domain.qdsDomain,loading:!1,ruleCompanyAuth:{userDataName:"",chanceUserSex:"",userDataPost:"",userDataEmail:"",userDataWx:"",userDataQq:"",userDataSinaWb:"",companyName:"",companyCode:"",companyAddress:"",companyStartBank:"",companyBankAccount:""},disabled:{userDataName:!0,chanceUserSex:!0,userDataPost:!0,userDataEmail:!0,userDataQq:!0,userDataWx:!0,userDataSinaWb:!0,companyName:!0,companyCode:!0,companyAddress:!0,companyStartBank:!0,companyBankAccount:!0},sexColumns:["男","女"],showSex:!1,clientHeight:{height:""},btnText:"编辑"}},mounted:function(){this.getUserBasicData(),this.getChannelUserInvoice()},components:{},created:function(){window.addEventListener("resize",this.getHeight),this.getHeight()},destroyed:function(){window.removeEventListener("resize",this.getHeight)},methods:{backHistory:function(){window.history.back(-1)},getHeight:function(){this.clientHeight.height=window.innerHeight-0+"px"},selectSex:function(){if(this.disabled.chanceUserSex)return!1;this.showSex=!0},sexConfirm:function(a,e){this.showSex=!1,this.ruleCompanyAuth.chanceUserSex=a},sexCancel:function(){this.showSex=!1},getUserBasicData:function(){var a=this,e=n.a.getCookie("qdsMToken");a.axios(a.qdsGlobalApiUrl+"getChannelUser?token="+e,{method:"post",timeout:1e4}).then(function(e){"200"==e.data.code?(e.data.entity.userName&&(a.ruleCompanyAuth.userDataName=e.data.entity.userName),e.data.entity.gender&&(1==e.data.entity.gender?a.ruleCompanyAuth.chanceUserSex="男":2==e.data.entity.gender&&(a.ruleCompanyAuth.chanceUserSex="女")),e.data.entity.position&&(a.ruleCompanyAuth.userDataPost=e.data.entity.position),e.data.entity.email&&(a.ruleCompanyAuth.userDataEmail=e.data.entity.email),e.data.entity.wechatName&&(a.ruleCompanyAuth.userDataWx=e.data.entity.wechatName),e.data.entity.qqName&&(a.ruleCompanyAuth.userDataQq=e.data.entity.qqName),e.data.entity.blogName&&(a.ruleCompanyAuth.userDataSinaWb=e.data.entity.blogName)):Object(o.b)({message:"获取用户基础数据失败",duration:2e3,background:"#FF6262"})}).catch(function(a){})},getChannelUserInvoice:function(){var a=n.a.getCookie("qdsMToken"),e=this;e.axios(e.qdsGlobalApiUrl+"getChannelUserInvoice?token="+a,{methods:"post",timeout:1e4}).then(function(a){"200"==a.data.code?(a.data.entity.companyName&&(e.ruleCompanyAuth.companyName=a.data.entity.companyName),a.data.entity.companyCode&&(e.ruleCompanyAuth.companyCode=a.data.entity.companyCode),a.data.entity.companyAddress&&(e.ruleCompanyAuth.companyAddress=a.data.entity.companyAddress),a.data.entity.companyPhone&&(e.ruleCompanyAuth.companyPhone=a.data.entity.companyPhone),a.data.entity.companyStartBank&&(e.ruleCompanyAuth.companyStartBank=a.data.entity.companyStartBank),a.data.entity.companyBankAccount&&(e.ruleCompanyAuth.companyBankAccount=a.data.entity.companyBankAccount)):Object(o.b)({message:"获取发票信息失败",duration:2e3,color:"FF6262"})}).catch(function(a){})},saveInfor:function(){"编辑"==this.btnText?(this.btnText="保存",this.disabled={userDataName:!1,chanceUserSex:!1,userDataPost:!1,userDataEmail:!1,userDataQq:!1,userDataSinaWb:!1,companyName:!1,companyCode:!1,companyAddress:!1,companyStartBank:!1,companyBankAccount:!1}):"保存"==this.btnText&&this.userDataSave()},userDataSave:function(){var a=this,e=n.a.getCookie("qdsMToken");if(""==a.ruleCompanyAuth.userDataName)return Object(o.b)({message:"姓名仅允许汉字与字母",duration:3e3,background:"#E6A23C"}),!1;if(!/^[a-zA-Z\u4e00-\u9fa5]+$/.test(a.ruleCompanyAuth.userDataName))return Object(o.b)({message:"姓名仅允许汉字与字母",duration:3e3,background:"#E6A23C"}),!1;if(a.ruleCompanyAuth.userDataQq.length>0&&!/^[1-9]\d*$/.test(a.ruleCompanyAuth.userDataQq))return Object(o.b)({message:"请填写正确的QQ号格式",duration:3e3,background:"#E6A23C"}),!1;if(0==a.ruleCompanyAuth.companyName.length)return Object(o.b)({message:"请填写企业名称",duration:3e3,background:"#E6A23C"}),!1;if(0==a.ruleCompanyAuth.companyCode.length)return Object(o.b)({message:"请填写纳税人识别号",duration:3e3,background:"#E6A23C"}),!1;if(15!=a.ruleCompanyAuth.companyCode.length&&18!=a.ruleCompanyAuth.companyCode.length&&20!=a.ruleCompanyAuth.companyCode.length)return Object(o.b)({message:"纳税人识别号仅支持15、18、20位",duration:3e3,background:"#E6A23C"}),!1;if(!/^[A-Za-z0-9]+$/.test(a.ruleCompanyAuth.companyCode))return Object(o.b)({message:"纳税人识别号仅支持数字或字母",duration:3e3,background:"#E6A23C"}),!1;var t="";t="男"==a.ruleCompanyAuth.chanceUserSex?1:"女"==a.ruleCompanyAuth.chanceUserSex?2:0,a.axios(a.qdsGlobalApiUrl+"updateChannelUserInfo?token="+e,{method:"post",params:{userName:a.ruleCompanyAuth.userDataName,gender:t,position:a.ruleCompanyAuth.userDataPost,email:a.ruleCompanyAuth.userDataEmail,wechatName:a.ruleCompanyAuth.userDataWx,qqName:a.ruleCompanyAuth.userDataQq,blogName:a.ruleCompanyAuth.userDataSinaWb},timeout:1e4}).then(function(e){"200"==e.data.code||Object(o.b)({message:"基础信息保存失败",duration:3e3,background:"#FF6262"}),a.accountBasicSave()}).catch(function(e){a.accountBasicSave()})},accountBasicSave:function(){var a=n.a.getCookie("qdsMToken"),e=this;e.axios(e.qdsGlobalApiUrl+"addChannelUserInvoice?token="+a,{methods:"post",params:{companyName:e.ruleCompanyAuth.companyName,companyCode:e.ruleCompanyAuth.companyCode,companyAddress:e.ruleCompanyAuth.companyAddress,companyPhone:e.ruleCompanyAuth.companyPhone,companyStartBank:e.ruleCompanyAuth.companyStartBank,companyBankAccount:e.ruleCompanyAuth.companyBankAccount},timeout:1e4}).then(function(a){"200"==a.data.code?(e.btnText="编辑",Object(o.b)({message:"保存成功",duration:2e3,background:"#20D3B3"}),e.getChannelUserInvoice()):(Object(o.b)({message:"保存发票信息失败",duration:2e3,background:"#FF6262"}),e.btnText="编辑"),e.disabled={userDataName:!0,chanceUserSex:!0,userDataPost:!0,userDataEmail:!0,userDataQq:!0,userDataWx:!0,userDataSinaWb:!0,companyName:!0,companyCode:!0,companyAddress:!0,companyStartBank:!0,companyBankAccount:!0},window.history.back(-1)}).catch(function(a){e.disabled={userDataName:!0,chanceUserSex:!0,userDataPost:!0,userDataEmail:!0,userDataQq:!0,userDataWx:!0,userDataSinaWb:!0,companyName:!0,companyCode:!0,companyAddress:!0,companyStartBank:!0,companyBankAccount:!0},window.history.back(-1)})}}}),r={render:function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:a.loading,expression:"loading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"newCustomer-page input-border-none self-mt-header self-vant-file ",staticStyle:{width:"100%"},attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"hsla(0,0%,100%,.7)"}},[t("header",{staticClass:"post-head"},[t("a",{staticClass:"back",attrs:{href:"javascript:;"},on:{click:a.backHistory}}),a._v(" "),t("span",{staticClass:"head-font"},[a._v("基本信息")])]),a._v(" "),t("div",{staticClass:"zhanwei"}),a._v(" "),t("div",{staticClass:"infor-write"},[t("div",[t("van-cell-group",[t("div",{staticClass:"item-file"},[t("van-field",{attrs:{required:"",disabled:a.disabled.userDataName,clearable:"",label:"姓名",placeholder:"请输入姓名"},model:{value:a.ruleCompanyAuth.userDataName,callback:function(e){a.$set(a.ruleCompanyAuth,"userDataName","string"==typeof e?e.trim():e)},expression:"ruleCompanyAuth.userDataName"}})],1),a._v(" "),t("div",{staticClass:"item-file"},[t("div",{staticClass:"item-file-child",on:{click:a.selectSex}}),a._v(" "),t("van-field",{attrs:{disabled:"",clearable:"",label:"性别","right-icon":"arrow",placeholder:"请选择性别"},on:{"click-right-icon":a.selectSex},model:{value:a.ruleCompanyAuth.chanceUserSex,callback:function(e){a.$set(a.ruleCompanyAuth,"chanceUserSex","string"==typeof e?e.trim():e)},expression:"ruleCompanyAuth.chanceUserSex"}})],1),a._v(" "),t("div",{staticClass:"item-file"},[t("van-field",{attrs:{disabled:a.disabled.userDataPost,clearable:"",label:"职位",placeholder:"请输入职位"},model:{value:a.ruleCompanyAuth.userDataPost,callback:function(e){a.$set(a.ruleCompanyAuth,"userDataPost","string"==typeof e?e.trim():e)},expression:"ruleCompanyAuth.userDataPost"}})],1),a._v(" "),t("div",{staticClass:"item-file"},[t("van-field",{attrs:{disabled:a.disabled.userDataEmail,clearable:"",label:"邮箱",placeholder:"请输入邮箱"},model:{value:a.ruleCompanyAuth.userDataEmail,callback:function(e){a.$set(a.ruleCompanyAuth,"userDataEmail","string"==typeof e?e.trim():e)},expression:"ruleCompanyAuth.userDataEmail"}})],1),a._v(" "),t("div",{staticClass:"item-file"},[t("van-field",{attrs:{disabled:a.disabled.userDataWx,clearable:"",label:"微信",placeholder:"请输入微信号"},model:{value:a.ruleCompanyAuth.userDataWx,callback:function(e){a.$set(a.ruleCompanyAuth,"userDataWx","string"==typeof e?e.trim():e)},expression:"ruleCompanyAuth.userDataWx"}})],1),a._v(" "),t("div",{staticClass:"item-file"},[t("van-field",{attrs:{disabled:a.disabled.userDataQq,clearable:"",label:"QQ",placeholder:"请输入QQ号"},model:{value:a.ruleCompanyAuth.userDataQq,callback:function(e){a.$set(a.ruleCompanyAuth,"userDataQq","string"==typeof e?e.trim():e)},expression:"ruleCompanyAuth.userDataQq"}})],1),a._v(" "),t("div",{staticClass:"item-file"},[t("van-field",{staticClass:"weibo",attrs:{disabled:a.disabled.userDataSinaWb,clearable:"",label:"新浪微博",placeholder:"请输入新浪微博"},model:{value:a.ruleCompanyAuth.userDataSinaWb,callback:function(e){a.$set(a.ruleCompanyAuth,"userDataSinaWb","string"==typeof e?e.trim():e)},expression:"ruleCompanyAuth.userDataSinaWb"}})],1),a._v(" "),t("div",{staticClass:"bg"}),a._v(" "),t("div",{staticClass:"bg-title"},[t("p",[a._v("发票信息")])]),a._v(" "),t("div",{staticClass:"item-file"},[t("van-field",{attrs:{required:"",disabled:a.disabled.companyName,clearable:"",label:"公司名称",placeholder:"请输入公司名称"},model:{value:a.ruleCompanyAuth.companyName,callback:function(e){a.$set(a.ruleCompanyAuth,"companyName","string"==typeof e?e.trim():e)},expression:"ruleCompanyAuth.companyName"}})],1),a._v(" "),t("div",{staticClass:"item-file"},[t("van-field",{attrs:{required:"",disabled:a.disabled.companyCode,clearable:"",label:"税号",placeholder:"请输入税号"},model:{value:a.ruleCompanyAuth.companyCode,callback:function(e){a.$set(a.ruleCompanyAuth,"companyCode","string"==typeof e?e.trim():e)},expression:"ruleCompanyAuth.companyCode"}})],1),a._v(" "),t("div",{staticClass:"item-file"},[t("van-field",{attrs:{disabled:a.disabled.companyAddress,clearable:"",label:"地址",placeholder:"请输入地址"},model:{value:a.ruleCompanyAuth.companyAddress,callback:function(e){a.$set(a.ruleCompanyAuth,"companyAddress","string"==typeof e?e.trim():e)},expression:"ruleCompanyAuth.companyAddress"}})],1),a._v(" "),t("div",{staticClass:"item-file"},[t("van-field",{attrs:{disabled:a.disabled.companyStartBank,clearable:"",label:"开户行",placeholder:"请输入开户行"},model:{value:a.ruleCompanyAuth.companyStartBank,callback:function(e){a.$set(a.ruleCompanyAuth,"companyStartBank","string"==typeof e?e.trim():e)},expression:"ruleCompanyAuth.companyStartBank"}})],1),a._v(" "),t("div",{staticClass:"item-file"},[t("van-field",{attrs:{disabled:a.disabled.companyBankAccount,clearable:"",label:"开户行账号",placeholder:"请输入开户行账号"},model:{value:a.ruleCompanyAuth.companyBankAccount,callback:function(e){a.$set(a.ruleCompanyAuth,"companyBankAccount","string"==typeof e?e.trim():e)},expression:"ruleCompanyAuth.companyBankAccount"}})],1)])],1),a._v(" "),t("div",{staticClass:"zhanwei-bottom"}),a._v(" "),t("div",{staticClass:"stepTwo"},[t("div",{staticClass:"next-one",on:{click:a.saveInfor}},[t("p",[a._v(a._s(a.btnText))])])]),a._v(" "),t("van-picker",{directives:[{name:"show",rawName:"v-show",value:a.showSex,expression:"showSex"}],staticClass:"fixed-pop",attrs:{columns:a.sexColumns,"show-toolbar":"",title:"性别"},on:{cancel:a.sexCancel,confirm:a.sexConfirm}})],1)])},staticRenderFns:[]};var i=t("VU/8")(s,r,!1,function(a){t("qW2v")},"data-v-325e031a",null);e.default=i.exports},qW2v:function(a,e){}});
//# sourceMappingURL=18.564b958972d75f595e20.1554212398490.js.map