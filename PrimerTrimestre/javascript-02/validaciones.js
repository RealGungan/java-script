//funcion es cif ej 2
function esCif(cadenaCif) {
    cadenaCif = cadenaCif.toUpperCase().trim();
    let sumaPares = 0;
    let sumaImpares = 0;
    let formato1 = "ABCDEFGHJUV";
    let formato2 = "PQRSW";
    if (cadenaCif.length != 9) {
        //controlamos que no sea distinto de 9
        return 0;//dato no valido o no es cif
    }
    for (let i = 1; i < 8; i++) {
        if (isNaN(cadenaCif[i])) {
            //controlamos que no sea numero
            return 0; //dato no valido o no es cif
        }
        if (i % 2 == 1) {
            //al introducir una cadena, es nesario realizar parseInt para las operaciones
            let num = parseInt(cadenaCif[i]) * 2;
            if (num > 9) {
                //el num%10 me va a dar el primer digito
                //el ultimo numero siempre sera 1
                sumaImpares += 1 + num % 10;
            } else {
                sumaImpares += num;
            }
        } else {
            sumaPares += parseInt(cadenaCif[i]);
        }
    }
    //calculamos el resultado final realizando la suma de pares e impares, el modulo del mismo y restamos 10
    let resultado = 10 - ((sumaImpares + sumaPares) % 10);
    if (resultado == 10) {
        resultado = 0;
    }
    //segun el formato que sea modificamos la ultima letra de la cadena o bien segun el resultado será una letra 
    if (formato1.includes(cadenaCif[0])) {
        if (resultado == cadenaCif[8]) {
            return 1; //cif correcto
        }
    }
    if (formato2.includes(cadenaCif[0])) {
        switch (resultado) {
            case 0:
                if (cadenaCif[8] == "J")
                    return 1; //cif correcto
                break;
            case 1:
                if (cadenaCif[8] == "A")
                    return 1;
                break;
            case 2:
                if (cadenaCif[8] == "B")
                    return 1;
                break;
            case 3:
                if (cadenaCif[8] == "C")
                    return 1;
                break;
            case 4:
                if (cadenaCif[8] == "D")
                    return 1;
                break;
            case 5:
                if (cadenaCif[8] == "E")
                    return 1;
                break;
            case 6:
                if (cadenaCif[8] == "F")
                    return 1;
                break;
            case 7:
                if (cadenaCif[8] == "G")
                    return 1;
                break;
            case 8:
                if (cadenaCif[8] == "H")
                    return 1;
                break;
            case 9:
                if (cadenaCif[8] == "I")
                    return 1;
                break;
        }
    }
    return 2; //cif erroneo o caracter de control erroneo

}
//ejercicio 4 
//console.log(esCif("q7850003J"));
function nif_Cif(parametro){
    return respuesta;

}

function codigosControl(banco, sucursal, cuenta) {
    if (banco.length != 4 || sucursal.length != 4 || cuenta.length != 10 || isNaN(banco) || isNaN(sucursal) || isNaN(cuenta)) {
        return -1;
    }
    let sumaBanco = parseInt(banco[0]) * 4 + parseInt(banco[1]) * 8 + parseInt(banco[2]) * 5 + parseInt(banco[3]) * 10;
    let sumaSucursal = parseInt(banco[0]) * 9 + parseInt(banco[1]) * 7 + parseInt(banco[2]) * 3 + parseInt(banco[3]) * 6;
    let resultado = 11 - (sumaBanco + sumaSucursal) % 11;
    console.log(sumaBanco + " " + sumaSucursal+ " " +resultado);
    if (resultado == 10) {
        resultado = 1;
    }
    if (resultado == 11) {
        resultado = 0;
    }
    let numero3 = 11 - (parseInt(cuenta[0]) * 1 + parseInt(cuenta[1]) * 2 + parseInt(cuenta[2]) * 4 + parseInt(cuenta[3]) * 8 + parseInt(cuenta[4]) * 5 + parseInt(cuenta[5]) * 10 + parseInt(cuenta[6]) * 9 + parseInt(cuenta[7]) * 7 + parseInt(cuenta[8]) * 3 + parseInt(cuenta[9]) * 6) % 11;
    if (numero3 == 10) {
        numero3 = 1;
    }
    if (numero3 == 11) {
        numero3 = 0;
    }
    //truco: si es numero y quiero que al imprimir sea String puedo  poner " " y concatenar con + y asi no se suma 
    return ""+resultado + numero3;
}
//para probar la funcion . en esta funcion no me funciona el primer digito, el segundo su lo coge
//ver por que no cambia en resultado y siempre sale 1 y en numero3 si
console.log(codigosControl("0186","8018","6078591188"));
//64
//31838056761780852105
//01868018076078591188
//---------------ejercicio 5 
function calculoIBANEspanya(codigoCuenta){
    if(codigoCuenta.length != 20){
        return -1;
    }
    let caracteres = "ES00";
   //codigoCuenta + caracteres;
   let NuevoCaracteres = caracteres.replace("E","14");
   NuevoCaracteres= NuevoCaracteres.replace("S","28");
    let numero = codigoCuenta + NuevoCaracteres;
    let codigoControl = 98 - parseInt(numero)%97;
    if( codigoControl < 10){
        codigoControl = "0" + codigoControl;
    }else{
        codigoControl = codigoControl.toString();
    }
    console.log(codigoControl);
    let iban = "ES" + codigoControl + codigoCuenta;
    return iban;
}
console.log( calculoIBANEspanya("12345678912345678912"));