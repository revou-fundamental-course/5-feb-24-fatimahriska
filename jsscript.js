function convertTemperature() {
    const temperature = parseFloat(document.getElementById('tempInput').value);
    const unit = document.getElementById('unitSelect').value;
    let result;

    switch(unit) {
        case 'celcius':
            result = {
                fahrenheit: (temperature * 9/5) + 32,
                kelvin: temperature + 273.15
            };
            break;
        case 'fahrenheit':
            result = {
                celcius: (temperature - 32) * 5/9,
                kelvin: (temperature - 32) * 5/9 + 273.15
            };
            break;
        case 'kelvin':
            result = {
                celcius: temperature - 273.15,
                fahrenheit: (temperature - 273.15) * 9/5 + 32
            };
            break;
    }

    displayResult(result);
}

function displayResult(result) {
    let resultText = '';
    for(let unit in result) {
        resultText += `${unit.charAt(0).toUpperCase() + unit.slice(1)}: ${result[unit].toFixed(2)}\xB0<br>`;
    }
    document.getElementById('result').innerHTML = resultText;
}
