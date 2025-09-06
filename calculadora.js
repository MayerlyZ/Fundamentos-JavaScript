/**
 * Realiza una operación aritmética entre dos números.
 * @param {number} num1 El primer número.
 * @param {number} num2 El segundo número.
 * @param {string} operacion El operador ('+', '-', '*', '/').
 * @returns {number} El resultado de la operación.
 * @throws {Error} Si la operación no es válida o si se intenta dividir por cero.
 */
function calcular(num1, num2, operacion) {
    switch (operacion) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                throw new Error('Error: No se puede dividir por cero.');
            }
            return num1 / num2;
        default:
            throw new Error('Error: Operación no válida. Use +, -, *, /.');
    }
}

function iniciarCalculadora() {
    const num1Str = prompt('Ingrese el primer número: ');
    const num2Str = prompt('Ingrese el segundo número: ');
    const operacion = prompt('Ingrese la operación (+, -, *, /): ');

    const num1 = parseFloat(num1Str);
    const num2 = parseFloat(num2Str);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Error: Por favor, ingrese números válidos.');
        return;
    }

    try {
        const resultado = calcular(num1, num2, operacion);
        alert(`El resultado es: ${resultado}`);
    } catch (error) {
        alert(error.message);
    }
}

iniciarCalculadora();
