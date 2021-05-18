const {sumar,restar,multiplicar,dividir} = require('./calculadora/index.js') 
const resultado = "Resultado = "

//let operacion = process.argv[3];
let numero1 = Number(process.argv[2]); //convierto el string que viene de la consola en un numero
let numero2 = Number(process.argv[4]); //convierto el string que viene de la consola en un numero

switch (process.argv[3]) {
    case "+":
        console.log(resultado + sumar(numero1,numero2));
        break;
    case "-":
        console.log(resultado + restar(numero1,numero2));
        break;
    case "*":
        console.log(resultado + multiplicar(numero1,numero2));
        break;
    case "/":
        console.log(resultado + dividir(numero1,numero2));
        break;
    case undefined:
        console.log('No reconozco esa operacion.Operaciones disponibles: sumar;restar;multiplicar;dividir');
    default:
        console.log('Escribe una operación...');
        break;
}