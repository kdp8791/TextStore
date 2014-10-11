$(document).ready(function(){
	
	$('textarea').on('keypress keydown keyup blur', function(e) {
		localStorage.setItem("content", $('textarea').val());
	});
	
	if(localStorage.getItem("content"))
	{
		$('textarea').html(localStorage.getItem("content"));
	}

	if (localStorage.getItem('content')) {
	  $('textarea').val(localStorage.getItem('content'));
	}
	
});