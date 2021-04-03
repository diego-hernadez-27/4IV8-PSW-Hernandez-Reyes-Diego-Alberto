
function limpiar(){
    document.Formu.dinero.value = "";
    document.Formu.meses.value = "";
    document.Formu.total.value = "";
}

function calcular(){
    var cantidad = parseInt(document.Formu.dinero.value);
    var interes = cantidad * 0.02;
    var total = interes;
    document.Formu.total.value = total;
}

function validar(){
    NoVacio = document.getElementById("NoVacio").value;
    console.log(NoVacio);
    if(NoVacio.length == 0 || /^\+$/.test(NoVacio)){
        alert("Campos vacios");
    }else{
        calcular();
    }
}