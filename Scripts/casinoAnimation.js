// JavaScript Document



	var caveboyanim = new Array(6);
	var curCaveBoy = 0;	
	for (var i = 0; i < 6; ++i)
	{
		caveboyanim[i] = new Image();
		caveboyanim[i].src = "images/caveboy" + i + ".png";	
	}//for()		

function caveboyanimation()
{
	if(curCaveBoy == 5)
	{
		curCaveBoy = 0;
	}
	else
	 ++curCaveBoy;
	document.getElementById("caveboy").src = caveboyanim[curCaveBoy].src;
}

// Enter button canvas begins
var enteranim = new Array(5);
var curenter = 0;	
for(var i = 0; i < 5; ++i){

 enteranim[i] = new Image();
 enteranim[i].src = "images/enter" + i +".png";
}

function initialize() 
{ 	
	pressbutton = document.getElementById("enterbutton");
	pressbutton.style.display = "inline";
	mycanvas = document.getElementById("myCanvas");
	context = mycanvas.getContext("2d");
	setInterval(drawEnter,80);
}
function drawEnter()
	{
		for (var c = 0; c<6; ++c)
			{	
			context.clearRect(0,0,239,64);
			context.drawImage(enteranim[curenter] ,0,0);
			++curenter;
			if (curenter==5)
				curenter=0;	
			}
	}// end of enter button canvas


// Camp fire animation begins
var campfireanim = new Array(4);
var curfire = 0;

for(var q = 0; q<4; ++q)
{
	campfireanim[q] = new Image();
	campfireanim[q].src = "images/campfire" + q + ".png";
}

function campfireanimation()
{
	if(curfire == 3)
	curfire = 0;
	else
	++curfire;
	document.getElementById('firepit').src = campfireanim[curfire].src;
}// camp fire animation end

 // begining of array for meteors
var meteoranim = new Array(6);
var curmeteor = 0;
 
for(var t = 0; t<6; ++t)
{
	meteoranim[t] = new Image();
	meteoranim[t].src = "images/meteor" + t + ".png";	
}// end of array for meteors

	var leftposition1 = 0;
	var topposition1 = -150;
	
function slowmovingmeteor(){
	
	var slowmeteor = document.getElementById("meteor1");
	slowmeteor.style.left = leftposition1 + "px";
	slowmeteor.style.top = topposition1 + "px";
	slowmeteor.style.visibility = "visible";
	topposition1 += 15;
	leftposition1 += 11;
	
	if (topposition1 >= (window.innerHeight + 110)){
		topposition1 = -150;
	
	}
	if (curmeteor == 5){
	curmeteor =0;
	}
	if (leftposition1 > (window.innerWidth + 130)){
	leftposition1 = -150;
	topposition = 150;
	}
	else 
	document.getElementById('meteor1').src = meteoranim[curmeteor].src;
	++curmeteor
}

	var leftposition2 = 700;
	var topposition2 = -150;

function mildmovingmeteor()
{
	var mildmeteor = document.getElementById("meteor2");
	mildmeteor.style.left = leftposition2 + "px";
	mildmeteor.style.top = topposition2 + "px";
	mildmeteor.style.visibility = "visible";
	topposition2 += 24;
	leftposition2 += 17;
	
	if (topposition2 >= (window.innerHeight + 110))
	{
		topposition2 = -150;		
	}
	if (curmeteor == 5)
	{
	curmeteor =0;
	}
	if (leftposition2 > (window.innerWidth + 130))
	{
	leftposition2 = -150;
	topposition2 = 300;
	}
	else 
	document.getElementById('meteor2').src = meteoranim[curmeteor].src;
	++curmeteor
}

	var leftposition3 = 250;
	var topposition3 = -150;

function fastmovingmeteor(){
	
	var fastmeteor = document.getElementById("meteor3");
	fastmeteor.style.left = leftposition3 + "px";
	fastmeteor.style.top = topposition3 + "px";
	topposition3 += 30;
	leftposition3 += 20;
	
	if (topposition3 >= (window.innerHeight + 110)){
		topposition3 = -150;		
	}
	
	if (curmeteor == 5){
	curmeteor =0;
	}
	
	if (leftposition3 > (window.innerWidth + 130) ){
	leftposition3 = -150;
	topposition3 = -150;
	}
	else 
	document.getElementById('meteor3').src = meteoranim[curmeteor].src;
	++curmeteor
	
	
}

function firepitextend() {
	var padding = 200;
	var pix = "px";
	var showinfo = document.getElementById("fireinfo");
	var firex = document.getElementById("firepit");
	showinfo.style.display = "inline";
	firex.style.paddingLeft = padding + pix;
}

function firepitshrinks() {
	var showinfo = document.getElementById("fireinfo");
	var fires = document.getElementById("firepit");
	fires.style.paddingLeft = "10px";
	showinfo.style.display = "none";
}

function copyextend (){
	var showcopy = document.getElementById("copyrightinfo");
	showcopy.style.display = "inline";
}
function copyshrink (){
	var showcopy = document.getElementById("copyrightinfo");
	showcopy.style.display = "none";	
	
}

function timeoutcaller(){
	if (window.innerWidth > 400){
setTimeout(moneypile,13000);
setTimeout(moneybill,6000);
setTimeout(slotmachine, 3000);
setTimeout(initialize,16000);
setTimeout(animatedToken,9000);
}else
{
}
}



function moneybill(){
	
	var moneyBill = document.getElementById("moneybill");
	moneyBill.style.display =  "inline";
}



function moneypile(){
	
	var moneyPile = document.getElementById("moneypile");
	moneyPile.style.display = "inline";	
}


var slotanim = new Array(5);
var curslot = 0;

for (var i = 0; i < 5; ++i){
	slotanim[i] = new Image();
	slotanim[i].src = "images/slot" + i + ".png";
}


function slotmachine(){	
var slotMachine = document.getElementById("slotmachines");
slotMachine.style.display = "inline";
		setInterval(slotspin, 100);
}
 function slotspin() {

	if (curslot == 4){
	curslot = 0;
	}
	else{
		++curslot;
	}
	 document.getElementById("slotmachines").src = slotanim[curslot].src;
}

var tokenanim = new Array(10);
var curtoken = 0;
for (var i = 0; i <10; ++i){
	tokenanim[i] = new Image();
	tokenanim[i].src = "images/redtoken" + i + ".png";
}



function animatedToken(){
var redtoken =	document.getElementById("redtoken");
redtoken.style.display = "inline";

setInterval(tokenspin, 100);
}
function tokenspin(){
	if (curtoken == 9){
	 curtoken =0;
	}else{
		++curtoken;
	}
document.getElementById("redtoken").src = tokenanim[curtoken].src;
}