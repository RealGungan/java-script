function inicio() {
    document.form.nombre.value = "Daniel";
    document.form.aceptar.onclick = procesar;
    document.form.onsubmit = validaciones;
}

function comprobar() {
    var x = document.forms["form"]["nombre"].value;

    if (/[A-Za-z]/.test(x)) {
        if (x.length >= 3 && x.length <= 27) {
            document.forms["form"]["mensaje"].value = true;
        }
    }

}
