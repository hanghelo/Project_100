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
    const totalSalesVatInclValue = Number(totalSalesVatInclField.value);
    console.log (typeof totalSalesVatInclValue);
    console.log (totalSalesVatInclValue);

    // checks if the user input is a number and not a NaN
    if (typeof totalSalesVatInclValue === 'number' && !isNaN(totalSalesVatInclValue)) {
        console.log ('yehey');
        computationOfEverything (totalSalesVatInclValue);
    } else {
        console.log ('Input is not a number');
    }
}

function computationOfEverything (totalSalesVatInclValue) {

    /******************** VAT INPUT ************************/
    const Total_1Field = Number((totalSalesVatInclValue / 1.12).toFixed(2)) ;
    const LessVATValue = Number((totalSalesVatInclValue - Total_1Field).toFixed(2));

    console.log (`Your total sales (VAT incl): ${totalSalesVatInclValue}`)
    console.log (`Your input VAT : ${LessVATValue}`);
    console.log (`Your sales less input VAT : ${Total_1Field}`);
    const validation_1 = (LessVATValue + Total_1Field);   // For validation only
    console.log (validation_1);

    /******************** WITHHOLDING TAX ************************/

    const lessWithholdingTaxValue = Number((Total_1Field * 0.02).toFixed(2));
    console.log (`Withholding Tax (2%) ${lessWithholdingTaxValue}`);

    const Total_2Field = Number((Total_1Field - lessWithholdingTaxValue).toFixed(2));
    console.log (`Less Withholding Tax ${Total_2Field}`);
    const validation_2 = (lessWithholdingTaxValue + Total_2Field); // Validation, should be equal to total field 1
    console.log (validation_2);

    /********************************************/



    



}