window.onload = inicio;

function inicio() {
    document.forms.form.button.onclick = comprobar;
}

function comprobar() {
    //variable for mail
    var mail = document.forms.form.mail.value;

    //variable for error
    var error = false;
    //variable to show concrete error
    var error_message = "";

    if (isNaN(mail[0])) {
        var at = mail.indexOf("@", 0);
        if (at != -1) {
            //check for stop
            var stop = mail.indexOf(".", at + 1);
            //if there is stop continue. If not, error
            if (stop != -1) {
                //check between 2 and 4
                var two_four = mail.substring(mail.length, stop + 1);
                //if the length is correct, send a message to the "menaje" box
                if (two_four.length > 2 && two_four.length < 4) {
                    document.forms.form.mensaje.value = true;
                } else {
                    error_message = "Debe haber entre 2 y 4 carácteres después del punto"
                    error = true;
                }
            } else {
                error_message = "Debe haber un punto"
                error = true;
            }
        } else {
            error_message = "Debe haber una @"
            error = true;
        }
    } else {
        error_message = "El mail debe empezar por una letra"
        error = true;
    }

    if (error == true) {
        alert(error_message);
        document.forms.form.mensaje.value = false;
    }
}
