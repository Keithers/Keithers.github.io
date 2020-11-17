/*
* 该函数功能主要是调用极验获取验证码
* options为一个对象
* phoneInputId为填写电话号码的表单元素的id,必传参数。
* btnId为获取验证码按钮的id,必传参数。
* newUsersuccess为新用户发送验证后成功的回调函数,可选参数,oldUserSuccess为新老用户发送验证成功后的回调函数，可选参数，如果对新老用户不做区分可以不传递这两个参数（如果存在回调，传递相同回调即可）,对新老用户后续行为区分则传递两个回调。
* 该js对zepto,commom.js以及main.css有依赖
* */

//调用示例
// new getVerfiyCode({
//   btnId: "btn_gain_val_key",
//   phoneInputId: "input_phone",
//   success:function () {
//       alert("发送成功")
//   }
// }).init();


(function (window, $) {
  window.getVerfiyCode = function (options) {
    //参数默认值处理
    this.btnId = options.btnId || null;
    this.btn = $("#" + this.btnId);
    this.phoneInputId = options.phoneInputId || null;
    this.newUsersuccess = options.newUsersuccess || null;
    this.oldUsersuccess = options.oldUsersuccess || null;
  };
  getVerfiyCode.prototype = {
    // 倒计时处理
    cutdown: function () {
      var num = 60;
      var that = this;
      // console.log(that);
      that.btn.attr("disabled", "disabled");
      this.timer = window.setInterval(function () {
        // console.log(that.btn);
        if (num > 1) {
          num--;
          // console.log(num);
          $(that.btn).val("重新发送(" + num + "s)");
        } else {
          // console.log(that.timer);
          clearInterval(that.timer);
          that.btn.val("获取验证码");
          that.btn.removeAttr("disabled");
        }
      }, 1000);
    },
    // 验证手机号合法性
    validPhoneNumber: function () {
      var phoneReg = /^1[3-9][0-9]{9}$/i;
      var flag = true;
      // console.log(this.phoneInputId);
      if (this.phoneNumber) {
        if (phoneReg.test(this.phoneNumber)) {
          // this.sendCode();
          flag = true;
          // console.log('已发送');
        } else {
          flag = false;
          new Message().show({
            msg: '请输入正确的手机号',
            shade: false,
            'type': 1
          });
        }
      } else {
        flag = false;
        new Message().show({
          msg: '请输入您的手机号',
          shade: false,
          'type': 1
        });
      }
      return flag;
    },
    //极验处理
    gainKey: function () {
      var that = this;
      $.ajax({
        url: "/api/gt/register?t=" + (new Date()).getTime(), // 加随机数防止缓存
        type: "get",
        dataType: "json",
        success: function (data) {
          // 调用 initGeetest 进行初始化
          // 参数1：配置参数
          // 参数2：回调，回调的第一个参数验证码对象，之后可以使用它调用相应的接口
          //console.log(data.challenge,1);
          initGeetest({
            // 以下 4 个配置参数为必须，不能缺少
            gt: data.gt,
            challenge: data.challenge,
            offline: !data.success, // 表示用户后台检测极验服务器是否宕机
            new_captcha: data.new_captcha, // 用于宕机时表示是新验证码的宕机
            product: "bind", // 产品形式，包括：float，popup
            width: "300px"
            // 更多配置参数说明请参见：http://docs.geetest.com/install/client/web-front/
          }, function (captchaObj) {
            captchaObj.onSuccess(function () {
              var result = captchaObj.getValidate();
              if (!result) {
                return alert('请完成验证');
              }
              //console.log(result.geetest_challenge,1);
              $.ajax({
                url: '/api/gt/geeTest',
                type: 'post',
                // dataType: 'json',
                  data: {
                  mobile: that.phoneNumber,
                  challenge: result.geetest_challenge,
                  validate: result.geetest_validate,
                  seccode: result.geetest_seccode
                },
                success: function (data) {
                  // alert("1");
                  // console.log(data);
                  if (data === 'success') {
                    that.cutdown();
                    that.newUsersuccess && that.newUsersuccess();
                  } else if (data === 'error') {
                    // setTimeout(function () {
                    //   alert('登录失败，请完成验证');
                    //   captchaObj.reset();
                    // }, 1500);
                    new Message().show({
                      msg: '验证码发送失败,请重试',
                      shade: false,
                      'type': 1
                    });
                  } else if (data === 'failure') {
                    new Message().show({
                      msg: '验证码发送失败,请重试',
                      shade: false,
                      'type': 1
                    });
                  } else if (data === "frozen") {
                    new Message().show({
                      msg: '您的手机今天收到的短信条数已达到上限，明天再来吧！',
                      shade: false,
                      'type': 1
                    });
                  } else if (data === "duplicate") {
                    that.cutdown();
                    that.oldUsersuccess && that.oldUsersuccess();
                  }
                },
                error:function () {
                  //console.log(data);
                  new Message().show({
                    msg: '验证码发送失败,请重试',
                    shade: false,
                    'type': 1
                  });
                }
              });
            });
            that.btn.click(function () {
              // 调用之前先通过前端表单校验
              // console.log(that);
              // console.log($("#" + that.phoneInputId).val());
              that.phoneNumber = $("#" + that.phoneInputId).val();
              // console.log(that.phoneNumber);
              if (that.validPhoneNumber()) {
                captchaObj.verify();
              }
            });
          });
        }
      });
      
    },
    init: function () {
      if ($(".geetest_wind").length == 0) {
        this.gainKey();
      }
    }
  }
})(window, $);