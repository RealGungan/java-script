function inicio() {
    document.form.nombre.value = "Daniel";
    document.form.aceptar.onclick = procesar;
    document.form.onsubmit = validaciones;
}

function comprobar() {
    var x = document.forms.form.cadena.value.toLowerCase();
    var checkX = document.forms["form"]["vocal"].value.toLowerCase();
    var cont = 0;
    var checkX_long = "";


    if (checkX.length > 1) {
        for (var i = 0; i < x.length; i++) {
            checkX_long += x[i];
            console.log(checkX_long);
            if (checkX_long == checkX) {
                checkX_long = "";
                cont++;
                document.forms["form"]["mensaje"].value = cont;
            }
        }
    } else {
        for (var i = 0; i < x.length; i++) {
            if (x[i] == checkX) {
                cont++;
                document.forms["form"]["mensaje"].value = cont;
            }
        }
    }

}
