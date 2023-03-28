let uservalue = document.getElementById('uservalue');
let Result = document.getElementById('result');
let Button = document.getElementById('button');
let type = document.getElementById("type");

function temperature() {
    let valueTemp = type.options[type.selectedIndex].value;
    let Value = uservalue.value;
    if (valueTemp === "Celsius") {
        let fahrenheit = (parseFloat(Value * 9 / 5) + 32).toFixed(1);
        Result.textContent = fahrenheit + " Fahrenheit";
    } else {
        let celsius = ((Value - 32) * 5 / 9).toFixed(1);
        Result.textContent = celsius + " Celsius";
    }
}
Button.addEventListener('click', temperature);