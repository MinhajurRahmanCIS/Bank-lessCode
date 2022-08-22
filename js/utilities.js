function getInputValueById(inputId){

    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = "";
    return inputFieldValue;

}

function getelementIdValueById(elementId){
    const element = document.getElementById(elementId);
    const elementFieldValueString = element.innerText;
    const elementFieldValue = parseFloat(elementFieldValueString);
    return elementFieldValue;
}

function setTextElementById(elementId, newValue){

    const textElement = document .getElementById(elementId);
    textElement.innerText = newValue;

}