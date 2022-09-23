window.onload = main;
function main() {
    document.formulario.submit.onclick = validar;
};
function validar() {
    let palindromo = document.formulario.palindromo.value;
    document.formulario.mensaje.value = validarFrase(palindromo) ? "Palíndromo" : "No es Palíndromo";
}
function validarFrase(palindromo) {
    return validarPalindromo(palindromo);
}

function validarPalindromo(palindromo) {
    let valido = false;
    
    //quitar los espacios para ello primero localizamos los espacios con split y luego usamos join para la nueva
    //cadena sin espacios
    let palindromoSinEspacios = palindromo.split(" ").join("");
    console.log(palindromoSinEspacios);
    let copiaPalindromo = palindromoSinEspacios;
    console.log(cadenaInversa(copiaPalindromo));
    if(palindromoSinEspacios == cadenaInversa(copiaPalindromo)){
        valido = true;
    }
    console.log(valido);
    return valido; 
}

function cadenaInversa(cadena) {
    let cadenaInversa = cadena.split("").reverse().join("");
    return cadenaInversa;
}
