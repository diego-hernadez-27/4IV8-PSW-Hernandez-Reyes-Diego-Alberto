
function limpiar(){
    document.Formu.primero.value = "";
    document.Formu.total.value = "";
    document.Formu.segundo.value = "";
    document.Formu.tercero.value = "";
}

function calcular(){
    var numero1 = parseFloat(document.Formu.primero.value);
    var numero2 = parseFloat(document.Formu.segundo.value);
    var numero3 = parseFloat(document.Formu.tercero.value);
    
    if (numero1 > numero2 && numero1 > numero3) {
        var mayor = numero1;
    } else if (numero2 > numero3) {
        var mayor = numero2;
    } else{
        var mayor = numero3;
    }
    
    if(numero1 == numero2 || numero2 == numero3 || numero3 == numero1){
        alert("Hay valores iguales")
    }
        
    document.Formu.total.value = mayor;
}

function validar(){
    NoVacio = document.getElementById("NoVacio").value;
    NoVacio2 = document.getElementById("NoVacio2").value;
    NoVacio3 = document.getElementById("NoVacio3").value;
    console.log(NoVacio);
    if(NoVacio.length == 0 || /^\+$/.test(NoVacio) || NoVacio2 == 0 || /^\+$/.test(NoVacio2) || NoVacio3 == 0 || /^\+$/.test(NoVacio3)){
        alert("Campos vacios");
    }else{
        calcular();
    }
}