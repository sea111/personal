$(function(){
	//遮罩
	function footerClick(objClick,objBottom,toggle,distance){
		$(objClick).click(function(){
			$("#smark").css("display",toggle);
			$(objBottom).animate({"bottom":distance},200);
		})
	}
	footerClick('.phone',".foot","block","0")
	footerClick("#smark",".foot","none","-3rem")
	footerClick(".foot",".foot","none","-3rem")
	footerClick(".cancle",".foot","none","-3rem")
//	footerClick(".Recommend",".share","block","0")
//	footerClick("#smark",".share","none","-1.60rem")
	//aaa(".Recommend",".share","none","-1.6rem")
	
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
	
	//进入登陆页面
	$(".enter").click(function(){
		window.location.href="enter.html"
	})
	//进入活动中心页面
	$(".Activity").click(function(){
		window.location.href="activityCenter.html"
	})
	//进入我的优惠券页面
	$(".count-coupon").click(function(){
		window.location.href="discountCoupon.html"
	})	
	//进入我的收藏
	$(".Hide").click(function(){
		window.location.href="collect.html"
	})
	//进入设置
	$(".Set").click(function(){
		window.location.href="set.html"
	})
	//返回上一页
//	$("#back").on("touchstart",function() {
//      WPBridge.callMethod("JsInvokeNative", "wpFinishH5", {},
//      function() {})
//  });
})
