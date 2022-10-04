//ejericicio 2 
function esNif(cadenaNif) {

    cadenaNif = cadenaNif.toUpperCase().trim();

    if (cadenaNif.length != 9) {
        console.log("Se ha introducido un dato no válido. No es NIF ni un DNI");
        return 0;

    }

    if (cadenaNif.substr(-1) < "A" || !cadenaNif.substr(-1) > "Z") {
        console.log("Se ha introducido un dato no válido. No es NIF ni un DNI");
        return 0;
    }

    if (!cadenaNif.charAt(0) == 'X' && !cadenaNif.charAt(0) == 'Y' && !cadenaNif.charAt(0) == 'Z'
        || !cadenaNif.charAt(0) == 'L' && !cadenaNif.charAt(0) == 'K' && !cadenaNif.charAt(0) == 'M' && isNaN(cadenaNif.charAt(0))) {
        console.log(" Se ha introducido un dato no válido. No es NIF ni un DNI");
        return 0;

    }

    calculoCaracterControl = cadenaNif.substr(0, 8);
    let cambio = "";
    if (calculoCaracterControl.charAt(0) == "Y") {
        cambio = calculoCaracterControl.replace("Y", "1");
        console.log(cambio);
    }
    else if (calculoCaracterControl.charAt(0) == "Z") {
        cambio = calculoCaracterControl.replace("Z", "2");
        console.log(cambio);
    } else if (calculoCaracterControl.charAt(0) == "X" || calculoCaracterControl.charAt(0) == 'K' ||
        calculoCaracterControl.charAt(0) == "L" || calculoCaracterControl.charAt(0) == "M") {
        let primeraLetra = calculoCaracterControl.charAt(0);
        cambio = calculoCaracterControl.replace(primeraLetra, "0");
        console.log(cambio);
    } else {
        cambio = calculoCaracterControl;

    }
    let arr = new Array();
    arr = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    let posicion = 0;
    posicion = parseInt(cambio) % 23;
    console.log(posicion);

    if (cadenaNif.substr(-1) != arr[posicion]) {
        console.log("el nif no es correcto, el caracter de control es erroneo");
        return 2;

    }

    if (!cambio >= 100000) {
        console.log("Se ha introducido un DNI, se ha pasado un número de entre 6 y 8 dígitos con un valor mínimo de 100000.");
        return 3;
    }
    console.log("el nif es correcto");
    return 1;
}
console.log(esNif("53909901X"));


//funcion es cif ej 3
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
//ejercicio 4  ----- para este ejercicio nos falta el ejercicio de nif
//console.log(esCif("q7850003J"));
function nif_Cif(cadenaNifcif) {

    cadenaNifcif = cadenaNifcif.toUpperCase().trim();
    let formatocif="ABCDEFGHJUVPQRSW";
 
    if (cadenaNifcif.length != 9) {
        let res0=("Se ha introducido un dato no válido. No es CIF");
        return res0;
     }else{
           if(formatocif.includes(cadenaNifcif[0])){
                 esCif(cadenaNifcif);
                 if (esCif(cadenaNifcif)==1){
                     let c1=("CIF correcto")
                     return c1;
                 }else if(esCif(cadenaNifcif)==2){
                     let c2=("Se ha introducido un cif erróneo. El carácter de control es erróneo");
                     return c2;
                 }
           }else{
                 esNif(cadenaNifcif);
                 if(esNif(cadenaNifcif)==1){  
                     let n1=("Se ha introducido un NIF correcto");
                     return n1;
                 }else if(esNif(cadenaNifcif)==2){
                     let n2=("Se ha introducido un NIF erróneo. El carácter de control es erróneo");
                     return n2;
                 }else if(esNif(cadenaNifcif)==3){
                     let n3=("Se ha introducido un DNI, se ha pasado un número de entre 6 y 8 dígitos con un valor mínimo de 100000");
                     return n3;
                 }
           }
     }
    
}
//-------------------------------ejercicio 5  de condigo control 

function codigosControl(banco, sucursal, cuenta) {
    if (banco.length != 4 || sucursal.length != 4 || cuenta.length != 10 || isNaN(banco) || isNaN(sucursal) || isNaN(cuenta)) {
        return -1;
    }
    let sumaBanco = parseInt(banco[0]) * 4 + parseInt(banco[1]) * 8 + parseInt(banco[2]) * 5 + parseInt(banco[3]) * 10;
    let sumaSucursal = parseInt(banco[0]) * 9 + parseInt(banco[1]) * 7 + parseInt(banco[2]) * 3 + parseInt(banco[3]) * 6;
    let resultado = 11 - (sumaBanco + sumaSucursal) % 11;
    // console.log(sumaBanco + " " + sumaSucursal + " " + resultado);
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
    return "" + resultado + numero3;
}
//para probar la funcion . en esta funcion no me funciona el primer digito, el segundo su lo coge
//ver por que no cambia en resultado y siempre sale 1 y en numero3 si
// console.log(codigosControl("0186", "8018", "6078591188"));
//64
//31838056761780852105
//01868018076078591188

//---------------ejercicio 6  calculo IBAN ------------------------
function calculoIBANEspanya(codigoCuenta) {
    if (codigoCuenta.length != 20) {
        return -1;
    }
    let caracteres = "ES00";
    //codigoCuenta + caracteres;
    let NuevoCaracteres = caracteres.replace("E", "14");
    NuevoCaracteres = NuevoCaracteres.replace("S", "28");
    let numero = codigoCuenta + NuevoCaracteres;
    let codigoControl = 98 - parseInt(numero) % 97;
    if (codigoControl < 10) {
        codigoControl = "0" + codigoControl;
    } else {
        console.log("12345678912345678912");
        codigoControl = codigoControl.toString();
    }
    // console.log(codigoControl);
    let iban = "ES" + codigoControl + codigoCuenta;
    return iban;
}
// console.log(calculoIBANEspanya("12345678912345678912"));

//---------------ejercicio 7 Comprobar IBAN ------------------------
function comprobar_IBAN(codigo_IBAN) {
    let letter_num = {
        A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, G: 16, H: 17, I: 18, J: 19, K: 20, L: 21, M: 22, N: 23, O: 24, P: 25, Q: 26, R: 27, S: 28, T: 29, U: 30, V: 31, W: 32, X: 33, Y: 34, Z: 35
    }
    let check_num = "";
    let check_num_og;
    let end = "";
    let iban_9 = [];
    let count_nine = 1;
    let count_mod = 0;
    let mod = 0;
    let mod_final = 0;

    for (let i = 0; i < codigo_IBAN.length; i++) {
        if (isNaN(codigo_IBAN[i])) {
            end += letter_num[codigo_IBAN[i]].toString();
            codigo_IBAN.length + 2;
        } else {
            if (i < 4)
                end += [codigo_IBAN[i]];
            else
                check_num += codigo_IBAN[i];
        }
    }
    check_num += end;
    check_num_og = check_num;

    while (check_num.length - 9 > 9) {
        check_num = check_num.substring(0, check_num.length - 9);
        count_nine++;
    }

    for (let i = 0; i < count_nine; i++) {
        iban_9[i] = "";
        for (let j = 0; j < 9; j++) {
            if (i == 0)
                iban_9[i] += check_num_og[j];
            else
                iban_9[i] += check_num_og[j + 9 * i];
        }
    }

    if (check_num % 97 > 1) {
        while (mod % 97 > 1 && count_mod < iban_9.length || mod == 0 && count_mod < iban_9.length) {
            let mod_front = 0;
            // console.log("og  " + check_num_og);
            // console.log("mod  " + mod);
            // console.log("nueve  " + iban_9[count_mod]);
            mod = mod_front.toString() + iban_9[count_mod].toString();
            // console.log("dividir  " + mod);
            mod_front = parseInt((iban_9[count_mod] % 97)).toString();
            mod_final += mod_front;
            count_mod++;
        }
        if (parseInt(mod_final) % 97 == 1)
            return true;
        else
            return false;
    }
}

console.log(comprobar_IBAN("ES6621000418401234567891"));