
function limpiar(){
    document.Formu.primero.value = "";
    document.Formu.total.value = "";
    document.Formu.segundo.value = "";
}

function calcular(){
    var numero1 = parseFloat(document.Formu.primero.value);
    var numero2 = parseFloat(document.Formu.segundo.value);
    
    if (numero1 == numero2) {
        var total = numero1 * numero2;
    } else if (numero1 > numero2) {
        var total = numero1 - numero2;
    } else {
        var total = numero1 + numero2;
    }

    var limite = total.toFixed(2);

    document.Formu.total.value = limite;
}

function validar(){
    NoVacio = document.getElementById("NoVacio").value;
    NoVacio2 = document.getElementById("NoVacio2").value;
    console.log(NoVacio);
    if(NoVacio.length == 0 || /^\+$/.test(NoVacio) || NoVacio2 == 0 || /^\+$/.test(NoVacio2)){
        alert("Campos vacios");
    }else{
        calcular();
    }
}