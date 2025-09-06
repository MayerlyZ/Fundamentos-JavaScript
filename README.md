# Fundamentos de JavaScript

Este repositorio contiene ejemplos y explicaciones sobre los conceptos fundamentales de JavaScript.

## Proyectos

### calculadora.js

Una simple calculadora de línea de comandos que realiza operaciones aritméticas básicas (+, -, *, /). El script solicita al usuario dos números y un operador, y muestra el resultado en una alerta.

## Conceptos Teóricos

### 1. Variables

En programación, una variable es como una caja con una etiqueta que nos permite almacenar y identificar datos.

#### Declaración y Asignación

*   **Declaración**: Es el acto de crear la "caja" (variable) y darle un nombre.
*   **Asignación**: Es el acto de guardar algo dentro de la "caja" (variable).

En JavaScript, usamos las palabras clave `let` y `const` para declarar variables.

```javascript
// 1. Declaramos la variable con un nombre descriptivo.
let cajaDeAndy;

// 2. Asignamos un valor a la variable usando el signo igual (=).
cajaDeAndy = "Woody";

// Podemos hacerlo en una sola línea
let jugueteFavorito = "Buzz Lightyear";

console.log(cajaDeAndy); // Output: Woody
```

#### Tipos de Variables: `let` vs `const`

*   `let`: Se usa para variables cuyo valor puede cambiar a lo largo del tiempo.
    ```javascript
    let contador = 0;
    contador = contador + 1; // El valor de contador ahora es 1
    ```
*   `const`: Se usa para constantes, es decir, variables cuyo valor no cambiará una vez asignado.
    ```javascript
    const PI = 3.14159;
    // PI = 3.14; // Esto generaría un error, porque no se puede reasignar una constante.
    console.log(PI); // Output: 3.14159
    ```

#### Buenas Prácticas para Nombres de Variables

Es crucial que los nombres de las variables sean descriptivos para que el código sea fácil de leer y entender.

*   **Correcto**: Nombres que describen claramente el contenido.
*   **Incorrecto**: Nombres genéricos o de una sola letra como `c`, `d`, `a`.

**Ejemplos:**

```javascript
// Incorrecto: No es descriptivo.
let c = "Woody";

// Correcto: Es descriptivo y claro.
let nombreDelJuguete = "Woody";
```

*   Evita abreviaciones ambiguas.
*   Utiliza nombres largos y descriptivos si es necesario.
*   Abreviaciones comunes como `URL` y `ID` son aceptables porque son universalmente entendidas.

```javascript
// Correcto
let primerTrasteoDeAndy = "Caja grande";
let userID = "12345";
let userURL = "https://google.com";
```

#### Convenciones de Nomenclatura (Casing)

En JavaScript, la convención más común para nombrar variables es `camelCase`.

*   **camelCase**: `miVariableDeEjemplo`. Se usa para variables y funciones.
*   **PascalCase**: `MiClaseDeEjemplo`. Se usa para clases.
*   **snake_case**: `mi_variable_de_ejemplo`. Común en otros lenguajes como Python.
*   **kebab-case**: `mi-variable-de-ejemplo`. Usado en nombres de archivos o en propiedades CSS.

### 2. Comentarios y Organización

*   **Comentarios**: Escribe comentarios para explicar las partes complejas de tu código. Esto te ayudará a ti en el futuro y a otros programadores a entender tu lógica. Existen dos formas de hacerlo:

    *   **Comentarios de una sola línea**: Comienzan con `//`. El texto que sigue en la misma línea es ignorado.
        ```javascript
        // Esto es un comentario de una sola línea.
        let edad = 25; // Este comentario está al final de una línea de código.
        ```

    *   **Comentarios multilínea**: Comienzan con `/*` y terminan con `*/`. Todo lo que se encuentre entre estos símbolos será ignorado, incluso si abarca varias líneas.
        ```javascript
        /*
          Este es un comentario
          que ocupa varias líneas.
          Es útil para explicaciones más extensas.
        */
        const NOMBRE_APLICACION = "Mi App";
        ```

*   **Organización**: Declara las variables al inicio de su ámbito (al principio del archivo o de la función) para mejorar la legibilidad.

```javascript
// Variable que almacena el nombre del juguete principal de Andy.
// Usamos un nombre descriptivo para entender fácilmente su propósito.
let cajaDeAndy = "Woody";
/*
  Las abreviaciones conocidas como URL o ID son permitidas
  porque su significado es universalmente entendido en el
  mundo del desarrollo.
*/
let userURL = "https://google.com";
let userID = 12345;
```