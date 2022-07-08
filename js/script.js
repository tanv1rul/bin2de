// creating variables form form and input field
const form = document.getElementById('input-from');
const binInput = document.getElementById('binNumber');
const outputBin = document.getElementById("binary");
const outputDec = document.getElementById("decimal");

// adding a event listener to parse user input
form.addEventListener('submit', callbackFunction);

function callbackFunction(event){

    // prevents the page from reloading after submitting form
    event.preventDefault();

    // making an array with the use input
    const myFormData = new FormData(event.target);
    var formDataObj = Object.fromEntries(myFormData.entries());
    // console.log(formDataObj)    


    // parsing the binary number and saving it in a variable
    const number = formDataObj["binNumber"];
    const len = number.toString().length;
    
    // main binary to decimal conversion code
        
    // checking if the input is a valid binary number
    checkBinary = false;

    for (let i = 0; i < len; i++){
        if (number[i] == 0 || number[i] == 1) {
            checkBinary = true;
        } else{
            checkBinary = false;
        }
    }

    // clearing the input field if the number is not binary
    if (checkBinary == false){
        binInput.value = '';
        window.alert("Please insert a valid binary number!")
        outputBin.textContent = "";
        outputDec.textContent = "";
    } else {

        outputBin.textContent = number;


        // main conversion

        decimal = 0;

        for (let j = 0; j < len; j++){

            decimal += number[j] * Math.pow(2, (len - j - 1));

        }

        outputDec.textContent = decimal;
    }


}


