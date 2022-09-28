//let us take inputs from html world to our js using querySelectors


const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumber = document.querySelector("#check-number");

const outputBox = document.querySelector("#output-box");


function compareValues(sumOfDigits, luckyNumber) {
    if (luckyNumber <= 0) {
        outputBox.innerText = "Please enter positive value for Lucky Number. It must be > 0";
        return;
    }

    if (String(luckyNumber) === "") {
        outputBox.innerText = "Please enter lucky number. This field cannot be empty.";
        return;
    }

    if (sumOfDigits % luckyNumber === 0) {
        document.body.style.backgroundColor = "orange";
        outputBox.innerText = "Your Birthday is lucky 💖";
    } else {
        document.body.style.backgroundColor = "red";
        outputBox.innerText = "Your Birthday  is not lucky 🐱‍🚀";
    }
}

function checkBirthdayIsLucky() {
    const dob = dateOfBirth.value;
    if (dob === "") {
        outputBox.innerText = "Please enter your date of birth. This field cannot be empty.";
        return;
    }
    const sumOfDigits = calculateSum(dob);
    //console.log(sum);


    compareValues(sumOfDigits, luckyNumber.value);

    //outputBox.innerText = "Please enter both the fields. Leaving one field empty will not produce results.😣";


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