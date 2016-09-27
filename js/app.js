var isClicked = false;
	var userCards={};
$(function(){
	 $.getJSON("http://localhost:3000/api/deal",    //getting JSON object from database
 	function(data) {
    	console.log(data);
   		userCards = data.user;
	})
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
 		$('#poker-table').html("<img src='img/poker-table.png' height= '70%' width='70%' usemap='#poker-map'>");
 		$('#deal').show();
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
 	
 });











