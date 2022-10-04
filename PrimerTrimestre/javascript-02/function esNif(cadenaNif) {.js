function esNif(cadenaNif) {

    cadenaNif = cadenaNif.toUpperCase().trim();
    let numeros = "123456789";
    let letra = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"


    if (cadenaNif.length != 9) {
        console.log("el nif debe contener 8 numeros y una letra");
        return 0;

    }



    if (cadenaNif.substr(-1) < "A" || !cadenaNif.substr(-1) > "Z") {
        console.log("la última posicion debe ser una letra");
        return 0;
    }

    if (!cadenaNif.charAt(0) == 'X' && !cadenaNif.charAt(0) == 'Y' && !cadenaNif.charAt(0) == 'Z'
        || !cadenaNif.charAt(0) == 'L' && !cadenaNif.charAt(0) == 'K' && !cadenaNif.charAt(0) == 'M' && isNaN(cadenaNif.charAt(0))) {
        console.log("-----");
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
        console.log("el nif no es correcto");
        return 0;

    } 

    if (!cambio >= 100000) {
        return 0;
    }
    console.log("el nif es correcto");
    return 1;
}
console.log(esNif("Y2345678Z"));