//font size auto adjust
/*function fontsize_resize(){
	var window_width=$(window).width();
	if(window_width>=640){
		$('html').css('font-size',20+'px');
	}else{
		$('html').css('font-size',20*window_width/640+'px');
	}
}
fontsize_resize();
$(window).resize(fontsize_resize);*/
//adjust words position
if($('.app-list-2 .with-pic-bg').length){
	function words_pos_refresh(){
		var words_h=$('.app-list-2 .with-pic-bg .words').height();
		var adjust_h=words_h/2;
		$('.app-list-2 .with-pic-bg .words').css({'margin-top':-adjust_h});
	}
	words_pos_refresh();
	$(window).resize(words_pos_refresh);
}
$(function(){
	//for some kinds of brower like mi
	//setTimeout(fontsize_resize,0);
	//tab
	$('.app-tab .app-tab-title li').click(function(){
		$(this).addClass('current').siblings().removeClass('current');
		var index = $('.app-tab-title li').index(this);
		$(this).parents('.app-tab').find('.app-tab-each').eq(index).show().siblings('.app-tab-each').hide();
	});
})

//判断是否登录
function hasLogin(url,title){
	var u = navigator.userAgent;
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; 
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
	var appSource = "android";
	if(isAndroid){
		appSource = "android";
	}else if(isiOS){
		appSource = "ios";
	}
	$.getJSON("/app/getSessionCode",function(dataMap){
		if(dataMap.appSource!=undefined&&dataMap.appSource!=''){
			appSource = dataMap.appSource;
		}
		if(dataMap.status == "success"){//已登录
			if(url.indexOf("?")==-1){
				url = url +"?token="+dataMap.token+"&client_id="+dataMap.clientId;
			}else{
				url = url + "&token="+dataMap.token+"&client_id="+dataMap.clientId;
			}
			if(appSource=="android"){
				window.control.toNewPage(title,url);
			}else{
				location.href= url;
			}
		}else{//未登录跳转登录页面  needValideMobile 1 需要绑定手机号 2 不需要绑定手机号
			if(appSource=="android"){
				window.control.toLogin(1);
			}else if(appSource=="ios"){
				location.href="ios://toLogin?needValideMobile=1";
			}
		}
	});	
}

