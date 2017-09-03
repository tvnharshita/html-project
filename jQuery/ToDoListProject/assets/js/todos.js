$("ul").on("click","li",function(){
	$(this).toggleClass("checked");
});

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	})
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which===13)
	{
		var text=$(this).val();
		$("ul").append("<li><span>X</span> " + text +"</li>");
		$(this).val("");
	}
})