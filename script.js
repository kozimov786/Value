
let inputPositive = document.querySelector("#tab-positive");
let inputNegative = document.querySelector("#tab-negative");
let inputNeutral = document.querySelector("#tab-neutral");
let btnTab = document.querySelector("#btnTab");
let textCont = document.querySelector("#p-content");

btnTab.addEventListener('click', () => {
    let inputField = Number(document.querySelector("#index-field").value);

    if (inputField == 1) {
        inputPositive.checked = true;
        inputNegative.checked = false;
        inputNeutral.checked = false;
        textCont.textContent = "Positive content"
    }
    if (inputField == 2) {
        inputPositive.checked = false;
        inputNegative.checked = true;
        inputNeutral.checked = false;
        textCont.textContent = "Negative content"
    }
    if (inputField == 3) {
        inputPositive.checked = false;
        inputNegative.checked = false;
        inputNeutral.checked = true;
        textCont.textContent = "Neutral content"
    }
})