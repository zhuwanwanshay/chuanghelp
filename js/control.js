 // 导航选项触发
	$("#mytab a").click(function(e){
		e.preventDefault();
        $(this).tab("show");
    })
