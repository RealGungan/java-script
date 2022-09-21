window.onload=main;

function main(){
    document.formulario.submit.onclick=validar;
}

function validar (event){
    const wwww = "www.";
    const http = "http://"+wwww;
    const https = "https://"+wwww;
    event.preventDefault();
    var url = document.formulario.url.value;

    if (url.startsWith(http)){
        if (console.log(url.charAt(http.length))){
                
        }

    }
    else if (url.startsWith(https)){

    }
    else if (url.startsWith(wwww)){

    } else {
        // es falso 
    }



}
