$(function(){

 	$('#home').on('click', function(event){
 		$('#body').html('test paragraph');
 		$('#title').html('Home');
 		//console.log("working");
 	});

 	$('#login').on('click', function(event){
 		$('#body').html('test paragraph');
 		$('#title').html('Login');
 	});

 	 $('#poker').on('click', function(event){
 		
 		$('#body').html("<img src='img/poker-table.png' height= '600px' width='900px'> ");
 		$('#title').html('Poker');
 	
 	});

});