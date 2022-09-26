window.onload = inicio;

function inicio() {
    document.forms.form.button.onclick = comprobar;
}

function comprobar() {

    //variable para detectar la cadena en la que vamos a buscar similitudes
    var cadena = document.forms.form.cadena.value.toLowerCase();
    //variable si la subcadena es de un único carácter
    var cadena_corta = document.forms.form.subcadena.value.toLowerCase();
    //variable si la subcadena es de más de un carácter
    var cadena_larga = document.forms.form.subcadena.value.toLowerCase();
    //variable para contar cuántas veces aparece la subcadena
    var count = 0;

    //si la subcadena es de más dee un carácter trbajamos con la variable "cadena_larga".
    //Por el contratio, utilizaremos la variable "cadena_corta"
    if (cadena_corta.length > 1) {
        //comntamos cuantas veces aparece la subcadena en la cadena
        count = cadena.split(cadena_larga).length - 1;
    } else {
        //comntamos cuantas veces aparece la subcadena en la cadena
        count = cadena.split(cadena_corta).length - 1;
    }

    //mostramos el resultado en la caja "Mensaje"
    document.forms.form.mensaje.value = count;
}
