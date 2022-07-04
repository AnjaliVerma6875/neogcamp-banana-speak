var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

//outputDiv.innerText="Anjali Verma Good Learning"

//console.log(txtInput);
console.log(outputDiv);
//console.log(btnTranslate);

btnTranslate.addEventListener("click", function clickEventhandler(){
   // console.log("Clicked!!! ");
    //console.log("Input", txtInput.value);
    outputDiv.innerText="Anjali Verma Good Learning " + txtInput.value;


});

//1. document.querySelectorAll("textarea")
//2. .btn-primary
//3. #input-btn
//4. "input(name='translator')"