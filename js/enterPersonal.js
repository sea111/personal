$(function(){
	//WPBridge.callMethod("JsInvokeNative", "wpShowLoadingDialog", {},function() {});	
	/*	//加密
	function getKey(portUrl){
		$.ajax({
			url:wpCommon.Url+"/wpwl/getKey",
			type:'post',
			success:function(res){
				key=res.data;
				getData(portUrl);
			}
		})
	}
	getKey()*/
	//遮罩和退出登录显示和隐藏
	function footerClick(objClick,objBottom,toggle,distance){
		$(objClick).click(function(){
			$("#smark").css("display",toggle);
			$(objBottom).animate({"bottom":distance},200);
		})
	}
	footerClick('.phonenumer',".foot","block","0")
	footerClick("#smark",".foot","none","-3rem")
	footerClick(".foot",".foot","none","-3rem")
	footerClick(".cancle",".foot","none","-3rem")	
	/*footerClick(".Recommend",".share","block","0")
	footerClick("#smark",".share","none","-1.60rem")*/
	
	//鼓励一下显示和隐藏
	function fight(objectClick,elements,showAddHide){
		$(objectClick).click(function(){
			$(elements).css("display",showAddHide)
		})
	}
	fight(".Fighting",".encourage","block")
	fight(".Fighting","#smark","block")
	fight(".pop-gray",".encourage","none")
	fight(".pop-gray","#smark","none")
	fight("#smark",".encourage","none")
	fight("#smark","#smark","none")
	/*$(".Fighting").click(function(){
		$(".encourage").show();
		$("#smark").show();
	})
	$(".pop-gray").click(function(){
		$(".encourage").hide();
		$("#smark").hide();
	})*/
	
	
	
	//点击进入活动中心
	$(".Activity").click(function(){
		window.location.href="activityCenter.html"
	})
	//点击进入我的优惠券
	$(".countCoupon").click(function(){
		window.location.href="discountCoupon.html"
	})
	//点击进入设置
	$(".Set").click(function(){
		window.location.href="set.html"
	})
	//点击退出登录进入个人中心
	$(".return").click(function(){
		window.location.href="personal.html"
	})
	
	//返回上一页
//	$("#back").on("touchstart",function() {
//      WPBridge.callMethod("JsInvokeNative", "wpFinishH5", {},
//      function() {})
//  });
})
