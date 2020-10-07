
////sing in code
var data={
	username:'fatima',
	password:1234
}
 //willcj=heck if the username and passwork are correct
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
	
})
$('#withoutsigning').click(function(){
	$(".next-page").show();
	$(".signing").hide();

})
 
 //array of objects
 // var all=[history={
 // 	three:$(".threeMin").append("This hugely successful film won a multitude of international awards.[2] The film received a Genie Award nomination for Best Theatrical Short Film at the 2nd Genie Awards in 1981,[3] and an Academy Award nomination for Best Animated Short Film [4] at the 53rd Academy Awards.[5] It won the award for Best Film Under Three Minutes at the 1980 Ottawa International Animation Festival,[6] the Short Film Golden Bear at the 1981 Berlin Film Festival,[1] a Golden Reel Award from the Canada Council's inaugural Canadian Short Films Showcase,[7] and the American Film and Video Festival's Blue Ribbon Award.[2]"),
 // 	five:1,
 // 	ten:1
 // },
 // philosophy={
 // 	three:1,
 // 	five:1,
 // 	ten:1
 // },
 // Sciences={
 // 	three:1,
 // 	five:1,
 // 	ten:1
 // }]
//the buttons to move beteen the pages
//three minuts functions
$("#btn3").click(function(){
	$(".next-page").hide();
    $(".three").show();

})
//to choose the catogory
//history 3 min
$("#History3").click(function(){
    $(".three").hide();
    $('.threeMinHistory').show();
    
})
$('#return').click(function(){
 $(".three").show();
    $('.threeMinHistory').hide();
})
//three Minp hilosophy
$("#philosophy3").click(function(){
    $(".three").hide();
    $('.threeMinphilosophy').show();
    
})
$('#return1').click(function(){
 $(".three").show();
    $('.threeMinphilosophy').hide();
})
//five min history

$("#btn5").click(function(){
	$(".next-page").hide();
    $(".five").show();
    
})
$("#Art5").click(function(){
    $(".five").hide();
    $('.fiveMinArt').show();
    
})
$('#return2').click(function(){
$(".five").show();
    $('.fiveMinArt').hide();
})

$("#astronomy5").click(function(){
    $(".five").hide();
    $('.fiveMinastronomy').show();
    
})
$('#return3').click(function(){
$(".five").show();
    $('.fiveMinastronomy').hide();
})

$('#header').click(function(){
 $(".next-page").show();
 $(".three").hide();
 $('.threeMinHistory').hide();
 $('.threeMinphilosophy').hide();
 $(".five").hide();
 $('.fiveMinArt').hide();
 $('.fiveMinastronomy').hide();

})