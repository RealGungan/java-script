window.onload = inicio;
function inicio() {
    document.formulario.onsubmit = validarFormulario;
    document.formulario.codigo_postal.oninput = cambioCodPos;



}


function validarFormulario() {

    let mensaje = "";
    let enviar = true;

    mensaje += validarRazon();
    mensaje += validarDni_Cif();
    mensaje += validarCodEmp();
    mensaje += validarDirec();
    mensaje += validLocalidad();
    mensaje += validarTelefono();
    mensaje += numerosPositive();
    mensaje += botonSelect(); 
    mensaje+=controlCodBanco();
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
    let enmedio = direcc.substr(1, direcc.length - 1);
    if ((direcc.charAt(0) < "a" || direcc.charAt(0) > "z") && !caracteres.includes(enmedio)) {
        //valido = false;
        cadena_errores += "Error el primer caracter debe de ser una letra \n";
    }
    //return valido;
    return cadena_errores;

}
//console.log(validarDirec("alle44"));

function validLocalidad() {
    let cadena_errores = "";
    let local = document.formulario.codigo.value;
    let localidad = local.toLowerCase().trim();
    //let valido = true;
    let resto = localidad.substr(1, localidad.length - 1);
    let caracter = "áéíóúüñ  ";
    if ((localidad.charAt(0) < "a" || localidad.charAt(0) > "z" || localidad.charAt(localidad.length - 1) < "a" || localidad.charAt(localidad.length - 1) > "z") && !caracter.includes(localidad.charAt(localidad.length - 1))) {
        //valido = false;
        cadena_errores += "Error el primer  y ultimo caracter debe de ser una letra \n";
    }
    for (let i = 0; i < resto.length; i++) {
        if ((resto.charAt(i) < "a" || resto.charAt(i) > "z") && !caracter.includes(resto.charAt(i))) {
            cadena_errores += "Error los caracteres deben de ser letras, se permite espacios\n";
        }
    }
    //return valido;
    return cadena_errores;
}
//console.log(validLocalidad("comunidad4 d6 madrid"));

function validCodPos() {
    let valido = true;

    let codPos = document.formulario.codigo_postal.value;
    let cp = parseInt(codPos);
    console.log(cp);
    if (cp < 1000 || cp > 52999) {
        valido = false;
    }
    return valido;
}

function cambioCodPos() {
    let cadena_errores;
    if (!validCodPos()) {
        console.log("no es valido");
        return cadena_errores += "El CP uede tener valores comprendidos entre 1000 y 52999\n";
        
    } else {
        let codigoPostal = document.formulario.codigo_postal.value;
        let initial = parseInt(codigoPostal.substring(0, 2) - 1);
        //console.log("initial "+initial);


        let provincias = ['Alava', 'Albacete', 'Alicante', 'Almería', 'Avila', 'Badajoz', 'Islas Baleares', 'Barcelona', 'Burgos', 'Cáceres',
            'Cádiz', 'Castellón', 'Ciudad Real', 'Córdoba', 'La Coruña', 'Cuenca', 'Gerona', 'Granada', 'Guadalajara',
            'Guipúzcoa', 'Huelva', 'Huesca', 'Jaén', 'León', 'Lérida', 'La Rioja', 'Lugo', 'Madrid', 'Málaga', 'Murcia', 'Navarra',
            'Orense', 'Asturias', 'Palencia', 'Las Palmas', 'Pontevedra', 'Salamanca', 'Santa Cruz de Tenerife', 'Cantabria', 'Segovia', 'Sevilla', 'Soria', 'Tarragona',
            'Teruel', 'Toledo', 'Valencia', 'Valladolid', 'Vizcaya', 'Zamora', 'Zaragoza', 'Ceuta', 'Melilla'];

        document.formulario.provincia.value = provincias[initial];
        //console.log(" es valido");

    }


}

function validarTelefono(){
    let cadena_errores = "";
    let telefono = document.formulario.telefono.value;
    if(telefono.length != 9 || telefono.charAt(0)!= "6"||telefono.charAt(0)!= "9"||telefono.charAt(0)!= "7"){
        cadena_errores += "Error, el teléfono debe contener 9 números y debe empezar por 6,9 ó 7 \n";

    }
    return cadena_errores;
}

 function numerosPositive(){
    let cadena_errores = "";
    let camposPositivos =[document.formulario.telefono.value, document.formulario.codigo_postal.value];

    for(let i=0; i < camposPositivos.length; i++){
        if(parseInt(camposPositivos[i]) < 0 ){
            cadena_errores += "Error,no se pueden introducir números negativos \n";
        }

    }
    return cadena_errores;
 }

 function botonSelect(){
    let cadena_errores="";
    let radio= document.formulario.radios.checked;
    let sector = document.formulario.sector.checked;
    let tipo = document.formulario.tipo.checked;
    if(!radio){
         cadena_errores +="Es obligatorio elegir una opción en personal ";
    }
    if(!sector){
        cadena_errores +="Es obligatorio elegir una opción de sector económico ";
    }
    if(!tipo){
        cadena_errores +="Es obligatorio elegir una opción de tipo de empresa ";

    }
    return cadena_errores;
}
/*El código del banco, el código de la oficina han de ser números y con cuatro
dígitos. */
function controlCodBanco(){
    let cadena_errores = "";
    let banco = document.formulario.codigo_banco;
    let oficina = document.formulario.codigo_oficina;
    if(parseInt(banco)!=4 ){
        cadena_errores+= "El banco debe de ser de 4 dígitos ";
    }
    if(parseInt(oficina)!=4){
        cadena_errores+= "La oficina debe de ser de 4 dígitos ";
    }
    return cadena_errores;
}
