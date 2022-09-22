function inicio() {
    document.form.nombre.value = "Daniel";
    document.form.aceptar.onclick = procesar;
    document.form.onsubmit = validaciones;
}

function comprobar() {
    //variable for date
    var date = document.forms["form"]["fecha"].value;

    //variable to detect if all are valid numbers
    var all_numbers = false;

    //variable to detect if all are valid
    var error = 0;

    //locate the day
    var index = date.indexOf("/", 0);
    var day = date.substring(0, index);
    console.log(day);
    //validate the day
    if (isNaN(day) || day.length > 2 || day < 0 || day > 31) {
        error = 1;
    } else {
        //locate the month
        var index_mes = date.indexOf("/", index + 1);
        var mes = date.substring(index + 1, index_mes);
        //validate the month
        if (isNaN(mes) || mes.length > 2 || mes < 0 || mes > 12) {
            error = 1;
        } else {
            //locate the year
            var ano = date.substring(index_mes + 1, date.length);
            //validate the year
            if (isNaN(date.substring(index_mes + 1, date.length)) || ano.length > 4) {
                error = 1;
            }
        }
    }

    //if one of them is invalid, show error. Else, show true in "mensaje"
    if (error == 1 || date == "") {
        alert("El formato tiene que ser dd/mm/yyyy")
    } else {
        document.forms.form.mensaje.value = true;
    }
}
