var data={
	username:'fatima',
	password:1234
}

// 	$('#return-to-main').click(function(){
// 		$(".colosseum").show()
// 		$(".colosseum3").hide()
// 		$(".Taj-Mahal").show()
// 		$(".Taj-Mahal3").hide()

// })

$('#submit').click(function(){
	var x=$("#username").val();
    var y=$("#password")
	if (data.username === x && data.password === y ){
		$(".next-page").show();
		$(".signing").hide();
	}
	 
	else if ( x ==='' || y ===''){

alert("Please fill all fields.");
}
else
	alert("somting is wrong, Please check your username and password")
	
	// $("#username").val('');
 //    $("#password").val('');	
})