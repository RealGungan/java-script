window.onload = main;

function main() {
    document.formulario.submit.onclick = validar;
}
function validar() {
    let localidad = document.formulario.localidad.value;
    document.formulario.mensaje.value = validarLocalidad(localidad) ? "Localidad válida" : "Localidad inválida";
}

function validarLocalidad(localidad) {
    return validarLongitud(localidad) && validarPrimerasLetras(localidad) && validarCaracteres(localidad) && validarUltimasLetras(localidad);
}
//validamos la longitud entre 7 y 35 
function validarLongitud(localidad) {
    let valido = true;
    if (!(localidad.length > 7 && localidad.length < 35)) {
        console.log(localidad);
        valido = false;
        console.log("la localidad es " + valido);
    }
    return valido;
}

//validamos que los tres primeros caracteres sean letras
function validarPrimerasLetras(localidad) {
    let primerLetras = localidad.substring(0, 3); //coge los primeros tres caracteres de la localidad
    console.log(primerLetras);
    let valido = true;
    if (!(isLetter(primerLetras))) {
        valido = false;
        console.log("los primeros caracteres no son letras");
    }
    return valido;

}
//funcion de javi para saber si es letra
//.test indica si existe 
function isLetter(str) {
    return /^[a-zA-ZñÀ-ú]+$/.test(str); // comprobar si es letra
}
//validamos que a continuación sea letras y  espacios
function validarCaracteres(localidad) {
    let valido = true;
    let espacio = / /;
    let restoLetras = localidad.substring(3, localidad.length);
    if (!(isLetter(restoLetras) || espacio.test(restoLetras))) {
        valido = false;
    }
    return valido;
    console.log(valido);
}

//validamos que termine por dos letras
function validarUltimasLetras(localidad) {
    let valido = true;
    const ultimos = 2;
    let ultimasLetras = localidad.substring(localidad.length - ultimos);
    if (!(isLetter(ultimasLetras))) {
        valido = false;

    }
    return valido;
}











