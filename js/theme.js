$(function(){
	// 幫 a.abgne_gotoheader 加上 click 事件
	$('a.abgne_gotoheader').click(function(){
		// 讓捲軸用動畫的方式移動到 0 的位置
		// 感謝網友 sam 修正 Opera 問題
		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$body.animate({
			scrollTop: 0
		}, 600);
 
		return false;
	});
});