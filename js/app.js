var isClicked = false;
	var userCards={};
$(function(){
	$('#poker-table').hide();

	
 	$('#home').on('click', function(event){
 		$('#body').show();
 		$('#body').html('test paragraph');
 		$('#title').html('Home');
 		$('#poker-table').hide();
 		//console.log("working");
 	});

 	$('#login').on('click', function(event){
 		$('#body').show();
 		$('#body').html('test paragraph');
 		$('#title').html('Login');
 		$('#poker-table').hide();
 	});

 	 $('#poker').on('click',  function(event){
 		$('#body').hide();
 		$('#poker-table').show();
 		$('#title').html('Poker');
 		isClicked = true;
 	
 	});
 	$('#body').on('click', 'span' ,function(event){
 	var target = $( event.target );	
 	if(target.is === "button"){
 	 $.ajax({
   	 url: "http://localhost:3000/api/deal",
   	 type: 'GET',
   	 dataType: 'jsonp',
   	 success: function(response) {
    	console.log(response.data);
    },
  	  error: function(){
      alert("Cannot get data");
    }
	})
 	};
 });

 	$('#deal').on('click', function(event){
	 $.getJSON("http://localhost:3000/api/deal",    //getting JSON object from database
 		function(data) {
    	console.log(data);
   		userCards = data.user;
   		//alert("your cards are: "+userCards.0["Number"]+" of ");
   		$('#poker-table').append("<p id='card-text' >your cards are: "+userCards[0].Number+" of "+userCards[0].Suit+"<br> and " 
   			+userCards[1].Number+" of "+userCards[1].Suit+ '</p>');
 	});
 	$('#deal').attr("disabled", true);
 });

 });












