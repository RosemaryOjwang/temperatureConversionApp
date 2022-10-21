//business logic
function fahrenheitToCelsius(temperature) {
return (temperature - 32) * 5 / 9;
}

function celsiusToFahrenheit(temperature) {
  return (temperature * 9 / 5) + 32;
}

//user interface logic
const celsius = "Your temperature in celsius is " + fahrenheitToCelsius(parseInt(window.prompt("enter temperature in Fahrenheit:")));
window.alert(celsius);
const fahrenheit = "Your temperature in fahrenheit is " + celsiusToFahrenheit(parseInt(window.prompt("enter temperature in Celsius:")));
window.alert(fahrenheit);
