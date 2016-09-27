var isClicked = false;
$(function(){
	 $.getJSON("http://localhost:3000/api/deal",    //getting JSON object from database
 	function(data) {
    	console.log(data);
   	
	})
 	$('#home').on('click', function(event){
 		$('#body').show();
 		$('#body').html('test paragraph');
 		$('#title').html('Home');
 		$('#canvas').hide();

 		//console.log("working");
 	});

 	$('#login').on('click', function(event){
 		$('#body').show();
 		$('#body').html('test paragraph');
 		$('#title').html('Login');
 		$('#canvas').hide();
 	});

 	 $('#poker').on('click',  function(event){
 		drawTable();
 		// $('#body').html("<img src='img/poker-table.png' height= '70%' width='70%'> ");
 		
 		$('#canvas').show();
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



function drawTable(){
if(!isClicked){
	var CANVAS_WIDTH = 800;
	var CANVAS_HEIGHT = 700;
	console.log('hello world');
	var canvasElement = $("<span usemap= id= \"canvas\"></canvas>");
	var canvas = canvasElement.get(0).getContext("2d");
	canvasElement.appendTo('body');
	$('#body').html("<button class=\"myButton\" id=\"deal\"> Deal </button> ");
	$('#body').show();
	isClicked = true;
}
}





