

function validarFormulario() {

    let mensaje = "";
    let enviar = true;
    mensaje += validarRazon();
    mensaje += validarDni_Cif();
    mensaje += validarCodEmp();
    mensaje += validarDirec();
    mensaje += validLocalidad();
    mensaje += validCodPos();
    if (mensaje.length > 0) {
        alert(mensaje);
        enviar = false;
    }

    return enviar;

}

// ----_-----FUNCIONES--------___-----------
function validarDni_Cif() {

    let nif = document.formulario.cif_nif.value.toUpperCase();
    //alert(nif);

    let validacionNif = nif_Cif(nif);
    //alert(validacionNif);//aqui mostramos en un alert el dni pasado
    return validacionNif;
}

function validarCodEmp() {
    let cadena_errores = "";
    let codigo_empresa = document.formulario.codigo_empresa.value;
    let codigo_emp = codigo_empresa.toLowerCase().trim();
    //let valido = true;
    if (codigo_emp.length < 5 || codigo_emp.length > 10) {
        //document.getElementById("codigo_empresa").style.borderColor = "red";
        //valido = false;
        cadena_errores += "Error la longitud no es correcta \n";
    }
    // if (codigo_emp.charAt(0) < "a" || codigo_emp.charAt(0) > "z") {
    //     //valido = false;
    //     cadena_errores += "Error el primer caracter debe de ser letra \n";
    // }
    //return valido;
    return cadena_errores;
}

function validarRazon() {
    debugger;

    let cadena_errores = "";
    let razon = document.formulario.razon.value.toUpperCase();


    if (razon.charAt(0) >= "A" && razon.charAt(0) <= "Z") {
    } else {
        cadena_errores += "Error el primer caracter es incorreecto \n";
        //alert("Error el primer caracter es incorreecto");
        // validado = false;
    }
    if ((razon.substr(-1) >= "A" && razon.substr(-1) <= "Z") || razon.substr(-1) == "." || !isNaN(razon.substr(-1))) {
    } else {
        cadena_errores += "Error el ultimo caracter es incorreecto \n";
        // alert("Error el ultimo caracter es incorreecto");
        // validado = false;

    }

    for (let i = 1; i < razon.length - 2; i++) {

        if (!(razon.charAt(i) >= "A" && razon.charAt(i) <= "Z") || razon[i] == "ª" || razon[i] == "º" || razon[i] == "-" || razon[i] == "." || !isNaN(razon[i])) {
            cadena_errores += "Error hay un caracter incorrecto en el nombre \n";
            // alert("Error");
            // validado = false;

        }
    }

    return cadena_errores;
}

function validarDirec() {
    let cadena_errores = "";
    let direccion = document.formulario.direccion.value;
    let direcc = direccion.toLowerCase().trim();
    //let valido = true;
    let caracteres = "ºª-/. ";
    let enmedio = direcc.substr(1,direcc.length-1);
    if ((direcc.charAt(0) < "a" || direcc.charAt(0) > "z")&& !caracteres.includes(enmedio)) {
        //valido = false;
        cadena_errores += "Error el primer caracter debe de ser una letra \n";
    }
    //return valido;
    return cadena_errores;

}
//console.log(validarDirec("alle44"));

function validLocalidad(){
    let cadena_errores = "";
    let local= document.formulario.codigo.value;
    let localidad=local.toLowerCase().trim();
    //let valido = true;
    let resto=localidad.substr(1,localidad.length-1);
    let caracter="áéíóúüñ  ";
    if((localidad.charAt(0)< "a" || localidad.charAt(0) > "z" || localidad.charAt(localidad.length-1)< "a" || localidad.charAt(localidad.length-1) > "z" )&& !caracter.includes(localidad.charAt(localidad.length-1))){
        //valido = false;
        cadena_errores += "Error el primer  y ultimo caracter debe de ser una letra \n";
    }
    for(let i=0;i<resto.length ;i++){
        if((resto.charAt(i)< "a" || resto.charAt(i) > "z") && !caracter.includes(resto.charAt(i))){
            cadena_errores += "Error los caracteres deben de ser letras, se permite espacios\n";
        }
    }
    //return valido;
    return cadena_errores;
}
//console.log(validLocalidad("comunidad4 d6 madrid"));

function validCodPos(){
    //let valido = true;
    let cadena_errores = "";
    let codPos= document.formulario.codigo_postal.value;
    let cp = parseInt(codPos);
    if(cp < 1000 || cp > 52999 ){
        //valido = false;
        cadena_errores += "El CP uede tener valores comprendidos entre 1000 y 52999\n";
    }
    //return valido;
    return cadena_errores;
}
