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
console.log(esNif("Y2345678Z"));