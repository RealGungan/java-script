//------------------------codigo de la empresa en el otro documento
/** */

function validarCodEmp() {
    let codigo_empresa = document.formulario.codigo_empresa.value;
    let codigo_emp= codigo_empresa.toLowerCase().trim();
    let valido = true;
    if (codigo_emp.length < 5 || codigo_emp.length > 10) {
        //document.getElementById("codigo_empresa").style.borderColor = "red";
        valido=false;
    }
    if(codigo_emp.charAt(0) < "a" || codigo_emp.charAt(0) > "z"){
        valido=false;
    }
    return valido;
}

/**La Dirección va a comenzar por una letra, va a terminar por una letra o un
dígito y en medio va a poder contener letras, dígitos, y los caracteres “ª”, “º”,
“-“, “/” y “.”. */
function validarDirec(direc){
    //let direccion = document.formulario.direccion.value;
    let direcc=direc.toLowerCase().trim();
    let valido=true;
    let caracteres="ºª-/.";
    if(direcc.charAt(0) < "a" || direcc.charAt(0) > "z" ){
        valido = false;
    }
    let ultimo= direcc.charAt(direcc.length-1);
    console.log(ultimo);
    if(caracteres.includes(ultimo)){
        valido=false;
    }
    
 return valido;   

}
console.log(validarDirec("alle arq*uitect7r_ de tarºagona3"));