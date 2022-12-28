let resultDiv = document.getElementById('result');
let equationDiv = document.getElementById('delete');

let input = "";
let result = "";
// getting input//
let getInput = (data) => {
    input += data.value;
    resultDiv.innerHTML = input;
}
//for delet option//
let removeLastNumber = () => {
    input = input.slice(0, -1);
    resultDiv.innerHTML = input;
    equationDiv.innerHTML = "";
}
// when reset is click the amount is none//
let reset = () => {
    input = "";
    resultDiv.innerHTML = input;
    equationDiv.innerHTML = ""
}
// for better look//
let evalute = () => {
    if (input.length <= 0) {
        equationDiv.innerHTML = "";
    } else {
        input = input.replaceAll("×", "*");
        input = input.replaceAll("÷", "/");
        equationDiv.innerHTML = input + "=";
        resultDiv.innerHTML = eval(input);
    }
}

