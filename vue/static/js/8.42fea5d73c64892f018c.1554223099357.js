webpackJsonp([8],{"9xT/":function(t,s){},"UO/o":function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAnCAYAAAAPZ2gOAAABw0lEQVRIia3WPWsUQRjA8d95EuUQIglicyCiYHViI4KKhVYqSStqZ2ehhVX0A4iViCkEQTtfQBR8iakSEAQJ5CNYWmlloaASYjGzcEtud2dn8zQzcy9/nnnm/+xsb8+hA7YhTuI2Hu/cBtgIHzGN2R0dYcMx2CYedgFOR9gwru/gZS5wCm+E7cIj3IMcYA9PcTau3+FG8WUO8C6uxvkaLmMjF3gdC3H+FXP4Pf6DNsB5LMb5D5yPYylSgSfwAv2Y0VzMcEukAEdYwgB/cUmo3cRoAhbizgriXsOHuj/UASeJ+6whgUpgpbg5wFpxc4C14rYFNorbBpgkbiowWdwUYHEIg/jZfTXipgALYYta3YoZZwMpn+YA73G4C5Cyb/uwHMdW0Z+a2Tu+XsdunMYMzuA5/uUCYVXY7lGhj0d4JdS6MSZ1SnFIq3E9jyeCDVkZEg7nNc7FLI9hF1ZyMizil7LgC0JrZgPZ2oKLQgmygZQfEn2hRSvFT72kksVvc40miV91ylXRKH5bIA3i5wAJV+kpHMQRYetLXYAbeIuL2I/j+IPPvY7v2EN8ieMmrnR9Jf6GC/gp9PrN3C2Px3d8Eur44D8WRmhCQz0FagAAAABJRU5ErkJggg=="},kDRj:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("mvHQ"),n=e.n(i),a=e("7+uW"),o=e("uJNG"),r=e("Au9i"),l=e("Fd2+"),c=e("8bUE"),u=e.n(c),d=e("knD7"),p=e.n(d),g=e("aV6G"),h=e.n(g),m=e("h3t+"),v=e.n(m),_=e("5PAs"),C=e.n(_),b=e("QAxJ"),S=e.n(b),f=e("fWAl"),I=e.n(f),k=e("R0bZ"),w=e.n(k);a.default.component(r.Checklist.name,r.Checklist);var A={data:function(){return{globalApiUrl:domain.testUrl,qdsGlobalApiUrl:domain.qdsDomain,searchGlobalApiUrl:domain.searchTestUrl,resumeListData:"",currentResumeId:"",currentResumeIndex:"",options:{nativePlace:""},resumePicOne:u.a,resumePicTwo:p.a,resumePicThree:h.a,resumePicFour:v.a,resumePicFive:C.a,resumePicSix:S.a,resumePicServen:I.a,resumePicEight:w.a,experienceList:[],updateTimeArr:[],pageId:"",certificationStatus:"",maskShow:!1,jMarkModalShow:!1,showIntegration:!1,value:[""],option:[{label:"知道啦，以后不用提示了哦",value:"A"}],idArr:[],resumeId:"",resumeIndex:"",getUserStorageId:"",changeFlag:!0}},methods:{checkon:function(){this.changeFlag=!this.changeFlag,0==this.changeFlag&&(this.value=["A"])},beforeRouteLeave:function(t,s,e){t.meta.keepAlive=!0,e()},updated:function(){this.$nextTick(function(){var t=this.$store.state.position;window.scroll(0,t)})},returnBtnClkFn:function(){this.$router.push("/qdsSearchResume"),3==this.pageId?this.$router.push({path:"/qdsSearchResume",query:{id:3}}):1==this.pageId&&this.$router.push({path:"/qdsSearchResume",query:{id:1}})},init:function(){var t=this,s=t.currentResumeId;t.resumeListData.forEach(function(e,i){e.id==s&&(t.options=e,t.currentResumeIndex=i)})},lookCtMethodsClk:function(){if(this.getUserStorageId=localStorage.getItem("qdsSCorpUserId"),this.certificationStatus=sessionStorage.getItem("qdsMCertificationStatus"),1==this.certificationStatus)this.$router.push("/qdsAttestation");else if(2==this.certificationStatus)this.$router.push("/qdsAttestation");else if(3==this.certificationStatus){localStorage.getItem("userCheckBoxShwOrNt")==this.getUserStorageId?(this.jMarkModalShow=!1,this.maskShow=!1,this.jModalSureBtnClk()):(this.jMarkModalShow=!0,this.maskShow=!0)}else 4==this.certificationStatus&&this.$router.push("/qdsAttestation")},maskPersonalClk:function(){this.jMarkModalShow=!1,this.maskShow=!1,this.showIntegration=!1,this.value=[""]},jModalCancelBtnClk:function(){this.jMarkModalShow=!1,this.maskShow=!1,this.value=[""]},jModalSureBtnClk:function(){r.Indicator.open({text:"请求中...",spinnerType:"snake"}),this.jMarkModalShow=!1,this.maskShow=!1,"A"==this.value[0]&&localStorage.setItem("userCheckBoxShwOrNt",this.getUserStorageId);var t=this,s=o.a.getCookie("qdsMToken"),e=localStorage.getItem("qdsSCorpUserId");t.resumeId=localStorage.getItem("telentSearchListId"),t.idArr.forEach(function(s,e){t.resumeId==s&&(t.resumeIndex=e)}),t.axios(t.qdsGlobalApiUrl+"channelResume/followResume?token="+s,{method:"post",params:{userId:e,resumeId:t.resumeId,source:"search"},timeout:1e4}).then(function(s){200==s.data.code?(r.Indicator.close(),Object(l.b)({message:"简历获取成功，请到“我的简历”查看",duration:1500,background:"#20D3B3"}),t.options.mobile=s.data.data.mobile,t.options.name=s.data.data.name,t.jMarkModalShow=!1,t.maskShow=!1):30002==s.data.code?(r.Indicator.close(),Object(l.b)({message:"积分不足",duration:1500,background:"#FF6262"}),t.jMarkModalShow=!1,t.showIntegration=!0,t.maskShow=!0):(r.Indicator.close(),Object(l.b)({message:s.data.message,duration:1500,background:"#FF6262"}),t.showIntegration=!1,t.jMarkModalShow=!1,t.maskShow=!1)}).catch(function(s){r.Indicator.close(),Object(l.b)({message:"请求失败",duration:1500,background:"#FF6262"}),t.jMarkModalShow=!1,t.maskShow=!1,t.showIntegration=!1})},falseIntegration:function(){this.jMarkModalShow=!1,this.maskShow=!1,this.showIntegration=!1},trueIntegration:function(){this.showIntegration=!1,this.jMarkModalShow=!1,this.maskShow=!1,this.$router.push("/qdsPersonal")}},mounted:function(){var t=this;if(this.pageId=this.$route.query.id,1==this.pageId){var s=this,e=localStorage.getItem("qdsResumeList");s.resumeListData=JSON.parse(e),s.currentResumeId=localStorage.getItem("qdsResumeId"),this.init(),s.resumeListData.forEach(function(e,i){var n=new Object;n.id=e.id,n.updateTime=e.updateTime,n.nationalPlace=t.nativePlaceFn,s.updateTimeArr.push(n)});var i=n()(s.updateTimeArr);localStorage.setItem("updateTimeArrStorage",i)}},created:function(){if(this.pageId=this.$route.query.id,3==this.pageId){var t=localStorage.getItem("telentSearchList");this.resumeListData=JSON.parse(t),this.currentResumeId=localStorage.getItem("telentSearchListId"),this.init()}},computed:{nativePlaceFn:function(){return""==this.options.nativePlace||0==this.options.nativePlace.indexOf("null")?"暂无":this.options.nativePlace.substring(0,this.options.nativePlace.indexOf("null"))},updatesTimeSliceSecond:function(){return null!=this.options.updateTime&&void 0!=this.options.updateTime&&this.options.updateTime.length>0?this.options.updateTime.substring(0,this.options.updateTime.length-3):"暂无"},bornDateToageFn:function(){if(""!=this.options.born&&null!=this.options.born&&void 0!=this.options.born){var t=this.options.born.substring(0,4);return(new Date).getFullYear()-t+"岁"}return"暂无"}},components:{Notify:l.b}},P={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"myResumeDetial_wrapper"},[i("div",{staticClass:"top"},[i("img",{staticClass:"return_icon",attrs:{src:e("UO/o"),alt:"返回图标"},on:{click:t.returnBtnClkFn}}),t._v(" "),i("span",[t._v("简历详情")])]),t._v(" "),i("div",{staticClass:"infoCard flex_layout"},[i("div",{staticClass:"top"},[i("div",{staticClass:"userPic_wrapper"},[("男"==t.options.genderString||void 0==t.options.genderString||null==t.options.genderString||""==t.options.genderString)&&Number(t.options.bornInteger)<=24?i("img",{staticClass:"userPic",attrs:{src:t.resumePicOne}}):("男"!=t.options.genderString&&void 0!=t.options.genderString&&null!=t.options.genderString&&""!=t.options.genderString||!(Number(t.options.bornInteger)>=25&&Number(t.options.bornInteger)<=34||void 0==t.options.bornInteger||null==t.options.bornInteger||""==t.options.bornInteger))&&(void 0!=t.options.genderString&&null!=t.options.genderString&&""!=t.options.genderString||void 0!=t.options.bornInteger&&null!=t.options.bornInteger&&""!=t.options.bornInteger)?("男"==t.options.genderString||void 0==t.options.genderString||null==t.options.genderString||""==t.options.genderString)&&Number(t.options.bornInteger)>=35&&Number(t.options.bornInteger)<=44?i("img",{staticClass:"userPic",attrs:{src:t.resumePicThree}}):("男"==t.options.genderString||void 0==t.options.genderString||null==t.options.genderString||""==t.options.genderString)&&Number(t.options.bornInteger)>=45?i("img",{staticClass:"userPic",attrs:{src:t.resumePicFour}}):"女"==t.options.genderString&&Number(t.options.bornInteger)<=24?i("img",{staticClass:"userPic",attrs:{src:t.resumePicFive}}):"女"==t.options.genderString&&(Number(t.options.bornInteger)>=25&&Number(t.options.bornInteger)<=34||void 0==t.options.bornInteger||null==t.options.bornInteger||""==t.options.bornInteger)?i("img",{staticClass:"userPic",attrs:{src:t.resumePicSix}}):"女"==t.options.genderString&&Number(t.options.bornInteger)>=35&&Number(t.options.bornInteger)<=44?i("img",{staticClass:"userPic",attrs:{src:t.resumePicServen}}):"女"==t.options.genderString&&Number(t.options.bornInteger)>=45?i("img",{staticClass:"userPic",attrs:{src:t.resumePicEight}}):t._e():i("img",{staticClass:"userPic",attrs:{src:t.resumePicTwo}}),t._v(" "),"男"==t.options.genderString?i("img",{staticClass:"gender_icon manSymbol_icon",attrs:{src:e("/Jin"),alt:"男性图标"}}):i("img",{staticClass:"gender_icon manSymbol_icon",attrs:{src:e("iBXE"),alt:"女性图标"}})]),t._v(" "),i("div",{staticClass:"infos"},[i("p",{staticClass:"flex_layout lh-1"},[i("span",{staticClass:"name"},[t._v(t._s(null!=t.options.name?t.options.name:"暂无"))])]),t._v(" "),i("p",{staticClass:"lh-1 text-left",staticStyle:{width:"100%"}},[i("span",{staticClass:"lightBlue_label"},[t._v(t._s(t.bornDateToageFn))]),t._v(" "),i("span",{staticClass:"lightBlue_label"},[t._v(t._s(""!=t.options.education?t.options.education:"暂无"))]),t._v(" "),void 0!==t.options.workYearInteger&&null!==t.options.workYearInteger&&0==t.options.workYearInteger.length?i("span",{staticClass:"lightBlue_label"},[t._v("暂无")]):i("span",{staticClass:"lightBlue_label"},[t._v(t._s(t.options.workYearInteger))])])])]),t._v(" "),i("div",{staticClass:"bottom"},[i("div",{staticClass:"pageView"},[i("p",{staticClass:"c-818D8D f-24 text_left"},[t._v("浏览量")]),t._v(" "),i("p",{staticClass:"c-354242 f-30 mt-2 text_left mlf-2"},[t._v(t._s(t.options.looked)+"次")])]),t._v(" "),i("div",{staticClass:"noticeView"},[i("p",{staticClass:"c-818D8D f-24"},[t._v("关注量")]),t._v(" "),i("p",{staticClass:"c-354242 f-30 mt-2"},[t._v(t._s(t.options.downloads)+"次")])]),t._v(" "),i("div",{staticClass:"updateTime"},[i("p",{staticClass:"c-818D8D f-24"},[t._v("更新时间")]),t._v(" "),i("p",{staticClass:"c-354242 f-30 mt-5"},[t._v(t._s(t.updatesTimeSliceSecond))])])])]),t._v(" "),i("div",{staticClass:"basicInfo_box"},[i("p",{staticClass:"basicInfo_title title f-28"},[t._v("基本信息")]),t._v(" "),i("ul",{staticClass:"infos_list"},[i("li",[t._m(0),t._v(" "),i("span",["NA"!=t.options.mobile?i("a",{staticClass:"blue fw-550",attrs:{href:"tel:"+t.options.mobile}},[t._v(t._s(t.options.mobile))]):i("span",{staticClass:"blue fw-550",on:{click:t.lookCtMethodsClk}},[t._v("查看联系方式")])])]),t._v(" "),i("li",[i("label",{staticClass:"w-72"},[t._v("籍贯城市")]),t._v(" "),i("span",[t._v(t._s(t.nativePlaceFn))])]),t._v(" "),i("li",[i("label",{staticClass:"w-72"},[t._v("技能标签")]),t._v(" "),i("div",{staticClass:"w-270"},[void 0!==t.options.skillTags&&null!==t.options.skillTags&&0==t.options.skillTags.length?i("span",{staticClass:"basicInfo-span_style"},[t._v("暂无")]):t._e(),t._v(" "),t._l(t.options.skillTags,function(s,e){return i("span",{key:e,staticClass:"basicInfo-span_style"},[t._v(t._s(s))])})],2)]),t._v(" "),i("li",[i("label",{staticClass:"w-72"},[t._v("意向岗位")]),t._v(" "),i("div",{staticClass:"w-270"},[void 0!==t.options.intentionPosition&&null!==t.options.intentionPosition&&0==t.options.intentionPosition?i("span",{staticClass:"basicInfo-span_style"},[t._v("暂无")]):t._e(),t._v(" "),t._l(t.options.intentionPosition,function(s,e){return i("span",{key:e,staticClass:"basicInfo-span_style"},[t._v(t._s(s.positionName))])})],2)]),t._v(" "),i("li",{staticClass:"intention-city"},[i("span",{staticClass:"label"},[t._v("意向城市")]),t._v(" "),i("div",{staticClass:"w-270"},[void 0!==t.options.intentionalCity&&null!==t.options.intentionalCity&&0==t.options.intentionalCity?i("span",{staticClass:"basicInfo-span_style"},[t._v("暂无")]):t._l(t.options.intentionalCity,function(s,e){return i("span",{key:e,staticClass:"wantCity wantCity-span basicInfo-span_style"},[i("span",[t._v(t._s(s.intentionalPlace))])])})],2)]),t._v(" "),i("div",{staticClass:"clear"})])]),t._v(" "),i("div",{staticClass:"deliverPositionInfo_box"},[i("p",{staticClass:"basicInfo_title title f-28"},[t._v("工作经历")]),t._v(" "),t.experienceList.length>0?i("ul",{staticClass:"dpi_list"},t._l(t.experienceList,function(s,e){return i("li",{key:e},[i("p",{staticClass:"c-818D8D f-26"},[t._v("工作时间:"+t._s(s.startYear)+t._s(s.startMonth)+"-"+t._s(s.endYear)+t._s(s.endMonth))]),t._v(" "),i("p",{staticClass:"c-0B231F f-26 mt-19"},[t._v(t._s(s.company))])])}),0):i("div",{staticClass:"blank_page noWorkExprienceData"},[i("img",{attrs:{src:e("pwCV"),alt:"投递空图片"}}),t._v(" "),i("p",[t._v("暂无工作经历")])])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.maskShow,expression:"maskShow"}],staticClass:"mask",on:{click:t.maskPersonalClk}}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.jMarkModalShow,expression:"jMarkModalShow"}],staticClass:"score_modal"},[i("p",{staticClass:"f-28 c-12221F mb-2 lh-1 mb-10"},[t._v("您好,本次操作需要50个积分点,")]),t._v(" "),i("p",{staticClass:"f-28 c-12221F lh-1"},[t._v("操作成功后相关简历将进入您的简历库?")]),t._v(" "),i("mt-checklist",{attrs:{options:t.option},on:{change:t.checkon},model:{value:t.value,callback:function(s){t.value=s},expression:"value"}}),t._v(" "),i("div",{staticClass:"modal_footerBtn"},[i("div",{staticClass:"btn",on:{click:t.jModalCancelBtnClk}},[t._v("取消")]),t._v(" "),i("div",{staticClass:"btn",on:{click:t.jModalSureBtnClk}},[t._v("确定")])])],1),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showIntegration,expression:"showIntegration"}],staticClass:"score_modal"},[i("p",{staticClass:"f-28 c-12221F mb-2 lh-1 mb-10",staticStyle:{"margin-top":"1.9375rem"}},[t._v("您好,您的积分不足,请先购买积分")]),t._v(" "),i("div",{staticClass:"modal_footerBtn"},[i("div",{staticClass:"btn",on:{click:t.falseIntegration}},[t._v("我在想想")]),t._v(" "),i("div",{staticClass:"btn",on:{click:t.trueIntegration}},[t._v("去购买")])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("label",{staticClass:"tel_label flex_layout w-72"},[s("span",[this._v("电       话")])])}]};var M=e("VU/8")(A,P,!1,function(t){e("9xT/")},"data-v-321ab66d",null);s.default=M.exports},pwCV:function(t,s,e){t.exports=e.p+"static/img/deliver_blank.d16446f.png"}});
//# sourceMappingURL=8.42fea5d73c64892f018c.1554223099357.js.map