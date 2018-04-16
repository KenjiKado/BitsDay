$(document).ready(function(){

  $(document).click(function(event) {
    if ($(event.target).closest(".submenu").length || $(event.target).closest(".toggle").length) return;
    $(".submenu").slideUp("slow");
    event.stopPropagation();
  });
	$("a.toggle").click(function(){
		var submenu = $(this).parent("li").children('.submenu');
		if(submenu.hasClass('open')) submenu.slideUp("slow").removeClass('open');
		else{
			$(".submenu.open").slideUp("slow").removeClass('open');
			submenu.slideDown("slow").addClass('open');
	}
});
	var form = $("body").find('#message');
	if(form){
	$("#message").validate({
		'messages' : {
			"email": "Please enter your email"
		}
	});		
	}

});