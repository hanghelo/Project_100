// 01. Select the elements and assign it to a variable
const totalSalesVatInclField = document.getElementById("totalSalesVatInclField");
const lessVATField = document.getElementById("lessVATField");
const Total_1Field = document.getElementById("Total_1Field");
const lessWithholdingTaxField = document.getElementById("lessWithholdingTaxField");
const Total_2Field = document.getElementById("Total_2Field");
const addVATField = document.getElementById("addVATField");
const amountDueField = document.getElementById("amountDueField");
const vatableSalesField = document.getElementById("vatableSalesField");
const VATAmountField = document.getElementById("VATAmountField");
const totalSalesField = document.getElementById("totalSalesField");

// 02. NUMBER FORMATTING FUNCTION
function isUserInputANumber () {
    // Get the input value, trim spaces, and remove commas
    const inputValue = totalSalesVatInclField.value.trim().replace(/,/g, '');
    const totalSalesVatInclValue = Number(inputValue);

    // checks if the user input is a number and not a NaN
    if (typeof totalSalesVatInclValue === 'number' && !isNaN(totalSalesVatInclValue)) {
        computationOfEverything (totalSalesVatInclValue);
        // Show message
        messageBox.style.display = "block"; // Show container
        message.textContent = "✅ Computation has been completed!";

    } else {
        // Show message
        messageBox.style.display = "block"; // Show container
        message.textContent = "❌ Invalid. Please check your input";

    }
}

function computationOfEverything (totalSalesVatInclValue) {

    /******************** VAT INPUT ************************/
    const Total_1Value = Number((totalSalesVatInclValue / 1.12).toFixed(2)) ;
    const LessVATValue = Number((totalSalesVatInclValue - Total_1Value).toFixed(2));

    lessVATField.value = LessVATValue;
    Total_1Field.value = Total_1Value;

    /******************** WITHHOLDING TAX ************************/

    const lessWithholdingTaxValue = Number((Total_1Value * 0.02).toFixed(2));
    const Total_2Value = Number((Total_1Value - lessWithholdingTaxValue).toFixed(2));
    
    lessWithholdingTaxField.value = lessWithholdingTaxValue;
    Total_2Field.value = Total_2Value;

    /********************* VAT OUTPUT ***********************/

    const addVATValue = Number((Total_1Value * 0.12).toFixed(2));
    const amountDueValue = Number((Total_2Value + addVATValue).toFixed(2));

    addVATField.value = addVATValue;
    amountDueField.value = amountDueValue;
    vatableSalesField.value = Total_1Value;
    VATAmountField.value = LessVATValue;
    totalSalesField.value = totalSalesVatInclValue;
}

function clearFields () {
    totalSalesVatInclField.value = "Sample: 100000.00";
    totalSalesVatInclField.value = "0.00";
    lessVATField.value = "0.00";
    Total_1Field.value = "0.00";
    lessWithholdingTaxField.value = "0.00";
    Total_2Field.value = "0.00";
    addVATField.value = "0.00";
    amountDueField.value = "0.00";
    vatableSalesField.value = "0.00";
    VATAmountField.value = "0.00";
    totalSalesField.value =  "0.00";

    messageBox.style.display = "none"; // Show container
}

// Buttons
const computeNowBTN = document.querySelector('.computeNowBTN');
const cancel = document.querySelector ('.resetBTN');
const messageBox = document.querySelector ('.messageBox');
const message = document.querySelector('.message');


computeNowBTN.addEventListener ('click', isUserInputANumber);
cancel.addEventListener ('click', clearFields);






