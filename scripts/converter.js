let converterButton = document.querySelector("#converterButton")
let leftInput = document.querySelector("#converterLeftInput")
let rightInput = document.querySelector("#converterRightInput")
let converterLeftLabel = document.querySelector("#converterLeftLabel")
let converterRightLabel = document.querySelector("#converterRightLabel")
let converterTransferButton = document.querySelector("#converterTransferButton")
const BTC = 1234567
const USD = 0.000023
let mode = "BTC_to_USD"
converterButton.addEventListener("click", convert)
converterTransferButton.addEventListener("click", converterInversion)
leftInput.addEventListener("keyup", (event) => {
    leftInput.value = leftInput.value.replace(",", ".").replace(/[^0-9.]/g, '');
    if (event.key === 'Enter') {
        convert()
    }
})

function convert() {

    const valueLeft = leftInput.value
    let rightValue = 0
    try {

        if (mode === 'BTC_to_USD') {
            rightValue = valueLeft * USD
        } else if (mode === 'USD_to_BTC') {
            rightValue = valueLeft * BTC
        }
        if (isNaN(rightValue)) {
            rightValue = 'Enter valid number'
        }
    } catch (error) {
        rightValue = 'Enter valid number'
    }
    rightInput.value = rightValue
}

function converterInversion() {
    if (mode === 'BTC_to_USD') {
        mode = 'USD_to_BTC'
    } else {
        mode = 'BTC_to_USD'
    }
    setLabels()
}

function setLabels() {
    if (mode === 'BTC_to_USD') {
        converterLeftLabel.innerHTML = "BTC"
        converterRightLabel.innerHTML = "USD"
    } else if (mode === 'USD_to_BTC') {
        converterLeftLabel.innerHTML = "USD"
        converterRightLabel.innerHTML = "BTC"
    }
}
