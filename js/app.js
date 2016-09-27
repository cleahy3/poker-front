var coinImage = new Image();
coinImage.src = "img/cards.png";
var isClicked = false;
var symbol;
var cardColour;
var number;

var symbolTwo;
var cardColourTwo;
var numberTwo;

	var userCards={};
$(function(){
	$('#poker-table').hide();
    
	
 	$('#home').on('click', function(event){
 		$('#body').show();
 		
 		$('#title').html('Home');
 		$('#poker-table').hide();
 		//console.log("working");
 	});

 	$('#login').on('click', function(event){
 		$('#body').show();
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
 		function(data){
    	console.log(data);
   		userCards = data.user;
   		card1 = cardHandle(userCards[0]);
   		card2 = cardHandle(userCards[1]);


 			
   		//alert("your cards are: "+userCards.0["Number"]+" of ");
   		$('#poker-table').append("<div id='usercard-one' style='color:"+card1.cardColour+"'>"+card1.symbol+"</br>"+card1.number+"</div>");
   		$('#poker-table').append("<div id='usercard-two' style='color:"+card2.cardColour+"'>"+card2.symbol+"</br>"+card2.number+"</div>");

   		// <p id='card-text' >your cards are: "+userCards[0].Number+" of "+userCards[0].Suit+"<br> and " 
   			// +userCards[1].Number+" of "+userCards[1].Suit+ '</p>
 	});
 	$('#deal').attr("disabled", true);
 });

 	function cardHandle(cards){
 		 var symbol;
 		 var cardColour;
 		 var number;
 		 if (cards.Suit == "Diamonds"){
   				symbol = "&diams;";
   				cardColour = "#FF0000";
   		} else if
   		(cards.Suit=="Spades"){
   			symbol = "&spades;";
   			cardColour = "#000000";
   		} else if(cards.Suit=="Hearts"){
   			symbol = "&hearts;";
   			cardColour = "#FF0000";
   		} else if
   			(cards.Suit=="Clubs"){
   			symbol = "&clubs;";
   			cardColour = "#000000";
   		}
   			number = cards.Number;
   		switch (cards.Number){
   			case 11:
   			number = "J";
   			break;

   			case 12:
   			number = "Q";
   			break;

   			case 13:
   			number = "K";
   			break;

   			case 14:
   			number = "A";
   			break;
		}   
		return card={ cardColour: cardColour,
			number:number, symbol:symbol};

 	}
 });









