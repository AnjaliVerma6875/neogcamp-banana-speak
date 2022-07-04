var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");

console.log(txtInput);

//console.log(btnTranslate);

btnTranslate.addEventListener("click", function clickEventhandler(){
    console.log("Clicked!!! ");
    console.log("Input", txtInput.value);
});

