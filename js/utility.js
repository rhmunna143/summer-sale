// get inner text and make number
function textNumber(textId) {
    const textElement = document.getElementById(textId);
    const textContent = textElement.innerText;
    const textValue = parseFloat(textContent);

    return textValue;
}

// set inner Text
function setText(locationId, newText) {
    const targetElement = document.getElementById(locationId);

    targetElement.innerText = newText;
}

// to sum
function toSum(num1, num2) {
    const sum = num1 + num2;

    return sum;
}

// to sub
function toSub(num1, num2) {
    const sub = num1 - num2;

    return sub;
}

// to remove class
function removeClass(elementID, className) {
    const elementSelect = document.getElementById(elementID);
    if (elementSelect) {
        elementSelect.classList.remove(className);
    }
}

// to remove attribute
function removeAttribute(elementID, attributeName) {
    const elementSelect = document.getElementById(elementID);
    if (elementSelect) {
        elementSelect.removeAttribute(attributeName);
    }
}