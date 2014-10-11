$(document).ready(function(){
	
	var background_color_regex = /background\-color(\s)*=(\s)*((\#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}))|([a-zA-Z])+);/g
	var text_color_regex = /text\-color(\s)*=(\s)*((\#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}))|([a-zA-Z])+);/g
	
	$('textarea').on('keypress keydown keyup blur', function(e) {
	
		var res = $('textarea').val().match(background_color_regex);
		if(res != null && res.length > 0)
		{
			var color = res[res.length-1].split("=")
			localStorage.setItem("background-color", color[color.length-1].trim().replace(";",""));
			$('textarea').css("background-color", color[color.length-1].trim().replace(";",""));
			for(var i = 0; i < res.length; i++)
			{
				$('textarea').val($('textarea').val().replace(res[i], ""));
			}
		}
		
		var res = $('textarea').val().match(text_color_regex);
		if(res != null && res.length > 0)
		{
			var color = res[res.length-1].split("=")
			localStorage.setItem("text-color", color[color.length-1].trim().replace(";",""));
			$('textarea').css("color", color[color.length-1].trim().replace(";",""));
			for(var i = 0; i < res.length; i++)
			{
				$('textarea').val($('textarea').val().replace(res[i], ""));
			}
		}
		
		localStorage.setItem("content", $('textarea').val());
	});
	
	if(localStorage.getItem("background-color"))
	{
		$('textarea').css("background-color", localStorage.getItem("background-color"));
	}
	
	if(localStorage.getItem("text-color"))
	{
		$('textarea').css("color", localStorage.getItem("text-color"));
	}

	if(localStorage.getItem('content')) {
	  $('textarea').val(localStorage.getItem('content'));
	}
	
});