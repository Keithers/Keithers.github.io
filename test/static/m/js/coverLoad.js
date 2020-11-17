 /* 判断设备是ios还是安卓 */
    var u = navigator.userAgent;
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
//请求蒙层数据
	$.post('/rest/v1/adv/getAdvByType',{'type':4},function(res){
		console.log(res);
		console.log(isiOS);
		
		$('.bg').attr('src',res.data[0].resource.thumbImageUrl)
		$('#rightCover').click(function(){
	        /* ios设备 */
		    if(isiOS){
		       location.href='https://gio.ren/rBnoo94'
		    }else{
		    	location.href=res.data[0].resource.linkUrl
		    }
        })
		
		/* 点击 ‘x’所在父级div   插掉 蒙层 */
		$('#topCover .left').click(function(){
			console.log('11')
			$('#topCover').hide()
		})
	})
	