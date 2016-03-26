


$(function() {
	 
$( ".draggable" ).draggable({ helper:'clone',
cursorAt: { bottom: 0 },
snap: ".red", snap: ".black" , snap: ".quad"
});

$( "#quad").droppable({
         drop:function(event, ui){
             snapToMiddle(ui.draggable,$(this));
         }
     });

$(".red").droppable({
         drop:function(event, ui){
             snapToMiddle(ui.draggable,$(this));
         }
     });

$(".black").droppable({
         drop:function(event, ui){
             snapToMiddle(ui.draggable,$(this));
         }
     });

});

function snapToMiddle(dragger, target){
    var topMove = target.position().top - dragger.data('position').top + (target.outerHeight(true) - dragger.outerHeight(true)) / 2;
    var leftMove= target.position().left - dragger.data('position').left + (target.outerWidth(true) - dragger.outerWidth(true)) / 2;
    dragger.animate({top:topMove,left:leftMove},{duration:600,easing:'easeOutBack'});
}

var myDate = new Date();
	myDate.setFullYear(myDate.getFullYear() + 1);

var rouletteWheel = new Array (0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11 ,12 ,
	13 ,14 ,15 ,16 ,17 ,18 ,19 ,20 ,21 ,22 ,23 ,24 ,25 ,26 ,27 ,
	28 ,29 ,30 ,31 ,32 ,33 ,34 ,35 ,36);
	
var red = new Array(1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 
	27, 30, 32, 34, 36);
	
var black = new Array(2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 
	26, 28, 29, 31, 33, 35);
	
var firstThird = new Array(1,2,3,4,5,6,7,8,9,10,11,12);
var secondThird = new Array(13,14,15,16,17,18,19,20,21,22,23,24);
var thirdThird = new Array(25,26,27,28,29,30,31,32,33,34,35,36);

var low = new Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18);
var high = new Array(19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36);

var firstRow = new Array(3,6,9,12,15,18,21,24,27,30,33,36); 
var secondRow = new Array(2,5,8,11,14,17,20,23,26,29,32,35); 
var thirdRow = new Array(1,4,7,10,13,16,19,22,25,28,31,34);

var street1 = new Array(3,2,1);
var street2 = new Array(6,5,4);
var street3 = new Array(9,8,7);
var street4 = new Array(12,11,10);
var street5 = new Array(15,14,13);
var street6 = new Array(18,17,16);
var street7 = new Array(21,20,19);
var street8 = new Array(24,23,22);
var street9 = new Array(27,26,25);
var street10 = new Array(30,29,28);
var street11 = new Array(33,32,31);
var street12 = new Array(36,35,34); 

var ave0 = new Array(6,5,4,3,2,1);
var ave1 = new Array(9,8,7,6,5,4);
var ave2 = new Array(12,11,10,9,8,7);
var ave3 = new Array(15,14,13,12,11,10);
var ave4 = new Array(21,20,19,18,17,16);
var ave5 = new Array(24,23,22,21,20,19);
var ave6 = new Array(27,26,25,24,23,22);
var ave7 = new Array(30,29,28,27,26,25);
var ave8 = new Array(33,32,31,30,29,28);
var ave9 = new Array(36,35,34,33,32,31); 
	
var quad1 = new Array(6,5,3,2);
var quad2 = new Array(9,8,6,5);
var quad3 = new Array(5,4,2,1);
var quad4 = new Array(12,11,9,8);
var quad5 = new Array(15,14,12,11);
var quad6 = new Array(18,17,15,14);
var quad7 = new Array(21,20,18,17);
var quad8 = new Array(24,23,21,20);
var quad9 = new Array(27,26,24,23);
var quad10 = new Array(30,29,27,26);
var quad11 = new Array(33,32,30,29);
var quad12 = new Array(36,35,33,32);
var quad13 = new Array(11,10,8,7);
var quad14 = new Array(14,13,11,10);
var quad15 = new Array(17,16,14,13);
var quad16 = new Array(20,19,17,16);
var quad17 = new Array(23,22,20,19);
var quad18 = new Array(26,25,23,22);
var quad19 = new Array(29,28,26,25);
var quad20 = new Array(32,31,29,28);
var quad21 = new Array(35,34,32,31);
var quad22 = new Array(8,7,5,4);  

//var $ = function(id) {
//	return document.getElementById(id);
//}	
	var winnings = 0;
	var multiplier = 1;
	var isEven = false;
	var isOdd = false;
	var isBlack = false;
	var isRed = false;
	var firstSet = false;
	var secondSet = false;
	var thirdSet = false;
	var isHigh = false;
	var isLow = false;
	var isRouletteValue = false;
	
function validateBet()
{
  if(getId("theBet").selectedIndex != 0 && parseInt(getId("betAmount").value) > 0)
  {
	spinWheel(true);  
  }
  else
  {
	  	alert("You need to enter a valid bet and amount");  
  }
	
}
	

function spinWheel(tf){
	
	if (tf){
	var winningBet = parseInt(Math.floor((Math.random()*37)));
	var theBet = getId("theBet").value;
	var cash = parseInt(getId("betAmount").value);
	var totalCash = parseInt(getId("money").innerHTML);
	
	
	if((winningBet % 2) == 0){
		isEven = true;
		isOdd = false;	
	}
	else
	if((winningBet % 2) == 1){
		isOdd = true;
		isEven = false;
	}	
	
	for (var i = 0; i < 37; ++i)
	{
		if (winningBet == rouletteWheel[i])
		{
			isRouletteValue = true;	
		}
	}
			
	for (var i = 0; i < 19; ++i)
	{
		if(winningBet == red[i])
		{
			isRed = true;
			isBlack = false;
		}
		else
		if(winningBet == black[i])
		{
			isBlack = true;
			isRed = false;
		}// end colour if
		
		if(winningBet == high[i])
		{
			isHigh = true;
			isLow = false;
		}
		else
		if(winningBet == low[i])
		{
			isHigh = false;
			isLow = true;
		} // end high/low if
		
	}// red&black - high&low for loop
	
	for(var i = 0; i < 13; ++i)
	{
		if(winningBet == firstThird[i])
		{
			firstSet = true;
			secondSet = false;
			thirdSet = false;
		}
		else
		if(winningBet == secondThird[i])
		{	
			firstSet = false;
			secondSet = true;
			thirdSet = false;
		}
		else
		if(winningBet == thirdThird[i])
		{
			firstSet = false;
			secondSet = false;
			thirdSet = true;
		}
	}// first, second, third set for loop
	
	if(theBet != isNaN)
	{
		multiplier = 35;
	}
	
	if(theBet == "red" || theBet == "black" || theBet == "even" || theBet == "odd" || theBet == "high" || theBet == "low")
	{
	 multiplier = 1;
	}
	
	if(theBet == winningBet)
	{
		winnings = (multiplier * cash);
		totalCash = (totalCash + winnings);
		alert("You won " + winnings + "$. Congratulations!");
	}
	else
	if((theBet == "red" && isRed) || (theBet == "black" && isBlack) || (theBet == "odd" && isOdd) || (theBet == "even" && isEven))
	{
		winnings = (multiplier * cash);
		//$("money").innerHTML = totalCash = (totalCash + winnings);
		document.cookie = "startingmoney=" + encodeURIComponent(totalCash + winnings) + "; expires=" + myDate.toUTCString();
		alert("You won " + winnings + "$. Congratulations!");
		updateMoney();
	}else
	{	
		winnings =  cash;
		alert("Sorry you didn't win. You lost " + cash +"$");
		//$("money").innerHTML = totalCash = (totalCash - winnings);
		document.cookie = "startingmoney=" + encodeURIComponent(totalCash - winnings) + "; expires=" + myDate.toUTCString();
	updateMoney();
	}
  }// if valid
} // spinWheel()	

function updateMoney()
{
	var startingMoney;
	var now = new Date();
	var expiryDate = now.setFullYear(now.getFullYear()+ 1);

    var cookieString = decodeURIComponent(document.cookie);
    var cookieArray = cookieString.split("; ");

	for (i=0; i<cookieArray.length; i++) {
		equalPos = cookieArray[i].search("=");
		cookieValue = cookieArray[i].substring(equalPos+1);
		cookieName = cookieArray[i].substring(0, equalPos);
		switch (cookieName) {
			case "startingmoney":
				startingMoney = parseInt(cookieValue);
				break;
		}// end switch
	}// end for
	getId("money").innerHTML = startingMoney;
}

