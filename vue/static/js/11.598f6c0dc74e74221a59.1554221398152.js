webpackJsonp([11],{Rjxp:function(e,t){},"UO/o":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAnCAYAAAAPZ2gOAAABw0lEQVRIia3WPWsUQRjA8d95EuUQIglicyCiYHViI4KKhVYqSStqZ2ehhVX0A4iViCkEQTtfQBR8iakSEAQJ5CNYWmlloaASYjGzcEtud2dn8zQzcy9/nnnm/+xsb8+hA7YhTuI2Hu/cBtgIHzGN2R0dYcMx2CYedgFOR9gwru/gZS5wCm+E7cIj3IMcYA9PcTau3+FG8WUO8C6uxvkaLmMjF3gdC3H+FXP4Pf6DNsB5LMb5D5yPYylSgSfwAv2Y0VzMcEukAEdYwgB/cUmo3cRoAhbizgriXsOHuj/UASeJ+6whgUpgpbg5wFpxc4C14rYFNorbBpgkbiowWdwUYHEIg/jZfTXipgALYYta3YoZZwMpn+YA73G4C5Cyb/uwHMdW0Z+a2Tu+XsdunMYMzuA5/uUCYVXY7lGhj0d4JdS6MSZ1SnFIq3E9jyeCDVkZEg7nNc7FLI9hF1ZyMizil7LgC0JrZgPZ2oKLQgmygZQfEn2hRSvFT72kksVvc40miV91ylXRKH5bIA3i5wAJV+kpHMQRYetLXYAbeIuL2I/j+IPPvY7v2EN8ieMmrnR9Jf6GC/gp9PrN3C2Px3d8Eur44D8WRmhCQz0FagAAAABJRU5ErkJggg=="},aVQU:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("8bUE"),a=s.n(i),r=s("knD7"),n=s.n(r),l=s("aV6G"),o=s.n(l),d=s("h3t+"),_=s.n(d),c=s("5PAs"),p=s.n(c),v=s("QAxJ"),u=s.n(v),g=s("fWAl"),m=s.n(g),b=s("R0bZ"),C=s.n(b),O={data:function(){return{deliverRecordListData:"",currentResumeId:"",drOptions:[],drOptionsDemand:[],resumePicOne:a.a,resumePicTwo:n.a,resumePicThree:o.a,resumePicFour:_.a,resumePicFive:p.a,resumePicSix:u.a,resumePicServen:m.a,resumePicEight:C.a,updateTimeIdArrData:[],updateTimeRst:"",nationalPlace:"",welfareLabelRsl:""}},methods:{returnBtnClkFn:function(){this.$router.push({path:"/qdsSearchResume",query:{id:2}})},init:function(){var e=this,t=e.currentResumeId;if(e.deliverRecordListData.forEach(function(s,i){s.resume.resumeId==t&&(e.drOptions=s.resume,e.drOptionsDemand=s.demand)}),0!=e.drOptionsDemand.welfareLabel.length){if(e.drOptionsDemand.welfareLabel.forEach(function(t,s){e.welfareLabelRsl+=t+"/"}),e.welfareLabelRsl.length>0){var s=e.welfareLabelRsl.length;e.welfareLabelRsl=e.welfareLabelRsl.substring(0,s-1)}return e.welfareLabelRsl}e.welfareLabelRsl="暂无"}},mounted:function(){var e=this,t=localStorage.getItem("deliverRecordList");e.deliverRecordListData=JSON.parse(t),e.currentResumeId=localStorage.getItem("deliverRecordId"),this.init();var s=localStorage.getItem("updateTimeArrStorage");e.updateTimeIdArrData=JSON.parse(s),e.updateTimeIdArrData.forEach(function(t,s){t.id==e.currentResumeId&&(e.updateTimeRst=t.updateTime,e.nationalPlace=t.nationalPlace)})}},h={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"searchResumeDetial_wrapper"},[i("div",{staticClass:"top"},[i("img",{staticClass:"return_icon",attrs:{src:s("UO/o"),alt:"返回图标"},on:{click:e.returnBtnClkFn}}),e._v(" "),i("span",[e._v("简历详情")])]),e._v(" "),i("div",{staticClass:"infoCard flex_layout"},[i("div",{staticClass:"userPic_wrapper"},[i("div",{staticClass:"headImg"},[("男"==e.drOptions.genderString||"暂无"==e.drOptions.genderString)&&Number(e.drOptions.bornInteger)<=24?i("img",{staticClass:"userPic",attrs:{src:e.resumePicOne}}):"男"!=e.drOptions.genderString&&"暂无"!=e.drOptions.genderString||!(Number(e.drOptions.bornInteger)>=25&&Number(e.drOptions.bornInteger)<=34||"暂无"==e.drOptions.bornInteger)?"暂无"==e.drOptions.genderString&&"暂无"==e.drOptions.bornInteger?i("img",{staticClass:"userPic",attrs:{src:e.resumePicTwo}}):("男"==e.drOptions.genderString||"暂无"==e.drOptions.genderString)&&Number(e.drOptions.bornInteger)>=35&&Number(e.drOptions.bornInteger)<=44?i("img",{staticClass:"userPic",attrs:{src:e.resumePicThree}}):("男"==e.drOptions.genderString||"暂无"==e.drOptions.genderString)&&Number(e.drOptions.bornInteger)>=45?i("img",{staticClass:"userPic",attrs:{src:e.resumePicFour}}):"女"==e.drOptions.genderString&&Number(e.drOptions.bornInteger)<=24?i("img",{staticClass:"userPic",attrs:{src:e.resumePicFive}}):"女"==e.drOptions.genderString&&(Number(e.drOptions.bornInteger)>=25&&Number(e.drOptions.bornInteger)<=34||"暂无"==e.drOptions.bornInteger)?i("img",{staticClass:"userPic",attrs:{src:e.resumePicSix}}):"女"==e.drOptions.genderString&&Number(e.drOptions.bornInteger)>=35&&Number(e.drOptions.bornInteger)<=44?i("img",{staticClass:"userPic",attrs:{src:e.resumePicServen}}):"女"==e.drOptions.genderString&&Number(e.drOptions.bornInteger)>=45?i("img",{staticClass:"userPic",attrs:{src:e.resumePicEight}}):e._e():i("img",{staticClass:"userPic",attrs:{src:e.resumePicTwo}}),e._v(" "),"男"==e.drOptions.genderString?i("img",{staticClass:"gender_icon manSymbol_icon",attrs:{src:s("/Jin"),alt:"男性图标"}}):i("img",{staticClass:"gender_icon manSymbol_icon",attrs:{src:s("iBXE"),alt:"女性图标"}})])]),e._v(" "),i("div",{staticClass:"infos"},[i("p",{staticClass:"flex_layout lh-1"},[i("span",{staticClass:"name"},[e._v(e._s(e.drOptions.resumeName))]),e._v(" "),i("span",{staticClass:"gender_label flex_layout"},[e._v(e._s(e.drOptions.genderString))])]),e._v(" "),i("p",{staticClass:"text-left lh-1"},[i("span",{staticClass:"c-818D8D f-24"},[e._v("更新时间:")]),e._v(" "),""!=e.updateTimeRst?i("span",{staticClass:"c-354242 f-24"},[e._v(e._s(e.updateTimeRst))]):i("span",{staticClass:"c-354242 f-24"},[e._v("暂无")])])])]),e._v(" "),i("div",{staticClass:"basicInfo_box"},[i("p",{staticClass:"basicInfo_title title f-28"},[e._v("基本信息")]),e._v(" "),i("ul",{staticClass:"infos_list"},[i("li",[e._m(0),e._v(" "),i("span",[i("a",{ref:"tel",staticClass:"blue fw-550",attrs:{href:"tel:"+e.drOptions.mobile}},[e._v(e._s(e.drOptions.mobile))])])]),e._v(" "),i("li",[i("label",[e._v("籍贯城市")]),e._v(" "),""!=e.nationalPlace?i("span",[e._v(e._s(e.nationalPlace))]):i("span",[e._v("暂无")])]),e._v(" "),i("li",[i("label",[e._v("期望薪资")]),e._v(" "),"暂无"!=e.drOptions.salaryFrom?i("span",[e._v(e._s(e.drOptions.salaryFrom)+"-"+e._s(e.drOptions.salaryTo))]):i("span",[e._v("暂无")])]),e._v(" "),i("li",[i("label",[e._v("最高学历")]),e._v(" "),""!=e.drOptions.education?i("span",[e._v(e._s(e.drOptions.education))]):i("span",[e._v("暂无")])]),e._v(" "),i("li",[i("label",[e._v("工作年限")]),e._v(" "),i("span",[e._v(e._s(e.drOptions.workYearInteger))])]),e._v(" "),i("li",[i("label",[e._v("意向岗位")]),e._v(" "),i("div",{staticClass:"intentionWorkType_wrapper"},[""==e.drOptionsDemand.jobTypeString||e.drOptionsDemand.jobTypeString?i("span",[e._v(e._s(e.drOptionsDemand.jobTypeString))]):e._e()])]),e._v(" "),i("li",[i("label",[e._v("意向城市")]),e._v(" "),""!=e.drOptions.intentionalCity?i("span",{staticClass:"intentionCity"},e._l(e.drOptions.intentionalCity,function(t,s){return i("span",{key:s,staticClass:"intentionCity"},[e._v(e._s(t.intentionalPlace))])}),0):i("span",[e._v("暂无")])])])]),e._v(" "),i("div",{staticClass:"deliverPositionInfo_box"},[i("p",{staticClass:"basicInfo_title title f-28"},[e._v("投递职位信息")]),e._v(" "),i("ul",{staticClass:"dpi_list"},[i("li",[i("label",[e._v("投递企业")]),e._v(" "),i("p",{staticClass:"height_auto"},[e._v(e._s(e.drOptionsDemand.corpName))])]),e._v(" "),i("li",[i("label",[e._v("求职岗位")]),e._v(" "),i("p",{staticClass:"height_auto"},[e._v(e._s(e.drOptionsDemand.jobTypeString))])]),e._v(" "),i("li",[i("label",[e._v("职位标题")]),e._v(" "),i("p",{staticClass:"height_auto"},[e._v(e._s(e.drOptionsDemand.title))])]),e._v(" "),i("li",[i("label",[e._v("招聘人数")]),e._v(" "),i("p",{staticClass:"height_auto"},[e._v(e._s(e.drOptionsDemand.recruitNum))])]),e._v(" "),i("li",[i("label",[e._v("招聘类型")]),e._v(" "),i("p",{staticClass:"height_auto"},[e._v(e._s(e.drOptionsDemand.recruitDemandType))])]),e._v(" "),i("li",[i("label",[e._v("结算标准")]),e._v(" "),i("p",{staticClass:"height_auto"},[e._v(e._s(e.drOptionsDemand.settlementStandard))])]),e._v(" "),i("li",[i("label",[e._v("发薪时间")]),e._v(" "),i("p",{staticClass:"height_auto"},[e._v(e._s(e.drOptionsDemand.payArrangement))])]),e._v(" "),i("li",[i("label",[e._v("福利标签")]),e._v(" "),i("p",{staticClass:"height_auto"},[e._v(e._s(e.welfareLabelRsl))])]),e._v(" "),i("li",[i("label",[e._v("年龄要求")]),e._v(" "),i("p",{staticClass:"height_auto"},[e._v(e._s(e.drOptionsDemand.ageFrom))])]),e._v(" "),i("li",[i("label",[e._v("学历要求")]),e._v(" "),i("p",{staticClass:"height_auto"},[e._v(e._s(e.drOptionsDemand.educationRequired))])]),e._v(" "),i("li",[i("label",[e._v("性别要求")]),e._v(" "),i("p",{staticClass:"height_auto"},[e._v(e._s(e.drOptionsDemand.genderRequired))])]),e._v(" "),i("li",[i("label",[e._v("工作时间")]),e._v(" "),i("p",{staticClass:"height_auto"},[e._v(e._s(e.drOptionsDemand.workTime))])]),e._v(" "),i("li",[i("label",[e._v("工作地址")]),e._v(" "),i("p",{staticClass:"height_auto"},[e._v(e._s(e.drOptionsDemand.workAddress))])]),e._v(" "),i("li",[i("label",[e._v("工作内容")]),e._v(" "),i("p",{staticClass:"work_cnt"},[e._v(e._s(e.drOptionsDemand.jobContent))])])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("label",{staticClass:"tel_label flex_layout"},[t("span",[this._v("电")]),this._v(" "),t("span",[this._v("话")])])}]};var f=s("VU/8")(O,h,!1,function(e){s("Rjxp")},"data-v-2981b07a",null);t.default=f.exports}});
//# sourceMappingURL=11.598f6c0dc74e74221a59.1554221398152.js.map