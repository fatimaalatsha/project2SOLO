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
 var y=$("#password").val();
	if (data.username === x || data.password === y ){
		$("#hello").append(x)
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
 
// $('#move').click(function(){
// var time=$('#time :selected').text();;
// console.log(time)
// var three= $('#3')
// if (time === three ){
// 	$(".next-page").hide();
//     $("#three").show();
// }



// })
 $(".three").append(('<img id="taj7" src="https://whc.unesco.org/uploads/thumbs/site_0252_0032-360-360-20131015115606.jpg"/>'))
$("#btn3").click(function(){
	$(".next-page").hide();
    $(".three").show();
    $(".signing").hide();
})