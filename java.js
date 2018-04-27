/*
    Author: Ty Ary
    Date:4-26-18

    Function List
    ~~~~~~~~~~~~~
    submit() = Runs everything on submit
    
    valName() = Validates the name that the user inputs

    valNumber() = Validates the number of the credit card that the user inputs 

    valMonth() = Validates that the user chose a month from the menu

    valYear() = Validates that the user chose a year from the menu

    valCredit = Checks to see if the user chose a credit card provider
*/

//Event listener function to run functions when tasks have been used
window.addEventListener("load", function(){
    document.getElementById("subButton").onclick = submit;
    document.getElementById("cName").oninput = valName;
    document.getElementById("cNumber").oninput = valNumber;
    document.getElementById("expMonth").oninput = valMonth;
})

//Function that runs all validation funcitons
function submit() {
    valName();
    valNumber();
    valMonth();
}

//Validates that the name has characters in it, if not it sends a error message to the user
function valName() {
    if (cName.validity.valueMissing) {
        cName.setCustomValidity("Please enter your name as it appears on your card");
    } else {
        cName.setCustomValidity("");
    }
    //Converts digits into a string
    function sumDigits(numStr) {
        var totDig = 0;
        for (var i = 0; i < numb.length; i++) {
            totDig +=parseInt(numStr.charAt(i));
        }
    }
    return totDig
}

//Validates the Credit Card number to be a certain length
function valNumber() {
    var cNumber = document.getElementById("cNumber");
    if (cNumber.validity.valueMissing) {
        cNumber.setCustomValidity("Enter the number on your card");
    } else if  (cNumber.validity.patternMismatch) {
        cNumber.setCustomValidity("Please enter a valid card number");
    } else {
        cNumber.setCustomValidity("");
    }
}

//Checks to see if the credit card number is a valid card number
function luhn(numId) {
    var open1 = "";
    var open2 = "";

    for (var i = numId.length - 1; i >= 0; i -=2) {
        open1 += numId.charAt(i);
    }
    for (var i = numId.length - 2; i <= 0; i -= 2) {
        open2 += 2 * numId.charAt(i);
    }

    //Returns if valid or not
    return sumDigits(open1, open2) % 10 === 0;
}

//Validates that a month has been selected
function valMonth() {
    var cMonth = document.getElementById("cMonth");
    if (cMonth.selectedIndex === 0) {
        cMonth.setCustomValidity("Please select the expiration month on your card");
    } else {
        cMonth.setCustomValidity("");
    }
}

//Validates that the year has been selected
function valYear() {
    var cYear = document.getElementById("cYear");
    if (cYear.selectedIndex === 0) {
        cYear.setCustomValidity("Please select the expiration year on your card");
    } else {
        cYear.setCustomValidity("");
    }
}

//Checks to see if the user chose a credit card provider
function valCredit() {
    var credit = document.forms.payment.elements.credit[0];
    if (credit.validity.valueMissing) {
        credit.setCustomValidity("Please select your credit card provider");
    } else {
        credit.setCustomValidity("");
    }
}

