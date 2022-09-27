alert("Funciona");

// 1. Booleanos

// 	Dados 2 variables booleanas:
// booleano1 = true;
// booleano2 = false;

// Crear variable booleanoAnd cuyo valor sea la comparación booleana booleano1 and booleano2
const booleano1 = true;
const booleano2 = false;

const booleanoAnd = booleano1 && booleano2;
console.log(booleanoAnd);

// Crear variable booleanoOr cuyo valor sea la comparación booleana booleano1 or booleano2
const booleanoOr = booleano1 || booleano2;
console.log(booleanoOr);

// Crear variable booleanoNot cuyo valor sea la comparación booleana no booleano1
const booleanoNot = booleano1 != booleano2;
console.log(booleanoNot);

// Crear variable booleanoMix0 cuyo valor sea la comparación booleana (booleano1 or booleano2) and (booleano1 or (not booleano1 and not booleano2)
const booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2));
console.log(booleanoMix0);


// 2.Operadores

// Crear variable valorDivision cuyo valor sea la división de 17 entre 3 y que solo muestre 2 decimales en el resultado
const valorDivision = 17 / 3;
console.log(valorDivision.toFixed(2));

// Crear variable valorResto cuyo valor sea el resto de 17 entre 7
const valorResto = 17 % 7;
console.log(valorResto);


// 3.Lógica de programación

// Crea una variable A cuyo valor sea el número 9, después crea una variable B cuyo valor sea un string con el número 9,
//desarrolla la lógica para que cuando A == B muestre por consola “Son iguales”, ¿qué pasa si en vez de tener A == B, comprobamos que A === B?
const A = 9;
const B = "9"

if (A === B) {
    console.log("Son iguales");
}
else {
    console.log("No son iguales")
}


// Crea una variable mochila que sea un array de elementos, desarrolla la lógica para que si mochila tiene más de 10 elementos
//muestre por consola el mensaje “No puedo cargar con tantas cosas”, si mochila contiene entre 10 y 2 elementos se muestre por consola “Que bien voy con mi mochila”
//y si no muestre por consola “Creo q no necesito una mochila”
const mochila = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
if (mochila.length > 10) {
    console.log("No puedo cargar con tantas cosas");
}
else if (mochila.length > 2 && mochila.length < 9) {
    console.log("Que bien voy con mi mochila");
}
else {
    console.log("Creo que no necesito una mochila")
}

// Crear variable contarHasta10 con valor 0 e incrementar su valor con un bucle hasta que se verifique que contarHasta10 === 10
let contarHasta10 = 0;
while (contarHasta10 < 10) {
    contarHasta10++;
};
console.log(contarHasta10);

// Crea una variable diaFestivo que sea de tipo boolean. Crea un ternario que si diaFestivo es true devuelve un console.log de ‘Hoy no trabajo’
//y  si es false ‘Hoy trabajo’
const diaFestivo = true;
const diaTrabajo = diaFestivo === false ? "Hoy no trabajo" : "Hoy trabajo";
console.log(diaTrabajo);

// Crea una variable arrayBucle tipo array vacía, rellénala con números del 4 al 18 utilizando un bucle

const arrayBucle = [];
for (let i = 4; i <= 18; i++) {
    arrayBucle.push(i);
}
console.log(arrayBucle);


// Recorre la variable creada anteriormente arrayBucle ,suma todos sus elementos y guárdalos en una variable de nombre Resultado
let Resultado = 0;
for (const elementosArray of arrayBucle) {
    Resultado = Resultado + elementosArray;
    console.log(Resultado);
}


// Dado el siguiente array, [‘Con’, ‘Sofia’, ‘aprendiendo’, ‘bucles’], recorrelo utilizando el bucle “for of” y muestra por consola todos sus elementos,
//después recórrelo utilizando el bucle “for in” mostrando también por consola todos sus elementos
const aprende = ["Con", "Sofia", "aprendiendo", "bucles"];
for (const elementosAprende of aprende) {
    console.log(elementosAprende)
};
for (let keysAprende in aprende) {
    console.log(keysAprende)
};

// Crea un bucle utilizando “while” que itere 20 veces y muestre por consola “Patata” cada vez que el número de la iteración sea múltiplo de 3
let i = 0;

while (i < 20) {
    if (i % 3 === 0) {
        console.log("Patatas " + i);
    }
    i++;
};

// 0  - 19
// i = 0
//  1 % 3 = 1
// 2 % 3 = 2
// 3 % 3 = 0
// 4 % 3 = 1
