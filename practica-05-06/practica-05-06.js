window.onload = inicio;

function inicio() {
    document.forms.form.button.onclick = comprobar;
}

function comprobar() {
    debugger;

    var cadena = document.forms.form.cadena.value;
    var cadena_corta = document.forms.form.subcadena.value;
    var cadena_larga = document.forms.form.subcadena.value;
    var count = 0;

    if (cadena_corta.length > 1) {
        count = cadena.split(cadena_larga).length - 1;
    } else {
        count = cadena.split(cadena_corta).length - 1;
    }

    document.forms.form.mensaje.value = count;
}
