webpackJsonp([19],{NYdb:function(e,t){},gVoe:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("uJNG"),n=s("Fd2+"),a=s("Au9i"),o=(s("oNbR"),s("QOrE"),s("f6Cu"),s("AkB+"),{data:function(){return{globalApiUrl:domain.testUrl,ossGlobalApiUrl:domain.ossDomain,qdsGlobalApiUrl:domain.qdsDomain,popupVisible:!1,slots:[{flex:1,values:["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"],className:"slot1",textAlign:"right"},{divider:!0,content:":",className:"slot2"},{flex:1,values:["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59"],className:"slot3",textAlign:"left"},{divider:!0,content:"至",className:"slot4"},{flex:1,values:["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"],className:"slot5",textAlign:"right"},{divider:!0,content:":",className:"slot6"},{flex:1,values:["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59"],className:"slot7",textAlign:"left"}],settingPhone:{startTime:"00:00",endTime:"23:59",whetherSet:"1"},clientHeight:{height:""},onceSettingTips:"",onceSetting:!1,toggleOnceSetSure:!1,onceSetSureDisabled:!1,pickerValOne:"",pickerValTwo:"",pickerValThree:"",pickerValFour:"",corpId:""}},created:function(){window.addEventListener("resize",this.getHeight),this.getHeight()},destroyed:function(){window.removeEventListener("resize",this.getHeight)},mounted:function(){this.corpId=localStorage.getItem("corpId")},components:{Notify:n.b,MessageBox:a.MessageBox},methods:{blurHidden:function(){document.activeElement.blur()},backHistory:function(){window.history.back(-1)},getHeight:function(){this.clientHeight.height=window.innerHeight-0+"px"},onValuesChange:function(e,t){this.pickerValOne=t[0],this.pickerValTwo=t[1],this.pickerValThree=t[2],this.pickerValFour=t[3]},selectName:function(e){"0"==e?console.log("关闭"):"1"==e&&console.log("开启")},selectTime:function(){document.activeElement.blur(),this.popupVisible=!0},cancel:function(){this.popupVisible=!1},saveChangeTime:function(){this.pickerValOne>this.pickerValThree?Object(n.b)({message:"开始时间不能大于结束时间",duration:1500,background:"#FF6262"}):this.pickerValOne==this.pickerValThree?this.pickerValTwo>this.pickerValFour&&Object(n.b)({message:"开始时间不能大于结束时间",duration:1500,background:"#FF6262"}):(this.popupVisible=!1,this.settingPhone.startTime=this.pickerValOne+":"+this.pickerValTwo,this.settingPhone.endTime=this.pickerValThree+":"+this.pickerValFour)},timeSetSure:function(){var e=i.a.getCookie("qdsMToken"),t=this;t.axios(t.qdsGlobalApiUrl+"ylw/qhChannelCorp/api/getOrderTime?token="+e,{method:"post"}).then(function(e){"200"==e.data.code?"false"==e.data.message?(t.toggleOnceSetSure=!0,t.onceSettingTips="请确保信息无误，每天仅有一次修改保存的机会哦~",t.onceSetting=!0):"true"==e.data.message&&(t.toggleOnceSetSure=!1,t.onceSettingTips="您今日的修改次数已达上限，请明日再来哦~",t.onceSetting=!0):Object(n.b)({message:"操作失败"+e.data.code,type:"error",duration:2e3})}).catch(function(e){})},onceSetSure:function(){var e=i.a.getCookie("qdsMToken"),t=this;t.onceSetSureDisabled=!0,t.axios(t.qdsGlobalApiUrl+"ylw/qhChannelCorp/api/updaCorpOrder?token="+e,{method:"post",params:{id:t.corpId,orderWeek:"",orderStatus:Number(t.settingPhone.whetherSet),orderStartTime:t.settingPhone.startTime,orderEndTime:t.settingPhone.endTime}}).then(function(e){"200"==e.data.code?(t.onceSetSureDisabled=!1,t.toggleOnceSetSure=!1,t.onceSettingTips="",t.onceSetting=!1,Object(n.b)({message:"保存成功",type:"success",background:"#20D3B3"})):(t.onceSetSureDisabled=!1,t.toggleOnceSetSure=!1,t.onceSettingTips="",t.onceSetting=!1,Object(n.b)({message:e.data.message+"(错误码: "+e.data.code+")",duration:1500,background:"#FF6262"}))}).catch(function(e){t.onceSetSureDisabled=!1})},onceSetCancel:function(){this.onceSetting=!1,this.onceSetting=!1}}}),c={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"setup-page input-border-none self-mt-header",style:e.clientHeight},[s("header",{staticClass:"post-head"},[s("a",{staticClass:"back",attrs:{href:"javascript:;"},on:{click:e.backHistory}}),e._v(" "),s("span",{staticClass:"head-font"},[e._v("咨询设置")])]),e._v(" "),s("div",{staticClass:"title-logo"}),e._v(" "),s("div",{staticClass:"setup_time_box"},[s("div",{staticClass:"setup_time"},[s("p",[e._v("咨询时间设置：")]),e._v(" "),s("div",{staticClass:"setup_time_item"},[s("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"00:00"},on:{focus:e.selectTime},model:{value:e.settingPhone.startTime,callback:function(t){e.$set(e.settingPhone,"startTime","string"==typeof t?t.trim():t)},expression:"settingPhone.startTime"}}),e._v(" "),s("span",[e._v("至")]),e._v(" "),s("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"23:59"},on:{focus:e.selectTime},model:{value:e.settingPhone.endTime,callback:function(t){e.$set(e.settingPhone,"endTime","string"==typeof t?t.trim():t)},expression:"settingPhone.endTime"}})],1),e._v(" "),s("p",[e._v("周一至周五")])]),e._v(" "),s("div",{staticClass:"setup_select"},[s("p",[e._v("是否开启设置：")]),e._v(" "),s("van-radio-group",{staticClass:"select-state",on:{change:function(t){return e.selectName(e.settingPhone.whetherSet)}},model:{value:e.settingPhone.whetherSet,callback:function(t){e.$set(e.settingPhone,"whetherSet",t)},expression:"settingPhone.whetherSet"}},[s("van-radio",{staticClass:"van-radio-self",attrs:{name:"0","checked-color":"#549FA3"}},[e._v("关闭")]),e._v(" "),s("van-radio",{staticClass:"van-radio-self",attrs:{name:"1","checked-color":"#549FA3"}},[e._v("开启")])],1)],1),e._v(" "),s("div",{staticClass:"tips"},[s("p",{staticClass:"tips-item"},[s("van-icon",{staticClass:"icon-color",attrs:{name:"warning-o"}}),e._v("咨询页面每天只可修改一次，请慎"),s("span",{staticClass:"zhong"},[e._v("重")]),e._v("！！！")],1)])]),e._v(" "),s("div",{staticClass:"next-one"},[s("p",{on:{click:e.timeSetSure}},[e._v("确定")])]),e._v(" "),s("mt-popup",{attrs:{position:"bottom"},model:{value:e.popupVisible,callback:function(t){e.popupVisible=t},expression:"popupVisible"}},[s("mt-picker",{staticClass:"pop-picker-time",attrs:{slots:e.slots,showToolbar:""},on:{change:e.onValuesChange}},[s("div",{staticClass:"select-time-btn"},[s("span",{on:{click:e.cancel}},[e._v("取消")]),e._v(" "),s("span",{staticClass:"clearfix",on:{click:e.saveChangeTime}},[e._v("完成")])])])],1),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.onceSetting,expression:"onceSetting"}],staticClass:"modal"}),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.onceSetting,expression:"onceSetting"}],staticClass:"toggle-once-set"},[e._m(0),e._v(" "),s("div",{staticClass:"mint-msgbox-content"},[s("div",{staticClass:"mint-msgbox-message"},[e._v(e._s(e.onceSettingTips))])]),e._v(" "),s("div",{staticClass:"mint-msgbox-btns"},[s("button",{staticClass:"mint-msgbox-btn mint-msgbox-cancel ",on:{click:e.onceSetCancel}},[e._v("取消")]),e._v(" "),s("button",{directives:[{name:"show",rawName:"v-show",value:e.toggleOnceSetSure,expression:"toggleOnceSetSure"}],staticClass:"mint-msgbox-btn mint-msgbox-confirm ",attrs:{disabled:e.onceSetSureDisabled},on:{click:e.onceSetSure}},[e._v("确定")])])])],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"mint-msgbox-header"},[t("div",{staticClass:"mint-msgbox-title"},[this._v("提示")])])}]};var l=s("VU/8")(o,c,!1,function(e){s("NYdb")},"data-v-2e5a9034",null);t.default=l.exports}});
//# sourceMappingURL=19.cd985ed65afcf25c76d0.1554218831766.js.map