let numeroUsuario = prompt("Ingrese un numero");
let numero = parseInt(numeroUsuario)

if(numero || numero === 0){
    console.log(typeof numero)
    if (numero % 2 === 0 ) {
        console.log(numero + " es par")
    }
    else{
        console.log(numero + " es impar")
    }
}
else{
    console.log("Numero invalido")
}