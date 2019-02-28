$(document).ready(function(){


 $('#boy').click(function() {
 	$("#boy").removeAttr("click");
 	$('#say').text("你干嘛点我呀？");
 	$('#boy').click(function() {
 		$("#boy").removeAttr("click");
 		$('#say').text("你又来点我啦？");
 		$('#boy').click(function() {
 			$("#boy").removeAttr("click");
 			$('#say').text("事不过三哦");
 			$('#boy').click(function() {
 				$("#boy").removeAttr("click");
 				$('#say').text("过三就过三");
	 			$('#boy').click(function() {
	 				$("#boy").removeAttr("click");
	 				$('#say').text("你好看说啥都对");
	 				$('#boy').click(function() {
	 					$("#boy").removeAttr("click");
		 				$('#say').text("给你点");
		 				$('#boy').click(function() {
		 					$("#boy").removeAttr("click");
			 				$('#say').text("再给你点");
			 				$('#boy').click(function() {
			 					$("#boy").removeAttr("click");
				 				$('#say').text("等等！");
				 				$('#boy').click(function() {
				 					$("#boy").removeAttr("click");
					 				$('#say').text("差点忘了说正事");
					 				$('#boy').click(function() {
					 					$("#boy").removeAttr("click");
						 				$('#say').text("今天是你生日啊！");
						 					$('#boy').attr('src', 'image/02.gif')
						 					click1();
						 			});
					 			});
				 			});
			 			});
		 			});
	 			});
 			});
 		});
 	});
 });



function click1() {
	$('#boy').click(function() {
		$("#boy").removeAttr("click");
		$('#say').text("( •̀ ω •́ )y耶！！！");
		$('#boy').click(function() {
			$("#boy").removeAttr("click");
			$('#say').text("普天同庆♪(^∇^*)！");
			$('#boy').click(function() {
				$("#boy").removeAttr("click");
				$('#say').text("(/≧▽≦)/鞭炮齐鸣");
				$('#boy').click(function() {
					$("#boy").removeAttr("click");
					$('#say').text("生日快乐！么么哒！");
				});
			});
		});
	});
}


});
