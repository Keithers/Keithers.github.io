webpackJsonp([16],{"1+wR":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o=t("uJNG"),n=t("Fd2+"),s=(t("Au9i"),t("6xvc")),l={data:function(){return{globalApiUrl:domain.testUrl,ossGlobalApiUrl:domain.ossDomain,qdsGlobalApiUrl:domain.qdsDomain,loading:!1,ruleCompanyAuth:{companyAllName:"",companyTitle:"",companyCode:"",selecteCity:"",companyAddress:"",companysSize:"",companysNature:"",companyIndustry:"",companyWorkCont:"",businessLicenseImg:"http://ylsite.oss-cn-hangzhou.aliyuncs.com/oms/businessLicenseImg/2019/3/25/18945_1553512616000.png",companyLogo:"",surfacePlotImg:"",liveActionsImg:[],firstOrder:[]},companyLogo:[],surfacePlotImg:[],disabled:{companyAllName:!0,companyTitle:!0,companyCode:!0,selecteCity:!0,companyAddress:!0,companysSize:!0,companysNature:!0,companyIndustry:!0,companyWorkCont:!0,businessLicenseImg:!0,companyLogo:!0,surfacePlotImg:!0,liveActionsImg:!0,firstOrder:!0},state:2,customerId:"",showTextarea:!1,qdsAuthState:"",clientHeight:{height:""},selfLoading:!1}},mounted:function(){this.state=localStorage.getItem("qdsMcustomerStateValue"),this.customerId=localStorage.getItem("qdsMcustomerCustomerId"),this.recertification()},components:{},created:function(){window.addEventListener("resize",this.getHeight),this.getHeight()},destroyed:function(){window.removeEventListener("resize",this.getHeight)},methods:{backHistory:function(){window.history.back(-1)},cancelLoading:function(){this.selfLoading=!1},errorsBtn:function(){this.selfLoading=!0},getHeight:function(){this.clientHeight.height=window.innerHeight-0+"px"},beforeRouteLeave:function(e,a,t){e.meta.keepAlive=!0,t()},textareaBackList:function(){this.showTextarea=!1},getTextarea:function(){this.showTextarea=!0},getPreview:function(e){Object(n.a)({images:e,showIndex:!0,showIndicators:!0,loop:!1,className:"del",onClose:function(){}})},recertification:function(){var e=this,a=o.a.getCookie("qdsMToken");e.axios(e.qdsGlobalApiUrl+"ylw/qhChannelCorp/api/getCustomerInfo?token="+a,{method:"get",params:{customerCorpId:e.customerId,status:e.state}}).then(function(a){if(1e4==a.data.code){var t=a.data.data.customerInfo;e.provinceVal=t.provinceCode,e.cityVal=t.cityCode,e.countyVal=t.countyCode;var o=s.a.getName(t.provinceCode),l=s.a.getName(t.cityCode),i=s.a.getName(t.countyCode),r="",c="",m="";s.e.forEach(function(a,o){a.code==t.enterpriseScaleCode&&(r=a.name,e.chanceScaleCode=t.enterpriseScaleCode)}),s.c.forEach(function(a,o){a.code==t.companyNatureCode&&(c=a.value,e.chanceNatureCode=t.companyNatureCode)}),s.f.forEach(function(a,o){a.code==t.industryCode&&(m=a.name,e.chanceIndustryCode=t.industryCode)});var d=a.data.data.photos,u=d.attachmentUrl.split(",");e.ruleCompanyAuth={id:t.id,corpCode:t.corpCode,companyAllName:t.corpName,companyTitle:t.shortName,companyCode:t.creditCode,selecteCity:o+"/"+l+"/"+i,companyAddress:t.address,companysSize:r,companysNature:c,companyIndustry:m,companyWorkCont:t.businessScope,businessLicenseImg:d.businessLicenceUrl,companyLogo:d.logoUrl,surfacePlotImg:d.coverUrl,liveActionsImg:d.environmentUrl,firstOrder:u},e.companyLogo.push(e.ruleCompanyAuth.companyLogo),e.surfacePlotImg.push(e.ruleCompanyAuth.surfacePlotImg)}else Object(n.b)({message:a.data.message,duration:3e3,background:"#E6A23C"})}).catch(function(e){})}}},i={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.loading,expression:"loading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"newCustomer-page input-border-none self-mt-header",staticStyle:{width:"100%"},attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"hsla(0,0%,100%,.7)"}},[t("header",{directives:[{name:"show",rawName:"v-show",value:!e.showTextarea,expression:"!showTextarea"}],staticClass:"post-head"},[t("a",{staticClass:"back",attrs:{href:"javascript:;"},on:{click:e.backHistory}}),e._v(" "),t("span",{staticClass:"head-font"},[e._v("客户详情")])]),e._v(" "),t("header",{directives:[{name:"show",rawName:"v-show",value:e.showTextarea,expression:"showTextarea"}],staticClass:"post-head"},[t("a",{staticClass:"back",attrs:{href:"javascript:;"},on:{click:e.textareaBackList}}),e._v(" "),t("span",{staticClass:"head-font"},[e._v("企业简介")])]),e._v(" "),t("div",{staticClass:"zhanwei"}),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.showTextarea,expression:"!showTextarea"}],staticClass:"infor-write"},[t("div",[t("van-cell-group",[t("van-field",{attrs:{disabled:e.disabled.companyAllName,clearable:"",label:"企业全称",placeholder:"请输入企业全称"},model:{value:e.ruleCompanyAuth.companyAllName,callback:function(a){e.$set(e.ruleCompanyAuth,"companyAllName",a)},expression:"ruleCompanyAuth.companyAllName"}}),e._v(" "),t("van-field",{attrs:{disabled:e.disabled.companyTitle,clearable:"",label:"企业简称",placeholder:"请输入企业简称"},model:{value:e.ruleCompanyAuth.companyTitle,callback:function(a){e.$set(e.ruleCompanyAuth,"companyTitle",a)},expression:"ruleCompanyAuth.companyTitle"}}),e._v(" "),t("van-field",{attrs:{disabled:e.disabled.companyCode,clearable:"",label:"社会信用代码",placeholder:"请输入统一社会信用代码"},model:{value:e.ruleCompanyAuth.companyCode,callback:function(a){e.$set(e.ruleCompanyAuth,"companyCode",a)},expression:"ruleCompanyAuth.companyCode"}}),e._v(" "),t("van-field",{attrs:{disabled:"",clearable:"",label:"企业地址",placeholder:"请输入企业地址"},model:{value:e.ruleCompanyAuth.selecteCity,callback:function(a){e.$set(e.ruleCompanyAuth,"selecteCity",a)},expression:"ruleCompanyAuth.selecteCity"}}),e._v(" "),t("van-field",{attrs:{disabled:e.disabled.companyAddress,clearable:"",label:"详细地址",placeholder:"请输入详细地址"},model:{value:e.ruleCompanyAuth.companyAddress,callback:function(a){e.$set(e.ruleCompanyAuth,"companyAddress",a)},expression:"ruleCompanyAuth.companyAddress"}}),e._v(" "),t("van-field",{attrs:{disabled:"",clearable:"",label:"企业规模",placeholder:"请选择企业规模"},model:{value:e.ruleCompanyAuth.companysSize,callback:function(a){e.$set(e.ruleCompanyAuth,"companysSize",a)},expression:"ruleCompanyAuth.companysSize"}}),e._v(" "),t("van-field",{attrs:{disabled:"",clearable:"",label:"企业性质",placeholder:"请选择企业性质"},model:{value:e.ruleCompanyAuth.companysNature,callback:function(a){e.$set(e.ruleCompanyAuth,"companysNature",a)},expression:"ruleCompanyAuth.companysNature"}}),e._v(" "),t("van-field",{attrs:{disabled:"",clearable:"",label:"所属行业",placeholder:"其选择所属行业"},model:{value:e.ruleCompanyAuth.companyIndustry,callback:function(a){e.$set(e.ruleCompanyAuth,"companyIndustry",a)},expression:"ruleCompanyAuth.companyIndustry"}}),e._v(" "),t("van-field",{attrs:{disabled:"",clearable:"",label:"企业简介","right-icon":"arrow",placeholder:"企业简介"},on:{"click-right-icon":e.getTextarea},model:{value:e.ruleCompanyAuth.companyWorkCont,callback:function(a){e.$set(e.ruleCompanyAuth,"companyWorkCont",a)},expression:"ruleCompanyAuth.companyWorkCont"}})],1)],1),e._v(" "),t("div",{staticClass:"stepTwo"},[t("div",{staticClass:"img-item"},[t("p",[e._v("企业LOGO")]),e._v(" "),t("div",[""!=e.ruleCompanyAuth.companyLogo?t("img",{attrs:{src:e.ruleCompanyAuth.companyLogo,alt:""},on:{click:function(a){return e.getPreview(e.companyLogo)}}}):e._e()])]),e._v(" "),t("div",{staticClass:"img-item"},[t("p",[e._v("企业封面图")]),e._v(" "),t("div",[""!=e.ruleCompanyAuth.surfacePlotImg?t("img",{attrs:{src:e.ruleCompanyAuth.surfacePlotImg,alt:""},on:{click:function(a){return e.getPreview(e.surfacePlotImg)}}}):e._e()])]),e._v(" "),t("div",{staticClass:"img-item"},[t("p",[e._v("企业实景图")]),e._v(" "),t("div",[e.ruleCompanyAuth.liveActionsImg.length>0?t("img",{class:e.ruleCompanyAuth.liveActionsImg.length>1?"shadow-img":"",attrs:{src:e.ruleCompanyAuth.liveActionsImg[0],alt:""},on:{click:function(a){return e.getPreview(e.ruleCompanyAuth.liveActionsImg)}}}):e._e()])]),e._v(" "),t("div",{staticClass:"img-item"},[t("p",[e._v("与客户合作协议")]),e._v(" "),t("div",[e.ruleCompanyAuth.firstOrder.length>0?t("img",{class:e.ruleCompanyAuth.firstOrder.length>1?"shadow-img":"",attrs:{src:e.ruleCompanyAuth.firstOrder[0],alt:""},on:{click:function(a){return e.getPreview(e.ruleCompanyAuth.firstOrder)}}}):e._e()])]),e._v(" "),t("div",{staticClass:"zhanwei-bottom"}),e._v(" "),t("div",{staticClass:"next-one"},[t("p",{on:{click:e.errorsBtn}},[e._v("报错")])])])]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.showTextarea,expression:"showTextarea"}],staticClass:"text-box"},[t("div",{staticClass:"zhanwei-top"}),e._v(" "),t("mt-field",{staticClass:"text_area",attrs:{placeholder:"请填写企业简介",disabled:e.disabled.companyWorkCont,type:"textarea",rows:"4"},model:{value:e.ruleCompanyAuth.companyWorkCont,callback:function(a){e.$set(e.ruleCompanyAuth,"companyWorkCont",a)},expression:"ruleCompanyAuth.companyWorkCont"}}),e._v(" "),e._m(0)],1),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.selfLoading,expression:"selfLoading"}],staticClass:"errors"},[t("div",{staticClass:"errors-item"},[t("p",{staticClass:"phone-num"},[e._v("021-22876396")]),e._v(" "),t("div",{staticClass:"errors-item-btn"},[t("p",{on:{click:e.cancelLoading}},[e._v("取消")]),e._v(" "),t("p",{on:{click:e.cancelLoading}},[t("a",{attrs:{href:"tel:021-22876396"}},[e._v("呼叫")])])])])])])},staticRenderFns:[function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"textarea-tips"},[a("p",[this._v("不要填写电话、QQ、微信等联系方式")])])}]};var r=t("VU/8")(l,i,!1,function(e){t("xVmI")},"data-v-6016fcc8",null);a.default=r.exports},xVmI:function(e,a){}});
//# sourceMappingURL=16.e1dda87298c502ee3cb2.1554212049988.js.map