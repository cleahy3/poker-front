
var coinImage = new Image();
coinImage.src = "img/cards.png";

var isClicked = false;
var symbol;
var cardColour;
var number;

var user={balance:500, isIn: true,isPlayer: true};
var symbolTwo;
var cardColourTwo;
var numberTwo;

var flopCards;
var bet;
var forInt = 1;
var maxBet=50;
	var userCards={};
$(function(){
  $('#balance').html("balance: "+user.balance);
	$('#poker').attr("disabled", true);
	$('#poker-table').hide();
	$('#call').hide();
  $('#raise').hide(); 
  $('#fold').hide();
  $('#bet').hide();
  $('#secret').hide();
 	$('#home').on('click', function(event){
 		$('#body').show();
 		
 		$('#title').html('Home');
 		$('#poker-table').hide();
 		//console.log("working");
 	});


 	$('#login').on('click', function(event){
 		$('#title').html('Login');
 		$('#poker-table').hide();
 		$('#poker').attr("disabled", false);
 		user.name=prompt('Enter your name:');

 		$.ajax({

   	 	url: "http://localhost:3000/api/game",
   	 	type: 'POST',

   	 	data: user,	 success: function(response) {
    	console.log(response.data);
    	},
  	  	error: function(){
     	 alert("Cannot get data");
    	}
		});

 		$('#login').attr('disabled', true);
 		$('#body').html("<h1>Click Play to continue</h1>");
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
	});
 	};
 });

 	$('#deal').on('click', function(event){

	 $.getJSON("http://localhost:3000/api/deal",    //getting JSON object from database

 		function(data){
    	console.log(data);

   		userCards = data.players[0].hand;
      user.hand = userCards;
   		card1 = cardHandle(user.hand[0]);
   		card2 = cardHandle(user.hand[1]);
   		flopCards = data.flop;
      $('#bet').attr('max', user.balance);

 			
   		//alert("your cards are: "+userCards.0["Number"]+" of ");
   		$('#poker-table').append("<div id='usercard-one' style='color:"+card1.cardColour+"'>"+card1.symbol+"</br>"+card1.number+"</div>");
   		$('#poker-table').append("<div id='usercard-two' style='color:"+card2.cardColour+"'>"+card2.symbol+"</br>"+card2.number+"</div>");
   		$('#poker-table').append("<button id='forward' class='myButton'>Forward</button>");
   		// <p id='card-text' >your cards are: "+userCards[0].Number+" of "+userCards[0].Suit+"<br> and " 
   			// +userCards[1].Number+" of "+userCards[1].Suit+ '</p>
 	});
  $('#call').show(); 
  $('#raise').show(); 
  $('#fold').show();
  $('#bet').show();
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

 $('#poker-table').on('click', '#forward', function(event){
 	if(forInt === 1){var card1 = cardHandle(flopCards[0]);
 	var card2 = cardHandle(flopCards[1]);
 	var card3 = cardHandle(flopCards[2]);

 	console.log('event');
 	$('#poker-table').append("<div id='flopcard-one' style='color:"+card1.cardColour+"'>"+card1.symbol+"</br>"+card1.number+"</div>");
 	$('#poker-table').append("<div id='flopcard-two' style='color:"+card2.cardColour+"'>"+card2.symbol+"</br>"+card2.number+"</div>");
 	$('#poker-table').append("<div id='flopcard-three' style='color:"+card3.cardColour+"'>"+card3.symbol+"</br>"+card3.number+"</div>");
 	forInt++;
 } else if (forInt == 2){var card1 = cardHandle(flopCards[3]);
 		$('#poker-table').append("<div id='flopcard-four' style='color:"+card1.cardColour+"'>"+card1.symbol+"</br>"+card1.number+"</div>");

 	forInt++;

 	} else {
 		var card1 = cardHandle(flopCards[4]);
 		$('#poker-table').append("<div id='flopcard-five' style='color:"+card1.cardColour+"'>"+card1.symbol+"</br>"+card1.number+"</div>");
 		$('#forward').attr('disabled', true);
 	}
 });
 $('#bet').on('input change', function(event){
  bet = this.value;
  $('#bet-amount').val(bet);
  // console.log(this.value);

 });

$('#raise').on('click', function(event){

  if(forInt === 1){var card1 = cardHandle(flopCards[0]);
    user.balance -= bet;
  var card2 = cardHandle(flopCards[1]);
  var card3 = cardHandle(flopCards[2]);

  console.log('event');
  $('#poker-table').append("<div id='flopcard-one' style='color:"+card1.cardColour+"'>"+card1.symbol+"</br>"+card1.number+"</div>");
  $('#poker-table').append("<div id='flopcard-two' style='color:"+card2.cardColour+"'>"+card2.symbol+"</br>"+card2.number+"</div>");
  $('#poker-table').append("<div id='flopcard-three' style='color:"+card3.cardColour+"'>"+card3.symbol+"</br>"+card3.number+"</div>");
  forInt++;
  console.log("this is the balance:"+user.balance);
 } else if (forInt == 2){var card1 = cardHandle(flopCards[3]);
      user.balance -= bet;
    $('#poker-table').append("<div id='flopcard-four' style='color:"+card1.cardColour+"'>"+card1.symbol+"</br>"+card1.number+"</div>");
  forInt++;
  console.log("this is the balance:"+user.balance);
  } else {
      user.balance -= bet;
    var card1 = cardHandle(flopCards[4]);
    $('#poker-table').append("<div id='flopcard-five' style='color:"+card1.cardColour+"'>"+card1.symbol+"</br>"+card1.number+"</div>");
    $('#forward').attr('disabled', true);
    console.log("this is the balance:"+user.balance);
    $('#balance').html(user.balance);
    }
 
  });


//function that checks who has the currect highest bet

// $('#call').on('click', function(){
//   if (user.balance < maxbet){
//     bet = maxbet +
//   }
// // 
// //
// //
// //
//  //maxbet 
//  //bet = maxbet + bet
//  //return bet
// })

 });
