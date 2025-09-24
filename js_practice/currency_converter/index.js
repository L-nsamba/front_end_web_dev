const rates = {
USD: 1,
JPY: 113.5,
EUR: 0.89,
RUB: 74.36,
GBP: 0.75,
}

const from_field = document.getElementById(`from_field`);
const amount_field = document.getElementById(`amount_field`);
const to_field = document.getElementById(`to_field`);
const convert_btn = document.getElementById(`convert_btn`);
const final_value = document.getElementById(`final_value`);

function convertCurrency(){
    const fromCurrency = from_field.value;
    const toCurrency = to_field.value;
    const amount = parseFloat(amount_field.value);

    if(isNaN(amount)){
        final_value.textContent = `Please enter a valid number`;
        return;
    }


    const convertedAmount = (amount/rates[fromCurrency]) * rates[toCurrency];

    final_value.textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
}


convert_btn.onclick = convertCurrency;