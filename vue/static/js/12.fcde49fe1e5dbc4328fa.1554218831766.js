webpackJsonp([12],{X49o:function(e,a){},vRyh:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o=t("uJNG"),n=t("Fd2+"),s=(t("Au9i"),t("qF5R")),i=t.n(s),r=t("6xvc"),l={data:function(){return{globalApiUrl:domain.testUrl,ossGlobalApiUrl:domain.ossDomain,qdsGlobalApiUrl:domain.qdsDomain,loading:!1,ruleCompanyAuth:{companyAllName:"",companyTitle:"",companyCode:"",selecteCity:"",companyAddress:"",companysSize:"",companysNature:"",companyIndustry:"",companyWorkCont:"",businessLicenseImg:"http://ylsite.oss-cn-hangzhou.aliyuncs.com/oms/businessLicenseImg/2019/3/25/18945_1553512616000.png",companyLogo:"",surfacePlotImg:"",liveActionsImg:[],firstOrder:[]},businessLicenseImg:[],disabled:{companyAllName:!0,companyTitle:!0,companyCode:!0,selecteCity:!0,companyAddress:!0,companysSize:!0,companysNature:!0,companyIndustry:!0,companyWorkCont:!0,businessLicenseImg:!0,companyLogo:!0,surfacePlotImg:!0,liveActionsImg:!0,firstOrder:!0},state:2,customerId:"",showTextarea:!1,qdsAuthState:"",clientHeight:{height:""},selfLoading:!1,firstOrderFile:"",textBg:i.a}},mounted:function(){this.state=localStorage.getItem("qdsMcustomerStateValue"),this.customerId=localStorage.getItem("qdsMcustomerCustomerId"),this.recertification()},components:{},created:function(){window.addEventListener("resize",this.getHeight),this.getHeight()},destroyed:function(){window.removeEventListener("resize",this.getHeight)},methods:{backHistory:function(){window.history.back(-1)},getHeight:function(){this.clientHeight.height=window.innerHeight-0+"px"},beforeRouteLeave:function(e,a,t){e.meta.keepAlive=!0,t()},cancelLoading:function(){this.selfLoading=!1},errorsBtn:function(){this.selfLoading=!0},textareaBackList:function(){this.showTextarea=!1},getTextarea:function(){this.showTextarea=!0},getPreview:function(e){Object(n.a)({images:e,showIndex:!0,showIndicators:!0,loop:!1,className:"del",onClose:function(){}})},recertification:function(){var e=this,a=o.a.getCookie("qdsMToken");e.axios(e.qdsGlobalApiUrl+"ylw/qhChannelCorp/api/getChannelInfoByUserId?token="+a,{method:"get"}).then(function(a){if(1e4==a.data.code){var t=a.data.data.corpInfo;e.provinceVal=t.provinceCode,e.cityVal=t.cityCode,e.countyVal=t.countyCode;var o=r.a.getName(t.provinceCode),s=r.a.getName(t.cityCode),i=r.a.getName(t.countyCode),l="",c="",d="";r.e.forEach(function(a,o){a.code==t.enterpriseScaleCode&&(l=a.name,e.chanceScaleCode=t.enterpriseScaleCode)}),r.c.forEach(function(a,o){a.code==t.companyNatureCode&&(c=a.value,e.chanceNatureCode=t.companyNatureCode)}),r.f.forEach(function(a,o){a.code==t.industryCode&&(d=a.name,e.chanceIndustryCode=t.industryCode)});var m=a.data.data.photos;if(-1==[null,void 0,""].indexOf(m.attachmentUrl)){var u=m.attachmentUrl.split("."),p=u[u.length-1];if(-1=="gif|jpg|jpeg|png|bmp|GIF|JPG|PNG".indexOf(p)){e.firstOrderFile=e.textBg;var h=[]}else if(-1!==m.attachmentUrl.indexOf(","))h=m.attachmentUrl.split(",");else h=[m.attachmentUrl]}e.ruleCompanyAuth={id:t.id,corpCode:t.corpCode,companyAllName:t.corpName,companyTitle:t.shortName,companyCode:t.creditCode,selecteCity:o+"/"+s+"/"+i,companyAddress:t.address,companysSize:l,companysNature:c,companyIndustry:d,companyWorkCont:t.businessScope,businessLicenseImg:m.businessLicenceUrl,companyLogo:m.logoUrl,surfacePlotImg:m.coverUrl,liveActionsImg:m.environmentUrls,firstOrder:h},e.businessLicenseImg.push(e.ruleCompanyAuth.businessLicenseImg)}else Object(n.b)({message:a.data.message,duration:3e3,background:"#E6A23C"})}).catch(function(e){})}}},c={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.loading,expression:"loading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"newCustomer-page input-border-none self-mt-header",staticStyle:{width:"100%"},attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"hsla(0,0%,100%,.7)"}},[t("header",{staticClass:"post-head"},[t("a",{staticClass:"back",attrs:{href:"javascript:;"},on:{click:e.backHistory}}),e._v(" "),t("span",{staticClass:"head-font"},[e._v("企业信息")])]),e._v(" "),t("header",{directives:[{name:"show",rawName:"v-show",value:e.showTextarea,expression:"showTextarea"}],staticClass:"post-head"},[t("a",{staticClass:"back",attrs:{href:"javascript:;"},on:{click:e.textareaBackList}}),e._v(" "),t("span",{staticClass:"head-font"},[e._v("企业简介")])]),e._v(" "),t("div",{staticClass:"zhanwei"}),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.showTextarea,expression:"!showTextarea"}],staticClass:"infor-write"},[t("div",[t("van-cell-group",[t("van-field",{attrs:{required:"",disabled:e.disabled.companyAllName,clearable:"",label:"企业全称",placeholder:"请输入企业全称"},model:{value:e.ruleCompanyAuth.companyAllName,callback:function(a){e.$set(e.ruleCompanyAuth,"companyAllName","string"==typeof a?a.trim():a)},expression:"ruleCompanyAuth.companyAllName"}}),e._v(" "),t("van-field",{attrs:{required:"",disabled:e.disabled.companyTitle,clearable:"",label:"企业简称",placeholder:"请输入企业简称"},model:{value:e.ruleCompanyAuth.companyTitle,callback:function(a){e.$set(e.ruleCompanyAuth,"companyTitle","string"==typeof a?a.trim():a)},expression:"ruleCompanyAuth.companyTitle"}}),e._v(" "),t("van-field",{attrs:{required:"",disabled:e.disabled.companyCode,clearable:"",label:"社会信用代码",placeholder:"请输入统一社会信用代码"},model:{value:e.ruleCompanyAuth.companyCode,callback:function(a){e.$set(e.ruleCompanyAuth,"companyCode","string"==typeof a?a.trim():a)},expression:"ruleCompanyAuth.companyCode"}}),e._v(" "),t("van-field",{attrs:{required:"",disabled:"",clearable:"",label:"企业地址",placeholder:"请输入企业地址"},model:{value:e.ruleCompanyAuth.selecteCity,callback:function(a){e.$set(e.ruleCompanyAuth,"selecteCity","string"==typeof a?a.trim():a)},expression:"ruleCompanyAuth.selecteCity"}}),e._v(" "),t("van-field",{attrs:{required:"",disabled:e.disabled.companyAddress,clearable:"",label:"详细地址",placeholder:"请输入详细地址"},model:{value:e.ruleCompanyAuth.companyAddress,callback:function(a){e.$set(e.ruleCompanyAuth,"companyAddress","string"==typeof a?a.trim():a)},expression:"ruleCompanyAuth.companyAddress"}}),e._v(" "),t("van-field",{attrs:{required:"",disabled:"",clearable:"",label:"企业规模",placeholder:"请选择企业规模"},model:{value:e.ruleCompanyAuth.companysSize,callback:function(a){e.$set(e.ruleCompanyAuth,"companysSize","string"==typeof a?a.trim():a)},expression:"ruleCompanyAuth.companysSize"}}),e._v(" "),t("van-field",{attrs:{required:"",disabled:"",clearable:"",label:"企业性质",placeholder:"请选择企业性质"},model:{value:e.ruleCompanyAuth.companysNature,callback:function(a){e.$set(e.ruleCompanyAuth,"companysNature","string"==typeof a?a.trim():a)},expression:"ruleCompanyAuth.companysNature"}}),e._v(" "),t("van-field",{attrs:{required:"",disabled:"",clearable:"",label:"所属行业",placeholder:"其选择所属行业"},model:{value:e.ruleCompanyAuth.companyIndustry,callback:function(a){e.$set(e.ruleCompanyAuth,"companyIndustry","string"==typeof a?a.trim():a)},expression:"ruleCompanyAuth.companyIndustry"}}),e._v(" "),t("van-field",{attrs:{required:"",disabled:"",clearable:"",label:"企业简介","right-icon":"arrow",placeholder:"企业简介"},on:{"click-right-icon":e.getTextarea},model:{value:e.ruleCompanyAuth.companyWorkCont,callback:function(a){e.$set(e.ruleCompanyAuth,"companyWorkCont","string"==typeof a?a.trim():a)},expression:"ruleCompanyAuth.companyWorkCont"}})],1)],1),e._v(" "),t("div",{staticClass:"stepTwo"},[t("div",{staticClass:"img-item"},[t("p",[e._v("营业执照")]),e._v(" "),t("div",[""!=e.ruleCompanyAuth.businessLicenseImg?t("img",{attrs:{src:e.ruleCompanyAuth.businessLicenseImg,alt:""},on:{click:function(a){return e.getPreview(e.businessLicenseImg)}}}):e._e()])]),e._v(" "),t("div",{staticClass:"img-item"},[t("p",[e._v("一手招聘订单")]),e._v(" "),t("div",[e.ruleCompanyAuth.firstOrder.length>0?t("img",{class:e.ruleCompanyAuth.firstOrder.length>1?"shadow-img":"",attrs:{src:e.ruleCompanyAuth.firstOrder[0],alt:""},on:{click:function(a){return e.getPreview(e.ruleCompanyAuth.firstOrder)}}}):e._e(),e._v(" "),e.ruleCompanyAuth.firstOrder.length<1?t("div",{staticClass:"file-box"},[t("img",{attrs:{src:e.firstOrderFile,alt:""}}),e._v(" "),t("p",[e._v("一手招聘订单为文件")])]):e._e()])]),e._v(" "),t("div",{staticClass:"zhanwei-bottom"}),e._v(" "),t("div",{staticClass:"next-one",on:{click:e.errorsBtn}},[t("p",[e._v("报错")])])])]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.showTextarea,expression:"showTextarea"}],staticClass:"text-box"},[t("div",{staticClass:"zhanwei-top"}),e._v(" "),t("mt-field",{staticClass:"text_area",attrs:{placeholder:"请填写企业简介",disabled:e.disabled.companyWorkCont,type:"textarea",rows:"4"},model:{value:e.ruleCompanyAuth.companyWorkCont,callback:function(a){e.$set(e.ruleCompanyAuth,"companyWorkCont","string"==typeof a?a.trim():a)},expression:"ruleCompanyAuth.companyWorkCont"}}),e._v(" "),e._m(0)],1),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.selfLoading,expression:"selfLoading"}],staticClass:"errors"},[t("div",{staticClass:"errors-item"},[t("p",{staticClass:"phone-num"},[e._v("021-22876396")]),e._v(" "),t("div",{staticClass:"errors-item-btn"},[t("p",{on:{click:e.cancelLoading}},[e._v("取消")]),e._v(" "),t("p",{on:{click:e.cancelLoading}},[t("a",{attrs:{href:"tel:021-22876396"}},[e._v("呼叫")])])])])])])},staticRenderFns:[function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"textarea-tips"},[a("p",[this._v("不要填写电话、QQ、微信等联系方式")])])}]};var d=t("VU/8")(l,c,!1,function(e){t("X49o")},"data-v-e7eb77ea",null);a.default=d.exports}});
//# sourceMappingURL=12.fcde49fe1e5dbc4328fa.1554218831766.js.map