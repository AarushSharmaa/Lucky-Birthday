//let us take inputs from html world to our js using querySelectors

const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumber = document.querySelector("#check-number");

const outputBox = document.querySelector("#output-box");


function compareValues(sumOfDigits, luckyNumber) {
    if (sumOfDigits % luckyNumber === 0) {
        outputBox.innerText = "Your Birthday is lucky ✔";
    } else {
 
        outputBox.innerText = "Your Birthday  is not lucky 🤔";
    }
}

function checkBirthdayIsLucky() {
    const dob = dateOfBirth.value;
    const sumOfDigits = calculateSum(dob);
    //console.log(sum);

    compareValues(sumOfDigits, luckyNumber.value)


}


function calculateSum(dob) {
    dob = dob.replaceAll("-", "");
    let add = 0;
    for (let index = 0; index < dob.length; index++) {
        add = add + Number(dob.charAt(index));
    }
    return add;
}


checkNumber.addEventListener("click", checkBirthdayIsLucky)