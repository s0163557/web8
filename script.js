
$(function(){
	$(".ajaxForm").submit(function(e){
		e.preventDefault();
		var href = $(this).attr("action");
		$.ajax({
			type: "POST",
			dataType: "json",
			url: href,
			data: $(this).serialize(),
			success: function(response){
				if(response.status == "success"){
					alert("We received your submission, thank you!");
					function resetForm(form){} {
						$('#' + form + ' :input').each(function(){  
						 $(this).val('').attr('checked',false).attr('selected',false);
						});
					   }
					
				}else{
					alert("An error occured: " + response.message);
				}
			}
		});
	});
});


