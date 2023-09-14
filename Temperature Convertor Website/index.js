// Main Idea =>
// 1. Take the input of the user's input unit and store it.
// 2. Take the input (value) of the user and store it.
// 3. Make a function of the conversion of the values.
// 4. Envoke the actual function by the CONVERT button.

// Get the elements through their idss

const inputUnit = document.getElementById("dropdownValue");
const inputValue = document.getElementById("userInput");
const conversionUnit = document.getElementById("conversionDropdown");
const convertedTemp = document.getElementById("processedOutput");
const convertBtn = document.querySelector(".Btn");

convertBtn.addEventListener("click", function()
{
    const inputTemp = parseFloat(inputValue.value);
    const fromUit = inputUnit.value;
    const toUit = conversionUnit.value;

    let result;

    if (fromUit === "celsius" && toUit === "kelvin")
    {
        result = inputTemp + 273.15;
    }
    else if (fromUit === "celsius" && toUit ==="Fahrenheit")
    {
        result = (inputTemp*9/5)+32;
    }
    else if (fromUit === "kelvin" && toUit ==="celsius")
    {
        result  =  inputTemp-273.15;
    }
    else if (fromUit === "kelvin" && toUit === "Fahrenheit")
    {
        result = (inputTemp - 273.15) * 9/5 + 32;
    }
    else if (fromUnit === "Fahrenheit" && toUnit === "celsius")
    {
        result = (inputTemp - 32) * 5/9;
    }
    else if (fromUnit === "Fahrenheit" && toUnit === "Kelvin")
    {
        result = (inputTemp-32)*5/9+273.15;
    }
    else 
    {
        result = inputTemp;
    }


    convertedTemp.value  = result.toFixed(1);
});