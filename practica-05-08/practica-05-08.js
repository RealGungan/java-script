function inicio() {
    document.form.nombre.value = "Daniel";
    document.form.aceptar.onclick = procesar;
    document.form.onsubmit = validaciones;
}

function comprobar() {
    // var x = document.forms["form"]["fecha"].value;

    x = "1/1/22";

    var cont = 0;

    console.log(x.substring(0, 1));
    console.log(x.substring(2, 3));
    console.log(x.substring(4, 6));

    if (isNaN(x.substring(0, 1)) && isNaN(x.substring(2, 3)) && isNaN(x.substring(4, 5))) {
        alert('s')
    }

}
