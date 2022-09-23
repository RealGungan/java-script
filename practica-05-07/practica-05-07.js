window.onload = inicio;

function inicio() {
    document.forms.form.button.onclick = comprobar;
}


function comprobar() {
    ç
    var nombre = document.forms.form.nombre.value;

    //crear un buble para comprobar si la longitud está comprendida entre 3 y 27
    //y, para averiguar si el primer y último carácter son números.
    //Si alguna de estas condiciones falla, el programa termina y da error.
    if (nombre.length >= 3 && nombre.length <= 27
        && !isNaN(nombre.substring(0, 1)) &&
        !isNaN(nombre.substring(nombre.length - 1, nombre.length))) {
        //recorremos la variable "nombre" para ver si contiene algún número.
        //si es así, da error
        for (var i = 0; i < nombre.length; i++) {
            if (!isNaN(nombre[i])) {
                document.forms.form.mensaje.value = false;
                continue;
            } else {
                document.forms.form.mensaje.value = true;
            }
        }
    } else {
        document.forms.form.mensaje.value = false;
    }

}
