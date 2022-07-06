var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");


//DEMO var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}

function errorHandler(error){
    console.log("Error Occured" + error)
    alert("Something is wrong in the server Try Again after Sometime!!!")
}

//outputDiv.innerText="Anjali Verma Good Learning"

//console.log(txtInput);
console.log(outputDiv);
//console.log(btnTranslate);

btnTranslate.addEventListener("click", function clickEventhandler(){
   // console.log("Clicked!!! ");
    //console.log("Input", txtInput.value);
    //outputDiv.innerText="Anjali Verma Good Learning " + txtInput.value;
     var inputText = txtInput.value;     //taking input

 //calling Server for processing
fetch(getTranslationURL(inputText)).then(response => response.json()).then(json => {
    var translatedText = json.contents.translated;
    outputDiv.innerText = translatedText;})


//console.log(json.contents.translated)).catch(errorHandler)
});


//1. document.querySelectorAll("textarea")
//2. .btn-primary
//3. #input-btn
//4. "input(name='translator')"

//we don't have to pass any parameter in function errorHandler..
//function catch(callbackfn===errorHandler){
    //Do Something..
    //Something More..
    //callbackfn(error);
//}