$(function() {
	//搜索
	$(".srt").focus(function(){
		$(".srt").val("");
	}).blur(function(){
		$(".srt").val("请输入企业名称或楼宇名称");
	});
	//tab切换
	$(".tab-tab li,.zhengc span").click(function(){
	    var index = $(".tab-tab li,.zhengc span").index(this);
	    $(this).addClass("current").siblings().removeClass("current");
	    $(".tab-ma>.yyz-main-tb").eq(index).show().siblings().hide();
	    $(".xinxi-tab>.xiangqing").eq(index).show().siblings().hide();
	})
})