
var now = new Date();
var expiryDate = now.setFullYear(now.getFullYear()+ 1);

var getId = function(id)
{
	return document.getElementById(id);	
}
var firstName;
var lastName;
var phoneNumber;
var postalCode;
var startingMoney;

function validateForm()
{
//
//	var formInfo = location.search;
//		formInfo = formInfo.substring(1, formInfo.length);
//
//    while (formInfo.indexOf("+") != -1) {
//        formInfo = formInfo.replace("+", " ");
//    }
//    while (formInfo.indexOf("=") != -1) {
//        formInfo = formInfo.replace("=", " ");
//    }
//	
//	formInfo = formInfo.replace("firstname", "");	
//	formInfo = formInfo.replace("lastname", "");	
//	formInfo = formInfo.replace("phonenumber", "");	
//	formInfo = formInfo.replace("postalcode", "");	
//	formInfo = formInfo.replace("startingmoney", "");
//	
//	formInfo = decodeURI(formInfo);
//	
//var infoArray = formInfo.split("&");
var myDate = new Date();
	myDate.setFullYear(myDate.getFullYear() + 1);

if (document.cookie)
{
	

var now = new Date();
var expiryDate = now.setFullYear(now.getFullYear()+ 1);

    var cookieString = decodeURIComponent(document.cookie);
    var cookieArray = cookieString.split("; ");

	for (i=0; i<cookieArray.length; i++) {
		equalPos = cookieArray[i].search("=");
		cookieValue = cookieArray[i].substring(equalPos+1);
		cookieName = cookieArray[i].substring(0, equalPos);
		switch (cookieName) {
			case "firstname":
				firstName = cookieValue;
				break;
			case "lastname":
				lastName = cookieValue;
				break;
			case "phonenumber":
				phoneNumber =  cookieValue;
				break;
			case "postalcode":
				postalCode = cookieValue;
				break;
			case "startingmoney":
				startingMoney = parseInt(cookieValue);
				break;
		}// end switch
	}// end for
 changePerson();
 getId("playername").innerHTML = firstName + " " + lastName;
 getId("playerinfo").innerHTML = phoneNumber + " " + postalCode;
 getId("money").innerHTML = startingMoney;
 
} // if cookies exist
}// validate form()

function newUser()
{
	
		 	var myDate = new Date();
		 myDate.setFullYear(myDate.getFullYear() - 1);

	document.cookie = "firstname=" + encodeURIComponent(firstName) + "; expires=" + myDate.toUTCString();
	document.cookie = "lastname=" + encodeURIComponent(lastName) + "; expires=" + myDate.toUTCString();
	document.cookie = "phonenumber=" + encodeURIComponent(phoneNumber) + "; expires=" + myDate.toUTCString();
	document.cookie = "postalcode=" + encodeURIComponent(postalCode) + "; expires=" + myDate.toUTCString();
	document.cookie = "startingmoney=" + encodeURIComponent(startingMoney) + "; expires=" + myDate.toUTCString();
	
	location.href = "/intro.html";
	
}
function changePerson()
{
	var notMe = getId("notme");
	
	notMe.innerHTML = "Not " + firstName + " " + lastName + "? Change credentials.";
}