window.onload = inicio;

function inicio() {
   document.formulario.calcular.onclick=calculoPrimo;
}

 function calculoPrimo() {
    debugger;
    let inicio =parseInt(document.formulario.numero_inicial.value,10);
    let final = parseInt(document.formulario.numero_final.value,10);
    let str = "";
    for (let i = inicio; i < final; i++) {
        let flag = 0;
    
        // looping through 2 to user input number
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
               
            }
        }
    
        // if number greater than 1 and not divisible by other numbers
        if (flag == 0) {
            
            str += i + "|";
        }
    }
    document.formulario.numeros_primos.value = str;
}

