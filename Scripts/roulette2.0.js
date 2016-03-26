var rouletteWheel = new Array(37);
var betAmount;
var currentMoney;
var totalBet;
var testBet;
var finalWinnings;
var currentGame;



$(document).ready(function() {
	
	enableDragAndDrop();
	initializeWheel();
	
    
});


function enableDragAndDrop() {
	var currentTokenValue;
	$('div .token').draggable({
		containment: '.formtable',
		cursor: 'move',
		revert: true,
		stack: '.token',
		start: function(event,ui)
		{ currentTokenValue = this.alt; 
		}
	});
	
	$(".droppableQuad").droppable	({
		drop: function(event,ui) {
			 var top = $(this).position().top - 16;
			 var left = $(this).position().left - 13;
	 		 $(ui.draggable).clone().attr("style", "position: absolute; top:" + top + "px; left:" + left + "px;").appendTo(this);		
		}
	});
			
	$(".red, .black, .droppable").droppable	({
		drop: function(event,ui) {
			 var top = $(this).position().top +6;
			 var left = $(this).position().left +10.5;
	 		 $(ui.draggable).clone().attr("style", "position: absolute; top:" + top + "px; left:" + left + "px;").appendTo(this);
			 validateBet(currentTokenValue);	
		}
	});
	
}// enable drag and drop


function initializeWheel()  {
	var place;
	var colour;
	var isEven;
	var red = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 
	27, 30, 32, 34, 36];
	var count = 0;
	
	for (var i = 1; i < rouletteWheel.length; ++i)
	{
		place = i;
		
		if(i % 2 == 1)
		{
			isEven = false;
		}
		else
		{
			isEven = true;
		}
		
		if( i = red[count])
		{
			colour = "red";
			++count;
		}
		else
		{
			colour = "black";	
		}
		
		rouletteWheel[i] = new rouletteGame(i, isEven, colour);
	}// for ()
	
	rouletteWheel[0] = new rouletteGame(0, null, "null");
	testBet = 0;
	currentMoney = parseInt($("#money").html(), 10);

}// initializeWheel ()

function rouletteGame(num, even, col)
{
	this.place = num;
	this.isEven = even;
	this.colour = col;
	this.win = 0;
	this.hasBet = false;
	this.setBet = function(bet)
	{
		this.win += bet;
		this.hasBet = true;
	}
}// rouletteGame(num, even, colour)

function spinRouletteWheel()
{
		currentMoney  = parseInt($("#money").html(), 10);
		var whiteBall = generateWhiteBall();
		var picked = false;
		totalBet = 0;
		var betArray;
		var c;
		var multiplier;
		var quadBet = false;
		var winnings = 0;
		var betsOnTable = $("table .token");
		
	for(var i = 0; i < betsOnTable.length; ++i)
	{
	picked = true;
	var currentCell = $(betsOnTable[i]).parent().html();
	var cellText = currentCell.slice(0, currentCell.indexOf("<"));
	betAmount = parseInt(betsOnTable[i].alt, 10);
			
		if(cellText == "") 
		{
			cellText = $(betsOnTable[i]).parent().attr("abbr");
			quadBet = true;	
		}
		 currentGame = rouletteWheel[whiteBall];
		
		switch(cellText)
		{
		case "1-6":
			if(currentGame.place > 0 && currentGame.place < 7)
			{
				currentGame.setBet(betAmount);
			}
			totalBet += betAmount;
			break;
		case "7-12":
		if(currentGame.place > 3 && currentGame.place <10)
			{
				currentGame.setBet(betAmount * 5);
			}
			totalBet +=betAmount;
			break;
		case "13-18":
		if(currentGame.place > 3 && currentGame.place <10)
			{
				currentGame.setBet(betAmount * 5);
			}
			totalBet +=betAmount;
			break;
		case "19-24":
		if(currentGame.place > 18 && currentGame.place <25)
			{
				currentGame.setBet(betAmount * 5);
			}
			totalBet +=betAmount;
			break;
		case "25-30":
		if(currentGame.place > 24 && currentGame.place <31)
			{
				currentGame.setBet(betAmount * 5);
			}
			totalBet +=betAmount;
			break;
		case "1-3":
		if(currentGame.place > 0 && currentGame.place <4)
			{
				currentGame.setBet(betAmount * 11);
			}
			totalBet +=betAmount;
			break;
		case "4-6":
		if(currentGame.place > 3 && currentGame.place <7)
			{
				currentGame.setBet(betAmount * 11);
			}
			totalBet +=betAmount;
			break;
		case "7-9":
		if(currentGame.place > 6 && currentGame.place <10)
			{
				currentGame.setBet(betAmount * 11);
			}
			totalBet +=betAmount;
			break;
		case "10-12":
		if(currentGame.place > 9 && currentGame.place <13)
			{
				currentGame.setBet(betAmount * 11);
			}
			totalBet +=betAmount;
			break;
		case "13-15":
		if(currentGame.place > 12 && currentGame.place <16)
			{
				currentGame.setBet(betAmount * 11);
			}
			totalBet +=betAmount;
			break;
		case "16-18":
		if(currentGame.place > 15 && currentGame.place <19)
			{
				currentGame.setBet(betAmount * 11);
			}
			totalBet +=betAmount;
			break;
		case "19-21":
		if(currentGame.place > 18 && currentGame.place <22)
			{
				currentGame.setBet(betAmount * 11);
			}
			totalBet +=betAmount;
			break;
		case "22-24":
		if(currentGame.place > 21 && currentGame.place <25)
			{
				currentGame.setBet(betAmount * 11);
			}
			totalBet +=betAmount;
			break;
		case "25-27":
		if(currentGame.place > 24 && currentGame.place <28)
			{
				currentGame.setBet(betAmount * 11);
			}
			totalBet +=betAmount;
			break;
		case "28-30":
		if(currentGame.place > 27 && currentGame.place <31)
			{
				currentGame.setBet(betAmount * 11);
			}
			totalBet +=betAmount;
			break;
		case "31-33":
		if(currentGame.place > 30 && currentGame.place <34)
			{
				currentGame.setBet(betAmount * 11);
			}
			totalBet +=betAmount;
			break;
		case "34-36":
		if(currentGame.place > 33 && currentGame.place <37)
			{
				currentGame.setBet(betAmount * 11);
			}
			totalBet +=betAmount;
			break;
		case "4-9":
		if(currentGame.place > 3 && currentGame.place <10)
			{
				currentGame.setBet(betAmount * 5);
			}
			totalBet +=betAmount;
			break;
		case "10-15":
		if(currentGame.place > 9 && currentGame.place <16)
			{
				currentGame.setBet(betAmount * 5);
			}
			totalBet +=betAmount;
			break;
		case "16-21":
		if(currentGame.place > 15 && currentGame.place <22)
			{
				currentGame.setBet(betAmount * 5);
			}
			totalBet +=betAmount;
			break;
		case "22-27":
		if(currentGame.place > 21 && currentGame.place <28)
			{
				currentGame.setBet(betAmount * 5);
			}
			totalBet +=betAmount;
			break;
		case "28-33":
		if(currentGame.place > 27 && currentGame.place <34)
			{
				currentGame.setBet(betAmount * 5);
			}
			totalBet +=betAmount;
			break;
		case "1-12":
		if(currentGame.place > 0 && currentGame.place < 13)
			{
				currentGame.setBet(betAmount * 2);
			}
			totalBet += betAmount;
			break;
		case "13-24":
		if(currentGame.place > 12 && currentGame.place <25)
			{
				currentGame.setBet(betAmount * 2);
			}
			totalBet +=betAmount;
			break;
		case "25-36":
		if(currentGame.place > 24 && currentGame.place < 37)
			{
				currentGame.setBet(betAmount * 2);
			}
			totalBet +=betAmount;
			break;
		case "1-18":
		if(currentGame.place > 0 && currentGame.place < 19)
			{
				currentGame.setBet(betAmount);
			}
			totalBet += betAmount;
			break;
		case "Even":
		if(currentGame.even)
			{
				currentGame.setBet(betAmount);
			}
			totalBet += betAmount;
			break;
		case "Red":
		if(currentGame.color == "red")
			{
				currentGame.setBet(betAmount);
			}
			totalBet += betAmount;
			break;
		case "Black":
		if(currentGame.color == "black")
			{
				currentGame.setBet(betAmount);
			}
			totalBet += betAmount;
			break;
		case "Odd":
		if(!currentGame.even)
			{
				currentGame.setBet(betAmount);
			}
			totalBet += betAmount;		
			break;
		case "19-36":
		if(currentGame.place > 18 && currentGame.place < 37)
			{	
			currentGame.setBet(betAmount);
			}
			totalBet += betAmount;
			break;
		case "Row 3":
		betArray = [3,6,9,12,15,18,21,24,27,30,33,36];
		for(c = 0; c < betArray.length; ++c)
			{
			if (currentGame.place == betArray[c])
				{
					currentGame.setBet(betAmount * 2);
				}
			}//for()
			totalBet += betAmount;
			break;
		case "Row 2":
		betArray = [2,5,8,11,14,17,20,23,26,29,32,35];
		for(c = 0; c < betArray.length; ++c)
			{
			if (currentGame.place == betArray[c])
				{
					currentGame.setBet(betAmount * 2);
				}
			}//for()
			break;
		case "Row 1":
		betArray = [1,4,7,10,13,16,19,22,25,28,31,34];
		for(c = 0; c < betArray.length; ++c)
			{
			if (currentGame.place == betArray[c])
				{
					currentGame.setBet(betAmount * 2);
				}
			}//for()
			break;
		default:
			if (quadBet)
			{
				cellText = cellText.split(",");
				for(c = 0; c < cellText.length; ++c)
				{
				 cellText[c] = parseInt(cellText[c], 10);
				 
				 if(currentGame.place == cellText[c])
				 	{
						
						if(cellText.length == 4)
						{
							multiplier = 8;
						}
					rouletteWheel[cellText[c]].setBet(betAmount * multiplier);
					}
				}// for cellText.length
					
			}// if quadBet()
			else 
			{
				if(currentGame.place == 0 && cellText == 0)
				{
					currentGame.setBet(betAmount * 40);	
				}
				else
				{
					cellText = parseInt(cellText, 10);
					if (currentGame.place == cellText)
					{
					rouletteWheel[cellText].setBet(betAmount * 35);
					}
				}
			}// else, if not quadBet
			totalBet += betAmount;
			break;
			
		}// switch()
		if(currentGame.hasBet)	
		{
			winnings += betAmount;
			currentGame.hasBet = false;
		}// if there is a bet on the current td
	} // for() - bet array
	
	if (picked)
	{
		finalWinnings = rouletteWheel[whiteBall].win;
		$('#wheel').rotate({
			angle: 0,
			animateTo: 2520,
			duration: 4000
		});
			
			var displayResult = function() {
				
				if(rouletteWheel[whiteBall].colour == "red")
				{
				$('#displayArea').css("background-color", "#A30003");	
				}
				else
				{
				$('#displayArea').css("background-color", "#000");	
				}
				
				if (finalWinnings > 0)
				{
					$('#money').html(money + finalWinnings + winnings - totalBet);
					$('#displayArea').html("<p>Congrats! You Won" + (finalWinnings + winnings) + '$, your total bet was ' + totalBet + '$!</p>');
					document.cookie = "startingmoney=" + encodeURIComponent(currentMoney) + "; expires=" + myDate.toUTCString();
					updateMoney();
				}
				else
				{
					$('#money').html(currentMoney - totalBet);
					$('#displayArea').html("<p>I&#39;m sorry you didn&#39;t win, you lost" + totalBet + "$</p>");	
					document.cookie = "startingmoney=" + encodeURIComponent(currentMoney) + "; expires=" + myDate.toUTCString();
					updateMoney();
				}// end if else finalWinnings
				clearTable(true);
				totalBet = 0;
			
				
			}// displayResult fuction()		
			setTimeout(displayResult, 3000);
			
	}// if (picked)
	else
	{
		$('#displayArea').html('<p>You need to place a bet on the board');	
	}
	for (var i = 0; i < rouletteWheel.length; ++i)
	{
		rouletteWheel[i].win = 0;	
	}
		
}// spin rouletteWheel()

function generateWhiteBall()
{
 	var whiteBall;
	whiteBall = Math.floor((Math.random()*37));
	return whiteBall;	
}// generateWhiteBall()

function clearTable(areBets)
{
	$('td img').hide("slow", function(){ $("td img").remove();
	enableDragAndDrop();
	});
	testBet =0;
	
	if (!areBets)
	{
		$("#displayArea").html("<p>Removed All Bets!</p>");
	}
	
	
	
}// clearTable()

function validateBet(currentBet)
{
	currentMoney = parseInt($('#money').html(), 10);
	var curBet = parseInt(currentBet, 10);
	if ((testBet + curBet) > money)
	{
		$("#displayArea").html("<p>Sorry that is an invalid bet, you don't have enough money to make that bet</p>");
		testBet = 0;
		clearTable(true);
			
	}
	else
	{
		testBet += curBet;	
	}
	$("#betArea").html(testBet);
	
}// validateBet()

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

