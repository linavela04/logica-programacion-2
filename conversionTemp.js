let temperatura;

do {
    let entrada = prompt("Ingresa una temperatura en grados Celsius:");
    temperatura = Number(entrada);

    if (isNaN(temperatura)) {
        alert ("Ingresa un número válido!")
    }
} while (isNaN(temperatura));

let fahrenheit = ((temperatura *(9/5)) + 32);
let Kelvin = (temperatura + 273.15);

let resultadosDiv = document.getElementById("resultados");
resultadosDiv.innerHTML = `
    <p>La temperatura ingresada en celsius es: ${temperatura} °C </p>
    <p>La temperatura ingresada en Fahrenheit es: ${fahrenheit} °F</p>
    <p>La temperatura ingresada en Kelvin es: ${Kelvin} K</p>
    `
    
