webpackJsonp([7],{"12H5":function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=n("Fd2+"),a=n("QOrE"),o=n.n(a),p=n("VayJ"),i=n.n(p),f=n("IIcH"),l=n.n(f),y=n("4dIy"),r=n.n(y),m=n("TIqW"),c=n.n(m),w={data:function(){return{globalApiUrl:domain.testUrl,registerPerson:i.a,qdsGlobalApiUrl:domain.qdsDomain,loginPhone:o.a,companyIcon:l.a,registerPwd:c.a,registerCode:r.a,contentText:"",textShow:!1,show:!0,count:"",timer:null,registerForm:{userName:"",corpName:"",mobile:"",smsCode:"",passWord:"",checkPass:""},ruleRegister:{},corpNameTipStyle:!1,corpNameTipFont:"",loading:!1,companyNameList:[],list:[{value:0,label:"正在加载中"}],checked:!1,clientHeight:{height:""}}},created:function(){window.addEventListener("resize",this.getHeight),this.getHeight()},destroyed:function(){window.removeEventListener("resize",this.getHeight)},mounted:function(){},components:{Notify:e.b},methods:{test:function(){},getHeight:function(){this.clientHeight.height=window.innerHeight-0+"px"},goLogin:function(){this.$router.push("/")},userDataNameBlur:function(){return""==this.registerForm.userName?(Object(e.b)({message:"请输入姓名",duration:2e3,background:"#FF6262"}),!1):/^[a-zA-Z\u4e00-\u9fa5]+$/.test(this.registerForm.userName)?void 0:(Object(e.b)({message:"姓名仅允许汉字与字母",duration:2e3,background:"#FF6262"}),!1)},corpNameBlur:function(){return""==this.registerForm.corpName?(Object(e.b)({message:"请输入企业名称",duration:2e3,background:"#FF6262"}),!1):this.registerForm.corpName.length<6?(Object(e.b)({message:"企业名称长度不少于6位",duration:2e3,background:"#FF6262"}),!1):void 0},getValidateCode:function(){var t=this;""==t.registerForm.mobile?Object(e.b)({message:"请输入手机号",duration:2e3,background:"#FF6262"}):t.registerForm.mobile.match(/^1[0-9]{10}$/)?t.axios(t.qdsGlobalApiUrl+"notValidate/getRegisterSignCode",{method:"post",params:{mobile:t.registerForm.mobile}}).then(function(s){if(1==s.data.success){t.timer||(t.count=60,t.show=!1,t.timer=setInterval(function(){t.count>0&&t.count<=60?t.count--:(t.show=!0,clearInterval(t.timer),t.timer=null)},1e3)),Object(e.b)({message:"发送成功",duration:2e3,background:"#20D3B3"})}else t.timer=null,Object(e.b)({message:s.data.message+"(错误码: "+s.data.code+")",duration:2e3,background:"#FF6262"})}).catch(function(s){t.timer=null}):Object(e.b)({message:"手机号格式不正确",duration:2e3,background:"#FF6262"})},goRegister:function(t){var s=this,n=new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/);return""==this.registerForm.userName?(Object(e.b)({message:"请输入姓名",duration:2e3,background:"#FF6262"}),!1):/^[a-zA-Z\u4e00-\u9fa5]+$/.test(this.registerForm.userName)?""==s.registerForm.corpName?(Object(e.b)({message:"请输入企业名称",duration:2e3,background:"#FF6262"}),!1):s.registerForm.corpName.length<6?(Object(e.b)({message:"企业名称长度不少于6位",duration:2e3,background:"#FF6262"}),!1):""==s.registerForm.mobile?(Object(e.b)({message:"请输入手机号码",duration:2e3,background:"#FF6262"}),!1):""==s.registerForm.smsCode?(Object(e.b)({message:"请输入验证码",duration:2e3,background:"#FF6262"}),!1):""==s.registerForm.passWord?(Object(e.b)({message:"请输入密码",duration:2e3,background:"#FF6262"}),!1):""==s.registerForm.checkPass?(Object(e.b)({message:"请确认密码",duration:2e3,background:"#FF6262"}),!1):s.registerForm.checkPass!=s.registerForm.passWord?(Object(e.b)({message:"两次输入密码不一致!",duration:2e3,background:"#FF6262"}),!1):n.test(s.registerForm.checkPass)&&n.test(s.registerForm.passWord)?s.checked?void s.axios(s.qdsGlobalApiUrl+"notValidate/register",{method:"post",params:{userName:s.registerForm.userName,corpName:s.registerForm.corpName,mobile:s.registerForm.mobile,smsCode:s.registerForm.smsCode,password:s.registerForm.passWord}}).then(function(t){"200"==t.data.code?(Object(e.b)({message:"注册成功",duration:2e3,background:"#20D3B3"}),setTimeout(function(){s.$router.push("/")},2e3)):Object(e.b)({message:t.data.message+"(错误码: "+t.data.code+")",duration:2e3,background:"#FF6262"})}).catch(function(t){}):(Object(e.b)({message:"若同意《用户服务协议》请勾选",duration:2e3,background:"#FF6262"}),!1):(Object(e.b)({message:"密码为不少于6位的数字和字母组成",duration:2e3,background:"#FF6262"}),!1):(Object(e.b)({message:"姓名仅允许汉字与字母",duration:2e3,background:"#FF6262"}),!1)},open:function(){this.contentText='<div><p style="margin:20pt 0pt 0pt; text-align:center"><span style="color:#2DA1A4; font-family:宋体; font-size:16pt; font-weight:bold">优蓝</span><span style="color:#2DA1A4; font-family:宋体; font-size:16pt; font-weight:bold">招聘用户服务协议</span></p><p style="margin:0pt 0pt 0pt"><br><span style="font-family:宋体; font-size:12pt">&nbsp;</span></p><p style="margin:0pt 0pt 3.75pt; text-indent:18.75pt"><span style="font-family:宋体; font-size:12pt">本网站（网址包括但不限于www.youlanw.com</span><span style="font-family:宋体; font-size:12pt">即优蓝网</span><span style="font-family:宋体; font-size:12pt">、</span><span style="font-family:宋体; font-size:12pt">优蓝APP、公众号、小程序等</span><span style="font-family:宋体; font-size:12pt">）的各项服务的所有权和运作权归</span><span style="font-family:宋体; font-size:12pt">上海优尔蓝信息科技股份有限公司</span><span style="font-family:宋体; font-size:12pt">。本网站仅提供求职、招聘信息发布及其他与此相关联之服务。企业用户（或称“使用者”）必须完全同意包括本协议在内的所有服务条款（包括但不限于《用户协议》、《隐私政策》、《法律声明》）、完成注册程序并缴纳完毕全部费用后，才能注册成为本网站的使用者，并遵守本协议所述之条款使用本网站所提供的服务，在注册成为企业用户的同时，您也承认了您拥有购买本网站所提供的服务产品所必须的完全民事权利能力和行为能力，并且您将对您在订单中提供的所有信息的真实性负责。如果您不接受本协议之条款，请勿使用本网站。如您点击确认本协议的，则视为您已经接受本协议之内容。</span></p><p style="margin:0pt 0pt 3.75pt; text-indent:18.75pt"><span style="font-family:宋体; font-size:12pt">本网站保留随时修正本服务条款的权利。如果我们决定改变本网站的企业用户服务协议，我们会在本网站公布改变的内容。除非用户向本网站提出不接受修改并立即终止服务的通知，否则本网站视为用户接受修改后的内容并按照修改后的内容继续享有本网站提供的服务。或者您虽然向本网站提出异议但仍继续使用本网站提供之服务的，则视为您已经同意本网站就用户协议的修改并愿意遵照执行。本网站对上述修改所致的用户的任何不便或损失（如有）不承担任何责任。</span></p><p style="margin:0pt 0pt 10pt; text-align:center"><span style="font-family:宋体; font-size:12pt; font-weight:bold">&nbsp;</span></p><p style="margin:0pt 0pt 10pt; text-align:center"><span style="font-family:宋体; font-size:12pt; font-weight:bold">一、服务声明</span></p><p style="margin:0pt 0pt 10pt"><br><span style="font-family:宋体; font-size:12pt; font-weight:bold">（一）上网的准备</span><br><br><span style="font-family:宋体; font-size:12pt">本网站运用自己的操作系统通过国际互联网络为用户提供网络服务。同时，企业用户必须：</span><br><span style="font-family:宋体; font-size:12pt">1、自行配备上网的所需设备，包括个人电脑、调制解调器或其他必备上网装置。</span><br><span style="font-family:宋体; font-size:12pt">2、自行负担上网所支付的与此服务有关的电话费用、网络费用。</span><br><br><span style="font-family:宋体; font-size:12pt; font-weight:bold">（二）信息的发布</span><br><br><span style="font-family:宋体; font-size:12pt">本网站只能用于合法目的，企业用户在成功注册为企业用户后，仅可就招聘目的（即雇主寻找雇员）在本网站发布招聘信息以及按照本网站为您开设的权限或功能浏览求职者的简历信息。本网站明确禁止将本网站及从本网站获取的信息用于任何其他用途，并要求所有企业用户同意不得从事下列任何一种行为：</span><br><span style="font-family:宋体; font-size:12pt">1、发布任何有关法律规定明令禁止发布的信息；</span><br><span style="font-family:宋体; font-size:12pt">2、发布任何与求职、招聘信息发布之目的不适之信息；</span><br><span style="font-family:宋体; font-size:12pt">3、发布任何职位名称与职位描述不符的信息；</span><br><span style="font-family:宋体; font-size:12pt">4、以任何形式侵犯他人的版权、商标权、商业秘密或其他知识产权；</span><br><span style="font-family:宋体; font-size:12pt">5、侵犯个人和社会大众的隐私安全；</span><br><span style="font-family:宋体; font-size:12pt">6、传输任何非法的、骚扰性的、中伤性的、辱骂性的、恐吓性的、伤害性、庸俗或淫秽的信息。</span><br><span style="font-family:宋体; font-size:12pt">7、发布虚假、不准确、不完整或具有误导性的职位信息或意见、通知、商业广告或其他与招聘目的不符的内容。</span><br><span style="font-family:宋体; font-size:12pt">8、发布任何具有贬损、侮辱、有违社会公序良俗等的信息或言论；</span><br><span style="font-family:宋体; font-size:12pt">9、利用网站开设的功能或权限发布、编辑、传播等引人反感或有违风化的信息、言论或内容。</span><br><span style="font-family:宋体; font-size:12pt">为了证明企业用户主体资格的真实性，本网站保留向企业用户索取相关证明材料（如：加盖公章的营业执照副本等）的权利，企业用户向本网站不可撤销的承诺其系依法成立的法人、团体或其他法律认可的组织。企业用户保证其向本网站提供的上述证明材料及在本网站发布的信息真实、合法、有效，且对该企业及企业在本网站所发布的信息及借助本网站所实施的全部行为承担完全责任，如因企业用户自身或企业用户所发布的信息违反本协议之规定或者侵犯任何第三方的合法权益引起的一切纠纷或责任，由企业用户自行承担，本网站不承担任何责任且有权向企业用户进行追偿。</span><span style="font-family:宋体; font-size:12pt">&nbsp;</span><br><br><span style="font-family:宋体; font-size:12pt; font-weight:bold">（三）信息的使用</span><br><br><span style="font-family:宋体; font-size:12pt">1、本网站提供的其他信息，仅能用于同该信息之相应内容有关的目的，否则，不得作为其他目的使用。本网站享有解释信息使用之目的的权利；</span><br><span style="font-family:宋体; font-size:12pt">2、除为满足企业用户自身招聘目的外，企业用户不得将任何本网站的信息用作任何商业目的。也不得未经本网站之许可，向任何其他第三方披露、许可、转让或以类似上述之方式被其他第三方所知晓。</span><br><span style="font-family:宋体; font-size:12pt">3、企业用户不得将从</span><span style="font-family:宋体; font-size:12pt">优蓝</span><span style="font-family:宋体; font-size:12pt">招聘所购买的服务产品（包括但不限于简历信息）用于任何除自身招聘以外的其他目的，或以任何方式泄露、授权或变相授权给任何第三方，除非事先获得</span><span style="font-family:宋体; font-size:12pt">优蓝</span><span style="font-family:宋体; font-size:12pt">招聘的书面同意。</span><br><br><span style="font-family:宋体; font-size:12pt; font-weight:bold">（四）信息的公开</span><br><br><span style="font-family:宋体; font-size:12pt">在本网站所发布的任何信息，均有可能被任何本网站的访问者浏览，也可能被错误使用。本网站对前述浏览或错误使用情形将不予承担任何责任。</span><br><br><span style="font-family:宋体; font-size:12pt; font-weight:bold">（五）信息的更改与删除</span><br><br><span style="font-family:宋体; font-size:12pt">除了信息的发布者外，任何访问者不得更改或删除他人发布的任何信息。本网站有权根据其判断保留修改或删除任何本网站认为不适合通过本网站发布信息之权利。</span><br><br><span style="font-family:宋体; font-size:12pt; font-weight:bold">（六）在线支付</span><br><br><span style="font-family:宋体; font-size:12pt">1、在线注册的企业用户通过第三方公司提供的交易系统完成费用的支付，购买服务产品的价格以企业用户在线下单时本网站上公布的价格为准。在前述费用支付完成后，本网站不接受企业用户基于任何理由的退款要求。</span><br><span style="font-family:宋体; font-size:12pt">2、企业用户应明确知晓，本网站有权根据所提供服务之不同设定不同的服务价格，并有权根据市场之需求对价格进行调整。企业用户对购买之服务的价格表示确认或同意的，不得以本网站变更后的价格（如有）向本网站主张索赔或返还一定的金额等。如上述行为发生的，本网站有权不予赔偿或退还用户相应服务费等。</span><br><span style="font-family:宋体; font-size:12pt">3、如企业用户有违反有关法律法规以及本协议的行为，包括但不限于发布有关法律法规或本协议中明令禁止发布的信息，恶意损毁本网站声誉、商誉以及其他违反有关法律法规、本协议以及网站使用规则某一项规定的行为，本网站将有权单方决定中断或终止向企业用户提供服务，本网站将不退还企业用户已支付费用且不承担任何责任，由此给企业用户带来的损失由企业用户自行承担。</span><br><span style="font-family:宋体; font-size:12pt">4、如因不可抗力、提供交易系统的第三方公司原因或其它本网站无法控制的原因导致网上交易无法完成、网站系统崩溃或无法正常使用而使购买的服务中断或丢失有关的信息、记录等，本网站不承担责任。但是本网站会尽可能合理地协助处理善后事宜。</span><br><br><span style="font-family:宋体; font-size:12pt; font-weight:bold">（七）帐号、密码及安全性</span><br><br><span style="font-family:宋体; font-size:12pt">企业用户一旦注册成功，成为本网站的企业用户，将得到一个密码和用户名。企业用户可随时改变密码，并负责用户名与密码的安全。企业用户不得将该用户名及密码提供给第三方使用或从事任何可能使用户名、密码存在泄露危险的行为（包括但不限于授权代理登录获取</span><span style="font-family:宋体; font-size:12pt">优蓝</span><span style="font-family:宋体; font-size:12pt">招聘信息、资料或利用第三方客户端插件及其他不正当手段获取</span><span style="font-family:宋体; font-size:12pt">优蓝</span><span style="font-family:宋体; font-size:12pt">招聘信息、资料的）。企业用户不得通过自研或授权、默认其他任何第三方利用各种计算机程序或其他任何方式对</span><span style="font-family:宋体; font-size:12pt">优蓝</span><span style="font-family:宋体; font-size:12pt">招聘网站、手机APP及简历资源、数据库信息等进行任何非正常访问或上述资料的获取、下载等。</span><br><span style="font-family:宋体; font-size:12pt">企业用户对以其用户名进行的所有活动和事件负全责。若企业用户发现任何非法使用用户帐号或存在安全漏洞的情况，请立即通告本网站。企业用户应理解并知悉</span><span style="font-family:宋体; font-size:12pt">优蓝</span><span style="font-family:宋体; font-size:12pt">招聘采取行动需要合理时间，</span><span style="font-family:宋体; font-size:12pt">优蓝</span><span style="font-family:宋体; font-size:12pt">招聘对在采取行动前已经产生的后果（包括但不限于企业用户的任何损失）不承担任何责任。</span><br><br><span style="font-family:宋体; font-size:12pt; font-weight:bold">（八）招聘的合法性</span><br><br><span style="font-family:宋体; font-size:12pt">1、企业用户应保证其所发布或提供信息的真实性、合法性、有效性，不得冒充他人、不得利用他人的名义发布任何信息。</span><br><span style="font-family:宋体; font-size:12pt">2、企业用户应保证其招聘行为的合法性，保证不存在任何扣押被录用人员或参加面试人员的居民身份证和其他证件、以担保或其他任何名义向劳动者收取财物或其他以招用人员为名牟取不正当利益等民事或刑事等违法、犯罪行为。若因其招聘行为引发任何第三人投诉或诉讼等情形，应主动采取补救措施、并积极配合</span><span style="font-family:宋体; font-size:12pt">优蓝</span><span style="font-family:宋体; font-size:12pt">招聘降低和消除事件可能给</span><span style="font-family:宋体; font-size:12pt">优蓝</span><span style="font-family:宋体; font-size:12pt">招聘造成的影响。</span><br><span style="font-family:宋体; font-size:12pt">3、企业用户应保证遵守招聘活动秩序，合理使用</span><span style="font-family:宋体; font-size:12pt">优蓝</span><span style="font-family:宋体; font-size:12pt">招聘提供的物料及资源，因企业用户及其工作人员原因造成</span><span style="font-family:宋体; font-size:12pt">优蓝</span><span style="font-family:宋体; font-size:12pt">招聘或其他人身或财产损失的，均由企业用户负责全额赔偿。</span><br><br><span style="font-family:宋体; font-size:12pt; font-weight:bold">(九)网站使用</span><br><br><span style="font-family:宋体; font-size:12pt">1、明确的禁止使用</span><br><span style="font-family:宋体; font-size:12pt">www.youlanw.com（含网站及手机APP</span><span style="font-family:宋体; font-size:12pt">、</span><span style="font-family:宋体; font-size:12pt">公众号、小程序等</span><span style="font-family:宋体; font-size:12pt">） 只能用于合法目的，即个人寻找职业和雇主寻找雇员。</span><span style="font-family:宋体; font-size:12pt">www.youlanw.com</span><span style="font-family:宋体; font-size:12pt">明确禁止任何其他用途，并要求所有使用者同意不用于下列任何一种用途：</span><br><span style="font-family:宋体; font-size:12pt">（1）在简历中心公布不完整、虚假或不准确的简历资料，或不是使用者的准确简历(而为他人寻找全职或兼职工作)。</span><br><span style="font-family:宋体; font-size:12pt">（2）公布不是简历的资料，如意见、通知、商业广告或其他非简历内容。</span><br><span style="font-family:宋体; font-size:12pt">（3）为</span><span style="font-family:宋体; font-size:12pt">www.youlanw.com</span><span style="font-family:宋体; font-size:12pt">的竞争同行回应职位，并用此方法寻求与雇主联络业务。</span><br><span style="font-family:宋体; font-size:12pt">（4）除发布者外，删除或修改其他个人或公司公布的资料。</span><br><span style="font-family:宋体; font-size:12pt">（5）擅自打印、复制或以其他方式使用有关雇员的任何个人资料或有关雇主的商业信息。</span><br><span style="font-family:宋体; font-size:12pt">（6）未经同意，给公布信息的个人或公司发电子邮件、打电话、寄信或以其他方式进行接触。</span><br><span style="font-family:宋体; font-size:12pt">2、网址安全法规</span><br><span style="font-family:宋体; font-size:12pt">禁止使用者破坏或企图破坏 </span><span style="font-family:宋体; font-size:12pt">www.youlanw.com</span><span style="font-family:宋体; font-size:12pt"> 的安全法规，包括但不限于：</span><br><span style="font-family:宋体; font-size:12pt">（1）接触未经许可的数据或进入未经许可的服务器、帐户、邮箱或许可第三方接入未经本网站同意的由本网站发布、输送、传播的数据、简历或其他信息等；</span><br><span style="font-family:宋体; font-size:12pt">（2）没有得到许可，企图探查、扫描或测试系统或网络的弱点或者破坏安全措施；</span><br><span style="font-family:宋体; font-size:12pt">（3）企图干涉对用户及网络的服务，包括但不限于通过超载、“邮件炸弹”或“摧毁”等手段；</span><br><span style="font-family:宋体; font-size:12pt">（4）发送促销、产品广告及服务的email；</span><br><span style="font-family:宋体; font-size:12pt">（5）伪造TCP/IP数据包名称或部分名称。破坏系统或网络可能导致犯罪。</span><span style="font-family:宋体; font-size:12pt">www.youlanw.com</span><span style="font-family:宋体; font-size:12pt"> 将调查此类破坏行为的发生，并可能干预、和执法当局合作起诉犯此类破坏行为的使用者。</span><br><span style="font-family:宋体; font-size:12pt">3、总则</span><br><span style="font-family:宋体; font-size:12pt">严禁从事以下行为：</span><br><span style="font-family:宋体; font-size:12pt">（1）违反任何现行法律法规及其不时的修订；</span><br><span style="font-family:宋体; font-size:12pt">（2）侵犯他人的版权、商业机密、或其他知识产权，或侵犯了他人的隐私权、出版权或其他个人合法权利；</span><br><span style="font-family:宋体; font-size:12pt">（3）利用本网站传送、分发、储存属于诽谤、淫秽、威胁、辱骂性、毁损他人或其他非法或者违反社会公序良俗的材料；</span><br><span style="font-family:宋体; font-size:12pt">（4）利用本网站提供的服务系统进行任何可能对互联网或移动网正常运转造成不利影响的行为；</span><br><span style="font-family:宋体; font-size:12pt">（5）以任何形式使用本网站提供的服务进行任何不利于本网站的行为。</span><br><br><span style="font-family:宋体; font-size:12pt; font-weight:bold">（十）服务暂停、服务终止</span><br><br><span style="font-family:宋体; font-size:12pt">任何一位使用者经本网站确定已违反了有关法律法规、本协议或网站使用规则某一项规定，将收到一份书面警告。如果该使用者在接到前述警告后，以书面形式表示自己再也不会有违犯行为，本网站有权决定是否继续给予暂停或终止使用的处理。然而，如果本网站认为必要时，也可不提出警告而马上暂停或终止对该使用者的服务。如果我们确定某一使用者再次违犯了网络使用规则的任何一项规定，无需再发通知，该使用者立即受到暂停使用或终止使用的处理。</span><br><br><span style="font-family:宋体; font-size:12pt; font-weight:bold">（十一）法律适用和争议处理</span><br><br><span style="font-family:宋体; font-size:12pt">本协议的订立、执行和解释及争议的解决均应适用中华人民共和国法律法规。如用户就本协议与本网站及</span><span style="font-family:宋体; font-size:12pt">优蓝</span><span style="font-family:宋体; font-size:12pt">招聘发生任何争议，应提交</span><span style="font-family:宋体; font-size:12pt">优蓝</span><span style="font-family:宋体; font-size:12pt">招聘所在地有管辖权的人民法院进行诉讼。</span><br><span style="font-family:宋体; font-size:12pt">&nbsp;</span></p><p style="margin:0pt 0pt 10pt; text-align:center"><span style="font-family:宋体; font-size:12pt; font-weight:bold">二、法律声明</span></p><p style="margin:0pt 0pt 10pt; orphans:0; text-align:justify; widows:0"><br><span style="font-family:宋体; font-size:12pt; font-weight:bold">（一）版权</span><br><br><span style="font-family:宋体; font-size:12pt">此网站的内容、图表、版式设计等所呈现出的全部或部分可单独作为作品保护之内容等及维系本网站运营的各种源代码、执行程序、系统均受到中国版权法律、法规及相关国际条约的保护。</span><span style="font-family:宋体; font-size:12pt">www.youlanw.com</span><span style="font-family:宋体; font-size:12pt">拥有一切权利，未经</span><span style="font-family:宋体; font-size:12pt">www.youlanw.com</span><span style="font-family:宋体; font-size:12pt">同意，不允许全部或部分复制、转载或以其他任何方式使用。禁止以任何目的重新使用</span><span style="font-family:宋体; font-size:12pt">www.youlanw.com</span><span style="font-family:宋体; font-size:12pt">网上的内容和图表等作品或作品元素。在内容和图表等作品、元素不作任何修改、保留内容未做修改以及事先得到</span><span style="font-family:宋体; font-size:12pt">www.youlanw.com</span><span style="font-family:宋体; font-size:12pt">的许可的情况下，</span><span style="font-family:宋体; font-size:12pt">www.youlanw.com</span><span style="font-family:宋体; font-size:12pt">的网上材料可作为网外信息方面和非商业方面的用途。经</span><span style="font-family:宋体; font-size:12pt">www.youlanw.com</span><span style="font-family:宋体; font-size:12pt">同意后复制、转载或者以其他形式使用本网站相关资料的，应当标明资料来源于“</span><span style="font-family:宋体; font-size:12pt">www.youlanw.com</span><span style="font-family:宋体; font-size:12pt">”，以及</span><span style="font-family:宋体; font-size:12pt">www.youlanw.com</span><span style="font-family:宋体; font-size:12pt">或相关第三方拥有该等资料的著作权的字样。</span><br><span style="font-family:宋体; font-size:12pt">申请使用</span><span style="font-family:宋体; font-size:12pt">www.youlanw.com</span><span style="font-family:宋体; font-size:12pt">内容的许可是按逐个批准的原则进行的。</span><span style="font-family:宋体; font-size:12pt">www.youlanw.com</span><span style="font-family:宋体; font-size:12pt">欢迎使用者提出申请。请把请求直接提交给webmaster@</span><span style="font-family:宋体; font-size:12pt">www.youlanw.com</span><span style="font-family:宋体; font-size:12pt">。请勿复制或采用</span><span style="font-family:宋体; font-size:12pt">www.youlanw.com</span><span style="font-family:宋体; font-size:12pt">所创造的用以制成网页的HTML。HTML的版权同样属于</span><span style="font-family:宋体; font-size:12pt">www.youlanw.com</span><span style="font-family:宋体; font-size:12pt">。</span><br><span style="font-family:宋体; font-size:12pt">www.youlanw.com</span><span style="font-family:宋体; font-size:12pt">对其网址上的所有图标、图饰、图表、色彩、文字表述及其组合、版面设计、数据库均享有完全的著作权及其衍生的其他全部权利，对发布的信息均享有专有的发布和使用权。</span><br><br><span style="font-family:宋体; font-size:12pt; font-weight:bold">（二）商标</span><br><br><span style="font-family:宋体; font-size:12pt">www.youlanw.com</span><span style="font-family:宋体; font-size:12pt">的商标，包括</span><span style="font-family:宋体; font-size:12pt">www.youlanw.com</span><span style="font-family:宋体; font-size:12pt">、Alliance和</span><span style="font-family:宋体; font-size:12pt">www.youlanw.com</span><span style="font-family:宋体; font-size:12pt">其他网站的商标属于</span><span style="font-family:宋体; font-size:12pt">www.youlanw.com</span><span style="font-family:宋体; font-size:12pt">所有。</span><span style="font-family:宋体; font-size:12pt">www.youlanw.com</span><span style="font-family:宋体; font-size:12pt">上的</span><span style="font-family:宋体; font-size:12pt">www.youlanw.com</span><span style="font-family:宋体; font-size:12pt">合作者的商标属于合作者所有。未经</span><span style="font-family:宋体; font-size:12pt">www.youlanw.com</span><span style="font-family:宋体; font-size:12pt">及/或</span><span style="font-family:宋体; font-size:12pt">www.youlanw.com</span><span style="font-family:宋体; font-size:12pt">合作者事先书面许可，不得复制或以任何其他方式使用上述商标。</span><br><br><span style="font-family:宋体; font-size:12pt; font-weight:bold">（三）免责条款</span><br><br><span style="font-family:宋体; font-size:12pt">1、使用者理解并同意</span><span style="font-family:宋体; font-size:12pt">www.youlanw.com</span><span style="font-family:宋体; font-size:12pt">对以下情况免责：</span><br><span style="font-family:宋体; font-size:12pt">（1）应聘信息发布方对存入简历中心的个人简历及材料的格式、内容的真实性、准确性和合法性负有全部责任，招聘信息发布方对于其在职位数据库公布的材料的真实性、准确性和合法性负有全部责任。</span><span style="font-family:宋体; font-size:12pt">www.youlanw.com</span><span style="font-family:宋体; font-size:12pt">仅是提供职位发布等信息的平台，</span><span style="font-family:宋体; font-size:12pt">www.youlanw.com</span><span style="font-family:宋体; font-size:12pt">不对应聘及招聘信息的真实性、有效性、准确性负责。</span><br><span style="font-family:宋体; font-size:12pt">（2）</span><span style="font-family:宋体; font-size:12pt">www.youlanw.com</span><span style="font-family:宋体; font-size:12pt">并不能时时监视此网址，但保留进行随时监视的权利。对于非</span><span style="font-family:宋体; font-size:12pt">www.youlanw.com</span><span style="font-family:宋体; font-size:12pt">公布的材料，</span><span style="font-family:宋体; font-size:12pt">www.youlanw.com</span><span style="font-family:宋体; font-size:12pt">一概不负任何责任。</span><br><span style="font-family:宋体; font-size:12pt">（3）</span><span style="font-family:宋体; font-size:12pt">www.youlanw.com</span><span style="font-family:宋体; font-size:12pt">虽然对用户进行资质审查，但</span><span style="font-family:宋体; font-size:12pt">www.youlanw.com</span><span style="font-family:宋体; font-size:12pt">并非司法机关，仅能要求用户提交真实、有效的资质证明文件，并对该提交的资质证明文件进行审核。如用户提交虚假、伪造、变造文件的，</span><span style="font-family:宋体; font-size:12pt">www.youlanw.com</span><span style="font-family:宋体; font-size:12pt">对此概不承担法律责任。</span><br><span style="font-family:宋体; font-size:12pt">（4）</span><span style="font-family:宋体; font-size:12pt">www.youlanw.com</span><span style="font-family:宋体; font-size:12pt">不对用户的线下行为负责。企业用户及个人用户均应审慎的对待他方之行为，因为他方之行为给用户造成任何不利影响的，</span><span style="font-family:宋体; font-size:12pt">www.youlanw.com</span><span style="font-family:宋体; font-size:12pt">不承担任何法律责任。</span><br><span style="font-family:宋体; font-size:12pt">（5）</span><span style="font-family:宋体; font-size:12pt">www.youlanw.com</span><span style="font-family:宋体; font-size:12pt">不能保证某一种职位描述会有一定数目的使用者来浏览，也不能保证会有一位特定的使用者来浏览。</span><br><span style="font-family:宋体; font-size:12pt">（6）</span><span style="font-family:宋体; font-size:12pt">www.youlanw.com</span><span style="font-family:宋体; font-size:12pt">对由于政府禁令、现行生效的适用法律或法规的变更、火灾、地震、动乱、战争、停电、通讯线路中断、黑客攻击、计算机病毒侵入或发作、电信部门技术调整、因政府管制而造成网站的暂时性关闭等任何影响网络正常运营的不可预见、不可避免、不可克服和不可控制的事件（“不可抗力事件”），以及他人蓄意破坏、</span><span style="font-family:宋体; font-size:12pt">www.youlanw.com</span><span style="font-family:宋体; font-size:12pt">工作人员的疏忽或不当使用，正常的系统维护、系统升级，或者因网络拥塞而导致本网站不能访问而造成的本网站所提供的信息及数据的延误、停滞或错误，以及使用者由此受到的一切损失不承担任何责任。</span><br><span style="font-family:宋体; font-size:12pt">（8）由于与本网站链接的其他网站或用户所使用的网络运营商所造成之个人资料泄露及由此而导致的任何法律争议和后果均由网站或用户所使用的网络运营商负责；</span><br><span style="font-family:宋体; font-size:12pt">（9）对于</span><span style="font-family:宋体; font-size:12pt">www.youlanw.com</span><span style="font-family:宋体; font-size:12pt">为使用者提供便利而设置的外部链接网址，</span><span style="font-family:宋体; font-size:12pt">www.youlanw.com</span><span style="font-family:宋体; font-size:12pt">并不保证其准确性、安全性和完整性，亦并不代表本网站对其链接内容的认可，请使用者谨慎确认后使用，</span><span style="font-family:宋体; font-size:12pt">www.youlanw.com</span><span style="font-family:宋体; font-size:12pt">对由此导致的任何损失或伤害不承担任何责任。</span><br><span style="font-family:宋体; font-size:12pt">2、除了本网址在隐私政策中提出的条款外，使用者理解并同意</span><span style="font-family:宋体; font-size:12pt">www.youlanw.com</span><span style="font-family:宋体; font-size:12pt">在不公开姓名的情况下，可以向第三方提供综合性的非个人化信息资料。除非：</span><br><span style="font-family:宋体; font-size:12pt">（1）依照法律、法规、法院命令、监管机构命令的要求；</span><br><span style="font-family:宋体; font-size:12pt">（2）根据政府行为、监管要求或请求；</span><br><span style="font-family:宋体; font-size:12pt">（3）因</span><span style="font-family:宋体; font-size:12pt">www.youlanw.com</span><span style="font-family:宋体; font-size:12pt">其认为系为遵守监管义务或公共目的所需；</span><br><span style="font-family:宋体; font-size:12pt">（4）为免除访问者在生命、身体或财产方面之急迫危险，</span><br><span style="font-family:宋体; font-size:12pt">否则在没有本人事先同意的情况下，</span><span style="font-family:宋体; font-size:12pt">www.youlanw.com</span><span style="font-family:宋体; font-size:12pt"> 不会向第三方公开你的姓名、地址、电子邮件和电话等个人信息。</span><br><br><span style="font-family:宋体; font-size:12pt; font-weight:bold">（四）风险声明</span><br><br><span style="font-family:宋体; font-size:12pt">使用者使用本网址须自行承担风险。本网址的材料是按“正如… …的情况”所提供的，对材料不作任何明示的或暗示的保证。除非适用的法律法规有明确规定，</span><span style="font-family:宋体; font-size:12pt">www.youlanw.com</span><span style="font-family:宋体; font-size:12pt"> 及其所属网络对销售性的和适合于某一特定目的的一切保证不予承认。 </span><span style="font-family:宋体; font-size:12pt">www.youlanw.com</span><span style="font-family:宋体; font-size:12pt"> 不能保证材料的特殊目的不受阻挠不出错误，也不能保证错误会得到纠正，也不能保证本网址或制成本网址的材料不含有病毒或其他有害成分。在有关材料的使用或使用结果方面对材料的正确性、准确性、可靠性或其他方面，</span><span style="font-family:宋体; font-size:12pt">www.youlanw.com</span><span style="font-family:宋体; font-size:12pt"> 不作出保证或任何说明。用户（而不是 </span><span style="font-family:宋体; font-size:12pt">www.youlanw.com</span><span style="font-family:宋体; font-size:12pt"> ）承担一切必要的服务、修理或改正费用。在适用法规不允许暗含保证可免除承担一切费用的范围里，免除上述承担费用不适用于你。</span></p></div>',this.textShow=!0}}},b={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"register-page input-border-none",style:t.clientHeight},[n("div",{staticClass:"register-box"},[n("el-form",{ref:"ruleRegister",staticClass:"demo-ruleForm",attrs:{model:t.registerForm,"status-icon":"",rules:t.ruleRegister},on:{submit:function(s){return s.preventDefault(),t.goRegister(s)}}},[n("div",{staticClass:"items-line"},[n("img",{attrs:{src:t.registerPerson,alt:""}}),t._v(" "),n("el-form-item",{attrs:{label:""}},[n("el-input",{attrs:{"auto-complete":"off",maxlength:"5",placeholder:"请输入姓名"},on:{blur:t.userDataNameBlur},model:{value:t.registerForm.userName,callback:function(s){t.$set(t.registerForm,"userName","string"==typeof s?s.trim():s)},expression:"registerForm.userName"}})],1)],1),t._v(" "),n("div",{staticClass:"items-line"},[n("img",{attrs:{src:t.companyIcon,alt:""}}),t._v(" "),n("el-form-item",{attrs:{label:"",prop:"corpName"}},[n("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"请输入企业名称"},on:{blur:t.corpNameBlur},model:{value:t.registerForm.corpName,callback:function(s){t.$set(t.registerForm,"corpName","string"==typeof s?s.trim():s)},expression:"registerForm.corpName"}})],1)],1),t._v(" "),n("div",{staticClass:"items-line"},[n("img",{attrs:{src:t.loginPhone,alt:""}}),t._v(" "),n("el-form-item",{attrs:{label:"",prop:"mobile"}},[n("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"请输入手机号码",maxlength:"11"},model:{value:t.registerForm.mobile,callback:function(s){t.$set(t.registerForm,"mobile","string"==typeof s?s.trim():s)},expression:"registerForm.mobile"}})],1)],1),t._v(" "),n("div",{staticClass:"items-line"},[n("img",{attrs:{src:t.registerCode,alt:""}}),t._v(" "),n("el-input",{attrs:{placeholder:"请输入验证码"},model:{value:t.registerForm.smsCode,callback:function(s){t.$set(t.registerForm,"smsCode","string"==typeof s?s.trim():s)},expression:"registerForm.smsCode"}},[n("template",{slot:"append"},[n("span",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],on:{click:t.getValidateCode}},[t._v("获取验证码")]),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:!t.show,expression:"!show"}]},[t._v("重新获取 "+t._s(t.count)+" S")])])],2)],1),t._v(" "),n("div",{staticClass:"items-line"},[n("img",{attrs:{src:t.registerPwd,alt:""}}),t._v(" "),n("el-form-item",{attrs:{label:"",prop:"passWord"}},[n("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"请输入密码"},model:{value:t.registerForm.passWord,callback:function(s){t.$set(t.registerForm,"passWord","string"==typeof s?s.trim():s)},expression:"registerForm.passWord"}})],1)],1),t._v(" "),n("div",{staticClass:"items-line"},[n("img",{attrs:{src:t.registerPwd,alt:""}}),t._v(" "),n("el-form-item",{attrs:{label:"",prop:"checkPass"}},[n("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"请确认密码"},model:{value:t.registerForm.checkPass,callback:function(s){t.$set(t.registerForm,"checkPass","string"==typeof s?s.trim():s)},expression:"registerForm.checkPass"}})],1)],1)])],1),t._v(" "),n("div",{staticClass:"select-agreement"},[n("van-checkbox",{attrs:{"checked-color":"#2DA1A4"},model:{value:t.checked,callback:function(s){t.checked=s},expression:"checked"}},[n("p",[n("label",{attrs:{for:"agreement"}}),t._v(" 我已阅读并同意 "),n("span",{staticClass:"user-agreement",on:{click:t.open}},[t._v("《用户服务协议》")])])])],1),t._v(" "),n("div",{staticClass:"login-btn-box"},[n("span",{on:{click:t.goRegister}},[t._v("注册")])]),t._v(" "),n("div",{staticClass:"zhanwei"}),t._v(" "),n("div",{staticClass:"footer"},[n("p",[n("span",[t._v("已有账号,")]),n("span",{staticClass:"go-login-btn",on:{click:t.goLogin}},[t._v("立即登录 >")])])]),t._v(" "),n("van-popup",{staticClass:"open-text",domProps:{innerHTML:t._s(t.contentText)},model:{value:t.textShow,callback:function(s){t.textShow=s},expression:"textShow"}})],1)},staticRenderFns:[]};var z=n("VU/8")(w,b,!1,function(t){n("vFlK")},"data-v-62436646",null);s.default=z.exports},IIcH:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAfCAYAAAAbW8YEAAABNUlEQVRIie3Xv0oDQRDH8U80MYKoIEgqUVHBRi1E7SxEwc7HUB9BSOVLqJUIlj6B+hS2qdLZCkYJGmNxG7kify8nBJIfDLfMzd73ht2ZZTMbd/diOsEWxiRTGbedgrKx8SN2MYNMQug7LrGOSqugRkb72MFEQlhDNRRQbBfUgK6Isq5hNfiTWA05rLWDZpv46sGSqKt5STdMXxoeaLM1/dNL5eYJh21CnjenTo96hQ5epgmyyIXnEh5i/hIuuoL2qAWMh/F2sIY+sYeDtKFx1UV9mKjLzYta7CLK/7WmJSwHK6KKb8wxTHU6eCUzag79ang20gg6gqaiZnV6nNK3z1u9yIS7zBvyokP4qw9QTpRIFT8x/6ToylHHbDb8US5ASedgzzfxTeMDZ1lcBWchBVgnveL6F7KUMdoNM4YbAAAAAElFTkSuQmCC"},VayJ:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAhCAYAAAAoNdCeAAADU0lEQVRIia3WW4iVVRQH8N+ZGZpJBZsxUouaIRrsdiYiqEjQal66R9GDmoSJWVDR/S1IIeglIqhg7AJNndEeJKjIguii5EGCiMouMl1nCCzTEsZqSsce1v6c09c5c74j/mGz97f32uu/9/rWWnuVysMVBTAHt+F6lNGDffgcr+E5TDRT0laAaAVG8QSWJiKpX5rmR5PcjOhosv4I1tV8j+Fd/IKTMIjTsAAj6Mf6oyFbUUO0D3djEw7XyJSwHE+Jm67Dt6j7bxqZcY4wD+zBJdiYI5K+N6b1PWnuSZzQCtkqzE/je7GrgVyGXbgnjedhZStk16V+TJiuCF7Bj7n9hcjOSf17/m+6RjiM99P43FbITkz97oJEGTL5ea2Q7U39ghbJMvm99RYbke1M/WXCvYuglOThi1bIXk99L5YVJFuW5IkUVpjsRfycxk9jUROiRUmOMGFLQT2BB9K4B1WRKfImLYlMUzWdM+/D7/WUzpSuRnCGSEE9IlM8JsIhy42XmzadJPtyI4XNEvF6fIPHhaf14tY6crvxkAbmy1Dkicmy+f3YJpKy1G9N8/3NiKBU8PE8Jihys2OGZv9sPq4ST0gZpwpn6cJfwpTjojyoYovpkClE1oabsBaXor3B3i6cnNpFWIND+ADPYjOmZiK7EEM4Pzc/kU4/iv34A7MwVzhHWTy47aJUGMQnuAMf1SNbi2dq5n4TmWQzduRPmUMbLhYWWYXudODtuAsbMiGiTBtKRAfxKPqEW1ebEEnr1STfl/YfTPqGkn6l8nClX5ioU5joGnzYRPkRfHZgw3++B2bf7tNbbnbeSyOL8aYw9STKHSLyO8VLe2NRolqSvt7VNSv/wNaPVy5fckFl0yDeSfofLJWHK2PCpd/GlUd5oz+Fd06jrX1y4Pg1XXgLV2C8DQuz/UWJCHPNiKlDWe2S6V1YKg9Xvhc/9SssFl7YEmpvmTtEt/DIs/BDh0igD6eJncL938CXIkibIkfQjrNxLe4UQQ8jpfJw5Ti8iqtzOiZFEP+EX3FA/Vt3Y7aoyE4RQd6Zk9mCGzrwtygqV4vX+cwk0Cnqv7o1YEF8Lcr4FzCVZYspPJ9aP5ZgAKcLT52b2qzcqSdF6tqf2ji+E06xTVjmCP4Fw7/HSS6X9fcAAAAASUVORK5CYII="},vFlK:function(t,s){}});
//# sourceMappingURL=7.eed493f5452bb823138a.1554216716160.js.map