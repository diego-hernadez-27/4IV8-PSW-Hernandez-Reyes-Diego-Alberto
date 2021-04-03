
function limpiar(){
    document.Formu.primero.value = "";
    document.Formu.total.value = "";
    document.Formu.segundo.value = "";
}

function calcular(){
    var numero1 = parseFloat(document.Formu.primero.value);
    var numero2 = parseFloat(document.Formu.segundo.value);
    
    if (numero1 == numero2) {
        var num_3 = valor_a * valor_b;
    } else if (valor_a > valor_b) {
        var num_3 = valor_a - valor_b;
    } else {
        var num_3 = valor_a + valor_b;
    }

    document.formulario.final_num.value = num_3;
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