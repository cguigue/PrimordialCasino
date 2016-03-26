﻿var $ = function(id) {
	return document.getElementById(id);
}

function cookieCheck()
{
  if (document.cookie.length > 0){
location.href = "./game.html";
  }
  
}


function validateForm()
{
	
	var validity = true;
	var errorMessage =  "";
	var firstnamePattern = /^[A-Z]{1}[a-z]{0,19}$/;
	var lastnamePattern = /^[A-Z]{1}[a-z]{0,29}$/;
	var telephonePattern = /^\(?(\d){3}\)?[\-\. ]{1}[\d]{3}[\-\.]{1}[\d]{4}$/;
	var postalcodePattern = /^(\D\d\D)( )?(\d\D\d)$/;
	var moneyPattern = /^(([1-9]\d{0,2})|([1-4]\d{3})|(50{3}))$/;
	var startingMoney = $('startingmoney').value;
	var firstName = $('firstname').value;
	var lastName = $('lastname').value;
	var telephoneNumber = $('phonenumber').value;
	var postalCode = $('postalcode').value;
	
	
	var now = new Date();
	var expiryDate = now.setFullYear(now.getFullYear()+ 1);
	
	
if (firstnamePattern.test(firstName))
		{
		}
			else
			{ 
				errorMessage += ("First name must start with a capital, be alphabetic and no longer than 20 characters\n");
				validity = false;
			}		// validate first name

if (lastnamePattern.test(lastName))
{
}
else
	{ 
		errorMessage += ("Last name must start with a capital, be alphabetic and no longer than 20 characters\n");
		validity = false;
	}// validate last name
			

if(telephonePattern.test(telephoneNumber))
		{
		}
		else
		{
			errorMessage += ("You must enter a valid phone number. ex.(123) 456-789 , 123-456-789, 123.456.789\n");
			validity = false;
		} 	// validate phone number
	
	
if (postalcodePattern.test(postalCode))
		{
		}
		else
			{
				errorMessage += ("You must enter a valid postal code. ex. A9B 8C7 , a9b 8c7\n");
				validity = false;
			}
	
	
if (startingMoney < 5)
		{
			errorMessage += ("You must enter an amount above 4\n");
			validity = false;
		}
		else if (moneyPattern.test(startingMoney))
			{	
			}
			else
				{
	 				errorMessage += ("You must enter a valid amount of money\n");
					validity = false;	
				}

if(validity == true)
	{		
	 	var myDate = new Date();
			myDate.setFullYear(myDate.getFullYear() + 1);

	document.cookie = "firstname=" + encodeURIComponent(firstName) + "; expires=" + myDate.toUTCString();
	document.cookie = "lastname=" + encodeURIComponent(lastName) + "; expires=" + myDate.toUTCString();
	document.cookie = "phonenumber=" + encodeURIComponent(telephoneNumber) + "; expires=" + myDate.toUTCString();
	document.cookie = "postalcode=" + encodeURIComponent(postalCode) + "; expires=" + myDate.toUTCString();
	document.cookie = "startingmoney=" + encodeURIComponent(startingMoney) + "; expires=" + myDate.toUTCString();

		return true;	
	}
	else
		{
			 alert(errorMessage);
			 return false;	
		}
	
}
