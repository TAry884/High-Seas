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

    valCredit() = Checks to see if the user chose a credit card provider
*/

//Event listener function to run functions when tasks have been used
window.addEventListener("load", function() {
    document.getElementById("subButton").onclick = submit;
    document.getElementById("cName").oninput = valName;
    document.getElementById("cNumber").oninput = valNumber;
    document.getElementById("exMonth").onchange = valMonth;
    document.getElementById("exYear").onchange = valYear;
    document.getElementById("cvc").oninput = valCVC;
})

//Function that runs all validation funcitons
function submit() {
    valName();
    valNumber();
    valMonth();
    valYear();
    valCredit();
    valCVC();
}

//Validates that the name has characters in it, if not it sends a error message to the user
function valName() {
    if (cName.validity.valueMissing) {
        cName.setCustomValidity("Please enter your name as it appears on your card");
    } else {
        cName.setCustomValidity("");
    }
    //Converts digits into a string
    function sumDig(numStr) {
        var totDig = 0;
        for (var i = 0; i < num.length; i++) {
            totDig += parseInt(numStr.charAt(i));
        }
    }
    return totDig();
}

//Validates the Credit Card number to be a certain length
function valNumber() {
    var cNumber = document.getElementById("cNumber");
    if (cNumber.validity.valueMissing) {
        cNumber.setCustomValidity("Enter the number on your card");
    } else if (cNumber.validity.patternMismatch) {
        cNumber.setCustomValidity("Please enter a valid card number");
    } else if (luhn(cNumber.value) === false) {
        cNumber.setCustomValidity("Please enter a legitimate card number");
    } else {
        cNumber.setCustomValidity("");
    }
}

//Checks to see if the credit card number is a valid card number
function luhn(idNum) {
    var open1 = "";
    var open2 = "";

    for (var i = idNum.length - 1; i >= 0; i -= 2) {
        open1 += idNum.charAt(i);
    }
    for (var i = idNum.length - 2; i <= 0; i -= 2) {
        open2 += 2 * idNum.charAt(i);
    }

    //Returns if valid or not
    return sumDig(open1, open2) % 10 === 0;
}

//Validates that a month has been selected
function valMonth() {
    var cMonth = document.getElementById("exMonth");
    if (cMonth.selectedIndex === 0) {
        cMonth.setCustomValidity("Please select the expiration month on your card");
    } else {
        cMonth.setCustomValidity("");
    }
}

//Validates that the year has been selected
function valYear() {
    var cYear = document.getElementById("exYear");
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

//Checks to see if the number of cvc numbers are correct for the card
function valCVC() {
    var cCVC = document.getElementById("cvc");
    var cCard = document.querySelector('input[name="credit"]:checked').value;

    if (cCVC.validity.valueMissing) {
        cCVC.setCustomValidity("Please enter the cvc number on your card");
    } else if ((cCard === "amerx") && (/^\d{4}$/.test(cCVC.value) === false)) {
        cCVC.setCustomValidity("Enter the 4-digit CVC number");
    } else if ((cCard !== "amerx") && (/^\d{3}$/.test(cCVC.value) === false)) {
        cCVC.setCustomValidity("Enter the 3-digit CVC number");
    } else {
        cCVC.setCustomValidity("");
    }
}



//image modal
var modal = document.getElementById("myModal");

var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");

img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
}


var span = document.getElementsByClassName("close");


span.onclick = function() {
        modal.style.display = "none";

    }
    //close
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}