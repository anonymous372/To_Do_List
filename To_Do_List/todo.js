// Visiblize Input Bar
$("h2 i").click(function(){
	$("input").toggle();
})

// Removing Task
$("ul").on("click","li span",function(event){
	event.stopPropagation();
	$(this).parent().fadeOut(300,function(){
		$(this).remove();
	})
});

// Creating new task item
$("input").on("keypress",function(event){
	// if enter is hit in input bar
	if(event.which === 13  && $(this).val() !== ""){
		var txt = $(this).val()		
		// Create the li element out of textbox
		var delBtn = "<span><i class='fa fa-trash-alt'></i></span>"
		var todoTask = "<li>" + delBtn + " " + txt + "</li>";

		// Add the element in the ul
		$("ul").append(todoTask)

		// clear the input text after writing the task
		$("input").val("")
	}
});

// Strike through tasks
$("ul").on("click","li",function(){
	$(this).toggleClass("done")
});
