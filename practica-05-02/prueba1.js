window.onload = inicio;

function inicio() {

    function calculoPrimo() {
       let contadorNumeros=2;
       let contadorPrimos=1;
        let resultado = " ";

       while(contadorPrimos < 101){
        contadorNumeros++;
        if(comprobarPrimo(contadorNumeros)){           
        contadorPrimos++;
        resultado+=contadorNumeros +"|";
         }      
       }
       return resultado ;
    }

    function comprobarPrimo(numero) {
        debugger;
        let esPrimo = true;
        for (var i = 2; i < numero/2; i++) {
            if (numero % i == 0) {
                esPrimo= false;
            }
        }
        return esPrimo;
    }


    document.formulario.numeros_primos.value = calculoPrimo();

}
